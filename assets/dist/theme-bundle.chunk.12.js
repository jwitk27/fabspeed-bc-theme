(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./assets/js/theme/brands.js":
/*!***********************************!*\
  !*** ./assets/js/theme/brands.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brands; });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _themevale_themevale_AZbrands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themevale/themevale_AZbrands */ "./assets/js/theme/themevale/themevale_AZbrands.js");

function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Brands = /*#__PURE__*/function (_PageManager) {
  function Brands() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Brands, _PageManager);
  var _proto = Brands.prototype;
  _proto.onReady = function onReady() {
    // Brands list A to Z
    if (this.context.themeSettings.brandpage_brands_per_page_layout === 'aztable') {
      var azbrands = new _themevale_themevale_AZbrands__WEBPACK_IMPORTED_MODULE_2__["default"]();
      azbrands.loaded(this.context.themeSettings.brandpage_brands_per_page);
    }
  };
  return Brands;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/js/theme/themevale/themevale_AZbrands.js":
/*!*********************************************************!*\
  !*** ./assets/js/theme/themevale/themevale_AZbrands.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AZBrands; });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");



var AZBrands = /*#__PURE__*/function () {
  function AZBrands() {}
  var _proto = AZBrands.prototype;
  _proto.loaded = function loaded(limit) {
    var $brands = jquery__WEBPACK_IMPORTED_MODULE_1___default()('[data-brands-list]');
    if ($brands.length > 0) {
      var $atozBrands = jquery__WEBPACK_IMPORTED_MODULE_1___default()(document.getElementById($brands.data('azbrands')));
      if ($atozBrands.length > 0) {
        this.generateAtoZBrands($atozBrands);
        this.updateAtoZBrands($brands, $atozBrands);
      }
      var url = $brands.data('brands-list-next');
      if (url) {
        this.loadMoreBrands($brands, url, true, limit);
      }
    }
  };
  _proto.generateAtoZBrands = function generateAtoZBrands($atozBrands) {
    var azBrandsTableID = $atozBrands.attr('id') + "Table";
    var $atozBrandsTable = jquery__WEBPACK_IMPORTED_MODULE_1___default()("#" + azBrandsTableID);
    $atozBrandsTable.append('<li data-letter=""><a href="#">All</a></li>');
    var ch = '#';
    $atozBrands.append("<div class=\"azBrands-group\" data-letter=\"" + ch + "\" id=\"azBrands-code-123\"><h3 class=\"azBrands-group-title\">" + ch + "</h3><ul class=\"brandList\"></ul></div>");
    $atozBrandsTable.append("<li data-letter=\"" + ch + "\"><a href=\"#azBrands-code-123\" data-target=\"azBrands-code-123\">" + ch + "</a></li>");
    for (var i = 97; i < 123; i++) {
      var _ch = '#';
      if (i < 123) {
        _ch = String.fromCharCode(i);
      }
      $atozBrands.append("<div class=\"azBrands-group\" data-letter=\"" + _ch + "\" id=\"azBrands-code-" + i + "\"><h3 class=\"azBrands-group-title\">" + _ch + "</h3><ul class=\"brandList\"></ul></div>");
      $atozBrandsTable.append("<li data-letter=\"" + _ch + "\"><a href=\"#azBrands-code-" + i + "\" data-target=\"azBrands-code-" + i + "\">" + _ch + "</a></li>");
    }
    $atozBrands.addClass('active-all');
    $atozBrands.children().addClass('is-active');
    $atozBrandsTable.children(':first').addClass('is-active');
    $atozBrandsTable.on('click', 'a', function (event) {
      event.preventDefault();
      var $a = jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.target);
      $atozBrandsTable.children('li').removeClass('is-active');
      $a.parent().addClass('is-active');
      var target = $a.data('target');
      if (target) {
        $atozBrands.children('.azBrands-group').removeClass('is-active');
        $atozBrands.children("#" + target).addClass('is-active');
        $atozBrands.removeClass('active-all');
      } else {
        $atozBrands.children('.azBrands-group').addClass('is-active');
        $atozBrands.addClass('active-all');
      }
    });
  };
  _proto.updateAtoZBrands = function updateAtoZBrands($brands, $atozBrands) {
    var $atozBrandsTable = jquery__WEBPACK_IMPORTED_MODULE_1___default()("#" + $atozBrands.attr('id') + "Table");
    $brands.children('.brand').each(function (i, el) {
      var $el = jquery__WEBPACK_IMPORTED_MODULE_1___default()(el);
      var code = String($el.data('brand-code'));
      var letter = code.charAt(0).toLowerCase();
      var $group = $atozBrands.children("[data-letter=" + letter + "]");
      if ($group.length === 0) {
        $group = $atozBrands.children(':first');
      }
      var $li = $atozBrandsTable.children("[data-letter=" + letter + "]");
      if ($li.length === 0) {
        $li = $atozBrandsTable.children(':last');
      }
      var $brandList = $group.find('.brandList');
      var $elIns;
      $brandList.children('.brand').each(function (j, el2) {
        var $el2 = jquery__WEBPACK_IMPORTED_MODULE_1___default()(el2);
        var code2 = $el2.data('brand-code');
        if (code < code2) {
          $elIns = $el2;
        } else {
          return false;
        }
      });
      if ($elIns) {
        $el.insertAfter($elIns);
      } else {
        $el.appendTo($brandList);
      }
    });
    setTimeout(function () {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#azBrands .azBrands-group ul').each(function (e) {
        var check = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find("li").length;
        if (check === 0) {
          jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).prev(".azBrands-group-title").addClass("not_valued");
        }
      });
      $atozBrands.children().each(function () {
        var temp = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find(".azBrands-group-title.not_valued").text().trim();
        $atozBrandsTable.children().each(function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find('a').text().trim() == temp) {
            jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find('a').addClass('disable');
          }
        });
      });
    }, 3000);
  };
  _proto.loadMoreBrands = function loadMoreBrands($brands, url, recursive, limit) {
    var _this = this;
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.getPage(url, {
      template: 'themevale/brands-list',
      config: {
        brands: {
          limit: limit
        }
      }
    }, function (err, resp) {
      var $brandsList = jquery__WEBPACK_IMPORTED_MODULE_1___default()(resp).find('[data-brands-list]');
      $brands.append($brandsList.children());
      var $atozBrands = jquery__WEBPACK_IMPORTED_MODULE_1___default()(document.getElementById($brands.data('azbrands')));
      if ($atozBrands.length > 0) {
        _this.updateAtoZBrands($brands, $atozBrands);
      }
      var nextUrl = $brandsList.data('brands-list-next');
      if (nextUrl && recursive) {
        _this.loadMoreBrands($brands, nextUrl, recursive, limit);
      }
    });
  };
  return AZBrands;
}();


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYnJhbmRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS90aGVtZXZhbGUvdGhlbWV2YWxlX0FaYnJhbmRzLmpzIl0sIm5hbWVzIjpbIkJyYW5kcyIsIl9QYWdlTWFuYWdlciIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiY29udGV4dCIsInRoZW1lU2V0dGluZ3MiLCJicmFuZHBhZ2VfYnJhbmRzX3Blcl9wYWdlX2xheW91dCIsImF6YnJhbmRzIiwiQVpCcmFuZHMiLCJsb2FkZWQiLCJicmFuZHBhZ2VfYnJhbmRzX3Blcl9wYWdlIiwiUGFnZU1hbmFnZXIiLCJsaW1pdCIsIiRicmFuZHMiLCIkIiwibGVuZ3RoIiwiJGF0b3pCcmFuZHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGF0YSIsImdlbmVyYXRlQXRvWkJyYW5kcyIsInVwZGF0ZUF0b1pCcmFuZHMiLCJ1cmwiLCJsb2FkTW9yZUJyYW5kcyIsImF6QnJhbmRzVGFibGVJRCIsImF0dHIiLCIkYXRvekJyYW5kc1RhYmxlIiwiYXBwZW5kIiwiY2giLCJpIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYWRkQ2xhc3MiLCJjaGlsZHJlbiIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRhIiwidGFyZ2V0IiwicmVtb3ZlQ2xhc3MiLCJwYXJlbnQiLCJlYWNoIiwiZWwiLCIkZWwiLCJjb2RlIiwibGV0dGVyIiwiY2hhckF0IiwidG9Mb3dlckNhc2UiLCIkZ3JvdXAiLCIkbGkiLCIkYnJhbmRMaXN0IiwiZmluZCIsIiRlbElucyIsImoiLCJlbDIiLCIkZWwyIiwiY29kZTIiLCJpbnNlcnRBZnRlciIsImFwcGVuZFRvIiwic2V0VGltZW91dCIsImUiLCJjaGVjayIsInByZXYiLCJ0ZW1wIiwidGV4dCIsInRyaW0iLCJyZWN1cnNpdmUiLCJfdGhpcyIsInV0aWxzIiwiYXBpIiwiZ2V0UGFnZSIsInRlbXBsYXRlIiwiY29uZmlnIiwiYnJhbmRzIiwiZXJyIiwicmVzcCIsIiRicmFuZHNMaXN0IiwibmV4dFVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNhO0FBQUEsSUFFakNBLE1BQU0sMEJBQUFDLFlBQUE7RUFBQSxTQUFBRCxPQUFBO0lBQUEsT0FBQUMsWUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7RUFBQTtFQUFBQyxjQUFBLENBQUFKLE1BQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFJLE1BQUEsR0FBQUwsTUFBQSxDQUFBTSxTQUFBO0VBQUFELE1BQUEsQ0FDdkJFLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFBLEVBQUc7SUFDTjtJQUNBLElBQUksSUFBSSxDQUFDQyxPQUFPLENBQUNDLGFBQWEsQ0FBQ0MsZ0NBQWdDLEtBQUssU0FBUyxFQUFFO01BQzNFLElBQU1DLFFBQVEsR0FBRyxJQUFJQyxxRUFBUSxDQUFDLENBQUM7TUFDL0JELFFBQVEsQ0FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQ0wsT0FBTyxDQUFDQyxhQUFhLENBQUNLLHlCQUF5QixDQUFDO0lBQ3pFO0VBQ0osQ0FBQztFQUFBLE9BQUFkLE1BQUE7QUFBQSxFQVArQmUscURBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h4QjtBQUN3QjtBQUFBLElBRzFCSCxRQUFRO0VBQUEsU0FBQUEsU0FBQTtFQUFBLElBQUFQLE1BQUEsR0FBQU8sUUFBQSxDQUFBTixTQUFBO0VBQUFELE1BQUEsQ0FDekJRLE1BQU0sR0FBTixTQUFBQSxNQUFNQSxDQUFDRyxLQUFLLEVBQUU7SUFDVixJQUFNQyxPQUFPLEdBQUdDLDZDQUFDLENBQUMsb0JBQW9CLENBQUM7SUFDdkMsSUFBSUQsT0FBTyxDQUFDRSxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ3BCLElBQU1DLFdBQVcsR0FBR0YsNkNBQUMsQ0FBQ0csUUFBUSxDQUFDQyxjQUFjLENBQUNMLE9BQU8sQ0FBQ00s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QUFJSCxXQUFXLENBQUNELE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDeEJvRCxLQUFJLENBQUM5QyxnQkFBZ0IsQ0FBQ1IsT0FBTyxFQUFFRyxXQUFXLENBQUM7TUFDL0M7TUFFQSxJQUFNNkQsT0FBTyxHQUFHRCxXQUFXLENBQUN6RCxJQUFJLENBQUMsa0JBQWtCLENBQUM7TUFDcEQsSUFBSTBELE9BQU8sSUFBSVgsU0FBUyxFQUFFO1FBQ3RCQyxLQUFJLENBQUM1QyxjQUFjLENBQUNWLE9BQU8sRUFBRWdFLE9BQU8sRUFBRVgsU0FBUyxFQUFFdEQsS0FBSyxDQUFDO01BQzNEO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBLE9BQUFKLFFBQUE7QUFBQSIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IEFaQnJhbmRzIGZyb20gJy4vdGhlbWV2YWxlL3RoZW1ldmFsZV9BWmJyYW5kcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYW5kcyBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBvblJlYWR5KCkge1xuICAgICAgICAvLyBCcmFuZHMgbGlzdCBBIHRvIFpcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLmJyYW5kcGFnZV9icmFuZHNfcGVyX3BhZ2VfbGF5b3V0ID09PSAnYXp0YWJsZScpIHtcbiAgICAgICAgICAgIGNvbnN0IGF6YnJhbmRzID0gbmV3IEFaQnJhbmRzKCk7XG4gICAgICAgICAgICBhemJyYW5kcy5sb2FkZWQodGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MuYnJhbmRwYWdlX2JyYW5kc19wZXJfcGFnZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBWkJyYW5kcyB7XG4gICAgbG9hZGVkKGxpbWl0KSB7XG4gICAgICAgIGNvbnN0ICRicmFuZHMgPSAkKCdbZGF0YS1icmFuZHMtbGlzdF0nKTtcbiAgICAgICAgaWYgKCRicmFuZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgJGF0b3pCcmFuZHMgPSAkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCRicmFuZHMuZGF0YSgnYXpicmFuZHMnKSkpO1xuICAgICAgICAgICAgaWYgKCRhdG96QnJhbmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlQXRvWkJyYW5kcygkYXRvekJyYW5kcyk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBdG9aQnJhbmRzKCRicmFuZHMsICRhdG96QnJhbmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVybCA9ICRicmFuZHMuZGF0YSgnYnJhbmRzLWxpc3QtbmV4dCcpO1xuICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZE1vcmVCcmFuZHMoJGJyYW5kcywgdXJsLCB0cnVlLCBsaW1pdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0ZUF0b1pCcmFuZHMoJGF0b3pCcmFuZHMpIHtcbiAgICAgICAgY29uc3QgYXpCcmFuZHNUYWJsZUlEID0gYCR7JGF0b3pCcmFuZHMuYXR0cignaWQnKX1UYWJsZWA7XG4gICAgICAgIGNvbnN0ICRhdG96QnJhbmRzVGFibGUgPSAkKGAjJHthekJyYW5kc1RhYmxlSUR9YCk7XG5cbiAgICAgICAgJGF0b3pCcmFuZHNUYWJsZS5hcHBlbmQoJzxsaSBkYXRhLWxldHRlcj1cIlwiPjxhIGhyZWY9XCIjXCI+QWxsPC9hPjwvbGk+Jyk7XG4gICAgICAgIHZhciBjaCA9ICcjJztcbiAgICAgICAgJGF0b3pCcmFuZHMuYXBwZW5kKGA8ZGl2IGNsYXNzPVwiYXpCcmFuZHMtZ3JvdXBcIiBkYXRhLWxldHRlcj1cIiR7Y2h9XCIgaWQ9XCJhekJyYW5kcy1jb2RlLTEyM1wiPjxoMyBjbGFzcz1cImF6QnJhbmRzLWdyb3VwLXRpdGxlXCI+JHtjaH08L2gzPjx1bCBjbGFzcz1cImJyYW5kTGlzdFwiPjwvdWw+PC9kaXY+YCk7XG4gICAgICAgICRhdG96QnJhbmRzVGFibGUuYXBwZW5kKGA8bGkgZGF0YS1sZXR0ZXI9XCIke2NofVwiPjxhIGhyZWY9XCIjYXpCcmFuZHMtY29kZS0xMjNcIiBkYXRhLXRhcmdldD1cImF6QnJhbmRzLWNvZGUtMTIzXCI+JHtjaH08L2E+PC9saT5gKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gOTc7IGkgPCAxMjM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNoID0gJyMnO1xuICAgICAgICAgICAgaWYgKGkgPCAxMjMpIHtcbiAgICAgICAgICAgICAgICBjaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkYXRvekJyYW5kcy5hcHBlbmQoYDxkaXYgY2xhc3M9XCJhekJyYW5kcy1ncm91cFwiIGRhdGEtbGV0dGVyPVwiJHtjaH1cIiBpZD1cImF6QnJhbmRzLWNvZGUtJHtpfVwiPjxoMyBjbGFzcz1cImF6QnJhbmRzLWdyb3VwLXRpdGxlXCI+JHtjaH08L2gzPjx1bCBjbGFzcz1cImJyYW5kTGlzdFwiPjwvdWw+PC9kaXY+YCk7XG4gICAgICAgICAgICAkYXRvekJyYW5kc1RhYmxlLmFwcGVuZChgPGxpIGRhdGEtbGV0dGVyPVwiJHtjaH1cIj48YSBocmVmPVwiI2F6QnJhbmRzLWNvZGUtJHtpfVwiIGRhdGEtdGFyZ2V0PVwiYXpCcmFuZHMtY29kZS0ke2l9XCI+JHtjaH08L2E+PC9saT5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRhdG96QnJhbmRzLmFkZENsYXNzKCdhY3RpdmUtYWxsJyk7XG4gICAgICAgICRhdG96QnJhbmRzLmNoaWxkcmVuKCkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAkYXRvekJyYW5kc1RhYmxlLmNoaWxkcmVuKCc6Zmlyc3QnKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgJGF0b3pCcmFuZHNUYWJsZS5vbignY2xpY2snLCAnYScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgJGEgPSAkKGV2ZW50LnRhcmdldCk7XG5cbiAgICAgICAgICAgICRhdG96QnJhbmRzVGFibGUuY2hpbGRyZW4oJ2xpJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgJGEucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSAkYS5kYXRhKCd0YXJnZXQnKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAkYXRvekJyYW5kcy5jaGlsZHJlbignLmF6QnJhbmRzLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICRhdG96QnJhbmRzLmNoaWxkcmVuKGAjJHt0YXJnZXR9YCkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICRhdG96QnJhbmRzLnJlbW92ZUNsYXNzKCdhY3RpdmUtYWxsJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRhdG96QnJhbmRzLmNoaWxkcmVuKCcuYXpCcmFuZHMtZ3JvdXAnKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJGF0b3pCcmFuZHMuYWRkQ2xhc3MoJ2FjdGl2ZS1hbGwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQXRvWkJyYW5kcygkYnJhbmRzLCAkYXRvekJyYW5kcykge1xuICAgICAgICBjb25zdCAkYXRvekJyYW5kc1RhYmxlID0gJChgIyR7JGF0b3pCcmFuZHMuYXR0cignaWQnKX1UYWJsZWApO1xuICAgICAgICAkYnJhbmRzLmNoaWxkcmVuKCcuYnJhbmQnKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gU3RyaW5nKCRlbC5kYXRhKCdicmFuZC1jb2RlJykpO1xuICAgICAgICAgICAgY29uc3QgbGV0dGVyID0gY29kZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgbGV0ICRncm91cCA9ICRhdG96QnJhbmRzLmNoaWxkcmVuKGBbZGF0YS1sZXR0ZXI9JHtsZXR0ZXJ9XWApO1xuICAgICAgICAgICAgaWYgKCRncm91cC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAkZ3JvdXAgPSAkYXRvekJyYW5kcy5jaGlsZHJlbignOmZpcnN0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCAkbGkgPSAkYXRvekJyYW5kc1RhYmxlLmNoaWxkcmVuKGBbZGF0YS1sZXR0ZXI9JHtsZXR0ZXJ9XWApO1xuICAgICAgICAgICAgaWYgKCRsaS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAkbGkgPSAkYXRvekJyYW5kc1RhYmxlLmNoaWxkcmVuKCc6bGFzdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkYnJhbmRMaXN0ID0gJGdyb3VwLmZpbmQoJy5icmFuZExpc3QnKTtcblxuICAgICAgICAgICAgbGV0ICRlbElucztcbiAgICAgICAgICAgICRicmFuZExpc3QuY2hpbGRyZW4oJy5icmFuZCcpLmVhY2goKGosIGVsMikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRlbDIgPSAkKGVsMik7XG4gICAgICAgICAgICAgICAgY29uc3QgY29kZTIgPSAkZWwyLmRhdGEoJ2JyYW5kLWNvZGUnKTtcblxuICAgICAgICAgICAgICAgIGlmIChjb2RlIDwgY29kZTIpIHtcbiAgICAgICAgICAgICAgICAgICAgJGVsSW5zID0gJGVsMjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoJGVsSW5zKSB7XG4gICAgICAgICAgICAgICAgJGVsLmluc2VydEFmdGVyKCRlbElucyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRlbC5hcHBlbmRUbygkYnJhbmRMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBcbiAgICAgICAgICAgICQoJyNhekJyYW5kcyAuYXpCcmFuZHMtZ3JvdXAgdWwnKS5lYWNoKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIHZhciBjaGVjayA9ICgkKHRoaXMpLmZpbmQoXCJsaVwiKS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGlmKGNoZWNrID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wcmV2KFwiLmF6QnJhbmRzLWdyb3VwLXRpdGxlXCIpLmFkZENsYXNzKFwibm90X3ZhbHVlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJGF0b3pCcmFuZHMuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXAgPSAkKHRoaXMpLmZpbmQoXCIuYXpCcmFuZHMtZ3JvdXAtdGl0bGUubm90X3ZhbHVlZFwiKS50ZXh0KCkudHJpbSgpO1xuICAgICAgICAgICAgICAgICRhdG96QnJhbmRzVGFibGUuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKCAkKHRoaXMpLmZpbmQoJ2EnKS50ZXh0KCkudHJpbSgpID09IHRlbXApe1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdhJykuYWRkQ2xhc3MoJ2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIGxvYWRNb3JlQnJhbmRzKCRicmFuZHMsIHVybCwgcmVjdXJzaXZlLCBsaW1pdCkge1xuICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAndGhlbWV2YWxlL2JyYW5kcy1saXN0JyxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGJyYW5kczoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogbGltaXQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sIChlcnIsIHJlc3ApID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRicmFuZHNMaXN0ID0gJChyZXNwKS5maW5kKCdbZGF0YS1icmFuZHMtbGlzdF0nKTtcbiAgICAgICAgICAgICRicmFuZHMuYXBwZW5kKCRicmFuZHNMaXN0LmNoaWxkcmVuKCkpO1xuXG4gICAgICAgICAgICBjb25zdCAkYXRvekJyYW5kcyA9ICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJGJyYW5kcy5kYXRhKCdhemJyYW5kcycpKSk7XG4gICAgICAgICAgICBpZiAoJGF0b3pCcmFuZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQXRvWkJyYW5kcygkYnJhbmRzLCAkYXRvekJyYW5kcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRVcmwgPSAkYnJhbmRzTGlzdC5kYXRhKCdicmFuZHMtbGlzdC1uZXh0Jyk7XG4gICAgICAgICAgICBpZiAobmV4dFVybCAmJiByZWN1cnNpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRNb3JlQnJhbmRzKCRicmFuZHMsIG5leHRVcmwsIHJlY3Vyc2l2ZSwgbGltaXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9