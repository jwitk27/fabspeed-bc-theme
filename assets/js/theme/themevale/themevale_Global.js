import $ from 'jquery';
import classie from 'classie';
import utils from '@bigcommerce/stencil-utils';
import { CollapsibleEvents } from '../common/collapsible';

export default function(context) {
	// ========================================================================
    // Header
    // ========================================================================
    function header_PC() {
        // Currency
    	$('.navUser-action--currencySelector').on('click', event => {
            event.preventDefault();
            const $target = $(event.currentTarget);
            if ($target.hasClass('is-open')) {
                $target.removeClass('is-open');
                $target.next().slideUp();
            } else {
                $target.addClass('is-open');
                $target.next().slideDown();
            }
        });

        // Top Promotion
        $('.close-banner-promotion').on('click', function(){
            $('#themevale_top-promotion').remove();
        });

        // Login popup
        $('[data-login-form]').on('click', event => {
            event.preventDefault();
            const $target = $(event.currentTarget);
            if ($target.hasClass('is-open')) {
                $target.removeClass('is-open');
                $('#login-dropdown').slideUp();
            } else {
                $target.addClass('is-open');
                $('#login-dropdown').slideDown();
            }
        });

        $('[data-close-login-dropdown]').on('click', event => {
            event.preventDefault();
            $('[data-login-form]').removeClass('is-open');
            $('#login-dropdown').slideUp();
        });

        // My account
        $('.navUser-action--myaccount').on('click', event => {
            event.preventDefault();
            const $target = $(event.currentTarget);
            if ($target.hasClass('is-open')) {
                $target.removeClass('is-open');
                $target.next().slideUp();
            } else {
                $target.addClass('is-open');
                $target.next().slideDown();
            }
        });

        // flash sale notice
        if ($('.flash-sale').length) {
            $('.flash-sale .close').on('click', event => {
                event.preventDefault();
                $('.flash-sale').remove();
            });

            // Set the date we're counting down to        
            var countDownDate = new Date( $('.flash-sale').attr('data-count-down')).getTime();
            // Update the count down every 1 second
            var countdownfunction = setInterval(function() {

                // Get todays date and time
                var now = new Date().getTime();
        
                // Find the distance between now an the count down date
                var distance = countDownDate - now;
        
                // If the count down is over, write some text 
                if (distance < 0) {
                    clearInterval(countdownfunction);
                    document.getElementById("flash-sale-time").innerHTML = "";
                } else {
                    // Time calculations for days, hours, minutes and seconds
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
                    // Output the result in an element with id="countDowntimer"
                    var strCountDown = "<span class='block-time'>"+ days + "D : </span><span class='block-time'>"+ hours + "H : </span><span class='block-time'>" + minutes + "M : </span><span class='block-time'>" + seconds + "S</span>";
                    document.getElementById("flash-sale-time").innerHTML = strCountDown
                }
            }, 1000);
        }

        $(document).on('click', event => {
            if ($('.navUser-action--currencySelector').hasClass('is-open')) {
                if (($(event.target).closest('.navUser-action--currencySelector').length === 0) && ($(event.target).closest('#currencySelection').length === 0)) {
                    $('.navUser-action--currencySelector').removeClass('is-open');
                    $('#currencySelection').slideUp();
                }
            }

            if ($('[data-login-form]').hasClass('is-open')) {
                if (($(event.target).closest('[data-login-form]').length === 0) && ($(event.target).closest('#login-dropdown').length === 0)) {
                    $('[data-login-form]').removeClass('is-open');
                    $('#login-dropdown').slideUp();
                }
            }

            if ($('.navUser-action--myaccount').hasClass('is-open')) {
                if (($(event.target).closest('.navUser-action--myaccount').length === 0) && ($(event.target).closest('#navPages-account-topbar').length === 0)) {
                    $('.navUser-action--myaccount').removeClass('is-open');
                    $('#navPages-account-topbar').slideUp();
                }
            }
        });
    }
    header_PC();

    function carouselMegaMenu() {
        $('.featuredProductCarousel').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 6000,
            arrows: false
        });
        $(".navPages-list > li").mouseover(function() {
            if ($('.featuredProductCarousel').length) {
                $('.featuredProductCarousel').get(0).slick.setPosition();
            }
        });
        $(".navPages .navPages-action .navPages-action-moreIcon").on("click", function() {
            if ($('.featuredProductCarousel').length) {
                $('.featuredProductCarousel').get(0).slick.setPosition();
            }
        });
    }
    carouselMegaMenu();

    function activeMenu_Mobile() {
        if ($(window).width() < 1025) {
            if ($('.themevale_header-PC .item--hamburger .mobileMenu-toggle').length) {
                $('.themevale_header-PC .item--hamburger .mobileMenu-toggle').appendTo($('.themevale_header-Mobile .item--hamburger'));
            }
        } else {
            if ($('.themevale_header-Mobile .item--hamburger .mobileMenu-toggle').length) {
                $('.themevale_header-Mobile .item--hamburger .mobileMenu-toggle').appendTo($('.themevale_header-PC .item--hamburger'));
            }
        }
        if ($('#menu-mobile').length && $('.themevale_header-layout-2').length) {
            $('#menu-mobile .imageTop .cateArea > .navPage-subMenu-list > .navPage-subMenu-item-child').each(function() {
                $(this).find('.imageTop-item').appendTo($(this).find('.navPage-subMenu-title'));
            });
        }
    }
    activeMenu_Mobile();

    function toggleAccount_mobile() {
        
        $('.accountMobile').on('click', function(e) {
            $('body').addClass('themevale_open-Account');
        });

        $('#account-mobile .themevale_close2').on('click', function(e) {
            $('body').removeClass('themevale_open-Account');
        });

        $('.themevale_background').on('click', function(e) {
            if ($('body').hasClass('themevale_open-Account')) {
                $('body').removeClass('themevale_open-Account');
            }
        });
    }
    toggleAccount_mobile();

    function toggleCart_mobile() {
        
        $('.cartMobile').on('click', function(e) {
            $('body').addClass('themevale_open-Cart');
            if ($(window).width() <= 551) {
                var position_top =  $('.header').position().top + $('.header').outerHeight();
                $('.themevale_open-Cart .themevale_MobileCart').css('top', position_top);
            }
        });

        $('#cart-mobile .themevale_close2').on('click', function(e) {
            $('body').removeClass('themevale_open-Cart');
            if ($(window).width() <= 551) {
                $('.themevale_MobileCart').css('top', '120%');
            }
        });

        $('.themevale_background').on('click', function(e) {
            if ($('body').hasClass('themevale_open-Cart')) {
                $('body').removeClass('themevale_open-Cart');
                if ($(window).width() <= 551) {
                    $('.themevale_MobileCart').css('top', '120%');
                }
            }
        });
    }
    toggleCart_mobile()

    function closeFillter() {
        $('.popover .close').on('click', function(e){
            e.preventDefault();
            $(this).parent().removeClass('fade');
        })
    }
    closeFillter();
    // ========================================================================
    // Footer on Mobile & tablet
    // ========================================================================
    function footer_mobile() {
        if ($(window).width() <= 767) {
            if(!$('.themevale_footer-info').hasClass('footerMobile')) {
                $('.themevale_footer-info').addClass('footerMobile');
                $('.footer-dropdownmobile .footer-info-list').css('display', 'none');
            }
        } else {
            $('.themevale_footer-info').removeClass('footerMobile');
            $('.footer-dropdownmobile').removeClass('open-dropdown');
            $('.footer-dropdownmobile .footer-info-list').css('display', 'block');
        }
    }
    footer_mobile();

    function toggle_footer() {
        $(document).on('click', '.footerMobile .footer-dropdownmobile .footer-info-heading', function() {
            $(this).parent().toggleClass('open-dropdown');
            $(this).parent().find('.footer-info-list').slideToggle();
        });
    }
    toggle_footer();

    function back_to_top() {
        var offset = $(window).height()/2;
        const backToTop = $('#back-to-top');

        $(window).scroll(function() {
            ($(this).scrollTop() > offset) ? backToTop.addClass('is-visible') : backToTop.removeClass('is-visible');
        });

        backToTop.on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
        });
    }
    back_to_top();

    // ========================================================================
    // Category Page
    // ========================================================================
    function category_dropdownSidebar() {
        if ($('.all-categories-list').length > 0) {
            $('.all-categories-list .navPages-action-wrapper').on('click', function() {
                var $this = $(this).parent();
                $this.siblings().removeClass('is-clicked');
                $this.toggleClass('is-clicked');
                $this.siblings().find("> .dropdown-category-list").slideUp( "slow" );
                $this.find("> .dropdown-category-list").slideToggle( "slow" );
           });
        }
        
        var category_active = $('link[rel="canonical"]').attr('href');
        var category_active_child = $('.themevale_breadcrumbCategory ul li.breadcrumb.is-active').prev('.breadcrumb').children('a').attr('href');
        var category_active_child2 = $('.themevale_breadcrumbCategory ul li.breadcrumb.is-active').prev('.breadcrumb').prev('.breadcrumb').children('a').attr('href');
        $('.all-categories-list li').each(function () {
            if ($(this).find('.navPages-action-wrapper a').attr('href') === category_active) {
                $(this).children('.navPages-action-wrapper').trigger("click");
            }

            if ($(this).find('.navPages-action-wrapper a').attr('href') === category_active_child) {
                $(this).children('.navPages-action-wrapper').trigger("click");
            }

            if ($(this).find('.navPages-action-wrapper a').attr('href') === category_active_child2) {
                $(this).children('.navPages-action-wrapper').trigger("click");
            }
        });
    }
    category_dropdownSidebar();

    function layout_ListGrid() {
        const layout = document.getElementById('grid-list-layout');
        $(document).on('click', '.view-as-btn a', function(){
            var column = $(this).attr('data-layout');
            layout.className = 'page';
            classie.add(layout, column);
        });
    }
    layout_ListGrid();

    function sidebar_mobile() {
        var $sidebar = $('.page .page-sidebar'),
            $sidebarMobile = $("#sidebar-mobile .page-sidebar");
        if ($(window).width() <= 1024) {
            if ($sidebar.length) {
                if ($sidebar.find('nav').length) {
                    var id_name = $sidebar.attr('id');
                    $sidebar.removeAttr('id');
                    $sidebar.find('nav').appendTo($sidebarMobile);
                    $sidebarMobile.attr('id', id_name);
                }
            }
        } else {
            if ($sidebar.length) {
                if (!$sidebar.find('nav').length) {
                    var id_name = $sidebarMobile.attr('id');
                    $sidebarMobile.removeAttr('id');
                    $sidebarMobile.find('nav').appendTo($sidebar);
                    $sidebar.attr('id', id_name);
                }
            }
        }
        if (!$sidebar.length) {
            $('.themevale_sidebar-mobile-wrapper').remove();
        }
    }
    sidebar_mobile();

    function toggleSidebar_mobile() {
        
        if ($('.page-no-sidebar').length) {
            $('.themevale_sidebar-mobile').on('click', function(e) {
                if (!$('body').hasClass('themevale_open-Sidebar')) {
                    $('body').addClass('themevale_open-Sidebar');
                }
            });
            $(document).on('click','.themevale_sidebar-mobile', function(e) {
                if (!$('body').hasClass('themevale_open-Sidebar')) {
                    $('body').addClass('themevale_open-Sidebar');
                }
            });
        } else {
            $('.themevale_sidebar-mobile').on('click', function(e) {
                if (!$('body').hasClass('themevale_open-Sidebar')) {
                    $('body').addClass('themevale_open-Sidebar');
                }
            });
            $(document).on('click','.themevale_sidebar-mobile', function(e) {
                if (!$('body').hasClass('themevale_open-Sidebar')) {
                    $('body').addClass('themevale_open-Sidebar');
                }
            });
        }

        $('#sidebar-mobile .themevale_close2').on('click', function(e) {
            $('body').removeClass('themevale_open-Sidebar');
        });

        $('.themevale_background').on('click', function(e) {
            if ($('body').hasClass('themevale_open-Sidebar')) {
                $('body').removeClass('themevale_open-Sidebar');
            }
        });
    }
    toggleSidebar_mobile();

    function searchForm_mobile() {
        if ($(window).outerWidth() <= 1024) {
            if ($('.item--quickSearch .themevale_search-custom').length) {
                $('.item--quickSearch .themevale_search-custom').appendTo('.themevale_searchSticky');
            }
        } else {
            if ($('.themevale_searchSticky .themevale_search-custom').length) {
                $('.themevale_searchSticky .themevale_search-custom').appendTo('.themevale_header-PC .item--quickSearch');
            }
        }
    }
    searchForm_mobile();

    // ========================================================================
    // WINDOWN RESIZE
    // ========================================================================
    $(window).resize(function() {
        sidebar_mobile();
        footer_mobile();
        activeMenu_Mobile();
        searchForm_mobile();
    });
}
