export default function() {
    
    const $sku = $('[data-product-sku]');
    
    if ($sku.length) {
        const backorderSkus = ['EVE-Z06VT-CF-INT'];
    
        const observer = new MutationObserver(() => {
            if (backorderSkus.includes($sku.text().trim())) {
                $('.card-shipping-date-2').hide();
            } else {
                $('.card-shipping-date-2').show();
            }
        });
    
        observer.observe($sku[0], {
            childList: true
        });
    }
}
