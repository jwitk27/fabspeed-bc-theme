(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.match.js */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var fancybox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js");
/* harmony import */ var fancybox__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(fancybox__WEBPACK_IMPORTED_MODULE_10__);





function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






var Category = /*#__PURE__*/function (_CatalogPage) {
  function Category() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  _inheritsLoose(Category, _CatalogPage);
  var _proto = Category.prototype;
  _proto.onReady = function onReady() {
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_8__["default"])(this.context.urls);
    if (jquery__WEBPACK_IMPORTED_MODULE_5___default()('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }
    this.showmore_product();
    this.showmore_htmltext();
    this.categoryImage_fancybox();
    this.position_category_filter();
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var $productListingContainer = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#product-listing-container');
    var $facetedSearchContainer = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#faceted-search-container');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_9__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);

      // $('html, body').animate({
      //     scrollTop: 0,
      // }, 100);
    });
  };
  _proto.showmore_product = function showmore_product() {
    var check_link = jquery__WEBPACK_IMPORTED_MODULE_5___default()(".pagination-item--current").next();
    if (check_link.length === 0) {
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('#button-showmore-category').css('display', 'none');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).on('click', '#button-showmore-category', function (e) {
        e.preventDefault();
        var nextPage = jquery__WEBPACK_IMPORTED_MODULE_5___default()(".pagination-item--current").next(),
          link = nextPage.find("a").attr("href");
        jquery__WEBPACK_IMPORTED_MODULE_5___default()('#button-showmore-category').addClass('loadding');
        jquery__WEBPACK_IMPORTED_MODULE_5___default.a.ajax({
          type: 'get',
          url: link.replace("http://", "//"),
          success: function success(data) {
            if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(data).find('#productLayout').length > 0) {
              jquery__WEBPACK_IMPORTED_MODULE_5___default()('#productLayout').append(jquery__WEBPACK_IMPORTED_MODULE_5___default()(data).find('#productLayout').children());
              jquery__WEBPACK_IMPORTED_MODULE_5___default()('.pagination-list').html(jquery__WEBPACK_IMPORTED_MODULE_5___default()(data).find(".pagination-list").html());
              jquery__WEBPACK_IMPORTED_MODULE_5___default()('#button-showmore-category').removeClass('loadding');
              if (Number(jquery__WEBPACK_IMPORTED_MODULE_5___default()(data).find('.pagination-info .end').text()) <= Number(jquery__WEBPACK_IMPORTED_MODULE_5___default()(data).find('.pagination-info .total').text())) {
                jquery__WEBPACK_IMPORTED_MODULE_5___default()('.pagination .pagination-info .end').html(jquery__WEBPACK_IMPORTED_MODULE_5___default()(data).find('.pagination-info .end').text());
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_5___default()('.pagination .pagination-info .end').html(jquery__WEBPACK_IMPORTED_MODULE_5___default()(data).find('.pagination-info .total').text());
              }
              nextPage = jquery__WEBPACK_IMPORTED_MODULE_5___default()(".pagination-item--current").next();
              if (nextPage.length === 0) {
                jquery__WEBPACK_IMPORTED_MODULE_5___default()('#button-showmore-category').css('display', 'none');
              }
              jquery__WEBPACK_IMPORTED_MODULE_5___default()('.product').each(function (i, el) {
                var $prod = jquery__WEBPACK_IMPORTED_MODULE_5___default()(el);

                // Skip if affirm markup already present
                if ($prod.find('.affirm-as-low-as').length) return;

                // Get raw price text
                var raw = $prod.find('.price--withoutTax').text().trim();

                // Extract FIRST number
                var match = raw.match(/\d[\d,\.]*/);
                if (!match) return;

                // Convert to float → remove commas
                var price = parseFloat(match[0].replace(/,/g, ''));

                // Convert to integer cents (Affirm requirement)
                var amount = Math.round(price * 100);

                // Inject Affirm markup
                var affirmMarkup = "\n                                    <p class=\"affirm-as-low-as\" data-page-type=\"category\" data-amount=\"" + amount + "\"></p>\n                                ";
                $prod.find('.card-actions').after(affirmMarkup);
              });
              if (window.affirm && affirm.ui && typeof affirm.ui.refresh === 'function') {
                affirm.ui.refresh();
              }
            }
          }
        });
      });
    }
  };
  _proto.showmore_htmltext = function showmore_htmltext() {
    var showChar = 600,
      ellipsestext = "...",
      moretext = "Read more",
      lesstext = "Read less";
    jquery__WEBPACK_IMPORTED_MODULE_5___default()('.custom-html-category .custom-html').each(function () {
      var content = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).html();
      if (content.length > showChar) {
        var c = content.substr(0, showChar);
        var h = content.substr(showChar, content.length - showChar);
        var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span></span>';
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).html(html);
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_5___default()('#button-showmore-html').on('click', function (e) {
      e.preventDefault();
      if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).hasClass("less")) {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).removeClass("less");
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).find('.text').html(moretext);
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).parent().prev().removeClass('showmore');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).addClass("less");
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).find('.text').html(lesstext);
        jquery__WEBPACK_IMPORTED_MODULE_5___default()(this).parent().prev().addClass('showmore');
      }
    });
  };
  _proto.categoryImage_fancybox = function categoryImage_fancybox() {
    jquery__WEBPACK_IMPORTED_MODULE_5___default()('.fancybox').fancybox({
      // openEffect  : 'elastic'
    });
  };
  _proto.position_category_filter = function position_category_filter() {
    if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(window).width() > 1024) {
      if (jquery__WEBPACK_IMPORTED_MODULE_5___default()('.page-type-category').length) {
        if (jquery__WEBPACK_IMPORTED_MODULE_5___default()('.banners[data-banner-location="top"]').length) {
          var position = jquery__WEBPACK_IMPORTED_MODULE_5___default()('.banners[data-banner-location="top"]').outerHeight() / 2;
          console.log(position);
          jquery__WEBPACK_IMPORTED_MODULE_5___default()('.themevale_MultiCategory').css('top', position);
        }
      }
    }
    jquery__WEBPACK_IMPORTED_MODULE_5___default()(window).resize(function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_5___default()(window).width() > 1024) {
        if (jquery__WEBPACK_IMPORTED_MODULE_5___default()('.page-type-category').length) {
          if (jquery__WEBPACK_IMPORTED_MODULE_5___default()('.banners[data-banner-location="top"]').length) {
            var position = jquery__WEBPACK_IMPORTED_MODULE_5___default()('.banners[data-banner-location="top"]').outerHeight() / 2;
            console.log(position);
            jquery__WEBPACK_IMPORTED_MODULE_5___default()('.themevale_MultiCategory').css('top', position);
          }
        }
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()('.themevale_MultiCategory').css('top', 'auto');
      }
    });
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_7__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJfQ2F0YWxvZ1BhZ2UiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImNvbXBhcmVQcm9kdWN0cyIsImNvbnRleHQiLCJ1cmxzIiwiJCIsImxlbmd0aCIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwiaG9va3MiLCJvbiIsInNob3dtb3JlX3Byb2R1Y3QiLCJzaG93bW9yZV9odG1sdGV4dCIsImNhdGVnb3J5SW1hZ2VfZmFuY3lib3giLCJwb3NpdGlvbl9jYXRlZ29yeV9maWx0ZXIiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJjYXRlZ29yeSIsInNob3BfYnlfcHJpY2UiLCJwcm9kdWN0cyIsImxpbWl0IiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJGYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJjaGVja19saW5rIiwibmV4dCIsImNzcyIsImRvY3VtZW50IiwiZSIsInByZXZlbnREZWZhdWx0IiwibmV4dFBhZ2UiLCJsaW5rIiwiZmluZCIsImF0dHIiLCJhZGRDbGFzcyIsImFqYXgiLCJ0eXBlIiwidXJsIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkYXRhIiwiYXBwZW5kIiwiY2hpbGRyZW4iLCJyZW1vdmVDbGFzcyIsIk51bWJlciIsInRleHQiLCJlYWNoIiwiaSIsImVsIiwiJHByb2QiLCJyYXciLCJ0cmltIiwibWF0Y2giLCJwcmljZSIsInBhcnNlRmxvYXQiLCJhbW91bnQiLCJNYXRoIiwicm91bmQiLCJhZmZpcm1NYXJrdXAiLCJhZnRlciIsIndpbmRvdyIsImFmZmlybSIsInVpIiwicmVmcmVzaCIsInNob3dDaGFyIiwiZWxsaXBzZXN0ZXh0IiwibW9yZXRleHQiLCJsZXNzdGV4dCIsImMiLCJzdWJzdHIiLCJoIiwiaGFzQ2xhc3MiLCJwYXJlbnQiLCJwcmV2IiwiZmFuY3lib3giLCJ3aWR0aCIsInBvc2l0aW9uIiwib3V0ZXJIZWlnaHQiLCJjb25zb2xlIiwibG9nIiwicmVzaXplIiwiQ2F0YWxvZ1BhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDNEI7QUFDZjtBQUNvQjtBQUNKO0FBQ2xDO0FBQUEsSUFFR0EsUUFBUSwwQkFBQUMsWUFBQTtFQUFBLFNBQUFELFNBQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLGNBQUEsQ0FBQUosUUFBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQUksTUFBQSxHQUFBTCxRQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUN6QkUsT0FBTyxHQUFQLFNBQUFBLE9BQU9BLENBQUEsRUFBRztJQUNOQyx3RUFBZSxDQUFDLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUM7SUFFbEMsSUFBSUMsNkNBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ2hDLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQztJQUM1QixDQUFDLE1BQU07TUFDSCxJQUFJLENBQUNDLGNBQWMsR0FBRyxJQUFJLENBQUNBLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztNQUNwREMsZ0VBQUssQ0FBQ0MsRUFBRSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQ0gsY0FBYyxDQUFDO0lBQ3JEO0lBRUEsSUFBSSxDQUFDSSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksQ0FBQ0MsaUJBQWlCLENB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LE1BQU0sQ0FBQyxDQUFDZSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRTtRQUMxQixJQUFJaEYsNkNBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDQyxNQUFNLEVBQUU7VUFDakMsSUFBSUQsNkNBQUMsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDQyxNQUFNLEVBQUU7WUFDbEQsSUFBSWdGLFFBQVEsR0FBR2pGLDZDQUFDLENBQUMsc0NBQXNDLENBQUMsQ0FBQ2tGLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUMxRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVEsQ0FBQztZQUNyQmpGLDZDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQytCLEdBQUcsQ0FBQyxLQUFLLEVBQUVrRCxRQUFRLENBQUM7VUFDdEQ7UUFDSjtNQUNKLENBQUMsTUFBTTtRQUNIakYsNkNBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDK0IsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7TUFDcEQ7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUEsT0FBQTFDLFFBQUE7QUFBQSxFQTVLaUNpRyxnREFBVyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgJ2ZhbmN5Ym94JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcblxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hvd21vcmVfcHJvZHVjdCgpO1xuICAgICAgICB0aGlzLnNob3dtb3JlX2h0bWx0ZXh0KCk7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnlJbWFnZV9mYW5jeWJveCgpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uX2NhdGVnb3J5X2ZpbHRlcigpO1xuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2NhdGVnb3J5L3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb3JlOiAnY2F0ZWdvcnkvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuXG4gICAgICAgICAgICAvLyAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAvLyAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgLy8gfSwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd21vcmVfcHJvZHVjdCgpIHtcbiAgICAgICAgdmFyIGNoZWNrX2xpbmsgPSAkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCk7XG4gICAgICAgIGlmIChjaGVja19saW5rLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgJCgnI2J1dHRvbi1zaG93bW9yZS1jYXRlZ29yeScpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2J1dHRvbi1zaG93bW9yZS1jYXRlZ29yeScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHZhciBuZXh0UGFnZSA9ICQoXCIucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLm5leHQoKSxcbiAgICAgICAgICAgICAgICAgICAgbGluayA9IG5leHRQYWdlLmZpbmQoXCJhXCIpLmF0dHIoXCJocmVmXCIpO1xuICAgICAgICAgICAgICAgICQoJyNidXR0b24tc2hvd21vcmUtY2F0ZWdvcnknKS5hZGRDbGFzcygnbG9hZGRpbmcnKTtcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBsaW5rLnJlcGxhY2UoXCJodHRwOi8vXCIsIFwiLy9cIiksXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChkYXRhKS5maW5kKCcjcHJvZHVjdExheW91dCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcHJvZHVjdExheW91dCcpLmFwcGVuZCgkKGRhdGEpLmZpbmQoJyNwcm9kdWN0TGF5b3V0JykuY2hpbGRyZW4oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24tbGlzdCcpLmh0bWwoJChkYXRhKS5maW5kKFwiLnBhZ2luYXRpb24tbGlzdFwiKS5odG1sKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNidXR0b24tc2hvd21vcmUtY2F0ZWdvcnknKS5yZW1vdmVDbGFzcygnbG9hZGRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgpKSA8PSBOdW1iZXIoJChkYXRhKS5maW5kKCcucGFnaW5hdGlvbi1pbmZvIC50b3RhbCcpLnRleHQoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykuaHRtbCgkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykuaHRtbCgkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLnRvdGFsJykudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBhZ2UgPSAkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRQYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjYnV0dG9uLXNob3dtb3JlLWNhdGVnb3J5JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucHJvZHVjdCcpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRwcm9kID0gJChlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2tpcCBpZiBhZmZpcm0gbWFya3VwIGFscmVhZHkgcHJlc2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHByb2QuZmluZCgnLmFmZmlybS1hcy1sb3ctYXMnKS5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgcmF3IHByaWNlIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmF3ID0gJHByb2QuZmluZCgnLnByaWNlLS13aXRob3V0VGF4JykudGV4dCgpLnRyaW0oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IEZJUlNUIG51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IHJhdy5tYXRjaCgvXFxkW1xcZCxcXC5dKi8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGNoKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udmVydCB0byBmbG9hdCDihpIgcmVtb3ZlIGNvbW1hc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHBhcnNlRmxvYXQobWF0Y2hbMF0ucmVwbGFjZSgvLC9nLCAnJykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgdG8gaW50ZWdlciBjZW50cyAoQWZmaXJtIHJlcXVpcmVtZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbW91bnQgPSBNYXRoLnJvdW5kKHByaWNlICogMTAwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbmplY3QgQWZmaXJtIG1hcmt1cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZmZpcm1NYXJrdXAgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFmZmlybS1hcy1sb3ctYXNcIiBkYXRhLXBhZ2UtdHlwZT1cImNhdGVnb3J5XCIgZGF0YS1hbW91bnQ9XCIke2Ftb3VudH1cIj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2QuZmluZCgnLmNhcmQtYWN0aW9ucycpLmFmdGVyKGFmZmlybU1hcmt1cCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmFmZmlybSAmJiBhZmZpcm0udWkgJiYgdHlwZW9mIGFmZmlybS51aS5yZWZyZXNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmZmlybS51aS5yZWZyZXNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93bW9yZV9odG1sdGV4dCgpIHtcbiAgICAgICAgdmFyIHNob3dDaGFyID0gNjAwLFxuICAgICAgICAgICAgZWxsaXBzZXN0ZXh0ID0gXCIuLi5cIixcbiAgICAgICAgICAgIG1vcmV0ZXh0ID0gXCJSZWFkIG1vcmVcIixcbiAgICAgICAgICAgIGxlc3N0ZXh0ID0gXCJSZWFkIGxlc3NcIjtcbiAgICAgICAgJCgnLmN1c3RvbS1odG1sLWNhdGVnb3J5IC5jdXN0b20taHRtbCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSAkKHRoaXMpLmh0bWwoKTtcbiAgICAgICAgICAgIGlmIChjb250ZW50Lmxlbmd0aCA+IHNob3dDaGFyKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgYyA9IGNvbnRlbnQuc3Vic3RyKDAsIHNob3dDaGFyKTtcbiAgICAgICAgICAgICAgICB2YXIgaCA9IGNvbnRlbnQuc3Vic3RyKHNob3dDaGFyLCBjb250ZW50Lmxlbmd0aCAtIHNob3dDaGFyKTtcblxuICAgICAgICAgICAgICAgIHZhciBodG1sID0gYyArICc8c3BhbiBjbGFzcz1cIm1vcmVlbGxpcHNlc1wiPicgKyBlbGxpcHNlc3RleHQgKyAnJm5ic3A7PC9zcGFuPjxzcGFuIGNsYXNzPVwibW9yZWNvbnRlbnRcIj48c3Bhbj4nICsgaCArICc8L3NwYW4+PC9zcGFuPic7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmh0bWwoaHRtbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAkKCcjYnV0dG9uLXNob3dtb3JlLWh0bWwnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJsZXNzXCIpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImxlc3NcIik7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcudGV4dCcpLmh0bWwobW9yZXRleHQpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucHJldigpLnJlbW92ZUNsYXNzKCdzaG93bW9yZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwibGVzc1wiKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy50ZXh0JykuaHRtbChsZXNzdGV4dCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCkuYWRkQ2xhc3MoJ3Nob3dtb3JlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhdGVnb3J5SW1hZ2VfZmFuY3lib3goKSB7XG4gICAgICAgICQoJy5mYW5jeWJveCcpLmZhbmN5Ym94KHtcbiAgICAgICAgICAgIC8vIG9wZW5FZmZlY3QgIDogJ2VsYXN0aWMnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHBvc2l0aW9uX2NhdGVnb3J5X2ZpbHRlcigpIHtcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xuICAgICAgICAgICAgaWYgKCQoJy5wYWdlLXR5cGUtY2F0ZWdvcnknKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCgnLmJhbm5lcnNbZGF0YS1iYW5uZXItbG9jYXRpb249XCJ0b3BcIl0nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gJCgnLmJhbm5lcnNbZGF0YS1iYW5uZXItbG9jYXRpb249XCJ0b3BcIl0nKS5vdXRlckhlaWdodCgpIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX011bHRpQ2F0ZWdvcnknKS5jc3MoJ3RvcCcsIHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiAxMDI0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCQoJy5wYWdlLXR5cGUtY2F0ZWdvcnknKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy5iYW5uZXJzW2RhdGEtYmFubmVyLWxvY2F0aW9uPVwidG9wXCJdJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSAkKCcuYmFubmVyc1tkYXRhLWJhbm5lci1sb2NhdGlvbj1cInRvcFwiXScpLm91dGVySGVpZ2h0KCkgLyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9NdWx0aUNhdGVnb3J5JykuY3NzKCd0b3AnLCBwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfTXVsdGlDYXRlZ29yeScpLmNzcygndG9wJywgJ2F1dG8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==