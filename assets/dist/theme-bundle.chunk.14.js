(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");



function decrementCounter(counter, item) {
  var index = counter.indexOf(item);
  if (index > -1) {
    counter.splice(index, 1);
  }
}
function incrementCounter(counter, item) {
  counter.push(item);
}
function updateCounterNav(counter, $link, urlContext) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }
    $link.attr('href', urlContext.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}
/* harmony default export */ __webpack_exports__["default"] = (function (urlContext) {
  var products;
  var $checked = $('body').find('input[name="products\[\]"]:checked');
  var $compareLink = $('a[data-compare-nav]');
  if ($checked.length !== 0) {
    products = lodash_map__WEBPACK_IMPORTED_MODULE_0___default()($checked, function (element) {
      return element.value;
    });
    updateCounterNav(products, $compareLink, urlContext);
  }
  var compareCounter = products || [];
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');
    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }
    updateCounterNav(compareCounter, $clickedCompareLink, urlContext);
  });
  $('body').on('submit', '[data-product-compare]', function (event) {
    var $this = $(event.currentTarget);
    var productsToCompare = $this.find('input[name="products\[\]"]:checked');
    if (productsToCompare.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_2__["showAlertModal"])('You must select at least two products to compare');
      event.preventDefault();
    }
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');
    if ($clickedCheckedInput.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_2__["showAlertModal"])('You must select at least two products to compare');
      return false;
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/home.js":
/*!*********************************!*\
  !*** ./assets/js/theme/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pace */ "./node_modules/pace-js/pace.min.js");
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pace__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _themevale_themevale_Countdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./themevale/themevale_Countdown */ "./assets/js/theme/themevale/themevale_Countdown.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");




function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }







