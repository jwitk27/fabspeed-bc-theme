export default function() {
    $(window).on('scroll', () => {
        if ($(window).scrollTop() > 74) {
            $('.themevale_header-layout-1').addClass('sticky')
        } else {
            $('.themevale_header-layout-1').removeClass('sticky')
        }
    })
}