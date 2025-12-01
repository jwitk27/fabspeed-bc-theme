(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./assets/js/theme/common/form-utils.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/form-utils.js ***!
  \**********************************************/
/*! exports provided: classifyForm, Validators, insertStateHiddenField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classifyForm", function() { return classifyForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStateHiddenField", function() { return insertStateHiddenField; });
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.match.js */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor.js */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/forms */ "./assets/js/theme/common/models/forms.js");









var inputTagNames = ['input', 'select', 'textarea'];

/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */
function classifyInput(input, formFieldClass) {
  var $input = $(input);
  var $formField = $input.parent("." + formFieldClass);
  var tagName = $input.prop('tagName').toLowerCase();
  var className = formFieldClass + "--" + tagName;
  var specificClassName;

  // Input can be text/checkbox/radio etc...
  if (tagName === 'input') {
    var inputType = $input.prop('type');
    if (lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(['radio', 'checkbox', 'submit'], inputType)) {
      // ie: .form-field--checkbox, .form-field--radio
      className = formFieldClass + "--" + lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(inputType);
    } else {
      // ie: .form-field--input .form-field--inputText
      specificClassName = "" + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default()(inputType);
    }
  }

  // Apply class modifier
  return $formField.addClass(className).addClass(specificClassName);
}

/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */
function classifyForm(formSelector, options) {
  if (options === void 0) {
    options = {};
  }
  var $form = $(formSelector);
  var $inputs = $form.find(inputTagNames.join(', '));

  // Obtain options
  var _options = options,
    _options$formFieldCla = _options.formFieldClass,
    formFieldClass = _options$formFieldCla === void 0 ? 'form-field' : _options$formFieldCla;

  // Classify each input in a form
  $inputs.each(function (__, input) {
    classifyInput(input, formFieldClass);
  });
  return $form;
}

/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */
function getFieldId($field) {
  var fieldId = $field.prop('name').match(/(\[.*\])/);
  if (fieldId && fieldId.length !== 0) {
    return fieldId[0];
  }
  return '';
}

/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */
function insertStateHiddenField($stateField) {
  var fieldId = getFieldId($stateField);
  var stateFieldAttrs = {
    type: 'hidden',
    name: "FormFieldIsText" + fieldId,
    value: '1'
  };
  $stateField.after($('<input />', stateFieldAttrs));
}
var Validators = {
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setEmailValidation: function setEmailValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = _models_forms__WEBPACK_IMPORTED_MODULE_8__["default"].email(val);
          cb(result);
        },
        errorMessage: 'You must enter a valid email.'
      });
    }
  },
  /**
   * Validate password fields
   * @param validator
   * @param passwordSelector
   * @param password2Selector
   * @param requirements
   * @param isOptional
   */
  setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, isOptional) {
    var $password = $(passwordSelector);
    var passwordValidations = [{
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.length;
        if (isOptional) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength;

        // If optional and nothing entered, it is valid
        if (isOptional && val.length === 0) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: requirements.error
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val.length;
        if (isOptional) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val === $password.val();
        cb(result);
      },
      errorMessage: 'Your passwords do not match.'
    }];
    validator.add(passwordValidations);
  },
  /**
   * Validate password fields
   * @param {Nod} validator
   * @param {Object} selectors
   * @param {string} selectors.errorSelector
   * @param {string} selectors.fieldsetSelector
   * @param {string} selectors.formSelector
   * @param {string} selectors.maxPriceSelector
   * @param {string} selectors.minPriceSelector
   */
  setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors) {
    var errorSelector = selectors.errorSelector,
      fieldsetSelector = selectors.fieldsetSelector,
      formSelector = selectors.formSelector,
      maxPriceSelector = selectors.maxPriceSelector,
      minPriceSelector = selectors.minPriceSelector;
    validator.configure({
      form: formSelector,
      preventSubmit: true,
      successClass: '_' // KLUDGE: Don't apply success class
    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: minPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: maxPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Max. price is required.',
      selector: maxPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Min. price is required.',
      selector: minPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Input must be greater than 0.',
      selector: [minPriceSelector, maxPriceSelector],
      validate: 'min-number:0'
    });
    validator.setMessageOptions({
      selector: [minPriceSelector, maxPriceSelector],
      parent: fieldsetSelector,
      errorSpan: errorSelector
    });
  },
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setStateCountryValidation: function setStateCountryValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: 'presence',
        errorMessage: 'The \'State/Province\' field cannot be blank.'
      });
    }
  },
  /**
   * Removes classes from dirty form if previously checked
   * @param field
   */
  cleanUpStateValidation: function cleanUpStateValidation(field) {
    var $fieldClassElement = $("[data-type=\"" + field.data('fieldType') + "\"]");
    Object.keys(_nod__WEBPACK_IMPORTED_MODULE_7__["default"].classes).forEach(function (value) {
      if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_7__["default"].classes[value])) {
        $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_7__["default"].classes[value]);
      }
    });
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/models/forms.js":
/*!************************************************!*\
  !*** ./assets/js/theme/common/models/forms.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var forms = {
  email: function email(value) {
    var re = /^.+@.+\..+/;
    return re.test(value);
  },
  /**
   * Validates a password field
   * @param value
   * @returns {boolean}
   */
  password: function password(value) {
    return this.notEmpty(value);
  },
  /**
   * validates if a field is empty
   * @param value
   * @returns {boolean}
   *
   */
  notEmpty: function notEmpty(value) {
    return value.length > 0;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

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

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _themevale_themevale_Countdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./themevale/themevale_Countdown */ "./assets/js/theme/themevale/themevale_Countdown.js");
/* harmony import */ var _themevale_themevale_stickyAddToCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./themevale/themevale_stickyAddToCart */ "./assets/js/theme/themevale/themevale_stickyAddToCart.js");
/* harmony import */ var _themevale_themevale_fbt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./themevale/themevale_fbt */ "./assets/js/theme/themevale/themevale_fbt.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");

function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/*
 Import all product specific js
 */










var Product = /*#__PURE__*/function (_PageManager) {
  function Product(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    return _this;
  }
  _inheritsLoose(Product, _PageManager);
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_10__["default"])(this.context.urls);

    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator;

    // Init collapsible
    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_3__["default"])();

    // countdown time
    var product_id = $('[data-cart-item-add] [name="product_id"]').val();
    Object(_themevale_themevale_Countdown__WEBPACK_IMPORTED_MODULE_7__["default"])(product_id);
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_4__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    Object(_product_video_gallery__WEBPACK_IMPORTED_MODULE_5__["default"])();
    var $reviewForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["classifyForm"])('.writeReview-form');
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_2__["default"]($reviewForm);
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }
      return false;
    });
    this.productReviewHandler();
    Object(_themevale_themevale_stickyAddToCart__WEBPACK_IMPORTED_MODULE_8__["default"])();
    Object(_themevale_themevale_fbt__WEBPACK_IMPORTED_MODULE_9__["default"])(this.context);
  };
  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };
  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");




var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: $reviewForm.find('input[type="submit"]')
    });
    this.$reviewsContent = $('#product-reviews');
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    this.$collapsible2 = $('.productView-reviewTabLink');
    this.initLinkBind();
    this.injectPaginationLink();
    this.collapseReviews();
  }

  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */
  var _proto = _default.prototype;
  _proto.initLinkBind = function initLinkBind() {
    var _this = this;
    var $content = $('#productReviews-content', this.$reviewsContent);
    var $content2 = $('#product-reviews');
    $('.review-link a').on('click', function (e) {
      e.preventDefault();
      $('.is-open[data-collapsible]', $('.tabs-vertical')).trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["CollapsibleEvents"].click);
      if ($('.themevale_productDescription-3').length) {
        $('.is-open[data-collapsible]', $('.themevale_productDescription-3')).trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["CollapsibleEvents"].click);
        if ($(window).width() > 1024) {
          $('html, body').animate({
            scrollTop: $('#tab-review').offset().top - $('.header').height()
          }, 700);
        } else {
          $('html, body').animate({
            scrollTop: _this.$reviewsContent.offset().top - $('.header').height()
          }, 700);
        }
      } else {
        $('html, body').animate({
          scrollTop: _this.$reviewsContent.offset().top - $('.header').height()
        }, 700);
      }
      if (!$content.hasClass('is-open')) {
        _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["CollapsibleEvents"].click);
      }
      if ($('.themevale_productDescription-3').length) {
        if (!$content2.hasClass('is-active')) {
          _this.$collapsible2.trigger('click');
        }
      }
    });
  };
  _proto.collapseReviews = function collapseReviews() {
    // We're in paginating state, do not collapse
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
      return;
    }

    // force collapse on page load
    // this.$collapsible2.trigger(CollapsibleEvents.click);
  }

  /**
   * Inject ID into the pagination link
   */;
  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);
    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + " #product-reviews");
    }
    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + " #product-reviews");
    }
  };
  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: this.context.reviewRating
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: this.context.reviewSubject
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: this.context.reviewComment
    }, {
      selector: '[name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };
  _proto.validate = function validate() {
    return this.validator.performCheck();
  };
  return _default;
}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/*! exports provided: VideoGallery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGallery", function() { return VideoGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return videoGallery; });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);

var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }
  var _proto = VideoGallery.prototype;
  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };
  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };
  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };
  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;
    if (isInitialized) {
      return;
    }
    $el.data(pluginKey, new VideoGallery($el));
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/themevale/themevale_fbt.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/themevale/themevale_fbt.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.slice.js */ "./node_modules/core-js/modules/es6.array.slice.js");
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.from.js */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");









function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }








