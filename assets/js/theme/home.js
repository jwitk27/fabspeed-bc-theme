import $ from 'jquery';
import PageManager from './page-manager';
import Pace from 'pace';
import utils from '@bigcommerce/stencil-utils';
import Countdown from './themevale/themevale_Countdown';
import compareProducts from './global/compare-products';
import modalFactory, { showAlertModal } from './global/modal';

export default class Home extends PageManager {
    onReady() {
        compareProducts(this.context.urls);
        
        this.removeSlick();
        this.fillter();
        this.tabCarousel();
        this.product_new_tab();
        this.productsShowMore();
        this.customArrowButton();
        this.initAjaxProductsID();
        this.initAjaxProductsByCategory();
        this.initAjaxProductsByCategoryGrid();
        this.initAjaxProductsByCategoryIdTabs();
        this.initAjaxProductsByCategorySortingTabs();
        this.initPopupVideo();
    }

    // ========================================================================
    // Custom arrow button (slick)
    // ========================================================================
    customArrowButton() {
        $('.btn-arrow-prev').on('click', function(e) {
            e.preventDefault();
            var wrapper = $(this).parents('.themevale_productsCarousel-custom');
            wrapper.find('[data-slick]').slick("slickPrev");
        })

        $('.btn-arrow-next').on('click', function(e) {
            e.preventDefault();
            var wrapper = $(this).parents('.themevale_productsCarousel-custom');
            wrapper.find('[data-slick]').slick("slickNext");
        })
    }

    // ========================================================================
    // Ajax load products in a category tabs
    // ========================================================================