var Home = /*#__PURE__*/function (_PageManager) {
  function Home() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Home, _PageManager);
  var _proto = Home.prototype;
  _proto.onReady = function onReady() {
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_9__["default"])(this.context.urls);
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
  ;
  _proto.customArrowButton = function customArrowButton() {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.btn-arrow-prev').on('click', function (e) {
      e.preventDefault();
      var wrapper = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents('.themevale_productsCarousel-custom');
      wrapper.find('[data-slick]').slick("slickPrev");
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.btn-arrow-next').on('click', function (e) {
      e.preventDefault();
      var wrapper = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents('.themevale_productsCarousel-custom');
      wrapper.find('[data-slick]').slick("slickNext");
    });
  }

  // ========================================================================
  // Ajax load products in a category tabs
  // ========================================================================
  ;
  _proto.initAjaxProductsByCategory = function initAjaxProductsByCategory() {
    var _this = this;
    var template = 'themevale/homepage/component/ajax-products-by-category-id-result',
      urlKey = 'themevale-products-by-category-id';
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-themevale-products-by-category-id]').each(function (i, placeholder) {
      pace__WEBPACK_IMPORTED_MODULE_6___default.a.ignore(function () {
        _this.request(jquery__WEBPACK_IMPORTED_MODULE_4___default()(placeholder), template, urlKey);
      });
    });
  };
  _proto.request = function request($placeholder, tmpl, urlKey) {
    if ($placeholder.data('themevaleLoaded')) return;
    var template = tmpl;
    if ($placeholder.data('themevaleTemplate')) {
      template = $placeholder.data('themevaleTemplate');
    }
    var url = $placeholder.data(urlKey);
    url = url.replace(/https?:\/\/[^/]+/, '');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.getPage(url, {
      template: template
    }, function (err, resp) {
      $placeholder.html(resp);
      $placeholder.data('themevaleLoaded', true);
      $placeholder.find('.productCarousel-slide').each(function () {
        var product_id = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).find('.card-sale').attr('data-product-id');
        Object(_themevale_themevale_Countdown__WEBPACK_IMPORTED_MODULE_8__["default"])(product_id);
      });
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-slick]', $placeholder).slick();
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() < 1025) {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale.custom .productGrid').slick({
          dots: true,
          arrows: false,
          infinite: false,
          mobileFirst: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          responsive: [{
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }, {
            breakpoint: 750,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }, {
            breakpoint: 551,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }]
        });
      }
    });
  };
  _proto.initAjaxProductsByCategorySortingTabs = function initAjaxProductsByCategorySortingTabs() {
    var _this2 = this;
    var urlKey = 'themevale-products-by-category-sorting-tabs',
      template = 'themevale/homepage/component/ajax-products-by-category-sorting-tabs-result';

    // Ajax request loading products in the active tab
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.is-active[data-themevale-products-by-category-sorting-tabs]').each(function (i, placeholder) {
      pace__WEBPACK_IMPORTED_MODULE_6___default.a.ignore(function () {
        _this2.request2(jquery__WEBPACK_IMPORTED_MODULE_4___default()(placeholder), template, urlKey);
      });
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_productsCategorySortTabs [data-tab]').on('toggled', function (event, tab) {
      pace__WEBPACK_IMPORTED_MODULE_6___default.a.ignore(function () {
        _this2.request2(jquery__WEBPACK_IMPORTED_MODULE_4___default()(jquery__WEBPACK_IMPORTED_MODULE_4___default()('a', tab).attr('href')), template, urlKey);
      });
    });
  };
  _proto.request2 = function request2($placeholder, tmpl, urlKey) {
    if ($placeholder.data('themevaleLoaded')) return;
    var template = tmpl;
    if ($placeholder.data('themevaleTemplate')) {
      template = $placeholder.data('themevaleTemplate');
    }
    var url = $placeholder.data(urlKey);
    url = url.replace(/https?:\/\/[^/]+/, '');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.getPage(url, {
      template: template
    }, function (err, resp) {
      $placeholder.html(resp);
      $placeholder.data('themevaleLoaded', true);
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-slick]', $placeholder).slick();
    });
  };
  _proto.initAjaxProductsByCategoryIdTabs = function initAjaxProductsByCategoryIdTabs() {
    var _this3 = this;
    var template = 'themevale/homepage/component/ajax-products-by-category-id-tabs-result',
      urlKey = 'themevale-products-by-category-id-tabs';

    // Ajax request loading products in the active tab
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.is-active [data-themevale-products-by-category-id-tabs]').each(function (i, placeholder) {
      pace__WEBPACK_IMPORTED_MODULE_6___default.a.ignore(function () {
        _this3.request3(jquery__WEBPACK_IMPORTED_MODULE_4___default()(placeholder), template, urlKey);
      });
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-themevale-products-by-category-id-tabs]').on('toggled', function (event, tab) {
      pace__WEBPACK_IMPORTED_MODULE_6___default.a.ignore(function () {
        _this3.request3(jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-themevale-products-by-category-id-tabs]', jquery__WEBPACK_IMPORTED_MODULE_4___default()('a', tab).attr('href')), template, urlKey);
      });
    });
  };
  _proto.request3 = function request3($placeholder, tmpl, urlKey) {
    if ($placeholder.data('themevaleLoaded')) return;
    var template = tmpl;
    if ($placeholder.data('themevaleTemplate')) {
      template = $placeholder.data('themevaleTemplate');
    }
    var url = $placeholder.data(urlKey);
    url = url.replace(/https?:\/\/[^/]+/, '');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.getPage(url, {
      template: template
    }, function (err, resp) {
      $placeholder.html(resp);
      $placeholder.data('themevaleLoaded', true);
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-slick]', $placeholder).slick();
    });
  };
  _proto.initAjaxProductsByCategoryGrid = function initAjaxProductsByCategoryGrid() {
    var _this4 = this;
    var template = 'themevale/homepage/component/ajax-products-by-category-id-grid-result',
      urlKey = 'themevale-products-grid-by-category-id';
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_productsByCategoryId-grid [data-themevale-products-grid-by-category-id]').each(function (i, placeholder) {
      pace__WEBPACK_IMPORTED_MODULE_6___default.a.ignore(function () {
        _this4.request4(jquery__WEBPACK_IMPORTED_MODULE_4___default()(placeholder), template, urlKey);
      });
    });
  };
  _proto.request4 = function request4($placeholder, tmpl, urlKey) {
    var _this5 = this;
    if ($placeholder.data('themevaleLoaded')) return;
    var template = tmpl;
    if ($placeholder.data('themevaleTemplate')) {
      template = $placeholder.data('themevaleTemplate');
    }
    var url = $placeholder.data(urlKey);
    url = url.replace(/https?:\/\/[^/]+/, '');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.getPage(url, {
      template: template
    }, function (err, resp) {
      $placeholder.html(resp);
      $placeholder.data('themevaleLoaded', true);
      _this5.productsShowMore();
    });
  };
  _proto.tabCarousel = function tabCarousel() {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-themevale-products-by-category-id-tabs]').on('toggled', function (event, tab) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.productCarousel[data-slick]').slick('setPosition');
    });
  }

  // ========================================================================
  // Ajax load products ID in a category banner
  // ========================================================================
  ;
  _proto.initAjaxProductsID = function initAjaxProductsID() {
    var $options = {
      config: {
        products: {
          new: {
            limit: 20
          }
        }
      },
      template: 'themevale/homepage/component/ajax-product-id'
    };
    var $thisProd = jquery__WEBPACK_IMPORTED_MODULE_4___default()('#product-popup');
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_category-product-item .position-point').on('click', function () {
      $thisProd.empty();
      var $prodId = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).data('product-id');
      var position = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parent().position();
      var container = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_category-banner > .container').offset();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.product.getById($prodId, $options, function (err, response) {
        if (err) {
          return false;
        }
        $thisProd.html(response);
      });
      $thisProd.toggleClass("show");
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() > 1024) {
        $thisProd.css({
          'top': position.top,
          'left': position.left + container.left - $thisProd.width()
        });
      } else {
        $thisProd.css({
          'top': position.top + 15,
          'left': 30
        });
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '.close-product', function () {
      if ($thisProd.hasClass("show")) {
        $thisProd.removeClass("show");
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', function (event) {
      if ($thisProd.hasClass("show")) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(event.target).closest($thisProd).length === 0 && jquery__WEBPACK_IMPORTED_MODULE_4___default()(event.target).closest('.position-point').length === 0) {
          $thisProd.removeClass("show");
        }
      }
    });
  }

  // ========================================================================
  // Products Show More
  // ========================================================================
  ;
  _proto.productsShowMore = function productsShowMore(context) {
    var productsToShow = Number(jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-number-product]').attr('data-number-product'));
    if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"]').length) {
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() > 551) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .productGrid .product').length > productsToShow) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .productGrid .product').css({
            'display': 'inline-block'
          });
          for (var i = productsToShow + 1, len = jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .productGrid .product').length; i <= len; i++) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .productGrid .product:nth-child(' + i + ')').css({
              'display': 'none'
            });
          }
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .themevale_showMoreProduct').length) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"]').append('<div class="themevale_showMoreProduct"><a class="button button--big" href="javascript:void(0);">Show More</a></div>');
          }
        }
      } else {
        productsToShow = 4;
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .productGrid .product').length > productsToShow) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .productGrid .product').css({
            'display': 'inline-block'
          });
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .productGrid .product:nth-child(n + 7)').css({
            'display': 'none'
          });
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"] .themevale_showMoreProduct').length) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-event="show more"]').append('<div class="themevale_showMoreProduct"><a class="button button--big" href="javascript:void(0);">Show More</a></div>');
          }
        }
      }
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_showMoreProduct a').on('click', function (e) {
        e.preventDefault();
        var listProducts = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents('[data-event="show more"]');
        listProducts.find('.productGrid .product:hidden:lt(' + productsToShow + ')').show();
        if (listProducts.find('.productGrid .product:hidden').length === 0) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parent().css({
            'display': 'none'
          });
        }
      });
    }
  }

  // ========================================================================
  // Category fillter
  // ========================================================================
  ;
  _proto.fillter = function fillter() {
    if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_heroCarousel .themevale_MultiCategory').length) {
      var position = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_heroCarousel .heroCarousel-content').position();
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() > 1024) {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_heroCarousel .themevale_MultiCategory').css('top', position.top + jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_heroCarousel .heroCarousel-content').outerHeight() - 50);
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_heroCarousel .themevale_MultiCategory').css('top', 0);
      }
    }
    if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_MultiCategory.layout-2').length) {
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() <= 1024) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale .category_filter').length) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale .category_filter').appendTo('.themevale_heroCarousel');
        }
      } else {
        if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale .category_filter').length) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_heroCarousel .category_filter').appendTo('.themevale_section-flash-sale .container > .items:first-child');
        }
      }
    }
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).resize(function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_heroCarousel .themevale_MultiCategory').length) {
        var position = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_heroCarousel .heroCarousel-content').position();
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() > 1024) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_heroCarousel .themevale_MultiCategory').css('top', position.top + jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_heroCarousel .heroCarousel-content').outerHeight() - 50);
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_heroCarousel .themevale_MultiCategory').css('top', 0);
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_MultiCategory.layout-2').length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() <= 1024) {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale .category_filter').length) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale .category_filter').appendTo('.themevale_heroCarousel');
          }
        } else {
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale .category_filter').length) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_heroCarousel .category_filter').prependTo('.themevale_section-flash-sale .container > .items:nth-child(2)');
          }
        }
      }
    });
  }

  // ========================================================================
  // Remove slick slider (mobile)
  // ========================================================================
  ;
  _proto.removeSlick = function removeSlick() {
    if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() < 1025) {
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandSlider').length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandSlider').hasClass('slick-slider')) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandSlider').slick('unslick');
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_featuredCategory-wrapper').length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_featuredCategory-wrapper').hasClass('slick-slider')) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_featuredCategory-wrapper').slick('unslick');
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.recent_postCarousel').length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.recent_postCarousel').hasClass('slick-slider')) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.recent_postCarousel').slick('unslick');
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandsImage-slider').length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandsImage-slider').hasClass('slick-slider')) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandsImage-slider').slick('unslick');
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_category-carousel').length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_category-carousel').hasClass('slick-slider')) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_category-carousel').slick('unslick');
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_video_carousel').length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_video_carousel').hasClass('slick-slider')) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_video_carousel').slick('unslick');
        }
      }
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale.custom').length) {
        if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale.custom .productGrid').hasClass('slick-slider')) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale.custom .productGrid').slick({
            dots: true,
            arrows: false,
            infinite: false,
            mobileFirst: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [{
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }, {
              breakpoint: 750,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }, {
              breakpoint: 551,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }]
          });
        }
      }
    }
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).resize(function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() < 1025) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandSlider').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandSlider').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandSlider').slick('unslick');
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_featuredCategory-wrapper').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_featuredCategory-wrapper').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_featuredCategory-wrapper').slick('unslick');
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.recent_postCarousel').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.recent_postCarousel').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.recent_postCarousel').slick('unslick');
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandsImage-slider').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandsImage-slider').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandsImage-slider').slick('unslick');
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_category-carousel').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_category-carousel').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_category-carousel').slick('unslick');
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_video_carousel').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_video_carousel').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_video_carousel').slick('unslick');
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale.custom').length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale.custom .productGrid').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale.custom .productGrid').slick({
              dots: true,
              arrows: false,
              infinite: false,
              mobileFirst: true,
              slidesToShow: 2,
              slidesToScroll: 2,
              responsive: [{
                breakpoint: 1100,
                settings: "unslick"
              }, {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              }, {
                breakpoint: 750,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              }, {
                breakpoint: 551,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              }]
            });
          }
        }
      } else {
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandSlider').length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandSlider').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandSlider').slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_featuredCategory-wrapper').length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_featuredCategory-wrapper').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_featuredCategory-wrapper').slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.recent_postCarousel').length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('.recent_postCarousel').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.recent_postCarousel').slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandsImage-slider').length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandsImage-slider').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.brandsImage-slider').slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_category-carousel').length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_category-carousel').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_category-carousel').slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_video_carousel').length) {
          if (!jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_video_carousel').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_video_carousel').slick();
          }
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale.custom').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale.custom .productGrid').hasClass('slick-slider')) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_section-flash-sale.custom .productGrid').slick('unslick');
          }
        }
      }
    });
  };
  _proto.product_new_tab = function product_new_tab() {
    if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('#themevale_new_product').length) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_productsCategorySortNew .tabs-contents .tab-content').each(function (index) {
        if (index == 0) {
          var thisItem = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents('#themevale_new_product'),
            cat_id = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).attr('id').replace('tab-', ''),
            url = thisItem.find('[cat-id="' + cat_id + '"]').attr('cat-url'),
            sort_new = '?sort=newest';
          url += sort_new;
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.getPage(url, {
            template: 'themevale/homepage/component/ajax-products-by-category-sorting-new-result'
          }, function (err, response) {
            thisItem.find('#tab-' + cat_id).find('.themevale_productLoading').remove();
            thisItem.find('#tab-' + cat_id).html(response);
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-slick]', thisItem).slick();
          });
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.themevale_productsCategorySortNew .tab-title').on('click', function (event) {
        event.preventDefault();
        var thisItem = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents('#themevale_new_product'),
          cat_id = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parent().attr('cat-id'),
          url = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parent().attr('cat-url'),
          sort_new = '?sort=newest';
        url += sort_new;
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('#themevale_new_product #tab-' + cat_id).find('.themevale_productLoading').length) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.getPage(url, {
            template: 'themevale/homepage/component/ajax-products-by-category-sorting-new-result'
          }, function (err, response) {
            thisItem.find('#tab-' + cat_id).find('.themevale_productLoading').remove();
            thisItem.find('#tab-' + cat_id).html(response);
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-slick]', '#themevale_new_product #tab-' + cat_id).slick();
          });
        }
      });
    }
  };
  _proto.initPopupVideo = function initPopupVideo() {
    var _this6 = this;
    if (this.context.themeSettings['themevale_category-banner-video-url'] != "") {
      var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["default"])('#popup-video')[0];
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '[data-reveal-id="popup-video"]', function () {
        var $content = '<div class="modal-body">\
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
                                src="' + _this6.context.themeSettings['themevale_category-banner-video-url'] + '"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        modal.updateContent($content);
      });
    }
    if (this.context.themeSettings['homepage_video_url_1'] != "") {
      var _modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["default"])('#popup-video-1')[0];
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '[data-reveal-id="popup-video-1"]', function () {
        var $content = '<div class="modal-body">\
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
                                src="' + _this6.context.themeSettings['homepage_video_url_1'] + '"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        _modal.updateContent($content);
      });
    }
    if (this.context.themeSettings['homepage_video_url_2'] != "") {
      var _modal2 = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["default"])('#popup-video-2')[0];
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '[data-reveal-id="popup-video-2"]', function () {
        var $content = '<div class="modal-body">\
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
                                src="' + _this6.context.themeSettings['homepage_video_url_2'] + '"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        _modal2.updateContent($content);
      });
    }
    if (this.context.themeSettings['homepage_video_url_3'] != "") {
      var _modal3 = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["default"])('#popup-video-3')[0];
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '[data-reveal-id="popup-video-3"]', function () {
        var $content = '<div class="modal-body">\
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
                                src="' + _this6.context.themeSettings['homepage_video_url_3'] + '"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        _modal3.updateContent($content);
      });
    }
    if (this.context.themeSettings['homepage_video_url_4'] != "") {
      var _modal4 = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["default"])('#popup-video-4')[0];
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '[data-reveal-id="popup-video-4"]', function () {
        var $content = '<div class="modal-body">\
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
                                src="' + _this6.context.themeSettings['homepage_video_url_4'] + '"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        _modal4.updateContent($content);
      });
    }
    if (this.context.themeSettings['homepage_video_url_5'] != "") {
      var _modal5 = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["default"])('#popup-video-5')[0];
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).on('click', '[data-reveal-id="popup-video-5"]', function () {
        var $content = '<div class="modal-body">\
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
                                src="' + _this6.context.themeSettings['homepage_video_url_5'] + '"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        _modal5.updateContent($content);
      });
    }
  };
  return Home;
}(_page_manager__WEBPACK_IMPORTED_MODULE_5__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hvbWUuanMiXSwibmFtZXMiOlsiZGVjcmVtZW50Q291bnRlciIsImNvdW50ZXIiLCJpdGVtIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiaW5jcmVtZW50Q291bnRlciIsInB1c2giLCJ1cGRhdGVDb3VudGVyTmF2IiwiJGxpbmsiLCJ1cmxDb250ZXh0IiwibGVuZ3RoIiwiaXMiLCJhZGRDbGFzcyIsImF0dHIiLCJjb21wYXJlIiwiam9pbiIsImZpbmQiLCJodG1sIiwicmVtb3ZlQ2xhc3MiLCJwcm9kdWN0cyIsIiRjaGVja2VkIiwiJCIsIiRjb21wYXJlTGluayIsIl9tYXAiLCJlbGVtZW50IiwidmFsdWUiLCJjb21wYXJlQ291bnRlciIsIm9uIiwiZXZlbnQiLCJwcm9kdWN0IiwiY3VycmVudFRhcmdldCIsIiRjbGlja2VkQ29tcGFyZUxpbmsiLCJjaGVja2VkIiwiJHRoaXMiLCJwcm9kdWN0c1RvQ29tcGFyZSIsInNob3dBbGVydE1vZGFsIiwicHJldmVudERlZmF1bHQiLCIkY2xpY2tlZENoZWNrZWRJbnB1dCIsIkhvbWUiLCJfUGFnZU1hbmFnZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImNvbXBhcmVQcm9kdWN0cyIsImNvbnRleHQiLCJ1cmxzIiwicmVtb3ZlU2xpY2siLCJmaWxsdGVyIiwidGFiQ2Fyb3VzZWwiLCJwcm9kdWN0X25ld190YWIiLCJwcm9kdWN0c1Nob3dNb3JlIiwiY3VzdG9tQXJyb3dCdXR0b24iLCJpbml0QWpheFByb2R1Y3RzSUQiLCJpbml0QWpheFByb2R1Y3RzQnlDYXRlZ29yeSIsImluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5R3JpZCIsImluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5SWRUYWJzIiwiaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnlTb3J0aW5nVGFicyIsImluaXRQb3B1cFZpZGVvIiwiZSIsIndyYXBwZXIiLCJwYXJlbnRzIiwic2xpY2siLCJfdGhpcyIsInRlbXBsYXRlIiwidXJsS2V5IiwiZWFjaCIsImkiLCJwbGFjZWhvbGRlciIsIlBhY2UiLCJpZ25vcmUiLCJyZXF1ZXN0IiwiJHBsYWNlaG9sZGVyIiwidG1wbCIsImRhdGEiLCJ1cmwiLCJyZXBsYWNlIiwidXRpbHMiLCJhcGkiLCJnZXRQYWdlIiwiZXJyIiwicmVzcCIsInByb2R1Y3RfaWQiLCJDb3VudGRvd24iLCJ3aW5kb3ciLCJ3aWR0aCIsImRvdHMiLCJhcnJvd3MiLCJpbmZpbml0ZSIsIm1vYmlsZUZpcnN0Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiX3RoaXMyIiwicmVxdWVzdDIiLCJ0YWIiLCJfdGhpczMiLCJyZXF1ZXN0MyIsIl90aGlzNCIsInJlcXVlc3Q0IiwiX3RoaXM1IiwiJG9wdGlvbnMiLCJjb25maWciLCJuZXciLCJsaW1pdCIsIiR0aGlzUHJvZCIsImVtcHR5IiwiJHByb2RJZCIsInBvc2l0aW9uIiwicGFyZW50IiwiY29udGFpbmVyIiwib2Zmc2V0IiwiZ2V0QnlJZCIsInJlc3BvbnNlIiwidG9nZ2xlQ2xhc3MiLCJjc3MiLCJ0b3AiLCJsZWZ0IiwiZG9jdW1lbnQiLCJoYXNDbGFzcyIsInRhcmdldCIsImNsb3Nlc3QiLCJwcm9kdWN0c1RvU2hvdyIsIk51bWJlciIsImxlbiIsImFwcGVuZCIsImxpc3RQcm9kdWN0cyIsInNob3ciLCJvdXRlckhlaWdodCIsImFwcGVuZFRvIiwicmVzaXplIiwicHJlcGVuZFRvIiwidGhpc0l0ZW0iLCJjYXRfaWQiLCJzb3J0X25ldyIsInJlbW92ZSIsIl90aGlzNiIsInRoZW1lU2V0dGluZ3MiLCJtb2RhbCIsIm1vZGFsRmFjdG9yeSIsIiRjb250ZW50Iiwi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Q0osQ0FBQztFQUFBLE9BQUExRyxJQUFBO0FBQUEsRUF2dUI2QjRHLHFEQUFXIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xuXG5mdW5jdGlvbiBkZWNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcbiAgICBjb25zdCBpbmRleCA9IGNvdW50ZXIuaW5kZXhPZihpdGVtKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGNvdW50ZXIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvdW50ZXIucHVzaChpdGVtKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ291bnRlck5hdihjb3VudGVyLCAkbGluaywgdXJsQ29udGV4dCkge1xuICAgIGlmIChjb3VudGVyLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpZiAoISRsaW5rLmlzKCd2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICRsaW5rLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgJGxpbmsuYXR0cignaHJlZicsIGAke3VybENvbnRleHQuY29tcGFyZX0vJHtjb3VudGVyLmpvaW4oJy8nKX1gKTtcbiAgICAgICAgJGxpbmsuZmluZCgnc3Bhbi5jb3VudFBpbGwnKS5odG1sKGNvdW50ZXIubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbGluay5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHVybENvbnRleHQpIHtcbiAgICBsZXQgcHJvZHVjdHM7XG5cbiAgICBjb25zdCAkY2hlY2tlZCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuICAgIGNvbnN0ICRjb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgIGlmICgkY2hlY2tlZC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcHJvZHVjdHMgPSBfLm1hcCgkY2hlY2tlZCwgZWxlbWVudCA9PiBlbGVtZW50LnZhbHVlKTtcblxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KHByb2R1Y3RzLCAkY29tcGFyZUxpbmssIHVybENvbnRleHQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBhcmVDb3VudGVyID0gcHJvZHVjdHMgfHwgW107XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLWNvbXBhcmUtaWRdJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBpbmNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNsaWNrZWRDb21wYXJlTGluaywgdXJsQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ3N1Ym1pdCcsICdbZGF0YS1wcm9kdWN0LWNvbXBhcmVdJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCAkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzVG9Db21wYXJlID0gJHRoaXMuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAocHJvZHVjdHNUb0NvbXBhcmUubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnYVtkYXRhLWNvbXBhcmUtbmF2XScsICgpID0+IHtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDaGVja2VkSW5wdXQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAoJGNsaWNrZWRDaGVja2VkSW5wdXQubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcclxuaW1wb3J0IFBhY2UgZnJvbSAncGFjZSc7XHJcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBDb3VudGRvd24gZnJvbSAnLi90aGVtZXZhbGUvdGhlbWV2YWxlX0NvdW50ZG93bic7XHJcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XHJcbmltcG9ydCBtb2RhbEZhY3RvcnksIHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0LnVybHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVtb3ZlU2xpY2soKTtcclxuICAgICAgICB0aGlzLmZpbGx0ZXIoKTtcclxuICAgICAgICB0aGlzLnRhYkNhcm91c2VsKCk7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0X25ld190YWIoKTtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzU2hvd01vcmUoKTtcclxuICAgICAgICB0aGlzLmN1c3RvbUFycm93QnV0dG9uKCk7XHJcbiAgICAgICAgdGhpcy5pbml0QWpheFByb2R1Y3RzSUQoKTtcclxuICAgICAgICB0aGlzLmluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5KCk7XHJcbiAgICAgICAgdGhpcy5pbml0QWpheFByb2R1Y3RzQnlDYXRlZ29yeUdyaWQoKTtcclxuICAgICAgICB0aGlzLmluaXRBamF4UHJvZHVjdHNCeUNhdGVnb3J5SWRUYWJzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0QWpheFByb2R1Y3RzQnlDYXRlZ29yeVNvcnRpbmdUYWJzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0UG9wdXBWaWRlbygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQ3VzdG9tIGFycm93IGJ1dHRvbiAoc2xpY2spXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGN1c3RvbUFycm93QnV0dG9uKCkge1xyXG4gICAgICAgICQoJy5idG4tYXJyb3ctcHJldicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9ICQodGhpcykucGFyZW50cygnLnRoZW1ldmFsZV9wcm9kdWN0c0Nhcm91c2VsLWN1c3RvbScpO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmZpbmQoJ1tkYXRhLXNsaWNrXScpLnNsaWNrKFwic2xpY2tQcmV2XCIpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5idG4tYXJyb3ctbmV4dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9ICQodGhpcykucGFyZW50cygnLnRoZW1ldmFsZV9wcm9kdWN0c0Nhcm91c2VsLWN1c3RvbScpO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmZpbmQoJ1tkYXRhLXNsaWNrXScpLnNsaWNrKFwic2xpY2tOZXh0XCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBBamF4IGxvYWQgcHJvZHVjdHMgaW4gYSBjYXRlZ29yeSB0YWJzXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBpbml0QWpheFByb2R1Y3RzQnlDYXRlZ29yeSgpIHtcclxuICAgICAgICB2YXIgdGVtcGxhdGUgPSAndGhlbWV2YWxlL2hvbWVwYWdlL2NvbXBvbmVudC9hamF4LXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkLXJlc3VsdCcsIFxyXG4gICAgICAgICAgICB1cmxLZXkgPSAndGhlbWV2YWxlLXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkJztcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtdGhlbWV2YWxlLXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkXScpLmVhY2goKGksIHBsYWNlaG9sZGVyKSA9PiB7XHJcbiAgICAgICAgICAgIFBhY2UuaWdub3JlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdCgkKHBsYWNlaG9sZGVyKSwgdGVtcGxhdGUsIHVybEtleSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdCgkcGxhY2Vob2xkZXIsIHRtcGwsIHVybEtleSkge1xyXG4gICAgICAgIGlmICgkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlTG9hZGVkJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gdG1wbDtcclxuICAgICAgICBpZiAoJHBsYWNlaG9sZGVyLmRhdGEoJ3RoZW1ldmFsZVRlbXBsYXRlJykpIHsgdGVtcGxhdGUgPSAkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlVGVtcGxhdGUnKTsgfVxyXG5cclxuICAgICAgICBsZXQgdXJsID0gJHBsYWNlaG9sZGVyLmRhdGEodXJsS2V5KTtcclxuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvaHR0cHM/OlxcL1xcL1teL10rLywgJycpO1xyXG5cclxuICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIHsgdGVtcGxhdGUgfSwgKGVyciwgcmVzcCkgPT4ge1xyXG4gICAgICAgICAgICAkcGxhY2Vob2xkZXIuaHRtbChyZXNwKTtcclxuICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmRhdGEoJ3RoZW1ldmFsZUxvYWRlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAkcGxhY2Vob2xkZXIuZmluZCgnLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdF9pZCA9ICQodGhpcykuZmluZCgnLmNhcmQtc2FsZScpLmF0dHIoJ2RhdGEtcHJvZHVjdC1pZCcpO1xyXG4gICAgICAgICAgICAgICAgQ291bnRkb3duKHByb2R1Y3RfaWQpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJCgnW2RhdGEtc2xpY2tdJywgJHBsYWNlaG9sZGVyKS5zbGljaygpO1xyXG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCAxMDI1KSB7XHJcbiAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZS5jdXN0b20gLnByb2R1Y3RHcmlkJykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0QWpheFByb2R1Y3RzQnlDYXRlZ29yeVNvcnRpbmdUYWJzKCkge1xyXG4gICAgICAgIHZhciB1cmxLZXkgPSAndGhlbWV2YWxlLXByb2R1Y3RzLWJ5LWNhdGVnb3J5LXNvcnRpbmctdGFicycsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlID0gJ3RoZW1ldmFsZS9ob21lcGFnZS9jb21wb25lbnQvYWpheC1wcm9kdWN0cy1ieS1jYXRlZ29yeS1zb3J0aW5nLXRhYnMtcmVzdWx0JztcclxuXHJcbiAgICAgICAgLy8gQWpheCByZXF1ZXN0IGxvYWRpbmcgcHJvZHVjdHMgaW4gdGhlIGFjdGl2ZSB0YWJcclxuICAgICAgICAkKCcuaXMtYWN0aXZlW2RhdGEtdGhlbWV2YWxlLXByb2R1Y3RzLWJ5LWNhdGVnb3J5LXNvcnRpbmctdGFic10nKS5lYWNoKChpLCBwbGFjZWhvbGRlcikgPT4ge1xyXG4gICAgICAgICAgICBQYWNlLmlnbm9yZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3QyKCQocGxhY2Vob2xkZXIpLCB0ZW1wbGF0ZSwgdXJsS2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy50aGVtZXZhbGVfcHJvZHVjdHNDYXRlZ29yeVNvcnRUYWJzIFtkYXRhLXRhYl0nKS5vbigndG9nZ2xlZCcsIChldmVudCwgdGFiKSA9PiB7XHJcbiAgICAgICAgICAgIFBhY2UuaWdub3JlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdDIoJCgkKCdhJywgdGFiKS5hdHRyKCdocmVmJykpLCB0ZW1wbGF0ZSwgdXJsS2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0MigkcGxhY2Vob2xkZXIsIHRtcGwsIHVybEtleSkge1xyXG4gICAgICAgIGlmICgkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlTG9hZGVkJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gdG1wbDtcclxuICAgICAgICBpZiAoJHBsYWNlaG9sZGVyLmRhdGEoJ3RoZW1ldmFsZVRlbXBsYXRlJykpIHsgdGVtcGxhdGUgPSAkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlVGVtcGxhdGUnKTsgfVxyXG5cclxuICAgICAgICBsZXQgdXJsID0gJHBsYWNlaG9sZGVyLmRhdGEodXJsS2V5KTtcclxuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvaHR0cHM/OlxcL1xcL1teL10rLywgJycpO1xyXG5cclxuICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIHsgdGVtcGxhdGUgfSwgKGVyciwgcmVzcCkgPT4ge1xyXG4gICAgICAgICAgICAkcGxhY2Vob2xkZXIuaHRtbChyZXNwKTtcclxuICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmRhdGEoJ3RoZW1ldmFsZUxvYWRlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAkKCdbZGF0YS1zbGlja10nLCAkcGxhY2Vob2xkZXIpLnNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnlJZFRhYnMoKSB7XHJcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gJ3RoZW1ldmFsZS9ob21lcGFnZS9jb21wb25lbnQvYWpheC1wcm9kdWN0cy1ieS1jYXRlZ29yeS1pZC10YWJzLXJlc3VsdCcsIFxyXG4gICAgICAgICAgICB1cmxLZXkgPSAndGhlbWV2YWxlLXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkLXRhYnMnO1xyXG5cclxuICAgICAgICAvLyBBamF4IHJlcXVlc3QgbG9hZGluZyBwcm9kdWN0cyBpbiB0aGUgYWN0aXZlIHRhYlxyXG4gICAgICAgICQoJy5pcy1hY3RpdmUgW2RhdGEtdGhlbWV2YWxlLXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkLXRhYnNdJykuZWFjaCgoaSwgcGxhY2Vob2xkZXIpID0+IHtcclxuICAgICAgICAgICAgUGFjZS5pZ25vcmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICB0aGlzLnJlcXVlc3QzKCQocGxhY2Vob2xkZXIpLCB0ZW1wbGF0ZSwgdXJsS2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXRoZW1ldmFsZS1wcm9kdWN0cy1ieS1jYXRlZ29yeS1pZC10YWJzXScpLm9uKCd0b2dnbGVkJywgKGV2ZW50LCB0YWIpID0+IHtcclxuICAgICAgICAgICAgUGFjZS5pZ25vcmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0MygkKCdbZGF0YS10aGVtZXZhbGUtcHJvZHVjdHMtYnktY2F0ZWdvcnktaWQtdGFic10nLCAkKCdhJywgdGFiKS5hdHRyKCdocmVmJykpLCB0ZW1wbGF0ZSwgdXJsS2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0MygkcGxhY2Vob2xkZXIsIHRtcGwsIHVybEtleSkge1xyXG4gICAgICAgIGlmICgkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlTG9hZGVkJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gdG1wbDtcclxuICAgICAgICBpZiAoJHBsYWNlaG9sZGVyLmRhdGEoJ3RoZW1ldmFsZVRlbXBsYXRlJykpIHsgdGVtcGxhdGUgPSAkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlVGVtcGxhdGUnKTsgfVxyXG5cclxuICAgICAgICBsZXQgdXJsID0gJHBsYWNlaG9sZGVyLmRhdGEodXJsS2V5KTtcclxuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvaHR0cHM/OlxcL1xcL1teL10rLywgJycpO1xyXG5cclxuICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIHsgdGVtcGxhdGUgfSwgKGVyciwgcmVzcCkgPT4ge1xyXG4gICAgICAgICAgICAkcGxhY2Vob2xkZXIuaHRtbChyZXNwKTtcclxuICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmRhdGEoJ3RoZW1ldmFsZUxvYWRlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAkKCdbZGF0YS1zbGlja10nLCAkcGxhY2Vob2xkZXIpLnNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEFqYXhQcm9kdWN0c0J5Q2F0ZWdvcnlHcmlkKCkge1xyXG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9ICd0aGVtZXZhbGUvaG9tZXBhZ2UvY29tcG9uZW50L2FqYXgtcHJvZHVjdHMtYnktY2F0ZWdvcnktaWQtZ3JpZC1yZXN1bHQnLCBcclxuICAgICAgICAgICAgdXJsS2V5ID0gJ3RoZW1ldmFsZS1wcm9kdWN0cy1ncmlkLWJ5LWNhdGVnb3J5LWlkJztcclxuXHJcbiAgICAgICAgJCgnLnRoZW1ldmFsZV9wcm9kdWN0c0J5Q2F0ZWdvcnlJZC1ncmlkIFtkYXRhLXRoZW1ldmFsZS1wcm9kdWN0cy1ncmlkLWJ5LWNhdGVnb3J5LWlkXScpLmVhY2goKGksIHBsYWNlaG9sZGVyKSA9PiB7XHJcbiAgICAgICAgICAgIFBhY2UuaWdub3JlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdDQoJChwbGFjZWhvbGRlciksIHRlbXBsYXRlLCB1cmxLZXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlcXVlc3Q0KCRwbGFjZWhvbGRlciwgdG1wbCwgdXJsS2V5KSB7XHJcbiAgICAgICAgaWYgKCRwbGFjZWhvbGRlci5kYXRhKCd0aGVtZXZhbGVMb2FkZWQnKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSB0bXBsO1xyXG4gICAgICAgIGlmICgkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlVGVtcGxhdGUnKSkgeyB0ZW1wbGF0ZSA9ICRwbGFjZWhvbGRlci5kYXRhKCd0aGVtZXZhbGVUZW1wbGF0ZScpOyB9XHJcblxyXG4gICAgICAgIGxldCB1cmwgPSAkcGxhY2Vob2xkZXIuZGF0YSh1cmxLZXkpO1xyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9odHRwcz86XFwvXFwvW14vXSsvLCAnJyk7XHJcblxyXG4gICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgeyB0ZW1wbGF0ZSB9LCAoZXJyLCByZXNwKSA9PiB7XHJcbiAgICAgICAgICAgICRwbGFjZWhvbGRlci5odG1sKHJlc3ApO1xyXG4gICAgICAgICAgICAkcGxhY2Vob2xkZXIuZGF0YSgndGhlbWV2YWxlTG9hZGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHNTaG93TW9yZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYkNhcm91c2VsKCkge1xyXG4gICAgICAgICQoJ1tkYXRhLXRoZW1ldmFsZS1wcm9kdWN0cy1ieS1jYXRlZ29yeS1pZC10YWJzXScpLm9uKCd0b2dnbGVkJywgZnVuY3Rpb24gKGV2ZW50LCB0YWIpIHtcclxuICAgICAgICAgICAgJCgnLnByb2R1Y3RDYXJvdXNlbFtkYXRhLXNsaWNrXScpLnNsaWNrKCdzZXRQb3NpdGlvbicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQWpheCBsb2FkIHByb2R1Y3RzIElEIGluIGEgY2F0ZWdvcnkgYmFubmVyXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGluaXRBamF4UHJvZHVjdHNJRCgpIHtcclxuICAgICAgICBjb25zdCAkb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiAndGhlbWV2YWxlL2hvbWVwYWdlL2NvbXBvbmVudC9hamF4LXByb2R1Y3QtaWQnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCAkdGhpc1Byb2QgPSAkKCcjcHJvZHVjdC1wb3B1cCcpO1xyXG4gICAgICAgICQoJy50aGVtZXZhbGVfY2F0ZWdvcnktcHJvZHVjdC1pdGVtIC5wb3NpdGlvbi1wb2ludCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkdGhpc1Byb2QuZW1wdHkoKTtcclxuICAgICAgICAgICAgdmFyICRwcm9kSWQgPSAkKHRoaXMpLmRhdGEoJ3Byb2R1Y3QtaWQnKTtcclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gJCh0aGlzKS5wYXJlbnQoKS5wb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gJCgnLnRoZW1ldmFsZV9jYXRlZ29yeS1iYW5uZXIgPiAuY29udGFpbmVyJykub2Zmc2V0KCk7XHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQoJHByb2RJZCwgJG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJHRoaXNQcm9kLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJHRoaXNQcm9kLnRvZ2dsZUNsYXNzKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xyXG4gICAgICAgICAgICAgICAgJHRoaXNQcm9kLmNzcyh7J3RvcCc6IHBvc2l0aW9uLnRvcCwgJ2xlZnQnOiBwb3NpdGlvbi5sZWZ0ICsgY29udGFpbmVyLmxlZnQgLSAkdGhpc1Byb2Qud2lkdGgoKX0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJHRoaXNQcm9kLmNzcyh7J3RvcCc6IHBvc2l0aW9uLnRvcCArIDE1LCAnbGVmdCc6IDMwfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNsb3NlLXByb2R1Y3QnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCR0aGlzUHJvZC5oYXNDbGFzcyhcInNob3dcIikpIHtcclxuICAgICAgICAgICAgICAgICR0aGlzUHJvZC5yZW1vdmVDbGFzcyhcInNob3dcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmICgkdGhpc1Byb2QuaGFzQ2xhc3MoXCJzaG93XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCR0aGlzUHJvZCkubGVuZ3RoID09PSAwKSAmJiAoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5wb3NpdGlvbi1wb2ludCcpLmxlbmd0aCA9PT0gMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAkdGhpc1Byb2QucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBQcm9kdWN0cyBTaG93IE1vcmVcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcHJvZHVjdHNTaG93TW9yZShjb250ZXh0KSB7XHJcbiAgICAgICAgdmFyIHByb2R1Y3RzVG9TaG93ID0gTnVtYmVyKCQoJ1tkYXRhLW51bWJlci1wcm9kdWN0XScpLmF0dHIoJ2RhdGEtbnVtYmVyLXByb2R1Y3QnKSk7XHJcbiAgICAgICAgaWYgKCQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDU1MSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdIC5wcm9kdWN0R3JpZCAucHJvZHVjdCcpLmxlbmd0aCA+IHByb2R1Y3RzVG9TaG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0gLnByb2R1Y3RHcmlkIC5wcm9kdWN0JykuY3NzKHsgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSBwcm9kdWN0c1RvU2hvdyArIDEsIGxlbiA9ICQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdIC5wcm9kdWN0R3JpZCAucHJvZHVjdCcpLmxlbmd0aDsgaSA8PSBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXSAucHJvZHVjdEdyaWQgLnByb2R1Y3Q6bnRoLWNoaWxkKCcraSsnKScpLmNzcyh7ICdkaXNwbGF5JzogJ25vbmUnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoISQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdIC50aGVtZXZhbGVfc2hvd01vcmVQcm9kdWN0JykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwidGhlbWV2YWxlX3Nob3dNb3JlUHJvZHVjdFwiPjxhIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tYmlnXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj5TaG93IE1vcmU8L2E+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHNUb1Nob3cgPSA0O1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJ1tkYXRhLWV2ZW50PVwic2hvdyBtb3JlXCJdIC5wcm9kdWN0R3JpZCAucHJvZHVjdCcpLmxlbmd0aCA+IHByb2R1Y3RzVG9TaG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0gLnByb2R1Y3RHcmlkIC5wcm9kdWN0JykuY3NzKHsgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXSAucHJvZHVjdEdyaWQgLnByb2R1Y3Q6bnRoLWNoaWxkKG4gKyA3KScpLmNzcyh7ICdkaXNwbGF5JzogJ25vbmUnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0gLnRoZW1ldmFsZV9zaG93TW9yZVByb2R1Y3QnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtZXZlbnQ9XCJzaG93IG1vcmVcIl0nKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJ0aGVtZXZhbGVfc2hvd01vcmVQcm9kdWN0XCI+PGEgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1iaWdcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPlNob3cgTW9yZTwvYT48L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoJy50aGVtZXZhbGVfc2hvd01vcmVQcm9kdWN0IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlzdFByb2R1Y3RzID0gJCh0aGlzKS5wYXJlbnRzKCdbZGF0YS1ldmVudD1cInNob3cgbW9yZVwiXScpO1xyXG4gICAgICAgICAgICAgICAgbGlzdFByb2R1Y3RzLmZpbmQoJy5wcm9kdWN0R3JpZCAucHJvZHVjdDpoaWRkZW46bHQoJyArIHByb2R1Y3RzVG9TaG93ICsgJyknKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobGlzdFByb2R1Y3RzLmZpbmQoJy5wcm9kdWN0R3JpZCAucHJvZHVjdDpoaWRkZW4nKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNzcyh7ICdkaXNwbGF5JzogJ25vbmUnIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBDYXRlZ29yeSBmaWxsdGVyXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGZpbGx0ZXIoKSB7XHJcbiAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfaGVyb0Nhcm91c2VsIC50aGVtZXZhbGVfTXVsdGlDYXRlZ29yeScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSAkKCcudGhlbWV2YWxlX2hlcm9DYXJvdXNlbCAuaGVyb0Nhcm91c2VsLWNvbnRlbnQnKS5wb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiAxMDI0KSB7XHJcbiAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX2hlcm9DYXJvdXNlbCAudGhlbWV2YWxlX011bHRpQ2F0ZWdvcnknKS5jc3MoJ3RvcCcsIHBvc2l0aW9uLnRvcCArICQoJy50aGVtZXZhbGVfaGVyb0Nhcm91c2VsIC5oZXJvQ2Fyb3VzZWwtY29udGVudCcpLm91dGVySGVpZ2h0KCkgLSA1MCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX2hlcm9DYXJvdXNlbCAudGhlbWV2YWxlX011bHRpQ2F0ZWdvcnknKS5jc3MoJ3RvcCcsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV9NdWx0aUNhdGVnb3J5LmxheW91dC0yJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSAxMDI0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUgLmNhdGVnb3J5X2ZpbHRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlIC5jYXRlZ29yeV9maWx0ZXInKS5hcHBlbmRUbygnLnRoZW1ldmFsZV9oZXJvQ2Fyb3VzZWwnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghJCgnLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUgLmNhdGVnb3J5X2ZpbHRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfaGVyb0Nhcm91c2VsIC5jYXRlZ29yeV9maWx0ZXInKS5hcHBlbmRUbygnLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUgLmNvbnRhaW5lciA+IC5pdGVtczpmaXJzdC1jaGlsZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV9oZXJvQ2Fyb3VzZWwgLnRoZW1ldmFsZV9NdWx0aUNhdGVnb3J5JykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSAkKCcudGhlbWV2YWxlX2hlcm9DYXJvdXNlbCAuaGVyb0Nhcm91c2VsLWNvbnRlbnQnKS5wb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfaGVyb0Nhcm91c2VsIC50aGVtZXZhbGVfTXVsdGlDYXRlZ29yeScpLmNzcygndG9wJywgcG9zaXRpb24udG9wICsgJCgnLnRoZW1ldmFsZV9oZXJvQ2Fyb3VzZWwgLmhlcm9DYXJvdXNlbC1jb250ZW50Jykub3V0ZXJIZWlnaHQoKSAtIDUwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9oZXJvQ2Fyb3VzZWwgLnRoZW1ldmFsZV9NdWx0aUNhdGVnb3J5JykuY3NzKCd0b3AnLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfTXVsdGlDYXRlZ29yeS5sYXlvdXQtMicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDEwMjQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUgLmNhdGVnb3J5X2ZpbHRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZSAuY2F0ZWdvcnlfZmlsdGVyJykuYXBwZW5kVG8oJy50aGVtZXZhbGVfaGVyb0Nhcm91c2VsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISQoJy50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlIC5jYXRlZ29yeV9maWx0ZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9oZXJvQ2Fyb3VzZWwgLmNhdGVnb3J5X2ZpbHRlcicpLnByZXBlbmRUbygnLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUgLmNvbnRhaW5lciA+IC5pdGVtczpudGgtY2hpbGQoMiknKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUmVtb3ZlIHNsaWNrIHNsaWRlciAobW9iaWxlKVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICByZW1vdmVTbGljaygpIHtcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCAxMDI1KSB7XHJcbiAgICAgICAgICAgIGlmICgkKCcuYnJhbmRTbGlkZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcuYnJhbmRTbGlkZXInKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuYnJhbmRTbGlkZXInKS5zbGljaygndW5zbGljaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV9mZWF0dXJlZENhdGVnb3J5LXdyYXBwZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX2ZlYXR1cmVkQ2F0ZWdvcnktd3JhcHBlcicpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfZmVhdHVyZWRDYXRlZ29yeS13cmFwcGVyJykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQoJy5yZWNlbnRfcG9zdENhcm91c2VsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgaWYgKCQoJy5yZWNlbnRfcG9zdENhcm91c2VsJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnJlY2VudF9wb3N0Q2Fyb3VzZWwnKS5zbGljaygndW5zbGljaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJCgnLmJyYW5kc0ltYWdlLXNsaWRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5icmFuZHNJbWFnZS1zbGlkZXInKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuYnJhbmRzSW1hZ2Utc2xpZGVyJykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfY2F0ZWdvcnktY2Fyb3VzZWwnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX2NhdGVnb3J5LWNhcm91c2VsJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9jYXRlZ29yeS1jYXJvdXNlbCcpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX3ZpZGVvX2Nhcm91c2VsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV92aWRlb19jYXJvdXNlbCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfdmlkZW9fY2Fyb3VzZWwnKS5zbGljaygndW5zbGljaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUuY3VzdG9tJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISQoJy50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlLmN1c3RvbSAucHJvZHVjdEdyaWQnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZS5jdXN0b20gLnByb2R1Y3RHcmlkJykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgMTAyNSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5icmFuZFNsaWRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCcuYnJhbmRTbGlkZXInKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmJyYW5kU2xpZGVyJykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfZmVhdHVyZWRDYXRlZ29yeS13cmFwcGVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfZmVhdHVyZWRDYXRlZ29yeS13cmFwcGVyJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfZmVhdHVyZWRDYXRlZ29yeS13cmFwcGVyJykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5yZWNlbnRfcG9zdENhcm91c2VsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmICgkKCcucmVjZW50X3Bvc3RDYXJvdXNlbCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcucmVjZW50X3Bvc3RDYXJvdXNlbCcpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKCcuYnJhbmRzSW1hZ2Utc2xpZGVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy5icmFuZHNJbWFnZS1zbGlkZXInKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmJyYW5kc0ltYWdlLXNsaWRlcicpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX2NhdGVnb3J5LWNhcm91c2VsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfY2F0ZWdvcnktY2Fyb3VzZWwnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9jYXRlZ29yeS1jYXJvdXNlbCcpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX3ZpZGVvX2Nhcm91c2VsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfdmlkZW9fY2Fyb3VzZWwnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV92aWRlb19jYXJvdXNlbCcpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZS5jdXN0b20nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISQoJy50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlLmN1c3RvbSAucHJvZHVjdEdyaWQnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9zZWN0aW9uLWZsYXNoLXNhbGUuY3VzdG9tIC5wcm9kdWN0R3JpZCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiBcInVuc2xpY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5icmFuZFNsaWRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJCgnLmJyYW5kU2xpZGVyJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5icmFuZFNsaWRlcicpLnNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX2ZlYXR1cmVkQ2F0ZWdvcnktd3JhcHBlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJCgnLnRoZW1ldmFsZV9mZWF0dXJlZENhdGVnb3J5LXdyYXBwZXInKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9mZWF0dXJlZENhdGVnb3J5LXdyYXBwZXInKS5zbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLnJlY2VudF9wb3N0Q2Fyb3VzZWwnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISQoJy5yZWNlbnRfcG9zdENhcm91c2VsJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5yZWNlbnRfcG9zdENhcm91c2VsJykuc2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5icmFuZHNJbWFnZS1zbGlkZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISQoJy5icmFuZHNJbWFnZS1zbGlkZXInKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmJyYW5kc0ltYWdlLXNsaWRlcicpLnNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX2NhdGVnb3J5LWNhcm91c2VsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkKCcudGhlbWV2YWxlX2NhdGVnb3J5LWNhcm91c2VsJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfY2F0ZWdvcnktY2Fyb3VzZWwnKS5zbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLnRoZW1ldmFsZV92aWRlb19jYXJvdXNlbCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJCgnLnRoZW1ldmFsZV92aWRlb19jYXJvdXNlbCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3ZpZGVvX2Nhcm91c2VsJykuc2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQoJy50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlLmN1c3RvbScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCcudGhlbWV2YWxlX3NlY3Rpb24tZmxhc2gtc2FsZS5jdXN0b20gLnByb2R1Y3RHcmlkJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfc2VjdGlvbi1mbGFzaC1zYWxlLmN1c3RvbSAucHJvZHVjdEdyaWQnKS5zbGljaygndW5zbGljaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJvZHVjdF9uZXdfdGFiKCkge1xyXG4gICAgICAgIGlmKCQoJyN0aGVtZXZhbGVfbmV3X3Byb2R1Y3QnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wcm9kdWN0c0NhdGVnb3J5U29ydE5ldyAudGFicy1jb250ZW50cyAudGFiLWNvbnRlbnQnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiggaW5kZXggPT0gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGhpc0l0ZW0gPSAkKHRoaXMpLnBhcmVudHMoJyN0aGVtZXZhbGVfbmV3X3Byb2R1Y3QnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0X2lkID0gJCh0aGlzKS5hdHRyKCdpZCcpLnJlcGxhY2UoJ3RhYi0nLCcnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gdGhpc0l0ZW0uZmluZCgnW2NhdC1pZD1cIicrY2F0X2lkKydcIl0nKS5hdHRyKCdjYXQtdXJsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRfbmV3ID0gJz9zb3J0PW5ld2VzdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9IHNvcnRfbmV3O1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgeyB0ZW1wbGF0ZTogJ3RoZW1ldmFsZS9ob21lcGFnZS9jb21wb25lbnQvYWpheC1wcm9kdWN0cy1ieS1jYXRlZ29yeS1zb3J0aW5nLW5ldy1yZXN1bHQnIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNJdGVtLmZpbmQoJyN0YWItJytjYXRfaWQpLmZpbmQoJy50aGVtZXZhbGVfcHJvZHVjdExvYWRpbmcnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc0l0ZW0uZmluZCgnI3RhYi0nK2NhdF9pZCkuaHRtbChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWNrXScsIHRoaXNJdGVtKS5zbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wcm9kdWN0c0NhdGVnb3J5U29ydE5ldyAudGFiLXRpdGxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0l0ZW0gPSAkKHRoaXMpLnBhcmVudHMoJyN0aGVtZXZhbGVfbmV3X3Byb2R1Y3QnKSxcclxuICAgICAgICAgICAgICAgICAgICBjYXRfaWQgPSAkKHRoaXMpLnBhcmVudCgpLmF0dHIoJ2NhdC1pZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICQodGhpcykucGFyZW50KCkuYXR0cignY2F0LXVybCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRfbmV3ID0gJz9zb3J0PW5ld2VzdCc7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gc29ydF9uZXc7XHJcbiAgICAgICAgICAgICAgICBpZigkKCcjdGhlbWV2YWxlX25ld19wcm9kdWN0ICN0YWItJytjYXRfaWQpLmZpbmQoJy50aGVtZXZhbGVfcHJvZHVjdExvYWRpbmcnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIHsgdGVtcGxhdGU6ICd0aGVtZXZhbGUvaG9tZXBhZ2UvY29tcG9uZW50L2FqYXgtcHJvZHVjdHMtYnktY2F0ZWdvcnktc29ydGluZy1uZXctcmVzdWx0JyB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzSXRlbS5maW5kKCcjdGFiLScrY2F0X2lkKS5maW5kKCcudGhlbWV2YWxlX3Byb2R1Y3RMb2FkaW5nJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNJdGVtLmZpbmQoJyN0YWItJytjYXRfaWQpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlja10nLCAnI3RoZW1ldmFsZV9uZXdfcHJvZHVjdCAjdGFiLScrY2F0X2lkKS5zbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFBvcHVwVmlkZW8oKSB7XHJcbiAgICAgICAgaWYoIHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzWyd0aGVtZXZhbGVfY2F0ZWdvcnktYmFubmVyLXZpZGVvLXVybCddICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNwb3B1cC12aWRlbycpWzBdO1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtcmV2ZWFsLWlkPVwicG9wdXAtdmlkZW9cIl0nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkY29udGVudCA9ICc8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9kYWwtY2xvc2VcIiBhcmlhLWxhYmVsPVwiXCIgcm9sZT1cImJ1dHRvblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JiMyMTU7PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlbyB0aGVtZXZhbGVfcG9wdXAtdmlkZW9cIiBkYXRhLXZpZGVvLWdhbGxlcnk+XFxcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wdXAtdmlkZW8tY29udGVudFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlby1tYWluXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGxheWVyXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2h0bWxcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJraXRBbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vemFsbG93ZnVsbHNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCInK3RoaXMuY29udGV4dC50aGVtZVNldHRpbmdzWyd0aGVtZXZhbGVfY2F0ZWdvcnktYmFubmVyLXZpZGVvLXVybCddKydcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12aWRlby1wbGF5ZXI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudCgkY29udGVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzWydob21lcGFnZV92aWRlb191cmxfMSddICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNwb3B1cC12aWRlby0xJylbMF07XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1yZXZlYWwtaWQ9XCJwb3B1cC12aWRlby0xXCJdJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAnPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vZGFsLWNsb3NlXCIgYXJpYS1sYWJlbD1cIlwiIHJvbGU9XCJidXR0b25cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiYjMjE1Ozwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgPC9hPlxcXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8gdGhlbWV2YWxlX3BvcHVwLXZpZGVvXCIgZGF0YS12aWRlby1nYWxsZXJ5PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcHVwLXZpZGVvLWNvbnRlbnRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8tbWFpblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBsYXllclwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9odG1sXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Via2l0QWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3phbGxvd2Z1bGxzY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiJyt0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1snaG9tZXBhZ2VfdmlkZW9fdXJsXzEnXSsnXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdmlkZW8tcGxheWVyPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+JztcclxuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQoJGNvbnRlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1snaG9tZXBhZ2VfdmlkZW9fdXJsXzInXSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gbW9kYWxGYWN0b3J5KCcjcG9wdXAtdmlkZW8tMicpWzBdO1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtcmV2ZWFsLWlkPVwicG9wdXAtdmlkZW8tMlwiXScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRjb250ZW50ID0gJzxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb2RhbC1jbG9zZVwiIGFyaWEtbGFiZWw9XCJcIiByb2xlPVwiYnV0dG9uXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mIzIxNTs8L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvIHRoZW1ldmFsZV9wb3B1cC12aWRlb1wiIGRhdGEtdmlkZW8tZ2FsbGVyeT5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3B1cC12aWRlby1jb250ZW50XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvLW1haW5cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwbGF5ZXJcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHQvaHRtbFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYmtpdEFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW96YWxsb3dmdWxsc2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIicrdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3NbJ2hvbWVwYWdlX3ZpZGVvX3VybF8yJ10rJ1wiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZpZGVvLXBsYXllcj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgIDwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KCRjb250ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiggdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3NbJ2hvbWVwYWdlX3ZpZGVvX3VybF8zJ10gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IG1vZGFsRmFjdG9yeSgnI3BvcHVwLXZpZGVvLTMnKVswXTtcclxuICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLXJldmVhbC1pZD1cInBvcHVwLXZpZGVvLTNcIl0nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkY29udGVudCA9ICc8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibW9kYWwtY2xvc2VcIiBhcmlhLWxhYmVsPVwiXCIgcm9sZT1cImJ1dHRvblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JiMyMTU7PC9zcGFuPlxcXHJcbiAgICAgICAgICAgICAgICA8L2E+XFxcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlbyB0aGVtZXZhbGVfcG9wdXAtdmlkZW9cIiBkYXRhLXZpZGVvLWdhbGxlcnk+XFxcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wdXAtdmlkZW8tY29udGVudFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC12aWRlby1tYWluXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGxheWVyXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2h0bWxcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJraXRBbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vemFsbG93ZnVsbHNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCInK3RoaXMuY29udGV4dC50aGVtZVNldHRpbmdzWydob21lcGFnZV92aWRlb191cmxfMyddKydcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12aWRlby1wbGF5ZXI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudCgkY29udGVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzWydob21lcGFnZV92aWRlb191cmxfNCddICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNwb3B1cC12aWRlby00JylbMF07XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1yZXZlYWwtaWQ9XCJwb3B1cC12aWRlby00XCJdJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAnPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1vZGFsLWNsb3NlXCIgYXJpYS1sYWJlbD1cIlwiIHJvbGU9XCJidXR0b25cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiYjMjE1Ozwvc3Bhbj5cXFxyXG4gICAgICAgICAgICAgICAgPC9hPlxcXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8gdGhlbWV2YWxlX3BvcHVwLXZpZGVvXCIgZGF0YS12aWRlby1nYWxsZXJ5PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcHVwLXZpZGVvLWNvbnRlbnRcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdmlkZW8tbWFpblwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBsYXllclwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9odG1sXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Via2l0QWxsb3dGdWxsU2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3phbGxvd2Z1bGxzY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiJyt0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1snaG9tZXBhZ2VfdmlkZW9fdXJsXzQnXSsnXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdmlkZW8tcGxheWVyPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+JztcclxuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQoJGNvbnRlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nc1snaG9tZXBhZ2VfdmlkZW9fdXJsXzUnXSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gbW9kYWxGYWN0b3J5KCcjcG9wdXAtdmlkZW8tNScpWzBdO1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtcmV2ZWFsLWlkPVwicG9wdXAtdmlkZW8tNVwiXScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRjb250ZW50ID0gJzxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJtb2RhbC1jbG9zZVwiIGFyaWEtbGFiZWw9XCJcIiByb2xlPVwiYnV0dG9uXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mIzIxNTs8L3NwYW4+XFxcclxuICAgICAgICAgICAgICAgIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvIHRoZW1ldmFsZV9wb3B1cC12aWRlb1wiIGRhdGEtdmlkZW8tZ2FsbGVyeT5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3B1cC12aWRlby1jb250ZW50XCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXZpZGVvLW1haW5cIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwbGF5ZXJcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHQvaHRtbFwiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCJcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYmtpdEFsbG93RnVsbFNjcmVlblxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW96YWxsb3dmdWxsc2NyZWVuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIicrdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3NbJ2hvbWVwYWdlX3ZpZGVvX3VybF81J10rJ1wiXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZpZGVvLXBsYXllcj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgIDwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KCRjb250ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG4iXSwic291cmNlUm9vdCI6IiJ9