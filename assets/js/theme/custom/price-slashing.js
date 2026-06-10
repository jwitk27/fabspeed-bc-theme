export default function priceSlashing() {

    const initSalePrices = (endDate, percent, identifier) => {

        const today = new Date();
        endDate = new Date(endDate);

        if (today > endDate) return;

        const slashPrice = element => {

            let USDollar = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            });

            let markup = '';

            if ($(element).text().split(' - ').length > 1) {
                markup = `<div style="text-decoration:line-through;">${$(element).text()}</div><div style="margin-bottom: 1rem;" class="red-price">${$(element).text().split(' - ').map(text => `${USDollar.format(parseFloat(text.trim().replace(/[$,]/g, '') * (1 - percent)))}`).join(' - ')}</div>`;
            } else {
                markup = `<span style="text-decoration:line-through;">${$(element).text()}</span> <span class="red-price">${USDollar.format(parseFloat($(element).text().trim().replace(/[$,]/g, '') * (1 - percent)))}</span>`;
            }

            $(element).html(markup)
        }

        const slashPrices = scope => {
            if (scope == 'category') {
                $('.product').each((i, el) => {
                    if ($(el).find('.red-price').length < 1 && $(el).find('.card-title a').text().toLowerCase().indexOf(identifier) > -1) {
                        $(el).find('.price--withoutTax').each((i, el) => {
                            slashPrice(el);
                        });
                    }
                });
            } else if (scope == 'product') {
                slashPrice($('.productView-price').find('.price--withoutTax'));
            }
        }

        const startObserving = (element, scope) => {
            const targetNode = document.querySelector(element);
            const config = { attributes: true, childList: true, subtree: true };
            const callback = (mutationList, observer) => {
                slashPrices(scope);
            };
            const observer = new MutationObserver(callback);
            observer.observe(targetNode, config);
        }

        if ($('.page-type-category').length) {
            slashPrices('category');
            startObserving('body', 'category');
        }

        if ($('.page-type-product').length) {
            if ($('.productView-title').text().toLowerCase().indexOf(identifier) > -1) {
                slashPrices('product');
                startObserving('.productView-info-sku', 'product');
            }

            $('.productRelated').find('.productCarousel-slide').each((i, el) => {
                if ($(el).find('.card-title a').text().toLowerCase().indexOf(identifier) > -1) {
                    $(el).find('.price--withoutTax').each((i, el) => {
                        slashPrice(el);
                    });
                }
            });
        }
    }

    initSalePrices('5/27/2026', .05, 'eventuri');

    // examples below on how to have multiple sale price slashing, need to think about wholesale pricing though
    // initSalePrices('5/27/2026', .10, 'cobb');
    // initSalePrices('5/27/2026', .20, 'fabspeed');
}