/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  var relate_tab = "#product-related";
  var previewModal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_16__["default"])('#previewModal')[0];

  // check custom field fbt
  showFBT();
  jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).on('click', '.themvale-fbt-toggle-options', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).next().is(':visible') == false) {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).next().slideDown();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).next().slideUp();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).on('change', '.themvale-fbt-detail-checkbox', function () {
    var id = jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr('id').replace('fbt_product', '');
    if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).is(':checked') == false) {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + id + '"]').removeClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).parents('form').find('.themvale-fbt-detail-options').slideUp();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + id + '"]').addClass('isChecked');
    }
    totalPrice();
  });
  jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).on('click', '#themvale-fbt-addAll', function (event) {
    var $form = jquery__WEBPACK_IMPORTED_MODULE_13___default()('form', jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt'));
    var arrPro = new Array();
    jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-detail-checkbox').each(function (i, val) {
      if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(val).is(':checked')) {
        arrPro.push(i);
      }
    });
    var check = false;
    if (arrPro.length > 0) {
      check = checkProduct($form, arrPro);
    }
    if (check) {
      if (arrPro.length > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt .loadingOverlay').show();
        addToCart($form, 0, arrPro);
      }
    } else {
      sweetalert2__WEBPACK_IMPORTED_MODULE_15___default()({
        text: 'Please make sure all options have been filled in.',
        type: 'warning'
      });
    }
    event.preventDefault();
  });
  function showFBT() {
    // related product
    var options = {
      template: {
        item: 'themevale/fbt-item',
        options: 'themevale/fbt-options'
      }
    };
    if (jquery__WEBPACK_IMPORTED_MODULE_13___default()('.productView-info-name.fbt').length > 0) {
      var num = 0;
      var list = [];
      jquery__WEBPACK_IMPORTED_MODULE_13___default()(relate_tab + ' .card').each(function (i, val) {
        list.push({
          i: i,
          data: ""
        });
        var pId = jquery__WEBPACK_IMPORTED_MODULE_13___default()(val).data('product-id');
        if (pId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.product.getById(pId, options, function (err, response) {
            if (err) {
              return '';
            }
            list.forEach(function (element) {
              if (element.i == i) {
                element.data = response;
              }
            });
            num++;
            if (num == jquery__WEBPACK_IMPORTED_MODULE_13___default()(relate_tab + ' .card').length) showList(list);
          });
        }
      });
    } else if (jquery__WEBPACK_IMPORTED_MODULE_13___default()('.productView-info-name.fbt-product').length > 0) {
      var num = 0;
      var list = [];
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.productView-info-value.fbt-product').each(function (i) {
        list.push({
          i: i,
          data: ""
        });
        if (!isNaN(Number(jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).text()))) {
          var productId = Number(jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).text());
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.product.getById(productId, options, function (err, response) {
            if (err) {
              return '';
            }
            list.forEach(function (element) {
              if (element.i == i) {
                element.data = response;
              }
            });
            num++;
            if (num == jquery__WEBPACK_IMPORTED_MODULE_13___default()('.productView-info-value.fbt-product').length) showList(list);
          });
        } else {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.getPage(jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).text(), options, function (err, response) {
            if (err) {
              return '';
            }
            list.forEach(function (element) {
              if (element.i == i) {
                element.data = response;
              }
            });
            num++;
            if (num == jquery__WEBPACK_IMPORTED_MODULE_13___default()('.productView-info-value.fbt-product').length) showList(list);
          });
        }
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt').remove();
    }
  }
  function showList(list) {
    list.forEach(function (element) {
      var response = element.data;
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt .themvale-fbt-product-list').append(response.item);
      if (response.options.trim() != "") {
        var pId = jquery__WEBPACK_IMPORTED_MODULE_13___default()(response.item).data('product-id');
        var $form = jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt .themvale-fbt-product-list .themvale-fbt-product-item[data-product-id="' + pId + '"] form');
        $form.append(response.options);
        var $productOptionsElement = jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-fbt-option-change]', $form);
        var hasOptions = $productOptionsElement.html().trim().length;
        var hasDefaultOptions = jquery__WEBPACK_IMPORTED_MODULE_13___default()(response.options).find('[data-default]').length;
        if (hasDefaultOptions && hasOptions) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.productAttributes.optionChange(pId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
            var attributesData = response.data || {};
            var attributesContent = response.content || {};
            updateProductAttributes($form, attributesData);
            if (hasDefaultOptions) {
              updateView($form, attributesData, attributesContent);
            } else {
              updateDefaultAttributesForOOS(attributesData);
            }
          });
        }
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt').show();
    productOptions();
    jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt .themvale-fbt-product-wrapper').append('<div class="themvale-fbt-total fbt__total">\
          <p class="themevale-text-price"><span>Total:</span> <span class="themvale-fbt-total-price" id="themvale-fbt-totalPrice"></span></p>\
          <a class="button button--primary themvale-fbt-total-button" id="themvale-fbt-addAll" href="#">Add all to Cart</a>\
        </div>');
    slick_slider();
    totalPrice();
  }
  function slick_slider() {
    if (jquery__WEBPACK_IMPORTED_MODULE_13___default()('.product-layout-3').length) {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-list').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        infinite: false,
        nextArrow: "<svg class='slick-next slick-arrow'><use xlink:href='#icon-slick-next'></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow'><use xlink:href='#icon-slick-prev'></use></svg>",
        responsive: [{
          breakpoint: 1025,
          settings: {
            slidesToScroll: 3,
            slidesToShow: 3,
            dots: false,
            arrows: true
          }
        }, {
          breakpoint: 992,
          settings: {
            slidesToScroll: 4,
            slidesToShow: 4
          }
        }, {
          breakpoint: 551,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 2
          }
        }]
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-list').slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        mobileFirst: true,
        infinite: false,
        nextArrow: "<svg class='slick-next slick-arrow'><use xlink:href='#icon-slick-next'></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow'><use xlink:href='#icon-slick-prev'></use></svg>",
        responsive: [{
          breakpoint: 1025,
          settings: {
            slidesToScroll: 4,
            slidesToShow: 4,
            dots: false,
            arrows: true
          }
        }, {
          breakpoint: 992,
          settings: {
            slidesToScroll: 3,
            slidesToShow: 3
          }
        }, {
          breakpoint: 551,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 2
          }
        }]
      });
    }
  }
  function checkProduct(form, arrPro) {
    var check = true;
    for (var i = 0, len = arrPro.length; i < len; i++) {
      var k = arrPro[i];
      var $form = jquery__WEBPACK_IMPORTED_MODULE_13___default()(form[k]);
      if ($form.find('[data-fbt-option-change]').length) {
        check = checkBeforeAdd($form);
        if (check == false) return false;
      }
    }
    return check;
  }
  function checkBeforeAdd($attributes) {
    var check = true;
    $attributes.find('input:text, input:password, input:file, textarea').each(function () {
      if (!jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).prop('required')) {} else {
        if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).val()) {} else {
          jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).focus();
          check = false;
        }
      }
    });
    $attributes.find('select').each(function () {
      if (!jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).prop('required')) {} else {
        if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).val()) {} else {
          jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).focus();
          check = false;
        }
      }
    });
    var att = "";
    $attributes.find('input:radio, input:checkbox').each(function () {
      if (att != jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr("name")) {
        att = jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr("name");
        if (!jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).prop('required')) {
          if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr("type") == "checkbox") {
            if (jquery__WEBPACK_IMPORTED_MODULE_13___default()("[name='" + att + "']:checked").val()) {}
          }
          if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr("type") == "radio") {
            if (jquery__WEBPACK_IMPORTED_MODULE_13___default()("[name='" + att + "']:checked").val()) {}
          }
        } else {
          if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr("type") == "checkbox") {
            if (jquery__WEBPACK_IMPORTED_MODULE_13___default()("[name='" + att + "']:checked").val()) {} else {
              check = false;
            }
          }
          if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr("type") == "radio") {
            if (jquery__WEBPACK_IMPORTED_MODULE_13___default()("[name='" + att + "']:checked").val()) {} else {
              check = false;
            }
          }
        }
      }
    });
    return check;
  }
  function addToCart(form, i, arrP) {
    if (i >= arrP.length) {
      window.location = '/cart.php';
      return;
    }
    if (window.FormData === undefined) {
      return;
    }
    var k = arrP[i];
    // Add item to cart
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.cart.itemAdd(filterEmptyFilesFromForm(new FormData(form[k])), function (err, response) {
      var errorMessage = err || response.data.error;

      // Guard statement
      if (errorMessage) {
        // Strip the HTML from the error message
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        alert(tmp.textContent || tmp.innerText);
      }
      i++;
      if (i >= arrP.length) {
        // window.location = '/cart.php';
        if (previewModal) {
          previewModal.open();
          jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt .loadingOverlay').hide();
          updateCartContent(previewModal, response.data.cart_item.id);
        } else {
          // if no modal, redirect to the cart page
          window.location = '/cart.php';
        }
        return;
      }
      addToCart(form, i, arrP);
      // return response.data.cart_item.product_id;
    });
  }
  function updateCartContent(modal, cartItemId, onComplete) {
    getCartContent(cartItemId, function (err, response) {
      if (err) {
        return;
      }
      modal.updateContent(response);

      // Update cart counter
      var $body = jquery__WEBPACK_IMPORTED_MODULE_13___default()('body');
      var $cartQuantity = jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-cart-quantity]', modal.$content);
      var $cartCounter = jquery__WEBPACK_IMPORTED_MODULE_13___default()('.navUser-action .cart-count');
      var quantity = $cartQuantity.data('cartQuantity') || 0;
      $cartCounter.addClass('cart-count--positive');
      $body.trigger('cart-quantity-update', quantity);
      if (onComplete) {
        onComplete(response);
      }
    });
  }
  function getCartContent(cartItemId, onComplete) {
    var options = {
      template: 'cart/preview',
      params: {
        suggest: cartItemId
      },
      config: {
        cart: {
          suggestions: {
            limit: 4
          }
        }
      }
    };
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.cart.getContent(options, onComplete);
  }
  function totalPrice() {
    var total = 0;
    var pos = 0;
    var symbol = "$";
    jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item.isChecked').each(function (i, val) {
      if (jquery__WEBPACK_IMPORTED_MODULE_13___default()(val).find('.price-section .price.price--withTax').length) var currency = jquery__WEBPACK_IMPORTED_MODULE_13___default()(val).find('.price-section .price.price--withTax').text();else var currency = jquery__WEBPACK_IMPORTED_MODULE_13___default()(val).find('.price-section .price.price--withoutTax').text();
      var price = parseFloat(currency.replace(/[^0-9.-]+/g, ""));
      var s = currency.replace(parseFloat(price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","), "");
      if (isNaN(parseFloat(s.replace(/[^0-9.-]+/g, "")))) symbol = s;
      if (currency.indexOf(symbol) != -1) pos = currency.indexOf(symbol);
      total = total + price;
    });
    total = parseFloat(total).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (pos == 0) total = symbol + total;else total = total + symbol;
    jquery__WEBPACK_IMPORTED_MODULE_13___default()('#themvale-fbt-totalPrice').html(total);
  }
  function productOptions() {
    totalPrice();

    // OPTION CHANGE (delegated)
    jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).off('change.fbtOptions').on('change.fbtOptions', '[data-fbt-option-change]', function (event) {
      productOptionsChanged(event);
    });

    // CLOSE when clicking the X
    jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).off('click.fbtOptionsClose').on('click.fbtOptionsClose', '.close-options', function (e) {
      e.preventDefault();
      var $panel = jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).closest('.themvale-fbt-detail-options');
      $panel.slideUp();
    });

    // CLICK ANYWHERE OUTSIDE → CLOSE ALL FBT OPTION PANELS
    jquery__WEBPACK_IMPORTED_MODULE_13___default()(document).off('click.fbtOptionsOutside').on('click.fbtOptionsOutside', function (e) {
      var $target = jquery__WEBPACK_IMPORTED_MODULE_13___default()(e.target);

      // if click is inside an options panel or on its toggle, do nothing
      if ($target.closest('.themvale-fbt-detail-options').length || $target.closest('.themvale-fbt-toggle-options').length) {
        return;
      }

      // otherwise close all open FBT option panels
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-detail-options:visible').slideUp();
    });
  }
  function productOptionsChanged(event) {
    var $changedOption = jquery__WEBPACK_IMPORTED_MODULE_13___default()(event.target);
    var $form = $changedOption.parents('form');
    var productId = jquery__WEBPACK_IMPORTED_MODULE_13___default()('[name="product_id"]', $form).val();
    // Do not trigger an ajax request if it's a file or if the browser doesn't support FormData
    if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
      return;
    }
    if ($changedOption.attr('id') === 'fbt_product' + productId) {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
      var productAttributesData = response.data || {};
      var productAttributesContent = response.content || {};
      showProductImage(productId, productAttributesData);
      updateProductAttributes($form, productAttributesData);
      updateView($form, productAttributesData, productAttributesContent);
      totalPrice();
    });
    return false;
  }
  function updateProductAttributes($scope, data) {
    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockMessage = " (" + data.out_of_stock_message + ")";
    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }
    jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-attribute-value]', $scope).each(function (i, attribute) {
      var $attribute = jquery__WEBPACK_IMPORTED_MODULE_13___default()(attribute);
      var attrId = parseInt($attribute.data('productAttributeValue'), 10);
      if (inStockIds.indexOf(attrId) !== -1) {
        enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
  }
  function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (getAttributeType($attribute) === 'set-select') {
      return disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.hide();
    } else {
      $attribute.addClass('unavailable');
    }
  }
  function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();
    if (behavior === 'hide_option') {
      $attribute.toggleOption(false);
      // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)
      if ($select.val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.attr('disabled', 'disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  }
  function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (getAttributeType($attribute) === 'set-select') {
      return enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable');
    }
  }
  function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.prop('disabled', false);
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  }
  function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('productAttribute') : null;
  }
  function showProductImage(productId, data) {
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_8___default()(data.image)) {
      var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].tools.image.getSrc(data.image.data, context.themeSettings.product_size);
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'src': mainImageUrl,
        'data-src': jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr('src')
      });
    } else {
      var _mainImageUrl = jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').find('img').attr('data-src');
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'src': _mainImageUrl,
        'data-src': jquery__WEBPACK_IMPORTED_MODULE_13___default()(this).attr('src')
      });
    }
  }
  function updateView($scope, data, content) {
    if (content === void 0) {
      content = null;
    }
    var viewModel = getViewModel($scope);
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_7___default()(data.price)) {
      updatePriceView(viewModel, data.price);
    }
    var productId = jquery__WEBPACK_IMPORTED_MODULE_13___default()('[name="product_id"]', $scope).val();
    if (!data.purchasable || !data.instock) {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').removeClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('#fbt_product' + productId).prop('checked', false).prop('disabled', true);
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').removeClass('hasOptions--selected');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').addClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('#fbt_product' + productId).prop('checked', true).prop('disabled', false);
      if ($scope.find('[data-fbt-option-change]').length) {
        var check = checkBeforeAdd($scope);
        if (check == true) {
          jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').addClass('hasOptions--selected');
          jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-fbt-option-change]', $scope).slideUp();
        }
      }
    }
  }
  function updateDefaultAttributesForOOS($scope, data) {
    var productId = jquery__WEBPACK_IMPORTED_MODULE_13___default()('[name="product_id"]', $scope).val();
    if (!data.purchasable || !data.instock) {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').removeClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('#fbt_product' + productId).prop('checked', false).prop('disabled', true);
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').removeClass('hasOptions--selected');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').addClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_13___default()('#fbt_product' + productId).prop('checked', true).prop('disabled', false);
      if ($scope.find('[data-fbt-option-change]').length) {
        var check = checkBeforeAdd($scope);
        if (check == true) {
          jquery__WEBPACK_IMPORTED_MODULE_13___default()('.themvale-fbt-product-item[data-product-id="' + productId + '"]').addClass('hasOptions--selected');
          jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-fbt-option-change]', $scope).slideUp();
        }
      }
    }
  }
  function getViewModel($scope) {
    return {
      $priceWithTax: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.rrp-price--withTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.rrp-price--withoutTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.non-sale-price--withTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.non-sale-price--withoutTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.price-section--saving', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.price-now-label', $scope)
      },
      priceLabel: {
        $span: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.price-label', $scope)
      },
      $weight: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.productView-info [data-product-weight]', $scope),
      $increments: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.form-field--increments :input', $scope),
      $addToCart: jquery__WEBPACK_IMPORTED_MODULE_13___default()('#form-action-addToCart', $scope),
      $wishlistVariation: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-wishlist-add] [name="variation_id"]', $scope),
      stock: {
        $container: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.form-field--stock', $scope),
        $input: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-stock]', $scope)
      },
      $sku: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-sku]'),
      $upc: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[data-product-upc]'),
      quantity: {
        $text: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.incrementTotal', $scope),
        $input: jquery__WEBPACK_IMPORTED_MODULE_13___default()('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: jquery__WEBPACK_IMPORTED_MODULE_13___default()('.productView-info-bulkPricing', $scope)
    };
  }
  function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }
  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */
  function updatePriceView(viewModel, price) {
    clearPricingNotFound(viewModel);
    if (price.with_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(price.with_tax.formatted);
    }
    if (price.without_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(price.without_tax.formatted);
    }
    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }
    if (price.rrp_without_tax) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }
    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }
    if (price.non_sale_price_with_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
    }
    if (price.non_sale_price_without_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
    }
  }

  /**
   * https://stackoverflow.com/questions/49672992/ajax-request-fails-when-sending-formdata-including-empty-file-input-in-safari
   * Safari browser with jquery 3.3.1 has an issue uploading empty file parameters. This function removes any empty files from the form params
   * @param formData: FormData object
   * @returns FormData object
   */
  function filterEmptyFilesFromForm(formData) {
    try {
      for (var _iterator = _createForOfIteratorHelperLoose(formData), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
          key = _step$value[0],
          val = _step$value[1];
        if (val instanceof File && !val.name && !val.size) {
          formData.delete(key);
        }
      }
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }
    return formData;
  }
});

