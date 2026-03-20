export default function () {
    const $btn = $('#form-action-addToCart');
    if (!$btn.length) return;

    const stickyClass = 'sticky';



    $(window).on('scroll', function () {
        const btnTop = $('.atc-form-action').offset().top;
        const btnHeight = $('.atc-form-action').outerHeight();
        const scrollTop = $(window).scrollTop();
        const winHeight = $(window).height();

        const inView =
            scrollTop + winHeight > btnTop &&
            scrollTop < btnTop + btnHeight;

        if (inView) {
            $btn.removeClass(stickyClass);
        } else {
            $btn.addClass(stickyClass);
        }
    }).trigger('scroll');
}