import utils from '@bigcommerce/stencil-utils';

/**
 * European websites must notify users of cookies to comply with European Union law.
 * This will alert shoppers that this website uses cookies.
 */
export default function () {
    /*
    // Here you can override the default browser alert box by hooking to the 'cookie-privacy-notification' hook.
    utils.hooks.on('cookie-privacy-notification', (event, privacyMessage) => {
        // You can make your own custom modal or alert box appear in your theme using the privacyMessage provided
        myCustomAlert(privacyMessage);

        // Call event.preventDefault() to prevent the default browser alert from occurring in stencil-utils
        event.preventDefault();
    });
    */

    // const $privacyDialog = $('.cookieMessage');

    // if (document.cookie.indexOf('ACCEPT_COOKIE_USAGE') === -1) {
    //     $privacyDialog.show();
    // }

    // $('body').on('click', '[data-privacy-accept]', () => {
    //     const date = new Date();
    //     date.setDate(date.getDate() + 365);
    //     document.cookie = `ACCEPT_COOKIE_USAGE=1;expires=${date.toGMTString()}; path=/`;

    //     utils.hooks.emit('cookie-privacy-accepted');
    //     $privacyDialog.hide();
    // });


    // $(document).on('click', '.cookieMessage .close', function(e){
    //     e.preventDefault();
    //     $privacyDialog.hide();
    // });

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    }

    function getCookie(cname) {
        const name = cname + '=';
        const ca = document.cookie.split(';');

        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    }

    const deleteCookie = function(name) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };

    $('[data-close-cookiemessage]').on('click', function(e) {
        e.preventDefault();
        $('.cookieMessage').hide();
        if ($(window).width() <= 1024 && $(window).width() > 550 ) {
            if ($('#sticky_addtocart.show_sticky').length) {
                $('.themevale_popup_left').css('bottom', $('#sticky_addtocart.show_sticky').outerHeight() + 15);
            } else {
                $('.themevale_popup_left').css('bottom', 0);
            }
        } else if($(window).width() <= 550) {
            if ($('#sticky_addtocart.show_sticky').length) {
                $('.themevale_popup_left').css('bottom', $('#sticky_addtocart.show_sticky').outerHeight());
            } else {
                $('.themevale_popup_left').css('bottom', 0);
            }
        }
    });

    $('[data-privacy-accept]').on('click', function() {
        setCookie('cookieMessage', 'closed', 1);
        $('.cookieMessage').hide();
        if ($(window).width() <= 1024 && $(window).width() > 551) {
            if ($('#sticky_addtocart.show_sticky').length) {
                $('.themevale_popup_left').css('bottom', $('#sticky_addtocart.show_sticky').outerHeight() + 15);
            } else {
                $('.themevale_popup_left').css('bottom', 0);
            }
        } else if($(window).width() <= 550) {
            if ($('#sticky_addtocart.show_sticky').length) {
                $('.themevale_popup_left').css('bottom', $('#sticky_addtocart.show_sticky').outerHeight());
            } else {
                $('.themevale_popup_left').css('bottom', 0);
            }
        }
    });

    if (getCookie('cookieMessage') === 'closed') {
        $('.cookieMessage').hide();
        $('.cookieMessage').removeClass('is-visible');
    }
    else {
        $('.cookieMessage').show();
        $('.cookieMessage').addClass('is-visible');
    }
}