/***/ }),

/***/ "./assets/js/theme/themevale/themevale_stickyAddToCart.js":
/*!****************************************************************!*\
  !*** ./assets/js/theme/themevale/themevale_stickyAddToCart.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var scroll = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#form-action-addToCart').offset();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() > scroll.top + 100) {
      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').hasClass('show_sticky')) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').addClass('show_sticky');
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 1024) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 40);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 40);
        } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 550) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').outerHeight() + jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 30);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 15);
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').outerHeight() + jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight());
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight());
        }
      }
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').removeClass('show_sticky');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pop-up-option').removeClass('is-open');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.choose_options_add').removeClass('is-active');
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 1024) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", 40);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", 40);
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 550) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').outerHeight() + 30);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", 15);
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').outerHeight());
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", 0);
      }
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.choose_options_add', function (event) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('is-active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pop-up-option').toggleClass('is-open');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.pop-up-option .close', function (event) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".pop-up-option").removeClass('is-open');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.choose_options_add').removeClass('is-active');
  });
  window.onload = function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() > scroll.top - 160) {
      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').hasClass('show_sticky')) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').addClass('show_sticky');
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 1024) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 40);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 40);
        } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 550) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').outerHeight() + jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 30);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight() + 15);
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_left').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').outerHeight() + jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight());
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.themevale_popup_right').css("bottom", jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').outerHeight());
        }
      }
    }
  };
});

/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9tb2RlbHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvdGhlbWV2YWxlL3RoZW1ldmFsZV9mYnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3RoZW1ldmFsZS90aGVtZXZhbGVfc3RpY2t5QWRkVG9DYXJ0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbWFwLmpzIl0sIm5hbWVzIjpbImlucHV0VGFnTmFtZXMiLCJjbGFzc2lmeUlucHV0IiwiaW5wdXQiLCJmb3JtRmllbGRDbGFzcyIsIiRpbnB1dCIsIiQiLCIkZm9ybUZpZWxkIiwicGFyZW50IiwidGFnTmFtZSIsInByb3AiLCJ0b0xvd2VyQ2FzZSIsImNsYXNzTmFtZSIsInNwZWNpZmljQ2xhc3NOYW1lIiwiaW5wdXRUeXBlIiwiX2luY2x1ZGVzIiwiX2NhbWVsQ2FzZSIsIl9jYXBpdGFsaXplIiwiYWRkQ2xhc3MiLCJjbGFzc2lmeUZvcm0iLCJmb3JtU2VsZWN0b3IiLCJvcHRpb25zIiwiJGZvcm0iLCIkaW5wdXRzIiwiZmluZCIsImpvaW4iLCJfb3B0aW9ucyIsIl9vcHRpb25zJGZvcm1GaWVsZENsYSIsImVhY2giLCJfXyIsImdldEZpZWxkSWQiLCIkZmllbGQiLCJmaWVsZElkIiwibWF0Y2giLCJsZW5ndGgiLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwiJHN0YXRlRmllbGQiLCJzdGF0ZUZpZWxkQXR0cnMiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYWZ0ZXIiLCJWYWxpZGF0b3JzIiwic2V0RW1haWxWYWxpZGF0aW9uIiwidmFsaWRhdG9yIiwiZmllbGQiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJ2YWwiLCJyZXN1bHQiLCJmb3JtcyIsImVtYWlsIiwiZXJyb3JNZXNzYWdlIiwic2V0UGFzc3dvcmRWYWxpZGF0aW9uIiwicGFzc3dvcmRTZWxlY3RvciIsInBhc3N3b3JkMlNlbGVjdG9yIiwicmVxdWlyZW1lbnRzIiwiaXNPcHRpb25hbCIsIiRwYXNzd29yZCIsInBhc3N3b3JkVmFsaWRhdGlvbnMiLCJSZWdFeHAiLCJhbHBoYSIsIm51bWVyaWMiLCJtaW5sZW5ndGgiLCJlcnJvciIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInNlbGVjdG9ycyIsImVycm9yU2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwibWF4UHJpY2VTZWxlY3RvciIsIm1pblByaWNlU2VsZWN0b3IiLCJjb25maWd1cmUiLCJmb3JtIiwicHJldmVudFN1Ym1pdCIsInN1Y2Nlc3NDbGFzcyIsInNldE1lc3NhZ2VPcHRpb25zIiwiZXJyb3JTcGFuIiwic2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbiIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCIkZmllbGRDbGFzc0VsZW1lbnQiLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsIm5vZCIsImNsYXNzZXMiLCJmb3JFYWNoIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInJlIiwidGVzdCIsInBhc3N3b3JkIiwibm90RW1wdHkiLCJkZWNyZW1lbnRDb3VudGVyIiwiY291bnRlciIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJpbmNyZW1lbnRDb3VudGVyIiwicHVzaCIsInVwZGF0ZUNvdW50ZXJOYXYiLCIkbGluayIsInVybENvbnRleHQiLCJpcyIsImF0dHIiLCJjb21wYXJlIiwiaHRtbCIsInByb2R1Y3RzIiwiJGNoZWNrZWQiLCIkY29tcGFyZUxpbmsiLCJfbWFwIiwiZWxlbWVudCIsImNvbXBhcmVDb3VudGVyIiwib24iLCJldmVudCIsInByb2R1Y3QiLCJjdXJyZW50VGFyZ2V0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwic2hvd0FsZXJ0TW9kYWwiLCJwcmV2ZW50RGVmYXVsdCIsIiRjbGlja2VkQ2hlY2tlZElucHV0IiwiUHJvZHVjdCIsIl9QYWdlTWFuYWdlciIsImNvbnRleHQiLCJfdGhpcyIsImNhbGwiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCIkcmV2aWV3TGluayIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsIl90aGlzMiIsImNvbXBhcmVQcm9kdWN0cyIsInVybHMiLCJkb2N1bWVudCIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJ0aXRsZSIsInBhdGhuYW1lIiwiY29sbGFwc2libGVGYWN0b3J5IiwicHJvZHVjdF9pZCIsIkNvdW50ZG93biIsInByb2R1Y3REZXRhaWxzIiwiUHJvZHVjdERldGFpbHMiLCJCQ0RhdGEiLCJwcm9kdWN0X2F0dHJpYnV0ZXMiLCJzZXRQcm9kdWN0VmFyaWFudCIsInZpZGVvR2FsbGVyeSIsIiRyZXZpZXdGb3JtIiwicmV2aWV3IiwiUmV2aWV3IiwicmVnaXN0ZXJWYWxpZGF0aW9uIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwicHJvZHVjdFJldmlld0hhbmRsZXIiLCJzdGlja3lBZGRUb0NhcnQiLCJGQlQiLCJ0cmlnZ2VyIiwiUGFnZU1hbmFnZXIiLCJfZGVmYXVsdCIsInN1Ym1pdCIsIiRyZXZpZXdzQ29udGVudCIsIiRjb2xsYXBzaWJsZSIsIiRjb2xsYXBzaWJsZTIiLCJpbml0TGlua0JpbmQiLCJpbmplY3RQYWdpbmF0aW9uTGluayIsImNvbGxhcHNlUmV2aWV3cyIsIiRjb250ZW50IiwiJGNvbnRlbnQyIiwiZSIsIkNvbGxhcHNpYmxlRXZlbnRzIiwiY2xpY2siLCJ3aWR0aCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJoZWlnaHQiLCJoYXNoIiwiJG5leHRMaW5rIiwiJHByZXZMaW5rIiwicmV2aWV3UmF0aW5nIiwicmV2aWV3U3ViamVjdCIsInJldmlld0NvbW1lbnQiLCJyZXZpZXdFbWFpbCIsIlZpZGVvR2FsbGVyeSIsIiRlbGVtZW50IiwiJHBsYXllciIsIiR2aWRlb3MiLCJjdXJyZW50VmlkZW8iLCJiaW5kRXZlbnRzIiwic2VsZWN0TmV3VmlkZW8iLCIkdGFyZ2V0IiwiaWQiLCIkc2VsZWN0ZWRUaHVtYiIsInNldE1haW5WaWRlbyIsInNldEFjdGl2ZVRodW1iIiwiYmluZCIsInBsdWdpbktleSIsIiR2aWRlb0dhbGxlcnkiLCIkZWwiLCJpc0luaXRpYWxpemVkIiwicmVsYXRlX3RhYiIsInByZXZpZXdNb2RhbCIsIm1vZGFsRmFjdG9yeSIsInNob3dGQlQiLCJuZXh0Iiwic2xpZGVEb3duIiwic2xpZGVVcCIsInJlcGxhY2UiLCJwYXJlbnRzIiwidG90YWxQcmljZSIsImFyclBybyIsIkFycmF5IiwiaSIsImNoZWNrIiwiY2hlY2tQcm9kdWN0Iiwic2hvdyIsImFkZFRvQ2FydCIsInN3YWwiLCJ0ZXh0IiwidGVtcGxhdGUiLCJudW0iLCJsaXN0IiwicElkIiwidW5kZWZpbmVkIiwidXRpbHMiLCJhcGkiLCJnZXRCeUlkIiwiZXJyIiwicmVzcG9uc2UiLCJzaG93TGlzdCIsImlzTmFOIiwiTnVtYmVyIiwicHJvZHVjdElkIiwiZ2V0UGFnZSIsInJlbW92ZSIsImFwcGVuZCIsInRyaW0iLCIkcHJvZHVjdE9wdGlvbnNFbGVtZW50IiwiaGFzT3B0aW9ucyIsImhhc0RlZmF1bHRPcHRpb25zIiwicHJvZHVjdEF0dHJpYnV0ZXMiLCJvcHRpb25DaGFuZ2UiLCJzZXJpYWxpemUiLCJhdHRyaWJ1dGVzRGF0YSIsImF0dHJpYnV0ZXNDb250ZW50IiwiY29udGVudCIsInVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzIiwidXBkYXRlVmlldyIsInVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TIiwicHJvZHVjdE9wdGlvbnMiLCJzbGlja19zbGlkZXIiLCJzbGljayIsImRvdHMiLCJhcnJvd3MiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsIm1vYmlsZUZpcnN0IiwiaW5maW5pdGUiLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwibGVuIiwiayIsImNoZWNrQmVmb3JlQWRkIiwiJGF0dHJpYnV0ZXMiLCJmb2N1cyIsImF0dCIsImFyclAiLCJGb3JtRGF0YSIsImNhcnQiLCJpdGVtQWRkIiwiZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtIiwidG1wIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFsZXJ0IiwidGV4dENvbnRlbnQiLCJpbm5lclRleHQiLCJvcGVuIiwiaGlkZSIsInVwZGF0ZUNhcnRDb250ZW50IiwiY2FydF9pdGVtIiwibW9kYWwiLCJjYXJ0SXRlbUlkIiwib25Db21wbGV0ZSIsImdldENhcnRDb250ZW50IiwidXBkYXRlQ29udGVudCIsIiRib2R5IiwiJGNhcnRRdWFudGl0eSIsIiRjYXJ0Q291bnRlciIsInF1YW50aXR5IiwicGFyYW1zIiwic3VnZ2VzdCIsImNvbmZpZyIsInN1Z2dlc3Rpb25zIiwibGltaXQiLCJnZXRDb250ZW50IiwidG90YWwiLCJwb3MiLCJzeW1ib2wiLCJjdXJyZW5jeSIsInByaWNlIiwicGFyc2VGbG9hdCIsInMiLCJ0b0ZpeGVkIiwib2ZmIiwicHJvZHVjdE9wdGlvbnNDaGFuZ2VkIiwiJHBhbmVsIiwiY2xvc2VzdCIsInRhcmdldCIsIiRjaGFuZ2VkT3B0aW9uIiwicHJvZHVjdEF0dHJpYnV0ZXNEYXRhIiwicHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50Iiwic2hvd1Byb2R1Y3RJbWFnZSIsIiRzY29wZSIsImJlaGF2aW9yIiwib3V0X29mX3N0b2NrX2JlaGF2aW9yIiwiaW5TdG9ja0lkcyIsImluX3N0b2NrX2F0dHJpYnV0ZXMiLCJvdXRPZlN0b2NrTWVzc2FnZSIsIm91dF9vZl9zdG9ja19tZXNzYWdlIiwiYXR0cmlidXRlIiwiJGF0dHJpYnV0ZSIsImF0dHJJZCIsInBhcnNlSW50IiwiZW5hYmxlQXR0cmlidXRlIiwiZGlzYWJsZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZVR5cGUiLCJkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHNlbGVjdCIsInRvZ2dsZU9wdGlvbiIsInNlbGVjdGVkSW5kZXgiLCJlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUiLCIkcGFyZW50IiwiX2lzUGxhaW5PYmplY3QiLCJpbWFnZSIsIm1haW5JbWFnZVVybCIsInRvb2xzIiwiZ2V0U3JjIiwidGhlbWVTZXR0aW5ncyIsInByb2R1Y3Rfc2l6ZSIsInZpZXdNb2RlbCIsImdldFZpZXdNb2RlbCIsIl9pc09iamVjdCIsInVwZGF0ZVByaWNlVmlldyIsInB1cmNoYXNhYmxlIiwiaW5zdG9jayIsIiRwcmljZVdpdGhUYXgiLCIkcHJpY2VXaXRob3V0VGF4IiwicnJwV2l0aFRheCIsIiRkaXYiLCIkc3BhbiIsInJycFdpdGhvdXRUYXgiLCJub25TYWxlV2l0aFRheCIsIm5vblNhbGVXaXRob3V0VGF4IiwicHJpY2VTYXZlZCIsInByaWNlTm93TGFiZWwiLCJwcmljZUxhYmVsIiwiJHdlaWdodCIsIiRpbmNyZW1lbnRzIiwiJGFkZFRvQ2FydCIsIiR3aXNobGlzdFZhcmlhdGlvbiIsInN0b2NrIiwiJGNvbnRhaW5lciIsIiRza3UiLCIkdXBjIiwiJHRleHQiLCIkYnVsa1ByaWNpbmciLCJjbGVhclByaWNpbmdOb3RGb3VuZCIsIndpdGhfdGF4IiwiZm9ybWF0dGVkIiwid2l0aG91dF90YXgiLCJycnBfd2l0aF90YXgiLCJycnBfd2l0aG91dF90YXgiLCJzYXZlZCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4Iiwibm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgiLCJmb3JtRGF0YSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJfc3RlcCIsImRvbmUiLCJfc3RlcCR2YWx1ZSIsImtleSIsIkZpbGUiLCJzaXplIiwiZGVsZXRlIiwiY29uc29sZSIsInNjcm9sbCIsImNzcyIsIm91dGVySGVpZ2h0IiwidG9nZ2xlQ2xhc3MiLCJvbmxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDd0I7QUFDVztBQUVuQyxJQUFNQSxhQUFhLEdBQUcsQ0FDbEIsT0FBTyxFQUNQLFFBQVEsRUFDUixVQUFVLENBQ2I7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0MsYUFBYUEsQ0FBQ0MsS0FBSyxFQUFFQyxjQUFjLEVBQUU7RUFDMUMsSUFBTUMsTUFBTSxHQUFHQyxDQUFDLENBQUNILEtBQUssQ0FBQztFQUN2QixJQUFNSSxVQUFVLEdBQUdGLE1BQU0sQ0FBQ0csTUFBTSxPQUFLSixjQUFnQixDQUFDO0VBQ3RELElBQU1LLE9BQU8sR0FBR0osTUFBTSxDQUFDSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0VBRXBELElBQUlDLFNBQVMsR0FBTVIsY0FBYyxVQUFLSyxPQUFTO0VBQy9DLElBQUlJLGlCQUFpQjs7RUFFckI7RUFDQSxJQUFJSixPQUFPLEtBQUssT0FBTyxFQUFFO0lBQ3JCLElBQU1LLFNBQVMsR0FBR1QsTUFBTSxDQUFDSyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRXJDLElBQUlLLHNEQUFBLENBQVcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxFQUFFRCxTQUFTLENBQUMsRUFBRTtNQUN4RDtNQUNBRixTQUFTLEdBQU1SLGNBQWMsVUFBS1ksdURBQUEsQ0FBWUYsU0FBUyxDQUFHO0lBQzlELENBQUMsTUFBTTtNQUNIO01BQ0FELGlCQUFpQixRQUFNRCxTQUFT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QUFtQixDQUFDLENBQUM2WSxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ25GO01BQ0o7SUFDSjtFQUNKLENBQUM7QUFDTCxDOzs7Ozs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsU0FBUztBQUNwQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay42LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBub2QgZnJvbSAnLi9ub2QnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4vbW9kZWxzL2Zvcm1zJztcblxuY29uc3QgaW5wdXRUYWdOYW1lcyA9IFtcbiAgICAnaW5wdXQnLFxuICAgICdzZWxlY3QnLFxuICAgICd0ZXh0YXJlYScsXG5dO1xuXG4vKipcbiAqIEFwcGx5IGNsYXNzIG5hbWUgdG8gYW4gaW5wdXQgZWxlbWVudCBvbiBpdHMgdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IGlucHV0XG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybUZpZWxkQ2xhc3NcbiAqIEByZXR1cm4ge29iamVjdH0gRWxlbWVudCBpdHNlbGZcbiAqL1xuZnVuY3Rpb24gY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpIHtcbiAgICBjb25zdCAkaW5wdXQgPSAkKGlucHV0KTtcbiAgICBjb25zdCAkZm9ybUZpZWxkID0gJGlucHV0LnBhcmVudChgLiR7Zm9ybUZpZWxkQ2xhc3N9YCk7XG4gICAgY29uc3QgdGFnTmFtZSA9ICRpbnB1dC5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7dGFnTmFtZX1gO1xuICAgIGxldCBzcGVjaWZpY0NsYXNzTmFtZTtcblxuICAgIC8vIElucHV0IGNhbiBiZSB0ZXh0L2NoZWNrYm94L3JhZGlvIGV0Yy4uLlxuICAgIGlmICh0YWdOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgIGNvbnN0IGlucHV0VHlwZSA9ICRpbnB1dC5wcm9wKCd0eXBlJyk7XG5cbiAgICAgICAgaWYgKF8uaW5jbHVkZXMoWydyYWRpbycsICdjaGVja2JveCcsICdzdWJtaXQnXSwgaW5wdXRUeXBlKSkge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1jaGVja2JveCwgLmZvcm0tZmllbGQtLXJhZGlvXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7Xy5jYW1lbENhc2UoaW5wdXRUeXBlKX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1pbnB1dCAuZm9ybS1maWVsZC0taW5wdXRUZXh0XG4gICAgICAgICAgICBzcGVjaWZpY0NsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0ke18uY2FwaXRhbGl6ZShpbnB1dFR5cGUpfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBseSBjbGFzcyBtb2RpZmllclxuICAgIHJldHVybiAkZm9ybUZpZWxkXG4gICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUpXG4gICAgICAgIC5hZGRDbGFzcyhzcGVjaWZpY0NsYXNzTmFtZSk7XG59XG5cbi8qKlxuICogQXBwbHkgY2xhc3MgbmFtZSB0byBlYWNoIGlucHV0IGVsZW1lbnQgaW4gYSBmb3JtIGJhc2VkIG9uIGl0cyB0eXBlXG4gKiBAZXhhbXBsZVxuICogLy8gQmVmb3JlXG4gKiA8Zm9ybSBpZD1cImZvcm1cIj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cbiAqICAgICA8L2Rpdj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8c2VsZWN0Pi4uLjwvc2VsZWN0PlxuICogICAgIDwvZGl2PlxuICogPC9mb3JtPlxuICpcbiAqIGNsYXNzaWZ5Rm9ybSgnI2Zvcm0nLCB7IGZvcm1GaWVsZENsYXNzOiAnZm9ybS1maWVsZCcgfSk7XG4gKlxuICogLy8gQWZ0ZXJcbiAqIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLWlucHV0IGZvcm0tZmllbGQtLWlucHV0VGV4dFwiPi4uLjwvZGl2PlxuICogPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0tc2VsZWN0XCI+Li4uPC9kaXY+XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBmb3JtU2VsZWN0b3IgLSBzZWxlY3RvciBvciBlbGVtZW50XG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7alF1ZXJ5fSBFbGVtZW50IGl0c2VsZlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlGb3JtKGZvcm1TZWxlY3Rvciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgJGZvcm0gPSAkKGZvcm1TZWxlY3Rvcik7XG4gICAgY29uc3QgJGlucHV0cyA9ICRmb3JtLmZpbmQoaW5wdXRUYWdOYW1lcy5qb2luKCcsICcpKTtcblxuICAgIC8vIE9idGFpbiBvcHRpb25zXG4gICAgY29uc3QgeyBmb3JtRmllbGRDbGFzcyA9ICdmb3JtLWZpZWxkJyB9ID0gb3B0aW9ucztcblxuICAgIC8vIENsYXNzaWZ5IGVhY2ggaW5wdXQgaW4gYSBmb3JtXG4gICAgJGlucHV0cy5lYWNoKChfXywgaW5wdXQpID0+IHtcbiAgICAgICAgY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICRmb3JtO1xufVxuXG4vKipcbiAqIEdldCBpZCBmcm9tIGdpdmVuIGZpZWxkXG4gKiBAcGFyYW0ge29iamVjdH0gJGZpZWxkIEpRdWVyeSBmaWVsZCBvYmplY3RcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0RmllbGRJZCgkZmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gJGZpZWxkLnByb3AoJ25hbWUnKS5tYXRjaCgvKFxcWy4qXFxdKS8pO1xuXG4gICAgaWYgKGZpZWxkSWQgJiYgZmllbGRJZC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkSWRbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIEluc2VydCBoaWRkZW4gZmllbGQgYWZ0ZXIgU3RhdGUvUHJvdmluY2UgZmllbGRcbiAqIEBwYXJhbSB7b2JqZWN0fSAkc3RhdGVGaWVsZCBKUXVlcnkgZmllbGQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGluc2VydFN0YXRlSGlkZGVuRmllbGQoJHN0YXRlRmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gZ2V0RmllbGRJZCgkc3RhdGVGaWVsZCk7XG4gICAgY29uc3Qgc3RhdGVGaWVsZEF0dHJzID0ge1xuICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgbmFtZTogYEZvcm1GaWVsZElzVGV4dCR7ZmllbGRJZH1gLFxuICAgICAgICB2YWx1ZTogJzEnLFxuICAgIH07XG5cbiAgICAkc3RhdGVGaWVsZC5hZnRlcigkKCc8aW5wdXQgLz4nLCBzdGF0ZUZpZWxkQXR0cnMpKTtcbn1cblxuY29uc3QgVmFsaWRhdG9ycyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgbmV3IHZhbGlkYXRpb24gd2hlbiB0aGUgZm9ybSBpcyBkaXJ0eVxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRFbWFpbFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHZhbGlkIGVtYWlsLicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHBhc3N3b3JkU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmQyU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcmVxdWlyZW1lbnRzXG4gICAgICogQHBhcmFtIGlzT3B0aW9uYWxcbiAgICAgKi9cbiAgICBzZXRQYXNzd29yZFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIHBhc3N3b3JkU2VsZWN0b3IsIHBhc3N3b3JkMlNlbGVjdG9yLCByZXF1aXJlbWVudHMsIGlzT3B0aW9uYWwpID0+IHtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkID0gJChwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgcGFzc3dvcmQuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5tYXRjaChuZXcgUmVnRXhwKHJlcXVpcmVtZW50cy5hbHBoYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWwubWF0Y2gobmV3IFJlZ0V4cChyZXF1aXJlbWVudHMubnVtZXJpYykpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWwubGVuZ3RoID49IHJlcXVpcmVtZW50cy5taW5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgb3B0aW9uYWwgYW5kIG5vdGhpbmcgZW50ZXJlZCwgaXQgaXMgdmFsaWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwgJiYgdmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogcmVxdWlyZW1lbnRzLmVycm9yLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsID09PSAkcGFzc3dvcmQudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHBhc3N3b3JkVmFsaWRhdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0ge05vZH0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNlbGVjdG9yc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZXJyb3JTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZmllbGRzZXRTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZm9ybVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5tYXhQcmljZVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5taW5QcmljZVNlbGVjdG9yXG4gICAgICovXG4gICAgc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBzZWxlY3RvcnMpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcixcbiAgICAgICAgICAgIGZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBmb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfSA9IHNlbGVjdG9ycztcblxuICAgICAgICB2YWxpZGF0b3IuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGZvcm06IGZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIHByZXZlbnRTdWJtaXQ6IHRydWUsXG4gICAgICAgICAgICBzdWNjZXNzQ2xhc3M6ICdfJywgLy8gS0xVREdFOiBEb24ndCBhcHBseSBzdWNjZXNzIGNsYXNzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWF4LiBwcmljZSBpcyByZXF1aXJlZC4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdNaW4uIHByaWNlIGlzIHJlcXVpcmVkLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ0lucHV0IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBbbWluUHJpY2VTZWxlY3RvciwgbWF4UHJpY2VTZWxlY3Rvcl0sXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ21pbi1udW1iZXI6MCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5zZXRNZXNzYWdlT3B0aW9ucyh7XG4gICAgICAgICAgICBzZWxlY3RvcjogW21pblByaWNlU2VsZWN0b3IsIG1heFByaWNlU2VsZWN0b3JdLFxuICAgICAgICAgICAgcGFyZW50OiBmaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZXJyb3JTcGFuOiBlcnJvclNlbGVjdG9yLFxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIG5ldyB2YWxpZGF0aW9uIHdoZW4gdGhlIGZvcm0gaXMgZGlydHlcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnVGhlIFxcJ1N0YXRlL1Byb3ZpbmNlXFwnIGZpZWxkIGNhbm5vdCBiZSBibGFuay4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBjbGFzc2VzIGZyb20gZGlydHkgZm9ybSBpZiBwcmV2aW91c2x5IGNoZWNrZWRcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBjbGVhblVwU3RhdGVWYWxpZGF0aW9uOiAoZmllbGQpID0+IHtcbiAgICAgICAgY29uc3QgJGZpZWxkQ2xhc3NFbGVtZW50ID0gJCgoYFtkYXRhLXR5cGU9XCIke2ZpZWxkLmRhdGEoJ2ZpZWxkVHlwZScpfVwiXWApKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhub2QuY2xhc3NlcykuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICgkZmllbGRDbGFzc0VsZW1lbnQuaGFzQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKSkge1xuICAgICAgICAgICAgICAgICRmaWVsZENsYXNzRWxlbWVudC5yZW1vdmVDbGFzcyhub2QuY2xhc3Nlc1t2YWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IHsgVmFsaWRhdG9ycywgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9O1xuIiwiY29uc3QgZm9ybXMgPSB7XG4gICAgZW1haWwodmFsdWUpIHtcbiAgICAgICAgY29uc3QgcmUgPSAvXi4rQC4rXFwuLisvO1xuICAgICAgICByZXR1cm4gcmUudGVzdCh2YWx1ZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlcyBhIHBhc3N3b3JkIGZpZWxkXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcGFzc3dvcmQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm90RW1wdHkodmFsdWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiB2YWxpZGF0ZXMgaWYgYSBmaWVsZCBpcyBlbXB0eVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqXG4gICAgICovXG4gICAgbm90RW1wdHkodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDA7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1zO1xuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XG5cbmZ1bmN0aW9uIGRlY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvbnN0IGluZGV4ID0gY291bnRlci5pbmRleE9mKGl0ZW0pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY291bnRlci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY291bnRlci5wdXNoKGl0ZW0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb3VudGVyTmF2KGNvdW50ZXIsICRsaW5rLCB1cmxDb250ZXh0KSB7XG4gICAgaWYgKGNvdW50ZXIubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmICghJGxpbmsuaXMoJ3Zpc2libGUnKSkge1xuICAgICAgICAgICAgJGxpbmsuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgICAkbGluay5hdHRyKCdocmVmJywgYCR7dXJsQ29udGV4dC5jb21wYXJlfS8ke2NvdW50ZXIuam9pbignLycpfWApO1xuICAgICAgICAkbGluay5maW5kKCdzcGFuLmNvdW50UGlsbCcpLmh0bWwoY291bnRlci5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsaW5rLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodXJsQ29udGV4dCkge1xuICAgIGxldCBwcm9kdWN0cztcblxuICAgIGNvbnN0ICRjaGVja2VkID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG4gICAgY29uc3QgJGNvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgaWYgKCRjaGVja2VkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBwcm9kdWN0cyA9IF8ubWFwKCRjaGVja2VkLCBlbGVtZW50ID0+IGVsZW1lbnQudmFsdWUpO1xuXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYocHJvZHVjdHMsICRjb21wYXJlTGluaywgdXJsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGFyZUNvdW50ZXIgPSBwcm9kdWN0cyB8fCBbXTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1pZF0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCAkY2xpY2tlZENvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGluY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVjcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY2xpY2tlZENvbXBhcmVMaW5rLCB1cmxDb250ZXh0KTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignc3VibWl0JywgJ1tkYXRhLXByb2R1Y3QtY29tcGFyZV0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNUb0NvbXBhcmUgPSAkdGhpcy5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGlmIChwcm9kdWN0c1RvQ29tcGFyZS5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdhW2RhdGEtY29tcGFyZS1uYXZdJywgKCkgPT4ge1xuICAgICAgICBjb25zdCAkY2xpY2tlZENoZWNrZWRJbnB1dCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGlmICgkY2xpY2tlZENoZWNrZWRJbnB1dC5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIvKlxuIEltcG9ydCBhbGwgcHJvZHVjdCBzcGVjaWZpYyBqc1xuICovXG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IFJldmlldyBmcm9tICcuL3Byb2R1Y3QvcmV2aWV3cyc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xuaW1wb3J0IHZpZGVvR2FsbGVyeSBmcm9tICcuL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeSc7XG5pbXBvcnQgeyBjbGFzc2lmeUZvcm0gfSBmcm9tICcuL2NvbW1vbi9mb3JtLXV0aWxzJztcbmltcG9ydCBDb3VudGRvd24gZnJvbSAnLi90aGVtZXZhbGUvdGhlbWV2YWxlX0NvdW50ZG93bic7XG5pbXBvcnQgc3RpY2t5QWRkVG9DYXJ0IGZyb20gJy4vdGhlbWV2YWxlL3RoZW1ldmFsZV9zdGlja3lBZGRUb0NhcnQnO1xuaW1wb3J0IEZCVCBmcm9tICcuL3RoZW1ldmFsZS90aGVtZXZhbGVfZmJ0JztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy51cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgdGhpcy4kcmV2aWV3TGluayA9ICQoJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJyk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIExpc3RlbiBmb3IgZm91bmRhdGlvbiBtb2RhbCBjbG9zZSBldmVudHMgdG8gc2FuaXRpemUgVVJMIGFmdGVyIHJldmlldy5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2Nsb3NlLmZuZHRuLnJldmVhbCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xICYmIHR5cGVvZiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB2YWxpZGF0b3I7XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZVxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBjb3VudGRvd24gdGltZVxuICAgICAgICB2YXIgcHJvZHVjdF9pZCA9ICQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdIFtuYW1lPVwicHJvZHVjdF9pZFwiXScpLnZhbCgpO1xuICAgICAgICBDb3VudGRvd24ocHJvZHVjdF9pZCk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscyA9IG5ldyBQcm9kdWN0RGV0YWlscygkKCcucHJvZHVjdFZpZXcnKSwgdGhpcy5jb250ZXh0LCB3aW5kb3cuQkNEYXRhLnByb2R1Y3RfYXR0cmlidXRlcyk7XG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcblxuICAgICAgICB2aWRlb0dhbGxlcnkoKTtcblxuICAgICAgICBjb25zdCAkcmV2aWV3Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLndyaXRlUmV2aWV3LWZvcm0nKTtcbiAgICAgICAgY29uc3QgcmV2aWV3ID0gbmV3IFJldmlldygkcmV2aWV3Rm9ybSk7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScsICgpID0+IHtcbiAgICAgICAgICAgIHZhbGlkYXRvciA9IHJldmlldy5yZWdpc3RlclZhbGlkYXRpb24odGhpcy5jb250ZXh0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHJldmlld0Zvcm0ub24oJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0UmV2aWV3SGFuZGxlcigpO1xuICAgICAgICBzdGlja3lBZGRUb0NhcnQoKTtcbiAgICAgICAgRkJUKHRoaXMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHJvZHVjdFJldmlld0hhbmRsZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLiRyZXZpZXdMaW5rLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHsgQ29sbGFwc2libGVFdmVudHMgfSBmcm9tICcuLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoJHJldmlld0Zvcm0pIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkcmV2aWV3Rm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHJldmlld3NDb250ZW50ID0gJCgnI3Byb2R1Y3QtcmV2aWV3cycpO1xuICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZSA9ICQoJ1tkYXRhLWNvbGxhcHNpYmxlXScsIHRoaXMuJHJldmlld3NDb250ZW50KTtcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUyID0gJCgnLnByb2R1Y3RWaWV3LXJldmlld1RhYkxpbmsnKTtcblxuICAgICAgICB0aGlzLmluaXRMaW5rQmluZCgpO1xuICAgICAgICB0aGlzLmluamVjdFBhZ2luYXRpb25MaW5rKCk7XG4gICAgICAgIHRoaXMuY29sbGFwc2VSZXZpZXdzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gaW5pdGlhbCBwYWdlIGxvYWQsIHRoZSB1c2VyIGNsaWNrcyBvbiBcIigxMiBSZXZpZXdzKVwiIGxpbmtcbiAgICAgKiBUaGUgYnJvd3NlciBqdW1wcyB0byB0aGUgcmV2aWV3IHBhZ2UgYW5kIHNob3VsZCBleHBhbmQgdGhlIHJldmlld3Mgc2VjdGlvblxuICAgICAqL1xuICAgIGluaXRMaW5rQmluZCgpIHtcbiAgICAgICBjb25zdCAkY29udGVudCA9ICQoJyNwcm9kdWN0UmV2aWV3cy1jb250ZW50JywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuICAgICAgIGNvbnN0ICRjb250ZW50MiA9ICQoJyNwcm9kdWN0LXJldmlld3MnKTtcbiAgICAgICAgJCgnLnJldmlldy1saW5rIGEnKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJCgnLmlzLW9wZW5bZGF0YS1jb2xsYXBzaWJsZV0nLCAkKCcudGFicy12ZXJ0aWNhbCcpKS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrKTtcblxuICAgICAgICAgICAgaWYoJCgnLnRoZW1ldmFsZV9wcm9kdWN0RGVzY3JpcHRpb24tMycpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQoJy5pcy1vcGVuW2RhdGEtY29sbGFwc2libGVdJywgJCgnLnRoZW1ldmFsZV9wcm9kdWN0RGVzY3JpcHRpb24tMycpKS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiAxMDI0KSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogJCgnI3RhYi1yZXZpZXcnKS5vZmZzZXQoKS50b3AgLSAkKCcuaGVhZGVyJykuaGVpZ2h0KCksXG4gICAgICAgICAgICAgICAgICAgIH0sIDcwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLiRyZXZpZXdzQ29udGVudC5vZmZzZXQoKS50b3AgLSAkKCcuaGVhZGVyJykuaGVpZ2h0KCksXG4gICAgICAgICAgICAgICAgICAgIH0sIDcwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy4kcmV2aWV3c0NvbnRlbnQub2Zmc2V0KCkudG9wIC0gJCgnLmhlYWRlcicpLmhlaWdodCgpLFxuICAgICAgICAgICAgICAgIH0sIDcwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghJGNvbnRlbnQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMuY2xpY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZigkKCcudGhlbWV2YWxlX3Byb2R1Y3REZXNjcmlwdGlvbi0zJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkY29udGVudDIuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlMi50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VSZXZpZXdzKCkge1xuICAgICAgICAvLyBXZSdyZSBpbiBwYWdpbmF0aW5nIHN0YXRlLCBkbyBub3QgY29sbGFwc2VcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJyNwcm9kdWN0LXJldmlld3MnKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yY2UgY29sbGFwc2Ugb24gcGFnZSBsb2FkXG4gICAgICAgIC8vIHRoaXMuJGNvbGxhcHNpYmxlMi50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3QgSUQgaW50byB0aGUgcGFnaW5hdGlvbiBsaW5rXG4gICAgICovXG4gICAgaW5qZWN0UGFnaW5hdGlvbkxpbmsoKSB7XG4gICAgICAgIGNvbnN0ICRuZXh0TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLW5leHQgLnBhZ2luYXRpb24tbGluaycsIHRoaXMuJHJldmlld3NDb250ZW50KTtcbiAgICAgICAgY29uc3QgJHByZXZMaW5rID0gJCgnLnBhZ2luYXRpb24taXRlbS0tcHJldmlvdXMgLnBhZ2luYXRpb24tbGluaycsIHRoaXMuJHJldmlld3NDb250ZW50KTtcblxuICAgICAgICBpZiAoJG5leHRMaW5rLmxlbmd0aCkge1xuICAgICAgICAgICAgJG5leHRMaW5rLmF0dHIoJ2hyZWYnLCBgJHskbmV4dExpbmsuYXR0cignaHJlZicpfSAjcHJvZHVjdC1yZXZpZXdzYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHByZXZMaW5rLmxlbmd0aCkge1xuICAgICAgICAgICAgJHByZXZMaW5rLmF0dHIoJ2hyZWYnLCBgJHskcHJldkxpbmsuYXR0cignaHJlZicpfSAjcHJvZHVjdC1yZXZpZXdzYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlclZhbGlkYXRpb24oY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoW3tcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZyYXRpbmdcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdSYXRpbmcsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZ0aXRsZVwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld1N1YmplY3QsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZ0ZXh0XCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3Q29tbWVudCxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cImVtYWlsXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLmVtYWlsKHZhbCk7XG4gICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdFbWFpbCxcbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBWaWRlb0dhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuJHBsYXllciA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLXBsYXllcl0nKTtcbiAgICAgICAgdGhpcy4kdmlkZW9zID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8taXRlbV0nKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7fTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0TmV3VmlkZW8oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHtcbiAgICAgICAgICAgIGlkOiAkdGFyZ2V0LmRhdGEoJ3ZpZGVvSWQnKSxcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKCk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIoKTtcbiAgICB9XG5cbiAgICBzZXRNYWluVmlkZW8oKSB7XG4gICAgICAgIHRoaXMuJHBsYXllci5hdHRyKCdzcmMnLCBgLy93d3cueW91dHViZS5jb20vZW1iZWQvJHt0aGlzLmN1cnJlbnRWaWRlby5pZH1gKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYigpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8uJHNlbGVjdGVkVGh1bWIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5vbignY2xpY2snLCB0aGlzLnNlbGVjdE5ld1ZpZGVvLmJpbmQodGhpcykpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlkZW9HYWxsZXJ5KCkge1xuICAgIGNvbnN0IHBsdWdpbktleSA9ICd2aWRlby1nYWxsZXJ5JztcbiAgICBjb25zdCAkdmlkZW9HYWxsZXJ5ID0gJChgW2RhdGEtJHtwbHVnaW5LZXl9XWApO1xuXG4gICAgJHZpZGVvR2FsbGVyeS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCAkZWwgPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpc0luaXRpYWxpemVkID0gJGVsLmRhdGEocGx1Z2luS2V5KSBpbnN0YW5jZW9mIFZpZGVvR2FsbGVyeTtcblxuICAgICAgICBpZiAoaXNJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGVsLmRhdGEocGx1Z2luS2V5LCBuZXcgVmlkZW9HYWxsZXJ5KCRlbCkpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgbW9kYWxGYWN0b3J5LCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgICBjb25zdCByZWxhdGVfdGFiID0gXCIjcHJvZHVjdC1yZWxhdGVkXCI7XHJcbiAgICBjb25zdCBwcmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNwcmV2aWV3TW9kYWwnKVswXTtcclxuXHJcbiAgICAvLyBjaGVjayBjdXN0b20gZmllbGQgZmJ0XHJcbiAgICBzaG93RkJUKCk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy50aGVtdmFsZS1mYnQtdG9nZ2xlLW9wdGlvbnMnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykubmV4dCgpLmlzKCc6dmlzaWJsZScpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykubmV4dCgpLnNsaWRlRG93bigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykubmV4dCgpLnNsaWRlVXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy50aGVtdmFsZS1mYnQtZGV0YWlsLWNoZWNrYm94JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaWQnKS5yZXBsYWNlKCdmYnRfcHJvZHVjdCcsICcnKTtcclxuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAkKCcudGhlbXZhbGUtZmJ0LXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgaWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2lzQ2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJ2Zvcm0nKS5maW5kKCcudGhlbXZhbGUtZmJ0LWRldGFpbC1vcHRpb25zJykuc2xpZGVVcCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy50aGVtdmFsZS1mYnQtcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBpZCArICdcIl0nKS5hZGRDbGFzcygnaXNDaGVja2VkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvdGFsUHJpY2UoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjdGhlbXZhbGUtZmJ0LWFkZEFsbCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybScsICQoJyN0aGVtdmFsZS1mYnQnKSk7XHJcbiAgICAgICAgdmFyIGFyclBybyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICQoJy50aGVtdmFsZS1mYnQtZGV0YWlsLWNoZWNrYm94JykuZWFjaChmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHZhbCkuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgICAgIGFyclByby5wdXNoKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBjaGVjayA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoYXJyUHJvLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY2hlY2sgPSBjaGVja1Byb2R1Y3QoJGZvcm0sIGFyclBybyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hlY2spIHtcclxuICAgICAgICAgICAgaWYgKGFyclByby5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjdGhlbXZhbGUtZmJ0IC5sb2FkaW5nT3ZlcmxheScpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIGFkZFRvQ2FydCgkZm9ybSwgMCwgYXJyUHJvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1BsZWFzZSBtYWtlIHN1cmUgYWxsIG9wdGlvbnMgaGF2ZSBiZWVuIGZpbGxlZCBpbi4nLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93RkJUKCkge1xyXG4gICAgICAgIC8vIHJlbGF0ZWQgcHJvZHVjdFxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtOiAndGhlbWV2YWxlL2ZidC1pdGVtJyxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6ICd0aGVtZXZhbGUvZmJ0LW9wdGlvbnMnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICgkKCcucHJvZHVjdFZpZXctaW5mby1uYW1lLmZidCcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdmFyIG51bSA9IDA7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gW107XHJcblxyXG4gICAgICAgICAgICAkKHJlbGF0ZV90YWIgKyAnIC5jYXJkJykuZWFjaChmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goeyBpOiBpLCBkYXRhOiBcIlwiIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBJZCA9ICQodmFsKS5kYXRhKCdwcm9kdWN0LWlkJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocElkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQocElkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pID09IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGEgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW0rKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bSA9PSAkKHJlbGF0ZV90YWIgKyAnIC5jYXJkJykubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0xpc3QobGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKCQoJy5wcm9kdWN0Vmlldy1pbmZvLW5hbWUuZmJ0LXByb2R1Y3QnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBudW0gPSAwO1xyXG4gICAgICAgICAgICB2YXIgbGlzdCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgJCgnLnByb2R1Y3RWaWV3LWluZm8tdmFsdWUuZmJ0LXByb2R1Y3QnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goeyBpOiBpLCBkYXRhOiBcIlwiIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTihOdW1iZXIoJCh0aGlzKS50ZXh0KCkpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0SWQgPSBOdW1iZXIoJCh0aGlzKS50ZXh0KCkpXHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwcm9kdWN0SWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmkgPT0gaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW0gPT0gJCgnLnByb2R1Y3RWaWV3LWluZm8tdmFsdWUuZmJ0LXByb2R1Y3QnKS5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TGlzdChsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UoJCh0aGlzKS50ZXh0KCksIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmkgPT0gaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW0gPT0gJCgnLnByb2R1Y3RWaWV3LWluZm8tdmFsdWUuZmJ0LXByb2R1Y3QnKS5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TGlzdChsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnI3RoZW12YWxlLWZidCcpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93TGlzdChsaXN0KSB7XHJcbiAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGVsZW1lbnQuZGF0YTtcclxuICAgICAgICAgICAgJCgnI3RoZW12YWxlLWZidCAudGhlbXZhbGUtZmJ0LXByb2R1Y3QtbGlzdCcpLmFwcGVuZChyZXNwb25zZS5pdGVtKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9wdGlvbnMudHJpbSgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwSWQgPSAkKHJlc3BvbnNlLml0ZW0pLmRhdGEoJ3Byb2R1Y3QtaWQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRmb3JtID0gJCgnI3RoZW12YWxlLWZidCAudGhlbXZhbGUtZmJ0LXByb2R1Y3QtbGlzdCAudGhlbXZhbGUtZmJ0LXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcElkICsgJ1wiXSBmb3JtJyk7XHJcbiAgICAgICAgICAgICAgICAkZm9ybS5hcHBlbmQocmVzcG9uc2Uub3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbGVtZW50ID0gJCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJywgJGZvcm0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFzT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuaHRtbCgpLnRyaW0oKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNEZWZhdWx0T3B0aW9ucyA9ICQocmVzcG9uc2Uub3B0aW9ucykuZmluZCgnW2RhdGEtZGVmYXVsdF0nKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzRGVmYXVsdE9wdGlvbnMgJiYgaGFzT3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocElkLCAkZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoJGZvcm0sIGF0dHJpYnV0ZXNEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0RlZmF1bHRPcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVWaWV3KCRmb3JtLCBhdHRyaWJ1dGVzRGF0YSwgYXR0cmlidXRlc0NvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoYXR0cmlidXRlc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcjdGhlbXZhbGUtZmJ0Jykuc2hvdygpO1xyXG4gICAgICAgIHByb2R1Y3RPcHRpb25zKCk7XHJcbiAgICAgICAgJCgnI3RoZW12YWxlLWZidCAudGhlbXZhbGUtZmJ0LXByb2R1Y3Qtd3JhcHBlcicpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInRoZW12YWxlLWZidC10b3RhbCBmYnRfX3RvdGFsXCI+XFxcclxuICAgICAgICAgIDxwIGNsYXNzPVwidGhlbWV2YWxlLXRleHQtcHJpY2VcIj48c3Bhbj5Ub3RhbDo8L3NwYW4+IDxzcGFuIGNsYXNzPVwidGhlbXZhbGUtZmJ0LXRvdGFsLXByaWNlXCIgaWQ9XCJ0aGVtdmFsZS1mYnQtdG90YWxQcmljZVwiPjwvc3Bhbj48L3A+XFxcclxuICAgICAgICAgIDxhIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSB0aGVtdmFsZS1mYnQtdG90YWwtYnV0dG9uXCIgaWQ9XCJ0aGVtdmFsZS1mYnQtYWRkQWxsXCIgaHJlZj1cIiNcIj5BZGQgYWxsIHRvIENhcnQ8L2E+XFxcclxuICAgICAgICA8L2Rpdj4nKTtcclxuICAgICAgICBzbGlja19zbGlkZXIoKTtcclxuICAgICAgICB0b3RhbFByaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2xpY2tfc2xpZGVyKCkge1xyXG4gICAgICAgIGlmICgkKCcucHJvZHVjdC1sYXlvdXQtMycpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkKCcudGhlbXZhbGUtZmJ0LXByb2R1Y3QtbGlzdCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93Jz48dXNlIHhsaW5rOmhyZWY9JyNpY29uLXNsaWNrLW5leHQnPjwvdXNlPjwvc3ZnPlwiLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cnPjx1c2UgeGxpbms6aHJlZj0nI2ljb24tc2xpY2stcHJldic+PC91c2U+PC9zdmc+XCIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTUxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLnRoZW12YWxlLWZidC1wcm9kdWN0LWxpc3QnKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyc+PHVzZSB4bGluazpocmVmPScjaWNvbi1zbGljay1uZXh0Jz48L3VzZT48L3N2Zz5cIixcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93Jz48dXNlIHhsaW5rOmhyZWY9JyNpY29uLXNsaWNrLXByZXYnPjwvdXNlPjwvc3ZnPlwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tQcm9kdWN0KGZvcm0sIGFyclBybykge1xyXG4gICAgICAgIHZhciBjaGVjayA9IHRydWU7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJQcm8ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGsgPSBhcnJQcm9baV07XHJcbiAgICAgICAgICAgIHZhciAkZm9ybSA9ICQoZm9ybVtrXSk7XHJcbiAgICAgICAgICAgIGlmICgkZm9ybS5maW5kKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrID0gY2hlY2tCZWZvcmVBZGQoJGZvcm0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrID09IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hlY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tCZWZvcmVBZGQoJGF0dHJpYnV0ZXMpIHtcclxuICAgICAgICB2YXIgY2hlY2sgPSB0cnVlO1xyXG4gICAgICAgICRhdHRyaWJ1dGVzLmZpbmQoJ2lucHV0OnRleHQsIGlucHV0OnBhc3N3b3JkLCBpbnB1dDpmaWxlLCB0ZXh0YXJlYScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkKHRoaXMpLnByb3AoJ3JlcXVpcmVkJykpIHsgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7IH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJGF0dHJpYnV0ZXMuZmluZCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoISQodGhpcykucHJvcCgncmVxdWlyZWQnKSkge1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7IH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIGF0dCA9IFwiXCI7XHJcbiAgICAgICAgJGF0dHJpYnV0ZXMuZmluZCgnaW5wdXQ6cmFkaW8sIGlucHV0OmNoZWNrYm94JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChhdHQgIT0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGF0dCA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoISQodGhpcykucHJvcCgncmVxdWlyZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJ0eXBlXCIpID09IFwiY2hlY2tib3hcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChcIltuYW1lPSdcIiArIGF0dCArIFwiJ106Y2hlY2tlZFwiKS52YWwoKSkgeyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJ0eXBlXCIpID09IFwicmFkaW9cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChcIltuYW1lPSdcIiArIGF0dCArIFwiJ106Y2hlY2tlZFwiKS52YWwoKSkgeyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwidHlwZVwiKSA9PSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHsgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cihcInR5cGVcIikgPT0gXCJyYWRpb1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpKSB7IH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUb0NhcnQoZm9ybSwgaSwgYXJyUCkge1xyXG5cclxuICAgICAgICBpZiAoaSA+PSBhcnJQLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL2NhcnQucGhwJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGsgPSBhcnJQW2ldO1xyXG4gICAgICAgIC8vIEFkZCBpdGVtIHRvIGNhcnRcclxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShuZXcgRm9ybURhdGEoZm9ybVtrXSkpLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgfHwgcmVzcG9uc2UuZGF0YS5lcnJvcjtcclxuXHJcbiAgICAgICAgICAgIC8vIEd1YXJkIHN0YXRlbWVudFxyXG4gICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdHJpcCB0aGUgSFRNTCBmcm9tIHRoZSBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgICAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICBhbGVydCh0bXAudGV4dENvbnRlbnQgfHwgdG1wLmlubmVyVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICBpZiAoaSA+PSBhcnJQLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uID0gJy9jYXJ0LnBocCc7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJldmlld01vZGFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlld01vZGFsLm9wZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjdGhlbXZhbGUtZmJ0IC5sb2FkaW5nT3ZlcmxheScpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVDYXJ0Q29udGVudChwcmV2aWV3TW9kYWwsIHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmlkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgbm8gbW9kYWwsIHJlZGlyZWN0IHRvIHRoZSBjYXJ0IHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL2NhcnQucGhwJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhZGRUb0NhcnQoZm9ybSwgaSwgYXJyUCk7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiByZXNwb25zZS5kYXRhLmNhcnRfaXRlbS5wcm9kdWN0X2lkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBkYXRlQ2FydENvbnRlbnQobW9kYWwsIGNhcnRJdGVtSWQsIG9uQ29tcGxldGUpIHtcclxuICAgICAgICBnZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIGNhcnQgY291bnRlclxyXG4gICAgICAgICAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcclxuICAgICAgICAgICAgY29uc3QgJGNhcnRRdWFudGl0eSA9ICQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJywgbW9kYWwuJGNvbnRlbnQpO1xyXG4gICAgICAgICAgICBjb25zdCAkY2FydENvdW50ZXIgPSAkKCcubmF2VXNlci1hY3Rpb24gLmNhcnQtY291bnQnKTtcclxuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSAkY2FydFF1YW50aXR5LmRhdGEoJ2NhcnRRdWFudGl0eScpIHx8IDA7XHJcblxyXG4gICAgICAgICAgICAkY2FydENvdW50ZXIuYWRkQ2xhc3MoJ2NhcnQtY291bnQtLXBvc2l0aXZlJyk7XHJcbiAgICAgICAgICAgICRib2R5LnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcXVhbnRpdHkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG9uQ29tcGxldGUpIHtcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q2FydENvbnRlbnQoY2FydEl0ZW1JZCwgb25Db21wbGV0ZSkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9wcmV2aWV3JyxcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBzdWdnZXN0OiBjYXJ0SXRlbUlkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgICAgIGNhcnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogNCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIG9uQ29tcGxldGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvdGFsUHJpY2UoKSB7XHJcbiAgICAgICAgdmFyIHRvdGFsID0gMDtcclxuICAgICAgICB2YXIgcG9zID0gMDtcclxuICAgICAgICB2YXIgc3ltYm9sID0gXCIkXCI7XHJcbiAgICAgICAgJCgnLnRoZW12YWxlLWZidC1wcm9kdWN0LWl0ZW0uaXNDaGVja2VkJykuZWFjaChmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHZhbCkuZmluZCgnLnByaWNlLXNlY3Rpb24gLnByaWNlLnByaWNlLS13aXRoVGF4JykubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbmN5ID0gJCh2YWwpLmZpbmQoJy5wcmljZS1zZWN0aW9uIC5wcmljZS5wcmljZS0td2l0aFRheCcpLnRleHQoKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbmN5ID0gJCh2YWwpLmZpbmQoJy5wcmljZS1zZWN0aW9uIC5wcmljZS5wcmljZS0td2l0aG91dFRheCcpLnRleHQoKTtcclxuICAgICAgICAgICAgdmFyIHByaWNlID0gcGFyc2VGbG9hdChjdXJyZW5jeS5yZXBsYWNlKC9bXjAtOS4tXSsvZywgXCJcIikpO1xyXG4gICAgICAgICAgICB2YXIgcyA9IGN1cnJlbmN5LnJlcGxhY2UocGFyc2VGbG9hdChwcmljZSkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIiksIFwiXCIpO1xyXG4gICAgICAgICAgICBpZiAoaXNOYU4ocGFyc2VGbG9hdChzLnJlcGxhY2UoL1teMC05Li1dKy9nLCBcIlwiKSkpKVxyXG4gICAgICAgICAgICAgICAgc3ltYm9sID0gcztcclxuICAgICAgICAgICAgaWYgKGN1cnJlbmN5LmluZGV4T2Yoc3ltYm9sKSAhPSAtMSlcclxuICAgICAgICAgICAgICAgIHBvcyA9IGN1cnJlbmN5LmluZGV4T2Yoc3ltYm9sKTtcclxuICAgICAgICAgICAgdG90YWwgPSB0b3RhbCArIHByaWNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRvdGFsID0gcGFyc2VGbG9hdCh0b3RhbCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XHJcbiAgICAgICAgaWYgKHBvcyA9PSAwKVxyXG4gICAgICAgICAgICB0b3RhbCA9IHN5bWJvbCArIHRvdGFsO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdG90YWwgPSB0b3RhbCArIHN5bWJvbDtcclxuICAgICAgICAkKCcjdGhlbXZhbGUtZmJ0LXRvdGFsUHJpY2UnKS5odG1sKHRvdGFsKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcm9kdWN0T3B0aW9ucygpIHtcclxuICAgICAgICB0b3RhbFByaWNlKCk7XHJcblxyXG4gICAgICAgIC8vIE9QVElPTiBDSEFOR0UgKGRlbGVnYXRlZClcclxuICAgICAgICAkKGRvY3VtZW50KVxyXG4gICAgICAgICAgICAub2ZmKCdjaGFuZ2UuZmJ0T3B0aW9ucycpXHJcbiAgICAgICAgICAgIC5vbignY2hhbmdlLmZidE9wdGlvbnMnLCAnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdE9wdGlvbnNDaGFuZ2VkKGV2ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIENMT1NFIHdoZW4gY2xpY2tpbmcgdGhlIFhcclxuICAgICAgICAkKGRvY3VtZW50KVxyXG4gICAgICAgICAgICAub2ZmKCdjbGljay5mYnRPcHRpb25zQ2xvc2UnKVxyXG4gICAgICAgICAgICAub24oJ2NsaWNrLmZidE9wdGlvbnNDbG9zZScsICcuY2xvc2Utb3B0aW9ucycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkcGFuZWwgPSAkKHRoaXMpLmNsb3Nlc3QoJy50aGVtdmFsZS1mYnQtZGV0YWlsLW9wdGlvbnMnKTtcclxuICAgICAgICAgICAgICAgICRwYW5lbC5zbGlkZVVwKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDTElDSyBBTllXSEVSRSBPVVRTSURFIOKGkiBDTE9TRSBBTEwgRkJUIE9QVElPTiBQQU5FTFNcclxuICAgICAgICAkKGRvY3VtZW50KVxyXG4gICAgICAgICAgICAub2ZmKCdjbGljay5mYnRPcHRpb25zT3V0c2lkZScpXHJcbiAgICAgICAgICAgIC5vbignY2xpY2suZmJ0T3B0aW9uc091dHNpZGUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmIGNsaWNrIGlzIGluc2lkZSBhbiBvcHRpb25zIHBhbmVsIG9yIG9uIGl0cyB0b2dnbGUsIGRvIG5vdGhpbmdcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoJy50aGVtdmFsZS1mYnQtZGV0YWlsLW9wdGlvbnMnKS5sZW5ndGggfHxcclxuICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoJy50aGVtdmFsZS1mYnQtdG9nZ2xlLW9wdGlvbnMnKS5sZW5ndGhcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UgY2xvc2UgYWxsIG9wZW4gRkJUIG9wdGlvbiBwYW5lbHNcclxuICAgICAgICAgICAgICAgICQoJy50aGVtdmFsZS1mYnQtZGV0YWlsLW9wdGlvbnM6dmlzaWJsZScpLnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJvZHVjdE9wdGlvbnNDaGFuZ2VkKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgJGNoYW5nZWRPcHRpb24gPSAkKGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCdmb3JtJyk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJGZvcm0pLnZhbCgpO1xyXG4gICAgICAgIC8vIERvIG5vdCB0cmlnZ2VyIGFuIGFqYXggcmVxdWVzdCBpZiBpdCdzIGEgZmlsZSBvciBpZiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcclxuICAgICAgICBpZiAoJGNoYW5nZWRPcHRpb24uYXR0cigndHlwZScpID09PSAnZmlsZScgfHwgd2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJGNoYW5nZWRPcHRpb24uYXR0cignaWQnKSA9PT0gJ2ZidF9wcm9kdWN0JyArIHByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcclxuICAgICAgICAgICAgc2hvd1Byb2R1Y3RJbWFnZShwcm9kdWN0SWQsIHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKCRmb3JtLCBwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xyXG4gICAgICAgICAgICB1cGRhdGVWaWV3KCRmb3JtLCBwcm9kdWN0QXR0cmlidXRlc0RhdGEsIHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCk7XHJcbiAgICAgICAgICAgIHRvdGFsUHJpY2UoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoJHNjb3BlLCBkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgYmVoYXZpb3IgPSBkYXRhLm91dF9vZl9zdG9ja19iZWhhdmlvcjtcclxuICAgICAgICBjb25zdCBpblN0b2NrSWRzID0gZGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzO1xyXG4gICAgICAgIGNvbnN0IG91dE9mU3RvY2tNZXNzYWdlID0gYCAoJHtkYXRhLm91dF9vZl9zdG9ja19tZXNzYWdlfSlgO1xyXG5cclxuICAgICAgICBpZiAoYmVoYXZpb3IgIT09ICdoaWRlX29wdGlvbicgJiYgYmVoYXZpb3IgIT09ICdsYWJlbF9vcHRpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlXScsICRzY29wZSkuZWFjaCgoaSwgYXR0cmlidXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRhdHRyaWJ1dGUgPSAkKGF0dHJpYnV0ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJJZCA9IHBhcnNlSW50KCRhdHRyaWJ1dGUuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZVZhbHVlJyksIDEwKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoaW5TdG9ja0lkcy5pbmRleE9mKGF0dHJJZCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaGlkZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuYWRkQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XHJcbiAgICAgICAgY29uc3QgJHNlbGVjdCA9ICRhdHRyaWJ1dGUucGFyZW50KCk7XHJcblxyXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLnRvZ2dsZU9wdGlvbihmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vIElmIHRoZSBhdHRyaWJ1dGUgaXMgdGhlIHNlbGVjdGVkIG9wdGlvbiBpbiBhIHNlbGVjdCBkcm9wZG93biwgc2VsZWN0IHRoZSBmaXJzdCBvcHRpb24gKE1FUkMtNjM5KVxyXG4gICAgICAgICAgICBpZiAoJHNlbGVjdC52YWwoKSA9PT0gJGF0dHJpYnV0ZS5hdHRyKCd2YWx1ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAkc2VsZWN0WzBdLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpICsgb3V0T2ZTdG9ja01lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5yZW1vdmVDbGFzcygndW5hdmFpbGFibGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xyXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLnRvZ2dsZU9wdGlvbih0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSB7XHJcbiAgICAgICAgY29uc3QgJHBhcmVudCA9ICRhdHRyaWJ1dGUuY2xvc2VzdCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJyk7XHJcblxyXG4gICAgICAgIHJldHVybiAkcGFyZW50ID8gJHBhcmVudC5kYXRhKCdwcm9kdWN0QXR0cmlidXRlJykgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dQcm9kdWN0SW1hZ2UocHJvZHVjdElkLCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKF8uaXNQbGFpbk9iamVjdChkYXRhLmltYWdlKSkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gdXRpbHMudG9vbHMuaW1hZ2UuZ2V0U3JjKFxyXG4gICAgICAgICAgICAgICAgZGF0YS5pbWFnZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfc2l6ZSxcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICQoJy50aGVtdmFsZS1mYnQtcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuZmluZCgnaW1nJykuYXR0cih7XHJcbiAgICAgICAgICAgICAgICAnc3JjJzogbWFpbkltYWdlVXJsLFxyXG4gICAgICAgICAgICAgICAgJ2RhdGEtc3JjJzogJCh0aGlzKS5hdHRyKCdzcmMnKSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVVybCA9ICQoJy50aGVtdmFsZS1mYnQtcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuZmluZCgnaW1nJykuYXR0cignZGF0YS1zcmMnKTtcclxuICAgICAgICAgICAgJCgnLnRoZW12YWxlLWZidC1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5maW5kKCdpbWcnKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgICdzcmMnOiBtYWluSW1hZ2VVcmwsXHJcbiAgICAgICAgICAgICAgICAnZGF0YS1zcmMnOiAkKHRoaXMpLmF0dHIoJ3NyYycpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlVmlldygkc2NvcGUsIGRhdGEsIGNvbnRlbnQgPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gZ2V0Vmlld01vZGVsKCRzY29wZSk7XHJcblxyXG4gICAgICAgIGlmIChfLmlzT2JqZWN0KGRhdGEucHJpY2UpKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIGRhdGEucHJpY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJHNjb3BlKS52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcclxuICAgICAgICAgICAgJCgnLnRoZW12YWxlLWZidC1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5yZW1vdmVDbGFzcygnaXNDaGVja2VkJyk7XHJcbiAgICAgICAgICAgICQoJyNmYnRfcHJvZHVjdCcgKyBwcm9kdWN0SWQpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgJCgnLnRoZW12YWxlLWZidC1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5yZW1vdmVDbGFzcygnaGFzT3B0aW9ucy0tc2VsZWN0ZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcudGhlbXZhbGUtZmJ0LXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLmFkZENsYXNzKCdpc0NoZWNrZWQnKTtcclxuICAgICAgICAgICAgJCgnI2ZidF9wcm9kdWN0JyArIHByb2R1Y3RJZCkucHJvcCgnY2hlY2tlZCcsIHRydWUpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCRzY29wZS5maW5kKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGVjayA9IGNoZWNrQmVmb3JlQWRkKCRzY29wZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtdmFsZS1mYnQtcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuYWRkQ2xhc3MoJ2hhc09wdGlvbnMtLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJywgJHNjb3BlKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoJHNjb3BlLCBkYXRhKSB7XHJcbiAgICAgICAgdmFyIHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRzY29wZSkudmFsKCk7XHJcblxyXG4gICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XHJcbiAgICAgICAgICAgICQoJy50aGVtdmFsZS1mYnQtcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2lzQ2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAkKCcjZmJ0X3Byb2R1Y3QnICsgcHJvZHVjdElkKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICQoJy50aGVtdmFsZS1mYnQtcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2hhc09wdGlvbnMtLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLnRoZW12YWxlLWZidC1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5hZGRDbGFzcygnaXNDaGVja2VkJyk7XHJcbiAgICAgICAgICAgICQoJyNmYnRfcHJvZHVjdCcgKyBwcm9kdWN0SWQpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkc2NvcGUuZmluZCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2sgPSBjaGVja0JlZm9yZUFkZCgkc2NvcGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGhlbXZhbGUtZmJ0LXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLmFkZENsYXNzKCdoYXNPcHRpb25zLS1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScsICRzY29wZSkuc2xpZGVVcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFZpZXdNb2RlbCgkc2NvcGUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAkcHJpY2VXaXRoVGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXHJcbiAgICAgICAgICAgICRwcmljZVdpdGhvdXRUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgcnJwV2l0aFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtd2l0aC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcnJwV2l0aG91dFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm9uU2FsZVdpdGhUYXg6IHtcclxuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub25TYWxlV2l0aG91dFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByaWNlU2F2ZWQ6IHtcclxuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS1zZWN0aW9uLS1zYXZpbmcnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utc2F2ZWRdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJpY2VOb3dMYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1ub3ctbGFiZWwnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmljZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLWxhYmVsJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJHdlaWdodDogJCgnLnByb2R1Y3RWaWV3LWluZm8gW2RhdGEtcHJvZHVjdC13ZWlnaHRdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgJGluY3JlbWVudHM6ICQoJy5mb3JtLWZpZWxkLS1pbmNyZW1lbnRzIDppbnB1dCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICRhZGRUb0NhcnQ6ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAkd2lzaGxpc3RWYXJpYXRpb246ICQoJ1tkYXRhLXdpc2hsaXN0LWFkZF0gW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICBzdG9jazoge1xyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lcjogJCgnLmZvcm0tZmllbGQtLXN0b2NrJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW2RhdGEtcHJvZHVjdC1zdG9ja10nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkc2t1OiAkKCdbZGF0YS1wcm9kdWN0LXNrdV0nKSxcclxuICAgICAgICAgICAgJHVwYzogJCgnW2RhdGEtcHJvZHVjdC11cGNdJyksXHJcbiAgICAgICAgICAgIHF1YW50aXR5OiB7XHJcbiAgICAgICAgICAgICAgICAkdGV4dDogJCgnLmluY3JlbWVudFRvdGFsJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW25hbWU9cXR5XFxcXFtcXFxcXV0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkYnVsa1ByaWNpbmc6ICQoJy5wcm9kdWN0Vmlldy1pbmZvLWJ1bGtQcmljaW5nJywgJHNjb3BlKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCkge1xyXG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXHJcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBwcmljZSkge1xyXG4gICAgICAgIGNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCk7XHJcblxyXG4gICAgICAgIGlmIChwcmljZS53aXRoX3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kcHJpY2VXaXRoVGF4Lmh0bWwocHJpY2Uud2l0aF90YXguZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS53aXRob3V0X3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kcHJpY2VXaXRob3V0VGF4Lmh0bWwocHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aF90YXgpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhvdXRfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLnJycF93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLnNhdmVkKSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kc3Bhbi5odG1sKHByaWNlLnNhdmVkLmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXguZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5NjcyOTkyL2FqYXgtcmVxdWVzdC1mYWlscy13aGVuLXNlbmRpbmctZm9ybWRhdGEtaW5jbHVkaW5nLWVtcHR5LWZpbGUtaW5wdXQtaW4tc2FmYXJpXHJcbiAgICAgKiBTYWZhcmkgYnJvd3NlciB3aXRoIGpxdWVyeSAzLjMuMSBoYXMgYW4gaXNzdWUgdXBsb2FkaW5nIGVtcHR5IGZpbGUgcGFyYW1ldGVycy4gVGhpcyBmdW5jdGlvbiByZW1vdmVzIGFueSBlbXB0eSBmaWxlcyBmcm9tIHRoZSBmb3JtIHBhcmFtc1xyXG4gICAgICogQHBhcmFtIGZvcm1EYXRhOiBGb3JtRGF0YSBvYmplY3RcclxuICAgICAqIEByZXR1cm5zIEZvcm1EYXRhIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0oZm9ybURhdGEpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgZm9ybURhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBGaWxlICYmICF2YWwubmFtZSAmJiAhdmFsLnNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb3JtRGF0YTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICAgIHZhciBzY3JvbGwgPSAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0Jykub2Zmc2V0KCk7XHJcblxyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IHNjcm9sbC50b3AgKyAxMDApe1xyXG4gICAgICAgICAgICBpZighJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5oYXNDbGFzcygnc2hvd19zdGlja3knKSl7XHJcbiAgICAgICAgICAgICAgICAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLmFkZENsYXNzKCdzaG93X3N0aWNreScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcG9wdXBfbGVmdCcpLmNzcyhcImJvdHRvbVwiLCAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLm91dGVySGVpZ2h0KCkgKyA0MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9yaWdodCcpLmNzcyhcImJvdHRvbVwiLCAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLm91dGVySGVpZ2h0KCkgKyA0MCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCQod2luZG93KS53aWR0aCgpID4gNTUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9sZWZ0JykuY3NzKFwiYm90dG9tXCIsICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5vdXRlckhlaWdodCgpICsgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5vdXRlckhlaWdodCgpICsgMzApO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5jc3MoXCJib3R0b21cIiwgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5vdXRlckhlaWdodCgpICsgMTUgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9sZWZ0JykuY3NzKFwiYm90dG9tXCIsICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5vdXRlckhlaWdodCgpICsgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5vdXRlckhlaWdodCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3BvcHVwX3JpZ2h0JykuY3NzKFwiYm90dG9tXCIsICQoJyNzdGlja3lfYWRkdG9jYXJ0Jykub3V0ZXJIZWlnaHQoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICQoJyNzdGlja3lfYWRkdG9jYXJ0JykucmVtb3ZlQ2xhc3MoJ3Nob3dfc3RpY2t5Jyk7XHJcbiAgICAgICAgICAgICQoJy5wb3AtdXAtb3B0aW9uJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgICAgICAgICAgJCgnLmNob29zZV9vcHRpb25zX2FkZCcpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9sZWZ0JykuY3NzKFwiYm90dG9tXCIsIDQwKTtcclxuICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5jc3MoXCJib3R0b21cIiwgNDApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCQod2luZG93KS53aWR0aCgpID4gNTUwKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3BvcHVwX2xlZnQnKS5jc3MoXCJib3R0b21cIiwgJCgnLnRoZW1ldmFsZV9wb3B1cF9yaWdodCcpLm91dGVySGVpZ2h0KCkgKyAzMCk7XHJcbiAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3BvcHVwX3JpZ2h0JykuY3NzKFwiYm90dG9tXCIsIDE1KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcG9wdXBfbGVmdCcpLmNzcyhcImJvdHRvbVwiLCAkKCcudGhlbWV2YWxlX3BvcHVwX3JpZ2h0Jykub3V0ZXJIZWlnaHQoKSk7XHJcbiAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3BvcHVwX3JpZ2h0JykuY3NzKFwiYm90dG9tXCIsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywnLmNob29zZV9vcHRpb25zX2FkZCcsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAkKCcucG9wLXVwLW9wdGlvbicpLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCcucG9wLXVwLW9wdGlvbiAuY2xvc2UnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgJChcIi5wb3AtdXAtb3B0aW9uXCIpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgJCgnLmNob29zZV9vcHRpb25zX2FkZCcpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IHNjcm9sbC50b3AgLSAxNjApe1xyXG4gICAgICAgICAgICBpZighJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5oYXNDbGFzcygnc2hvd19zdGlja3knKSl7XHJcbiAgICAgICAgICAgICAgICAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLmFkZENsYXNzKCdzaG93X3N0aWNreScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcG9wdXBfbGVmdCcpLmNzcyhcImJvdHRvbVwiLCAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLm91dGVySGVpZ2h0KCkgKyA0MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9yaWdodCcpLmNzcyhcImJvdHRvbVwiLCAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLm91dGVySGVpZ2h0KCkgKyA0MCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCQod2luZG93KS53aWR0aCgpID4gNTUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9sZWZ0JykuY3NzKFwiYm90dG9tXCIsICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5vdXRlckhlaWdodCgpICsgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5vdXRlckhlaWdodCgpICsgMzApO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5jc3MoXCJib3R0b21cIiwgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5vdXRlckhlaWdodCgpICsgMTUgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRoZW1ldmFsZV9wb3B1cF9sZWZ0JykuY3NzKFwiYm90dG9tXCIsICQoJy50aGVtZXZhbGVfcG9wdXBfcmlnaHQnKS5vdXRlckhlaWdodCgpICsgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5vdXRlckhlaWdodCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudGhlbWV2YWxlX3BvcHVwX3JpZ2h0JykuY3NzKFwiYm90dG9tXCIsICQoJyNzdGlja3lfYWRkdG9jYXJ0Jykub3V0ZXJIZWlnaHQoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=