import utils from "@bigcommerce/stencil-utils";

export default function () {
    const $container = $('.promo-product-listing');

    if (!$container.length) return;

    $container.each((i, el) => {
        const freeShipping = $(el).data('free-shipping');
        const sale = $(el).data('sale');
        const ids = $(el).data('product-ids').split(',');
    
        const requests = ids.map(id => {
            return new Promise((resolve, reject) => {
                utils.api.product.getById(
                    id.trim(),
                    { template: 'custom/product-response' },
                    (err, response) => {
                        if (err) {
                            reject(err);
                            return;
                        }
    
                        resolve(response);
                    }
                );
            });
        });
    
        Promise.all(requests)
            .then(responses => {
                const markup = `
                    <ul class="productGrid">
                        ${responses.join('')}
                    </ul>
                `;
    
                $(el).html(markup);
                $(el).find('.product').each((i, el) => {
                    const $price = $(el).find('.price--withoutTax');
                    let price;
                    
                    if ($price.text().split(' - ').length > 1) {
                        price = parseFloat($price.text().split(' - ')[0].trim().replace(/[$,]/g, ''));
                        $price.html(`<div style="text-decoration:line-through;">${$price.text()}</div><div style="margin-bottom: 1rem;" class="red-price">${$price.text().split(' - ').map(text => `$${sale.split(' ')[0] === '-' ? (parseFloat(text.trim().replace(/[$,]/g, '')) - parseFloat(sale.split(' ')[1])).toFixed(2) : (parseFloat(text.trim().replace(/[$,]/g, '') * parseFloat(sale.split(' ')[1])).toFixed(2))}`).join(' - ')}</div>`);
                    } else {
                        price = parseFloat($price.text().trim().replace(/[$,]/g, ''));
                        $price.html(`<span style="text-decoration:line-through;">${$price.text()}</span> <span class="red-price">$${(sale.split(' ')[0] === '-' ? (price - parseFloat(sale.split(' ')[1])).toFixed(2) : (price * parseFloat(sale.split(' ')[1])).toFixed(2))}</span>`);
                    }

                    if (freeShipping && price >= 5000) {
                        $(el).find('.shipping-eligibility').text('Qualifies for free shipping');
                    }
                });
            })
            .catch(console.error);
    });
}