import $ from 'jquery';

export default function(context) {

    function header_sticky() {
        // Add class fixed for menu when scroll
        var header_position, header_height;
        if ($(window).width() > 1024) {
            if ($('.header-sticky').length) {
                header_height = $('.header-sticky').height();
                header_position = $('.body').offset();
                header_scroll(header_position.top, header_height);
            }
            if (context.themeSettings.themevale_homepage_1 == true) {
                $('#menuMobile .navPages').appendTo('#menu');
            }
        }
        else {
            header_height = $('.themevale_header-Mobile').height();
            header_position = $('.body').offset();
            header_scroll(header_position.top, header_height);

            if (context.themeSettings.themevale_homepage_1 == true) {
                $('#menu .navPages').appendTo('#menuMobile');
            }
        }
    }

    function header_scroll(header_position, header_height) {
        $(window).on('scroll load', function(event) {
            var scroll = $(window).scrollTop();
            if (scroll > header_height) {
                $('.header-sticky').addClass('is-sticky');
                $('body').css('padding-top', header_height);
                // special navigation layout 1
                if ($('.themevale_header-layout-1').length && $(window).width() > 1024 && $('#menu .navPages').length) {
                    $('#menu .navPages').appendTo('#menuMobile');
                    $('#menu-mobile .imageTop .cateArea > .navPage-subMenu-list > .navPage-subMenu-item-child').each(function() {
                        $(this).find('.imageTop-item').appendTo($(this).find('.navPage-subMenu-title'));
                    });
                } else if ($('.themevale_header-layout-1').length && $(window).width() <= 1024) {
                    $('#menu-mobile .imageTop .cateArea > .navPage-subMenu-list > .navPage-subMenu-item-child').each(function() {
                        $(this).find('.imageTop-item').appendTo($(this).find('.navPage-subMenu-title'));
                    });
                }
            } else {
                $('.header-sticky').removeClass('is-sticky');
                $('body').css('padding-top', 0);
                // special navigation layout 1
                if ($('.themevale_header-layout-1').length && $(window).width() > 1024 && $('#menuMobile .navPages').length) {
                    $('#menuMobile .navPages').appendTo('#menu');
                    $('#menu .imageTop .cateArea > .navPage-subMenu-list > .navPage-subMenu-item-child').each(function() {
                        $(this).find('.imageTop-item').insertAfter($(this).find('> .navPage-subMenu-action'));
                    });
                } else if ($('.themevale_header-layout-1').length && $(window).width() <= 1024) {
                    $('#menu-mobile .imageTop .cateArea > .navPage-subMenu-list > .navPage-subMenu-item-child').each(function() {
                        $(this).find('.imageTop-item').appendTo($(this).find('.navPage-subMenu-title'));
                    });
                }
            }
        });
        
        window.onload = function() {
            if ($(window).scrollTop() > header_position) {
                $('.header-sticky').addClass('is-sticky');
            }
        };
    }

    if (context.themeSettings.themevale_stickyHeader == true) {
        header_sticky();
        $(window).resize(function() {
            header_sticky();
        });
    }

}
