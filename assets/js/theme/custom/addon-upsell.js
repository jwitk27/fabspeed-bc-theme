export default function pdpAddonUpsell() {

    const ALLOWED_CATEGORY_MATCHES = [
        "Fabspeed Products/Exhaust Systems",
        "Fabspeed Products/Sport Headers (Don't remove Cats)",
        "Fabspeed Products/Sport Catalytic Converters",
        "Fabspeed Products/Performance Packages",
        "Fabspeed Products/Tuning",
        "Fabspeed Products/Exhaust Tips",
        "Fabspeed Products/Air Intake Systems",
        "Fabspeed Products/link comp Pipes",
        "Fabspeed Products/Special Operations",
        "Fabspeed Products/Race Headers (Headers Without Cats)",
        "Additional Products/Fabspeed Apparel & Accessories",
    ];

    // 👇 Add product IDs here to HIDE the upsell
    const BLOCKED_PRODUCT_IDS = [
        6561
    ];

    function productInAllowedCategory() {
        const $wrap = $('.productView').closest('[data-categories]');
        if (!$wrap.length) return false;

        const cats = ($wrap.data('categories') || '').toString();
        if (!cats) return false;

        return ALLOWED_CATEGORY_MATCHES.some(fragment => cats.includes(fragment));
    }

    function productIsBlocked() {
        const pid = parseInt($('.productView').data('product-id'), 10);
        return BLOCKED_PRODUCT_IDS.includes(pid);
    }

    function initAddonUpsell() {
        const $productView = $('.productView');
        if (!$productView.length) return;
        if (!productInAllowedCategory()) return;
        if (productIsBlocked()) return;

        const $addon = $('#addon-upsell');
        if (!$addon.length) return;
        $addon.show();
    }

    initAddonUpsell();
}
