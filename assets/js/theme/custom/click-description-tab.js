export default function() {
    if (window.matchMedia('(min-width: 1024px)').matches) {
        $('.description-tab-title').parent().addClass('is-active');
        $('.description-tab-content').parent().addClass('is-active');
        $('.description-tab-toggle-link').parent().addClass('is-open');
        $('.description-tab-toggle-content').parent().addClass('is-active');
    }
}