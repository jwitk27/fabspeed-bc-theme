export default function () {

    const tier1 = 2000;
    const tier2 = 3500;

    const productPrices = $('.price--withoutTax');

    // -----------------------------
    // CART PAGE BANNER + bfcm STORE
    // -----------------------------
    function updateCartPromoState() {
        // no cart -> clear bfcm state
        if (!$('.cart-list').length) {
            localStorage.removeItem('bfcm');
            return;
        }
        // no banner -> clear bfcm state
        if (!$('.custom-promo-cart-banner-content').length) {
            localStorage.removeItem('bfcm');
        }

        // mark NO SHIP items with inline notice, but do NOT block checkout
        $('.cart-item').each((i, el) => {
            const cats = String($(el).data('categories') || '');
            if (cats.includes('NO SHIP')) {
                if (!$(el).find('.no-free-shipping').length) {
                    $(el).find('.cart-item-name')
                        .append('<div class="no-free-shipping">This item does not qualify for free shipping</div>');
                }
            }
        });

        const customPromoDiscounts = $('.custom-promo-discount');
        const eligibleCoupon = $('.eligible-coupon');

        let totalSavings = 0;
        let eligibleSpent = 0;

        customPromoDiscounts.each((i, el) => { totalSavings += $(el).data('coupon-value') || 0; });
        eligibleCoupon.each((i, el) => { eligibleSpent += $(el).data('eligibleSpent') || 0; });

        // ----- GRAND TOTAL -----
        let cartTotal = 0;
        const $grand = $('.cart-total-grandTotal .cart-total-value');

        if ($grand.length) {
            const dataVal = $grand.data('value');
            if (dataVal !== undefined) {
                cartTotal = parseFloat(dataVal) || 0;
            } else {
                const txt = $grand.text().replace(/[^0-9.-]/g, '');
                cartTotal = parseFloat(txt) || 0;
            }
        }

        // ----- SALES TAX (optional) -----
        let taxAmount = 0;
        const $taxRow = $('.cart-total-custom .cart-total-label')
            .filter((i, el) => $(el).text().trim().toLowerCase().includes('sales tax'))
            .closest('.cart-total-custom');

        if ($taxRow.length) {
            const $taxVal = $taxRow.find('.cart-total-value');
            const taxText = $taxVal.text().replace(/[^0-9.-]/g, '');
            taxAmount = parseFloat(taxText) || 0;
        }

        // amount used for thresholds: grand total minus tax (if present)
        let amountForThresholds = cartTotal ? (cartTotal - taxAmount) : 0;

        // safety: if that somehow ends up falsy, fall back to eligibleSpent
        if (!amountForThresholds) {
            amountForThresholds = eligibleSpent;
        }

        // store this for PLP slashing logic
        localStorage.setItem('bfcm', amountForThresholds.toFixed(2));

        const tier1Difference = tier1 - amountForThresholds;
        const freeShippingDifference = tier2 - amountForThresholds;
        const tier1markup = ` $${tier1Difference.toFixed(2)} away from 15% off your order and `;
        let markup =
            `Congrats on saving $${totalSavings.toFixed(2)}! You are` +
            `${amountForThresholds < tier1 ? tier1markup : ``} ` +
            `$${freeShippingDifference.toFixed(2)} away from Free Shipping! (US customers only, exclusions apply)`;

        if (amountForThresholds >= tier2) {
            markup = `Congrats! You saved $${totalSavings.toFixed(2)} and got Free Shipping! (US customers only, exclusions apply)`;
        }

        $('.custom-promo-cart-banner-content').text(markup);
    }

    if ($('.cart-list').length) {
        updateCartPromoState();
    }

    // -----------------------------
    // PLP / OTHER PAGES – SLASHED PRICES
    // -----------------------------
    if (productPrices.length && localStorage.getItem('bfcm')) {
        slashProductPrices();
    }

    function slashProductPrices() {
        const amountInCart = parseFloat(localStorage.getItem('bfcm')) || 0;

        productPrices.each((i, el) => {
            const $el = $(el);

            // skip carousel, etc.
            if ($el.closest('.no-strike').length) return;

            // skip if BC is already doing promos
            const $wrap = $el.closest('.price-section, .card-price, td, .cart-item-info, .productView');
            if ($wrap.find('.price--discounted, .price--saving, .price--non-sale').not($el).length) {
                return;
            }

            let productPrice;

            const rawText = $el.text().trim();
            const categories = $el.closest('[data-categories]').data('categories')?.toString() || '';

            const isTenMax = /\b10 Percent Max\b/.test(categories);
            const isZeroMax = /\b0 Percent Max\b/.test(categories);
            const isFiveMax = /\b5 Percent Max\b/.test(categories);
            const isNoSale = /\bNO SALE\b/.test(categories);

            if (isZeroMax || isFiveMax || isNoSale) return;

            const normalized = rawText.replace(/\u2013|\u2014/g, '-');

            if (normalized.includes('-')) {
                const [p1, p2] = normalized.split('-');
                const productPrice1 = parseFloat(p1.replace('$', '').replace(/,/g, ''));
                const productPrice2 = parseFloat(p2.replace('$', '').replace(/,/g, ''));
                if (isNaN(productPrice1) || isNaN(productPrice2)) return;

                const newTotal1 = amountInCart + productPrice1;
                const newTotal2 = amountInCart + productPrice2;

                let d1 = newTotal1 < tier1 ? 0.10 : (newTotal1 < tier2 ? 0.15 : 0.15);
                let d2 = newTotal2 < tier1 ? 0.10 : (newTotal2 < tier2 ? 0.15 : 0.15);

                if (isTenMax) { d1 = Math.min(d1, 0.10); d2 = Math.min(d2, 0.10); }
                if (!d1 && !d2) return;

                const sale1 = (productPrice1 * (1 - d1)).toFixed(2);
                const sale2 = (productPrice2 * (1 - d2)).toFixed(2);

                $el.addClass('has-bfcm-sale').html(`
                <span class="strikethrough-price">$${productPrice1.toFixed(2)} - $${productPrice2.toFixed(2)}</span><br>
                <span class="sale-price">$${sale1} - $${sale2}</span>
            `);

            } else {

                productPrice = parseFloat(rawText.replace('$', '').replace(/,/g, ''));
                if (isNaN(productPrice)) return;

                const newTotal = amountInCart + productPrice;
                let discount = newTotal < tier1 ? 0.10 : (newTotal < tier2 ? 0.15 : 0.15);
                if (isTenMax) discount = Math.min(discount, 0.10);
                if (!discount) return;

                const salePrice = (productPrice * (1 - discount)).toFixed(2);

                $el.addClass('has-bfcm-sale').html(
                    `<span class="strikethrough-price">$${productPrice.toFixed(2)}</span>
                 <span class="sale-price">$${salePrice}</span>`
                );
            }
        });
    }


    // -----------------------------
    // PDP ADD-TO-CART
    // -----------------------------
    const $addToCartForm = $('form[data-cart-item-add]');
    const $pdpPriceEl = $('.productView .price--withoutTax');

    if ($addToCartForm.length && $pdpPriceEl.length) {
        $addToCartForm.on('submit', () => {

            if (localStorage.getItem('bfcm') != null) {
                let current = parseFloat(localStorage.getItem('bfcm')) || 0;

                const priceText = $pdpPriceEl.text().trim();
                const categories = ($pdpPriceEl.data('categories') || '').toString();

                const isTenMax = categories.includes('10 Percent Max');
                const isZeroMax = categories.includes('0 Percent Max');
                const isFiveMax = categories.includes('5 Percent Max');
                const isNoSale = categories.includes('NO SALE');

                if (!(isTenMax || isZeroMax || isFiveMax || isNoSale)) {
                    const unitPrice = parseFloat(priceText.replace('$', '').replace(',', ''));
                    if (!isNaN(unitPrice)) {
                        const qty = parseInt($addToCartForm.find('[name="qty[]"]').val(), 10) || 1;
                        const newTotal = current + unitPrice * qty;
                        localStorage.setItem('bfcm', newTotal.toFixed(2));
                    }
                }
            }
        });
    }

    // -----------------------------
    // PDP: keep slashed price on option change
    // -----------------------------
    if ($('.productView').length && localStorage.getItem('bfcm')) {

        const updatePdpPrice = () => {
            const amountInCart = parseFloat(localStorage.getItem('bfcm')) || 0;
            const $priceEl = $('.productView .price--withoutTax');
            if (!$priceEl.length) return;
            if ($priceEl.find('.sale-price').length) return;

            const text = $priceEl.text().trim();
            if (!text) return;

            const categories = $($priceEl).closest('[data-categories]').data('categories')?.toString() || '';

            const isTenMax = /\b10 Percent Max\b/.test(categories);
            const isZeroMax = /\b0 Percent Max\b/.test(categories);
            const isFiveMax = /\b5 Percent Max\b/.test(categories);
            const isNoSale = /\bNO SALE\b/.test(categories);
            if (isZeroMax || isFiveMax || isNoSale) return;

            const normalized = text.replace(/\u2013|\u2014/g, '-');
            if (normalized.includes('-')) return;

            const basePrice = parseFloat(text.replace('$', '').replace(/,/g, ''));
            if (isNaN(basePrice)) return;

            const newTotal = amountInCart + basePrice;
            let discount = newTotal < tier1 ? 0.10 : (newTotal < tier2 ? 0.15 : 0.15);
            if (isTenMax) discount = Math.min(discount, 0.10);
            if (!discount) return;

            const salePrice = (basePrice * (1 - discount)).toFixed(2);

            $priceEl.html(
                `<span class="strikethrough-price">$${basePrice.toFixed(2)}</span>
                 <span class="sale-price">$${salePrice}</span>`
            );
        };

        updatePdpPrice();

        const priceNode = document.querySelector('.productView .price--withoutTax');
        if (priceNode) {
            new MutationObserver(() => updatePdpPrice())
                .observe(priceNode, { childList: true, characterData: true, subtree: true });
        }
    }
}