    initAjaxProductsByCategory() {
        var template = 'themevale/homepage/component/ajax-products-by-category-id-result', 
            urlKey = 'themevale-products-by-category-id';

        $('[data-themevale-products-by-category-id]').each((i, placeholder) => {
            Pace.ignore(() => {
                this.request($(placeholder), template, urlKey);
            });
        });
    }
    request($placeholder, tmpl, urlKey) {
        if ($placeholder.data('themevaleLoaded')) return;

        let template = tmpl;
        if ($placeholder.data('themevaleTemplate')) { template = $placeholder.data('themevaleTemplate'); }

        let url = $placeholder.data(urlKey);
        url = url.replace(/https?:\/\/[^/]+/, '');

        utils.api.getPage(url, { template }, (err, resp) => {
            $placeholder.html(resp);
            $placeholder.data('themevaleLoaded', true);
            $placeholder.find('.productCarousel-slide').each(function() {
                var product_id = $(this).find('.card-sale').attr('data-product-id');
                Countdown(product_id);
                
            });
            
            $('[data-slick]', $placeholder).slick();
            if ($(window).width() < 1025) {
                $('.themevale_section-flash-sale.custom .productGrid').slick({
                    dots: true,
                    arrows: false,
                    infinite: false,
                    mobileFirst: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 750,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 551,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    }]
                })
            }
        });
    }

    initAjaxProductsByCategorySortingTabs() {
        var urlKey = 'themevale-products-by-category-sorting-tabs',
            template = 'themevale/homepage/component/ajax-products-by-category-sorting-tabs-result';

        // Ajax request loading products in the active tab
        $('.is-active[data-themevale-products-by-category-sorting-tabs]').each((i, placeholder) => {
            Pace.ignore(() => {
                this.request2($(placeholder), template, urlKey);
            });
        });

        $('.themevale_productsCategorySortTabs [data-tab]').on('toggled', (event, tab) => {
            Pace.ignore(() => {
                this.request2($($('a', tab).attr('href')), template, urlKey);
            });
        });
    }
    request2($placeholder, tmpl, urlKey) {
        if ($placeholder.data('themevaleLoaded')) return;

        let template = tmpl;
        if ($placeholder.data('themevaleTemplate')) { template = $placeholder.data('themevaleTemplate'); }

        let url = $placeholder.data(urlKey);
        url = url.replace(/https?:\/\/[^/]+/, '');

        utils.api.getPage(url, { template }, (err, resp) => {
            $placeholder.html(resp);
            $placeholder.data('themevaleLoaded', true);
            $('[data-slick]', $placeholder).slick();
        });
    }

    initAjaxProductsByCategoryIdTabs() {
        var template = 'themevale/homepage/component/ajax-products-by-category-id-tabs-result', 
            urlKey = 'themevale-products-by-category-id-tabs';

        // Ajax request loading products in the active tab
        $('.is-active [data-themevale-products-by-category-id-tabs]').each((i, placeholder) => {
            Pace.ignore(() => {
               this.request3($(placeholder), template, urlKey);
            });
        });

        $('[data-themevale-products-by-category-id-tabs]').on('toggled', (event, tab) => {
            Pace.ignore(() => {
                this.request3($('[data-themevale-products-by-category-id-tabs]', $('a', tab).attr('href')), template, urlKey);
            });
        });
    }
    request3($placeholder, tmpl, urlKey) {
        if ($placeholder.data('themevaleLoaded')) return;

        let template = tmpl;
        if ($placeholder.data('themevaleTemplate')) { template = $placeholder.data('themevaleTemplate'); }

        let url = $placeholder.data(urlKey);
        url = url.replace(/https?:\/\/[^/]+/, '');

        utils.api.getPage(url, { template }, (err, resp) => {
            $placeholder.html(resp);
            $placeholder.data('themevaleLoaded', true);
            $('[data-slick]', $placeholder).slick();
        });
    }

    initAjaxProductsByCategoryGrid() {
        var template = 'themevale/homepage/component/ajax-products-by-category-id-grid-result', 
            urlKey = 'themevale-products-grid-by-category-id';

        $('.themevale_productsByCategoryId-grid [data-themevale-products-grid-by-category-id]').each((i, placeholder) => {
            Pace.ignore(() => {
                this.request4($(placeholder), template, urlKey);
            });
        });
    }
    request4($placeholder, tmpl, urlKey) {
        if ($placeholder.data('themevaleLoaded')) return;

        let template = tmpl;
        if ($placeholder.data('themevaleTemplate')) { template = $placeholder.data('themevaleTemplate'); }

        let url = $placeholder.data(urlKey);
        url = url.replace(/https?:\/\/[^/]+/, '');

        utils.api.getPage(url, { template }, (err, resp) => {
            $placeholder.html(resp);
            $placeholder.data('themevaleLoaded', true);
            this.productsShowMore();
        });
    }

    tabCarousel() {
        $('[data-themevale-products-by-category-id-tabs]').on('toggled', function (event, tab) {
            $('.productCarousel[data-slick]').slick('setPosition');
        });
    }

    // ========================================================================
    // Ajax load products ID in a category banner
    // ========================================================================
    initAjaxProductsID() {
        const $options = {
            config: {
                products: {
                    new: {
                        limit: 20,
                    },
                },
            },
            template: 'themevale/homepage/component/ajax-product-id'
        };
        const $thisProd = $('#product-popup');
        $('.themevale_category-product-item .position-point').on('click', function() {
            $thisProd.empty();
            var $prodId = $(this).data('product-id');
            var position = $(this).parent().position();
            var container = $('.themevale_category-banner > .container').offset();
            utils.api.product.getById($prodId, $options, (err, response) => {
                if (err) {
                    return false;
                }
                $thisProd.html(response);
            });
            $thisProd.toggleClass("show");
            if ($(window).width() > 1024) {
                $thisProd.css({'top': position.top, 'left': position.left + container.left - $thisProd.width()});
            } else {
                $thisProd.css({'top': position.top + 15, 'left': 30});
            }
        });
        $(document).on('click', '.close-product', function() {
            if ($thisProd.hasClass("show")) {
                $thisProd.removeClass("show");
            }
        });
        $(document).on('click', event => {
            if ($thisProd.hasClass("show")) {
                if (($(event.target).closest($thisProd).length === 0) && ($(event.target).closest('.position-point').length === 0)) {
                    $thisProd.removeClass("show");
                }
            }
        });
    }

    // ========================================================================
    // Products Show More
    // ========================================================================
    productsShowMore(context) {
        var productsToShow = Number($('[data-number-product]').attr('data-number-product'));
        if ($('[data-event="show more"]').length) {
            if ($(window).width() > 551) {
                if ($('[data-event="show more"] .productGrid .product').length > productsToShow) {
                    $('[data-event="show more"] .productGrid .product').css({ 'display': 'inline-block' });
                    for(var i = productsToShow + 1, len = $('[data-event="show more"] .productGrid .product').length; i <= len; i++) {
                        $('[data-event="show more"] .productGrid .product:nth-child('+i+')').css({ 'display': 'none' });
                    }
                    if (!$('[data-event="show more"] .themevale_showMoreProduct').length) {
                        $('[data-event="show more"]').append('<div class="themevale_showMoreProduct"><a class="button button--big" href="javascript:void(0);">Show More</a></div>');
                    }
                }
            } else {
                productsToShow = 4;
                if ($('[data-event="show more"] .productGrid .product').length > productsToShow) {
                    $('[data-event="show more"] .productGrid .product').css({ 'display': 'inline-block' });
                    $('[data-event="show more"] .productGrid .product:nth-child(n + 7)').css({ 'display': 'none' });
                    if (!$('[data-event="show more"] .themevale_showMoreProduct').length) {
                        $('[data-event="show more"]').append('<div class="themevale_showMoreProduct"><a class="button button--big" href="javascript:void(0);">Show More</a></div>');
                    }
                }
            }

            $('.themevale_showMoreProduct a').on('click', function(e) {
                e.preventDefault();
                var listProducts = $(this).parents('[data-event="show more"]');
                listProducts.find('.productGrid .product:hidden:lt(' + productsToShow + ')').show();
                if (listProducts.find('.productGrid .product:hidden').length === 0) {
                    $(this).parent().css({ 'display': 'none' });
                }
            });
        }
    }

    // ========================================================================
    // Category fillter
    // ========================================================================
    fillter() {
        if ($('.themevale_heroCarousel .themevale_MultiCategory').length) {
            var position = $('.themevale_heroCarousel .heroCarousel-content').position();
            if ($(window).width() > 1024) {
                $('.themevale_heroCarousel .themevale_MultiCategory').css('top', position.top + $('.themevale_heroCarousel .heroCarousel-content').outerHeight() - 50);
            } else {
                $('.themevale_heroCarousel .themevale_MultiCategory').css('top', 0);
            }
        }

        if ($('.themevale_MultiCategory.layout-2').length) {
            if ($(window).width() <= 1024) {
                if ($('.themevale_section-flash-sale .category_filter').length) {
                    $('.themevale_section-flash-sale .category_filter').appendTo('.themevale_heroCarousel');
                }
            } else {
                if (!$('.themevale_section-flash-sale .category_filter').length) {
                    $('.themevale_heroCarousel .category_filter').appendTo('.themevale_section-flash-sale .container > .items:first-child');
                }
            }
        }

        $(window).resize(function() {
            if ($('.themevale_heroCarousel .themevale_MultiCategory').length) {
                var position = $('.themevale_heroCarousel .heroCarousel-content').position();
                if ($(window).width() > 1024) {
                    $('.themevale_heroCarousel .themevale_MultiCategory').css('top', position.top + $('.themevale_heroCarousel .heroCarousel-content').outerHeight() - 50);
                } else {
                    $('.themevale_heroCarousel .themevale_MultiCategory').css('top', 0);
                }
            }

            if ($('.themevale_MultiCategory.layout-2').length) {
                if ($(window).width() <= 1024) {
                    if ($('.themevale_section-flash-sale .category_filter').length) {
                        $('.themevale_section-flash-sale .category_filter').appendTo('.themevale_heroCarousel');
                    }
                } else {
                    if (!$('.themevale_section-flash-sale .category_filter').length) {
                        $('.themevale_heroCarousel .category_filter').prependTo('.themevale_section-flash-sale .container > .items:nth-child(2)');
                    }
                }
            }
        })
    }

    // ========================================================================
    // Remove slick slider (mobile)
    // ========================================================================
    removeSlick() {
        if ($(window).width() < 1025) {
            if ($('.brandSlider').length) {
                if ($('.brandSlider').hasClass('slick-slider')) {
                    $('.brandSlider').slick('unslick');
                }
            }

            if ($('.themevale_featuredCategory-wrapper').length) {
                if ($('.themevale_featuredCategory-wrapper').hasClass('slick-slider')) {
                    $('.themevale_featuredCategory-wrapper').slick('unslick');
                }
            }

            if ($('.recent_postCarousel').length) {
                 if ($('.recent_postCarousel').hasClass('slick-slider')) {
                    $('.recent_postCarousel').slick('unslick');
                }
            }

            if ($('.brandsImage-slider').length) {
                if ($('.brandsImage-slider').hasClass('slick-slider')) {
                    $('.brandsImage-slider').slick('unslick');
                }
            }

            if ($('.themevale_category-carousel').length) {
                if ($('.themevale_category-carousel').hasClass('slick-slider')) {
                    $('.themevale_category-carousel').slick('unslick');
                }
            }

            if ($('.themevale_video_carousel').length) {
                if ($('.themevale_video_carousel').hasClass('slick-slider')) {
                    $('.themevale_video_carousel').slick('unslick');
                }
            }

            if ($('.themevale_section-flash-sale.custom').length) {
                if (!$('.themevale_section-flash-sale.custom .productGrid').hasClass('slick-slider')) {
                    $('.themevale_section-flash-sale.custom .productGrid').slick({
                        dots: true,
                        arrows: false,
                        infinite: false,
                        mobileFirst: true,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        responsive: [
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        },
                        {
                            breakpoint: 750,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                        {
                            breakpoint: 551,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        }]
                    })
                }
            }
        }

        $(window).resize(function() {
            if ($(window).width() < 1025) {
                if ($('.brandSlider').length) {
                    if ($('.brandSlider').hasClass('slick-slider')) {
                        $('.brandSlider').slick('unslick');
                    }
                }

                if ($('.themevale_featuredCategory-wrapper').length) {
                    if ($('.themevale_featuredCategory-wrapper').hasClass('slick-slider')) {
                        $('.themevale_featuredCategory-wrapper').slick('unslick');
                    }
                }

                if ($('.recent_postCarousel').length) {
                     if ($('.recent_postCarousel').hasClass('slick-slider')) {
                        $('.recent_postCarousel').slick('unslick');
                    }
                }

                if ($('.brandsImage-slider').length) {
                    if ($('.brandsImage-slider').hasClass('slick-slider')) {
                        $('.brandsImage-slider').slick('unslick');
                    }
                }

                if ($('.themevale_category-carousel').length) {
                    if ($('.themevale_category-carousel').hasClass('slick-slider')) {
                        $('.themevale_category-carousel').slick('unslick');
                    }
                }
            
                if ($('.themevale_video_carousel').length) {
                    if ($('.themevale_video_carousel').hasClass('slick-slider')) {
                        $('.themevale_video_carousel').slick('unslick');
                    }
                }

                if ($('.themevale_section-flash-sale.custom').length) {
                    if (!$('.themevale_section-flash-sale.custom .productGrid').hasClass('slick-slider')) {
                        $('.themevale_section-flash-sale.custom .productGrid').slick({
                            dots: true,
                            arrows: false,
                            infinite: false,
                            mobileFirst: true,
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            responsive: [
                            {
                                breakpoint: 1100,
                                settings: "unslick"
                            },
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3
                                }
                            },
                            {
                                breakpoint: 750,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2
                                }
                            },
                            {
                                breakpoint: 551,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3
                                }
                            }]
                        })
                    }
                }

            } else {
                if ($('.brandSlider').length) {
                    if (!$('.brandSlider').hasClass('slick-slider')) {
                        $('.brandSlider').slick();
                    }
                }

                if ($('.themevale_featuredCategory-wrapper').length) {
                    if (!$('.themevale_featuredCategory-wrapper').hasClass('slick-slider')) {
                        $('.themevale_featuredCategory-wrapper').slick();
                    }
                }

                if ($('.recent_postCarousel').length) {
                    if (!$('.recent_postCarousel').hasClass('slick-slider')) {
                        $('.recent_postCarousel').slick();
                    }
                }

                if ($('.brandsImage-slider').length) {
                    if (!$('.brandsImage-slider').hasClass('slick-slider')) {
                        $('.brandsImage-slider').slick();
                    }
                }

                if ($('.themevale_category-carousel').length) {
                    if (!$('.themevale_category-carousel').hasClass('slick-slider')) {
                        $('.themevale_category-carousel').slick();
                    }
                }
            
                if ($('.themevale_video_carousel').length) {
                    if (!$('.themevale_video_carousel').hasClass('slick-slider')) {
                        $('.themevale_video_carousel').slick();
                    }
                }

                if ($('.themevale_section-flash-sale.custom').length) {
                    if ($('.themevale_section-flash-sale.custom .productGrid').hasClass('slick-slider')) {
                        $('.themevale_section-flash-sale.custom .productGrid').slick('unslick');
                    }
                }
            }
        })
    }

    product_new_tab() {
        if($('#themevale_new_product').length) {
            $('.themevale_productsCategorySortNew .tabs-contents .tab-content').each(function(index) {
                if( index == 0 ) {
                    var thisItem = $(this).parents('#themevale_new_product'),
                        cat_id = $(this).attr('id').replace('tab-',''),
                        url = thisItem.find('[cat-id="'+cat_id+'"]').attr('cat-url'),
                        sort_new = '?sort=newest';
                    url += sort_new;
                    utils.api.getPage(url, { template: 'themevale/homepage/component/ajax-products-by-category-sorting-new-result' }, (err, response) => {
                        thisItem.find('#tab-'+cat_id).find('.themevale_productLoading').remove();
                        thisItem.find('#tab-'+cat_id).html(response);
                        $('[data-slick]', thisItem).slick();
                    });
                }
            });
            $('.themevale_productsCategorySortNew .tab-title').on('click', function(event) {
                event.preventDefault();
                var thisItem = $(this).parents('#themevale_new_product'),
                    cat_id = $(this).parent().attr('cat-id'),
                    url = $(this).parent().attr('cat-url'),
                    sort_new = '?sort=newest';
                url += sort_new;
                if($('#themevale_new_product #tab-'+cat_id).find('.themevale_productLoading').length) {
                    utils.api.getPage(url, { template: 'themevale/homepage/component/ajax-products-by-category-sorting-new-result' }, (err, response) => {
                        thisItem.find('#tab-'+cat_id).find('.themevale_productLoading').remove();
                        thisItem.find('#tab-'+cat_id).html(response);
                        $('[data-slick]', '#themevale_new_product #tab-'+cat_id).slick();
                    });
                }
            });
        }
    }

    initPopupVideo() {
        if( this.context.themeSettings['themevale_category-banner-video-url'] != "") {
            const modal = modalFactory('#popup-video')[0];
            $(document).on('click', '[data-reveal-id="popup-video"]', () => {
                const $content = '<div class="modal-body">\
                            <a href="#" class="modal-close" aria-label="" role="button">\
                    <span aria-hidden="true">&#215;</span>\
                </a>\
                <div class="popup-video themevale_popup-video" data-video-gallery>\
                    <div id="popup-video-content">\
                        <div class="popup-video-main">\
                            <iframe\
                                id="player"\
                                type="text/html"\
                                width="100%"\
                                frameborder="0"\
                                webkitAllowFullScreen\
                                mozallowfullscreen\
                                allowFullScreen\
                                src="'+this.context.themeSettings['themevale_category-banner-video-url']+'"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
                modal.updateContent($content);
            });
        }

        if( this.context.themeSettings['homepage_video_url_1'] != "") {
            const modal = modalFactory('#popup-video-1')[0];
            $(document).on('click', '[data-reveal-id="popup-video-1"]', () => {
                const $content = '<div class="modal-body">\
                            <a href="#" class="modal-close" aria-label="" role="button">\
                    <span aria-hidden="true">&#215;</span>\
                </a>\
                <div class="popup-video themevale_popup-video" data-video-gallery>\
                    <div id="popup-video-content">\
                        <div class="popup-video-main">\
                            <iframe\
                                id="player"\
                                type="text/html"\
                                width="100%"\
                                frameborder="0"\
                                webkitAllowFullScreen\
                                mozallowfullscreen\
                                allowFullScreen\
                                src="'+this.context.themeSettings['homepage_video_url_1']+'"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
                modal.updateContent($content);
            });
        }

        if( this.context.themeSettings['homepage_video_url_2'] != "") {
            const modal = modalFactory('#popup-video-2')[0];
            $(document).on('click', '[data-reveal-id="popup-video-2"]', () => {
                const $content = '<div class="modal-body">\
                            <a href="#" class="modal-close" aria-label="" role="button">\
                    <span aria-hidden="true">&#215;</span>\
                </a>\
                <div class="popup-video themevale_popup-video" data-video-gallery>\
                    <div id="popup-video-content">\
                        <div class="popup-video-main">\
                            <iframe\
                                id="player"\
                                type="text/html"\
                                width="100%"\
                                frameborder="0"\
                                webkitAllowFullScreen\
                                mozallowfullscreen\
                                allowFullScreen\
                                src="'+this.context.themeSettings['homepage_video_url_2']+'"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
                modal.updateContent($content);
            });
        }

        if( this.context.themeSettings['homepage_video_url_3'] != "") {
            const modal = modalFactory('#popup-video-3')[0];
            $(document).on('click', '[data-reveal-id="popup-video-3"]', () => {
                const $content = '<div class="modal-body">\
                            <a href="#" class="modal-close" aria-label="" role="button">\
                    <span aria-hidden="true">&#215;</span>\
                </a>\
                <div class="popup-video themevale_popup-video" data-video-gallery>\
                    <div id="popup-video-content">\
                        <div class="popup-video-main">\
                            <iframe\
                                id="player"\
                                type="text/html"\
                                width="100%"\
                                frameborder="0"\
                                webkitAllowFullScreen\
                                mozallowfullscreen\
                                allowFullScreen\
                                src="'+this.context.themeSettings['homepage_video_url_3']+'"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
                modal.updateContent($content);
            });
        }

        if( this.context.themeSettings['homepage_video_url_4'] != "") {
            const modal = modalFactory('#popup-video-4')[0];
            $(document).on('click', '[data-reveal-id="popup-video-4"]', () => {
                const $content = '<div class="modal-body">\
                            <a href="#" class="modal-close" aria-label="" role="button">\
                    <span aria-hidden="true">&#215;</span>\
                </a>\
                <div class="popup-video themevale_popup-video" data-video-gallery>\
                    <div id="popup-video-content">\
                        <div class="popup-video-main">\
                            <iframe\
                                id="player"\
                                type="text/html"\
                                width="100%"\
                                frameborder="0"\
                                webkitAllowFullScreen\
                                mozallowfullscreen\
                                allowFullScreen\
                                src="'+this.context.themeSettings['homepage_video_url_4']+'"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
                modal.updateContent($content);
            });
        }

        if( this.context.themeSettings['homepage_video_url_5'] != "") {
            const modal = modalFactory('#popup-video-5')[0];
            $(document).on('click', '[data-reveal-id="popup-video-5"]', () => {
                const $content = '<div class="modal-body">\
                            <a href="#" class="modal-close" aria-label="" role="button">\
                    <span aria-hidden="true">&#215;</span>\
                </a>\
                <div class="popup-video themevale_popup-video" data-video-gallery>\
                    <div id="popup-video-content">\
                        <div class="popup-video-main">\
                            <iframe\
                                id="player"\
                                type="text/html"\
                                width="100%"\
                                frameborder="0"\
                                webkitAllowFullScreen\
                                mozallowfullscreen\
                                allowFullScreen\
                                src="'+this.context.themeSettings['homepage_video_url_5']+'"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
                modal.updateContent($content);
            });
        }
    }
}
