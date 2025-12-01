(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");





function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






var Cart = /*#__PURE__*/function (_PageManager) {
  function Cart() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Cart, _PageManager);
  var _proto = Cart.prototype;
  _proto.onReady = function onReady() {
    this.$cartContent = $('[data-cart-content]');
    this.$cartMessages = $('[data-cart-status]');
    this.$cartTotals = $('[data-cart-totals]');
    this.$overlay = $('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components

    this.bindEvents();
  };
  _proto.cartUpdate = function cartUpdate($target) {
    var _this = this;
    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;
    // Does not quality for min/max quantity
    if (newQty < minQty) {
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
        text: minError,
        type: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
        text: maxError,
        type: 'error'
      });
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this.refreshContent(remove);
      } else {
        $el.val(oldQty);
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
          text: response.data.errors.join('\n'),
          type: 'error'
        });
      }
    });
  };
  _proto.cartUpdateQtyTextChange = function cartUpdateQtyTextChange($target, preVal) {
    var _this2 = this;
    if (preVal === void 0) {
      preVal = null;
    }
    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var oldQty = preVal !== null ? preVal : minQty;
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = parseInt(Number($el.val()), 10);
    var invalidEntry;

    // Does not quality for min/max quantity
    if (!newQty) {
      invalidEntry = $el.val();
      $el.val(oldQty);
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
        text: invalidEntry + " is not a valid entry",
        type: 'error'
      });
    } else if (newQty < minQty) {
      $el.val(oldQty);
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
        text: minError,
        type: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      $el.val(oldQty);
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
        text: maxError,
        type: 'error'
      });
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this2.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this2.refreshContent(remove);
      } else {
        $el.val(oldQty);
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
          text: response.data.errors.join('\n'),
          type: 'error'
        });
      }
    });
  };
  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this3 = this;
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this3.refreshContent(true);
      } else {
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
          text: response.data.errors.join('\n'),
          type: 'error'
        });
      }
    });
  };
  _proto.cartEditOptions = function cartEditOptions(itemId) {
    var _this4 = this;
    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_9__["defaultModal"])();
    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);
      _this4.bindGiftWrappingForm();
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].hooks.on('product-option-change', function (event, option) {
      var $changedOption = $(option);
      var $form = $changedOption.parents('form');
      var $submit = $('input.button', $form);
      var $messageBox = $('.alertMessageBox');
      var item = $('[name="item_id"]', $form).attr('value');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.productAttributes.optionChange(item, $form.serialize(), function (err, result) {
        var data = result.data || {};
        if (err) {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
            text: err,
            type: 'error'
          });
          return false;
        }
        if (data.purchasing_message) {
          $('p.alertBox-message', $messageBox).text(data.purchasing_message);
          $submit.prop('disabled', true);
          $messageBox.show();
        } else {
          $submit.prop('disabled', false);
          $messageBox.hide();
        }
        if (!data.purchasable || !data.instock) {
          $submit.prop('disabled', true);
        } else {
          $submit.prop('disabled', false);
        }
      });
    });
  };
  _proto.refreshContent = function refreshContent(remove) {
    var _this5 = this;
    window.location.reload();
    var $cartItemsRows = $('[data-item-row]', this.$cartContent);
    var $cartPageTitle = $('[data-cart-page-title]');
    var options = {
      template: {
        content: 'cart/content',
        totals: 'cart/totals',
        pageTitle: 'cart/page-title',
        statusMessages: 'cart/status-messages'
      }
    };
    this.$overlay.show();

    // Remove last item from cart? Reload
    if (remove && $cartItemsRows.length === 1) {
      return window.location.reload();
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.cart.getContent(options, function (err, response) {
      _this5.$cartContent.html(response.content);
      _this5.$cartTotals.html(response.totals);
      _this5.$cartMessages.html(response.statusMessages);
      $cartPageTitle.replaceWith(response.pageTitle);
      _this5.bindEvents();
      _this5.$overlay.hide();
      var quantity = $('[data-cart-quantity]', _this5.$cartContent).data('cartQuantity') || 0;
      $('body').trigger('cart-quantity-update', quantity);
    });
  };
  _proto.bindCartEvents = function bindCartEvents() {
    var _this6 = this;
    var debounceTimeout = 400;
    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdate, debounceTimeout), this);
    var cartUpdateQtyTextChange = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdateQtyTextChange, debounceTimeout), this);
    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartRemoveItem, debounceTimeout), this);
    var preVal;

    // cart update
    $('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdate($target);
    });

    // cart qty manually updates
    $('.cart-item-qty-input', this.$cartContent).on('focus', function onQtyFocus() {
      preVal = this.value;
    }).change(function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdateQtyTextChange($target, preVal);
    });
    $('.cart-remove', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('cartItemid');
      var string = $(event.currentTarget).data('confirmDelete');
      Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
        text: string,
        type: 'warning',
        showCancelButton: true
      }).then(function () {
        // remove item from cart
        cartRemoveItem(itemId);
      });
      event.preventDefault();
    });
    $('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemEdit');
      event.preventDefault();
      // edit item in cart
      _this6.cartEditOptions(itemId);
    });
    $('#emptyCart').on('click', function (event) {
      var openTime = new Date();
      var result = confirm($(event.currentTarget).data('confirm'));
      var delta = new Date() - openTime;
      event.preventDefault();

      // Delta workaround for Chrome's "prevent popup"
      if (!result && delta > 10) {
        return;
      }
      var items = [];
      _this6.$cartContent.find('.cart-remove').each(function () {
        var itemId = $(this).data('cart-itemid');
        var $el = 0;
        console.log($(this).data('cart-itemid'));
        items.push({
          id: itemId,
          quantity: 0
        });
      });
      _this6.$overlay.show();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.cart.update(items, function (err, response) {
        if (response.data.status === 'succeed') {
          window.location.reload();
        } else {
          alert(response.data.errors.join('\n'));
        }
      });
    });
  };
  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this7 = this;
    var $couponContainer = $('.coupon-code');
    var $couponForm = $('.coupon-form');
    var $codeInput = $('[name="couponcode"]', $couponForm);
    $('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $couponContainer.show();
      $('.coupon-code-cancel').show();
      $codeInput.trigger('focus');
    });
    $('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      $('.coupon-code-cancel').hide();
      $('.coupon-code-add').show();
    });
    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault();

      // Empty code
      if (!code) {
        return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
          text: $codeInput.data('error'),
          type: 'error'
        });
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.cart.applyCode(code, function (err, response) {
        if (response.data.status === 'success') {
          _this7.refreshContent();
        } else {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
            text: response.data.errors.join('\n'),
            type: 'error'
          });
        }
      });
    });
  };
  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this8 = this;
    var $certContainer = $('.gift-certificate-code');
    var $certForm = $('.cart-gift-certificate-form');
    var $certInput = $('[name="certcode"]', $certForm);
    $('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).toggle();
      $certContainer.toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      $('.gift-certificate-add').toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();
      if (!Object(_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_6__["default"])(code)) {
        return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
          text: $certInput.data('error'),
          type: 'error'
        });
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this8.refreshContent();
        } else {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"])({
            text: resp.data.errors.join('\n'),
            type: 'error'
          });
        }
      });
    });
  };
  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this9 = this;
    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_9__["defaultModal"])();
    $('[data-item-giftwrap]').on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);
        _this9.bindGiftWrappingForm();
      });
    });
  };
  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    $('.giftWrapping-select').on('change', function (event) {
      var $select = $(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');
      if (!id) {
        return;
      }
      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      $(".giftWrapping-image-" + index).hide();
      $("#giftWrapping-image-" + index + "-" + id).show();
      if (allowMessage) {
        $("#giftWrapping-message-" + index).show();
      } else {
        $("#giftWrapping-message-" + index).hide();
      }
    });
    $('.giftWrapping-select').trigger('change');
    function toggleViews() {
      var value = $('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = $('.giftWrapping-single');
      var $multiForm = $('.giftWrapping-multiple');
      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }
    $('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };
  _proto.bindEvents = function bindEvents() {
    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents();

    // initiate shipping estimator module
    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_8__["default"]($('[data-shipping-estimator]'));
  };
  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/cart/shipping-estimator.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShippingEstimator; });
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.is-nan.js */ "./node_modules/core-js/modules/es6.number.is-nan.js");
/* harmony import */ var core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");








var ShippingEstimator = /*#__PURE__*/function () {
  function ShippingEstimator($element) {
    this.$element = $element;
    this.$state = $('[data-field-type="State"]', this.$element);
    this.initFormValidation();
    this.bindStateCountryChange();
    this.bindEstimatorEvents();
  }
  var _proto = ShippingEstimator.prototype;
  _proto.initFormValidation = function initFormValidation() {
    var _this = this;
    this.shippingEstimator = 'form[data-shipping-estimator]';
    this.shippingValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_4__["default"])({
      submit: this.shippingEstimator + " .shipping-estimate-submit"
    });
    $('.shipping-estimate-submit', this.$element).on('click', function (event) {
      // When switching between countries, the state/region is dynamic
      // Only perform a check for all fields when country has a value
      // Otherwise areAll('valid') will check country for validity
      if ($(_this.shippingEstimator + " select[name=\"shipping-country\"]").val()) {
        _this.shippingValidator.performCheck();
      }
      if (_this.shippingValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
    this.bindValidation();
    this.bindStateValidation();
    this.bindUPSRates();
  };
  _proto.bindValidation = function bindValidation() {
    this.shippingValidator.add([{
      selector: this.shippingEstimator + " select[name=\"shipping-country\"]",
      validate: function validate(cb, val) {
        var countryId = Number(val);
        var result = countryId !== 0 && !Number.isNaN(countryId);
        cb(result);
      },
      errorMessage: 'The \'Country\' field cannot be blank.'
    }]);
  };
  _proto.bindStateValidation = function bindStateValidation() {
    var _this2 = this;
    this.shippingValidator.add([{
      selector: $(this.shippingEstimator + " select[name=\"shipping-state\"]"),
      validate: function validate(cb) {
        var result;
        var $ele = $(_this2.shippingEstimator + " select[name=\"shipping-state\"]");
        if ($ele.length) {
          var eleVal = $ele.val();
          result = eleVal && eleVal.length && eleVal !== 'State/province';
        }
        cb(result);
      },
      errorMessage: 'The \'State/Province\' field cannot be blank.'
    }]);
  }

  /**
   * Toggle between default shipping and ups shipping rates
   */;
  _proto.bindUPSRates = function bindUPSRates() {
    var UPSRateToggle = '.estimator-form-toggleUPSRate';
    $('body').on('click', UPSRateToggle, function (event) {
      var $estimatorFormUps = $('.estimator-form--ups');
      var $estimatorFormDefault = $('.estimator-form--default');
      event.preventDefault();
      $estimatorFormUps.toggleClass('u-hiddenVisually');
      $estimatorFormDefault.toggleClass('u-hiddenVisually');
    });
  };
  _proto.bindStateCountryChange = function bindStateCountryChange() {
    var _this3 = this;
    var $last;

    // Requests the states for a country with AJAX
    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_3__["default"])(this.$state, this.context, {
      useIdForStates: true
    }, function (err, field) {
      if (err) {
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"])({
          text: err,
          type: 'error'
        });
        throw new Error(err);
      }
      var $field = $(field);
      if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
        _this3.shippingValidator.remove(_this3.$state);
      }
      if ($last) {
        _this3.shippingValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _this3.bindStateValidation();
      } else {
        $field.attr('placeholder', 'State/province');
        _common_form_utils__WEBPACK_IMPORTED_MODULE_6__["Validators"].cleanUpStateValidation(field);
      }

      // When you change a country, you swap the state/province between an input and a select dropdown
      // Not all countries require the province to be filled
      // We have to remove this class when we swap since nod validation doesn't cleanup for us
      $(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
    });
  };
  _proto.bindEstimatorEvents = function bindEstimatorEvents() {
    var $estimatorContainer = $('.shipping-estimator');
    var $estimatorForm = $('.estimator-form');
    $estimatorForm.on('submit', function (event) {
      var params = {
        country_id: $('[name="shipping-country"]', $estimatorForm).val(),
        state_id: $('[name="shipping-state"]', $estimatorForm).val(),
        city: $('[name="shipping-city"]', $estimatorForm).val(),
        zip_code: $('[name="shipping-zip"]', $estimatorForm).val()
      };
      event.preventDefault();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
        $('.shipping-quotes').html(response.content);

        // bind the select button
        $('.select-shipping-quote').on('click', function (clickEvent) {
          var quoteId = $('.shipping-quote:checked').val();
          clickEvent.preventDefault();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.submitShippingQuote(quoteId, function () {
            window.location.reload();
          });
        });
      });
    });
    $('.shipping-estimate-show').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $estimatorContainer.removeClass('u-hiddenVisually');
      $('.shipping-estimate-hide').show();
    });
    $('.shipping-estimate-hide').on('click', function (event) {
      event.preventDefault();
      $estimatorContainer.addClass('u-hiddenVisually');
      $('.shipping-estimate-show').show();
      $('.shipping-estimate-hide').hide();
    });
  };
  return ShippingEstimator;
}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (cert) {
  if (typeof cert !== 'string') {
    return false;
  }

  // Add any custom gift certificate validation logic here
  return true;
});

/***/ }),

/***/ "./assets/js/theme/global/sweet-alert.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/global/sweet-alert.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);


// Set defaults for sweetalert2 popup boxes
sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.setDefaults({
  buttonsStyling: false,
  confirmButtonClass: 'button',
  cancelButtonClass: 'button'
});

// Re-export
/* harmony default export */ __webpack_exports__["default"] = (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC9zaGlwcGluZy1lc3RpbWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL3N3ZWV0LWFsZXJ0LmpzIl0sIm5hbWVzIjpbIkNhcnQiLCJfUGFnZU1hbmFnZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsIiRjYXJ0Q29udGVudCIsIiQiLCIkY2FydE1lc3NhZ2VzIiwiJGNhcnRUb3RhbHMiLCIkb3ZlcmxheSIsImhpZGUiLCJiaW5kRXZlbnRzIiwiY2FydFVwZGF0ZSIsIiR0YXJnZXQiLCJfdGhpcyIsIml0ZW1JZCIsImRhdGEiLCIkZWwiLCJvbGRRdHkiLCJwYXJzZUludCIsInZhbCIsIm1heFF0eSIsIm1pblF0eSIsIm1pbkVycm9yIiwibWF4RXJyb3IiLCJuZXdRdHkiLCJzd2FsIiwidGV4dCIsInR5cGUiLCJzaG93IiwidXRpbHMiLCJhcGkiLCJjYXJ0IiwiaXRlbVVwZGF0ZSIsImVyciIsInJlc3BvbnNlIiwic3RhdHVzIiwicmVtb3ZlIiwicmVmcmVzaENvbnRlbnQiLCJlcnJvcnMiLCJqb2luIiwiY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UiLCJwcmVWYWwiLCJfdGhpczIiLCJOdW1iZXIiLCJpbnZhbGlkRW50cnkiLCJjYXJ0UmVtb3ZlSXRlbSIsIl90aGlzMyIsIml0ZW1SZW1vdmUiLCJjYXJ0RWRpdE9wdGlvbnMiLCJfdGhpczQiLCJtb2RhbCIsImRlZmF1bHRNb2RhbCIsIm9wdGlvbnMiLCJ0ZW1wbGF0ZSIsIm9wZW4iLCJwcm9kdWN0QXR0cmlidXRlcyIsImNvbmZpZ3VyZUluQ2FydCIsInVwZGF0ZUNvbnRlbnQiLCJjb250ZW50IiwiYmluZEdpZnRXcmFwcGluZ0Zvcm0iLCJob29rcyIsIm9uIiwiZXZlbnQiLCJvcHRpb24iLCIkY2hhbmdlZE9wdGlvbiIsIiRmb3JtIiwicGFyZW50cyIsIiRzdWJtaXQiLCIkbWVzc2FnZUJveCIsIml0ZW0iLCJhdHRyIiwib3B0aW9uQ2hhbmdlIiwic2VyaWFsaXplIiwicmVzdWx0IiwicHVyY2hhc2luZ19tZXNzYWdlIiwicHJvcCIsInB1cmNoYXNhYmxlIiwiaW5zdG9jayIsIl90aGlzNSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiJGNhcnRJdGVtc1Jvd3MiLCIkY2FydFBhZ2VUaXRsZSIsInRvdGFscyIsInBhZ2VUaXRsZSIsInN0YXR1c01lc3NhZ2VzIiwibGVuZ3RoIiwiZ2V0Q29udGVudCIsImh0bWwiLCJyZXBsYWNlV2l0aCIsInF1YW50aXR5IiwidHJpZ2dlciIsImJpbmRDYXJ0RXZlbnRzIiwiX3RoaXM2IiwiZGVib3VuY2VUaW1lb3V0IiwiX2JpbmQiLCJfZGVib3VuY2UiLCJjdXJyZW50VGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJvblF0eUZvY3VzIiwidmFsdWUiLCJjaGFuZ2UiLCJzdHJpbmciLCJzaG93Q2FuY2VsQnV0dG9uIiwidGhlbiIsIm9wZW5UaW1lIiwiRGF0ZSIsImNvbmZpcm0iLCJkZWx0YSIsIml0ZW1zIiwiZmluZCIsImVhY2giLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImlkIiwidXBkYXRlIiwiYWxlcnQiLCJiaW5kUHJvbW9Db2RlRXZlbnRzIiwiX3RoaXM3IiwiJGNvdXBvbkNvbnRhaW5lciIsIiRjb3Vwb25Gb3JtIiwiJGNvZGVJbnB1dCIsImNvZGUiLCJhcHBseUNvZGUiLCJiaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzIiwiX3RoaXM4IiwiJGNlcnRDb250YWluZXIiLCIkY2VydEZvcm0iLCIkY2VydElucHV0IiwidG9nZ2xlIiwiZ2lmdENlcnRDaGVjayIsImFwcGx5R2lmdENlcnRpZmljYXRlIiwicmVzcCIsImJpbmRHaWZ0V3JhcHBpbmdFdmVudHMiLCJfdGhpczkiLCJnZXRJdGVtR2lmdFdyYXBwaW5nT3B0aW9ucyIsIiRzZWxlY3QiLCJpbmRleCIsImFsbG93TWVzc2FnZSIsInRvZ2dsZVZpZXdzIiwiJHNpbmdsZUZvcm0iLCIkbXVsdGlGb3JtIiwic2hpcHBpbmdFc3RpbWF0b3IiLCJTaGlwcGluZ0VzdGltYXRvciIsIlBhZ2VNYW5hZ2VyIiwiJGVsZW1lbnQiLCIkc3RhdGUiLCJpbml0Rm9ybVZhbGlkYXRpb24iLCJiaW5kU3RhdGVDb3VudHJ5Q2hhbmdlIiwiYmluZEVzdGltYXRvckV2ZW50cyIsInNoaXBwaW5nVmFsaWRhdG9yIiwibm9kIiwic3VibWl0IiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiYmluZFZhbGlkYXRpb24iLCJiaW5kU3RhdGVWYWxpZGF0aW9uIiwiYmluZFVQU1JhdGVzIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwiY291bnRyeUlkIiwiaXNOYU4iLCJlcnJvck1lc3NhZ2UiLCIkZWxlIiwiZWxlVmFsIiwiVVBTUmF0ZVRvZ2dsZSIsIiRlc3RpbWF0b3JGb3JtVXBzIiwiJGVzdGltYXRvckZvcm1EZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCIkbGFzdCIsInN0YXRlQ291bnRyeSIsImNvbnRleHQiLCJ1c2VJZEZvclN0YXRlcyIsImZpZWxkIiwiRXJyb3IiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJpcyIsIlZhbGlkYXRvcnMiLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwicmVtb3ZlQ2xhc3MiLCIkZXN0aW1hdG9yQ29udGFpbmVyIiwiJGVzdGltYXRvckZvcm0iLCJwYXJhbXMiLCJjb3VudHJ5X2lkIiwic3RhdGVfaWQiLCJjaXR5IiwiemlwX2NvZGUiLCJnZXRTaGlwcGluZ1F1b3RlcyIsImNsaWNrRXZlbnQiLCJxdW90ZUlkIiwic3VibWl0U2hpcHBpbmdRdW90ZSIsImFkZENsYXNzIiwiY2VydCIsInN3ZWV0QWxlcnQiLCJzZXREZWZhdWx0cyIsImJ1dHRvbnNTdHlsaW5nIiwiY29uZmlybUJ1dHRvbkNsYXNzIiwiY2FuY2VsQnV0dG9uQ2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBRXVCO0FBQ2pCO0FBQ1c7QUFDWjtBQUNOO0FBQUEsSUFFbkJBLElBQUksMEJBQUFDLFlBQUE7RUFBQSxTQUFBRCxLQUFBO0lBQUEsT0FBQUMsWUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7RUFBQTtFQUFBQyxjQUFBLENBQUFKLElBQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFJLE1BQUEsR0FBQUwsSUFBQSxDQUFBTSxTQUFBO0VBQUFELE1BQUEsQ0FDckJFLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFBLEVBQUc7SUFDTixJQUFJLENBQUNDLFlBQVksR0FBR0MsQ0FBQyxDQUFDLHFCQUFxQixDQUFDO0lBQzVDLElBQUksQ0FBQ0MsYUFBYSxHQUFHRCxDQUFDLENBQUMsb0JBQW9CLENBQUM7SUFDNUMsSUFBSSxDQUFDRSxXQUFXLEdBQUdGLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztJQUMxQyxJQUFJLENBQUNHLFFBQVEsR0FBR0gsQ0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQzNDSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBRWIsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztFQUNyQixDQUFDO0VBQUFULE1BQUEsQ0FFRFUsVUFBVSxHQUFWLFNBQUFBLFVBQVVBLENBQUNDLE9BQU8sRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFDaEIsSUFBTUMsTUFBTSxHQUFHRixPQUFPLENBQUNHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDekMsSUFBTUMsR0FBRyxHQUFHWCxDQUFDLFdBQVNTLE1BQVEsQ0FBQztJQUMvQixJQUFNRyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0YsR0FBRyxDQUFDRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUN0QyxJQUFNQyxNQUFNLEdBQUdGLFFBQVEs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Q0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUN3RCxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUFDLEtBQUssRUFBSTtNQUM5Q0EsS0FBSyxDQUFDcUMsY0FBYyxDQUFDLENBQUM7TUFFdEJzRixtQkFBbUIsQ0FBQ1csUUFBUSxDQUFDLGtCQUFrQixDQUFDO01BQ2hEL0wsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUN1QixJQUFJLENBQUMsQ0FBQztNQUNuQ3ZCLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDSSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUM7RUFDTixDQUFDO0VBQUEsT0FBQXdJLGlCQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FDckxMO0FBQWUseUVBQVVvRCxJQUFJLEVBQUU7RUFDM0IsSUFBSSxPQUFPQSxJQUFJLEtBQUssUUFBUSxFQUFFO0lBQzFCLE9BQU8sS0FBSztFQUNoQjs7RUFFQTtFQUNBLE9BQU8sSUFBSTtBQUNmLEM7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFxQzs7QUFFckM7QUFDQUMsa0RBQVUsQ0FBQ0MsV0FBVyxDQUFDO0VBQ25CQyxjQUFjLEVBQUUsS0FBSztFQUNyQkMsa0JBQWtCLEVBQUUsUUFBUTtFQUM1QkMsaUJBQWlCLEVBQUU7QUFDdkIsQ0FBQyxDQUFDOztBQUVGO0FBQ2VKLGlIQUFVLEUiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZ2lmdENlcnRDaGVjayBmcm9tICcuL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvcic7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IFNoaXBwaW5nRXN0aW1hdG9yIGZyb20gJy4vY2FydC9zaGlwcGluZy1lc3RpbWF0b3InO1xuaW1wb3J0IHsgZGVmYXVsdE1vZGFsIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IHN3YWwgZnJvbSAnLi9nbG9iYWwvc3dlZXQtYWxlcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuJGNhcnRDb250ZW50ID0gJCgnW2RhdGEtY2FydC1jb250ZW50XScpO1xuICAgICAgICB0aGlzLiRjYXJ0TWVzc2FnZXMgPSAkKCdbZGF0YS1jYXJ0LXN0YXR1c10nKTtcbiAgICAgICAgdGhpcy4kY2FydFRvdGFscyA9ICQoJ1tkYXRhLWNhcnQtdG90YWxzXScpO1xuICAgICAgICB0aGlzLiRvdmVybGF5ID0gJCgnW2RhdGEtY2FydF0gLmxvYWRpbmdPdmVybGF5JylcbiAgICAgICAgICAgIC5oaWRlKCk7IC8vIFRPRE86IHRlbXBvcmFyeSB1bnRpbCByb3BlciBwdWxscyBpbiBoaXMgY2FydCBjb21wb25lbnRzXG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgY2FydFVwZGF0ZSgkdGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9ICR0YXJnZXQuZGF0YSgnY2FydEl0ZW1pZCcpO1xuICAgICAgICBjb25zdCAkZWwgPSAkKGAjcXR5LSR7aXRlbUlkfWApO1xuICAgICAgICBjb25zdCBvbGRRdHkgPSBwYXJzZUludCgkZWwudmFsKCksIDEwKTtcbiAgICAgICAgY29uc3QgbWF4UXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcbiAgICAgICAgY29uc3QgbWluUXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcbiAgICAgICAgY29uc3QgbWluRXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNaW5FcnJvcicpO1xuICAgICAgICBjb25zdCBtYXhFcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1heEVycm9yJyk7XG4gICAgICAgIGNvbnN0IG5ld1F0eSA9ICR0YXJnZXQuZGF0YSgnYWN0aW9uJykgPT09ICdpbmMnID8gb2xkUXR5ICsgMSA6IG9sZFF0eSAtIDE7XG4gICAgICAgIC8vIERvZXMgbm90IHF1YWxpdHkgZm9yIG1pbi9tYXggcXVhbnRpdHlcbiAgICAgICAgaWYgKG5ld1F0eSA8IG1pblF0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgIHRleHQ6IG1pbkVycm9yLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChtYXhRdHkgPiAwICYmIG5ld1F0eSA+IG1heFF0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgIHRleHQ6IG1heEVycm9yLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1VcGRhdGUoaXRlbUlkLCBuZXdRdHksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcXVhbnRpdHkgaXMgY2hhbmdlZCBcIjFcIiBmcm9tIFwiMFwiLCB3ZSBoYXZlIHRvIHJlbW92ZSB0aGUgcm93LlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9IChuZXdRdHkgPT09IDApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudChyZW1vdmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSgkdGFyZ2V0LCBwcmVWYWwgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9ICR0YXJnZXQuZGF0YSgnY2FydEl0ZW1pZCcpO1xuICAgICAgICBjb25zdCAkZWwgPSAkKGAjcXR5LSR7aXRlbUlkfWApO1xuICAgICAgICBjb25zdCBtYXhRdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xuICAgICAgICBjb25zdCBtaW5RdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xuICAgICAgICBjb25zdCBvbGRRdHkgPSBwcmVWYWwgIT09IG51bGwgPyBwcmVWYWwgOiBtaW5RdHk7XG4gICAgICAgIGNvbnN0IG1pbkVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWluRXJyb3InKTtcbiAgICAgICAgY29uc3QgbWF4RXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNYXhFcnJvcicpO1xuICAgICAgICBjb25zdCBuZXdRdHkgPSBwYXJzZUludChOdW1iZXIoJGVsLnZhbCgpKSwgMTApO1xuICAgICAgICBsZXQgaW52YWxpZEVudHJ5O1xuXG4gICAgICAgIC8vIERvZXMgbm90IHF1YWxpdHkgZm9yIG1pbi9tYXggcXVhbnRpdHlcbiAgICAgICAgaWYgKCFuZXdRdHkpIHtcbiAgICAgICAgICAgIGludmFsaWRFbnRyeSA9ICRlbC52YWwoKTtcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgIHJldHVybiBzd2FsKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBgJHtpbnZhbGlkRW50cnl9IGlzIG5vdCBhIHZhbGlkIGVudHJ5YCxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3UXR5IDwgbWluUXR5KSB7XG4gICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICByZXR1cm4gc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogbWluRXJyb3IsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG1heFF0eSA+IDAgJiYgbmV3UXR5ID4gbWF4UXR5KSB7XG4gICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICByZXR1cm4gc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogbWF4RXJyb3IsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1VcGRhdGUoaXRlbUlkLCBuZXdRdHksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcXVhbnRpdHkgaXMgY2hhbmdlZCBcIjFcIiBmcm9tIFwiMFwiLCB3ZSBoYXZlIHRvIHJlbW92ZSB0aGUgcm93LlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9IChuZXdRdHkgPT09IDApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudChyZW1vdmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYXJ0UmVtb3ZlSXRlbShpdGVtSWQpIHtcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1SZW1vdmUoaXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhcnRFZGl0T3B0aW9ucyhpdGVtSWQpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvY29uZmlndXJlLXByb2R1Y3QnLFxuICAgICAgICB9O1xuXG4gICAgICAgIG1vZGFsLm9wZW4oKTtcblxuICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMuY29uZmlndXJlSW5DYXJ0KGl0ZW1JZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UuY29udGVudCk7XG5cbiAgICAgICAgICAgIHRoaXMuYmluZEdpZnRXcmFwcGluZ0Zvcm0oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXRpbHMuaG9va3Mub24oJ3Byb2R1Y3Qtb3B0aW9uLWNoYW5nZScsIChldmVudCwgb3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkY2hhbmdlZE9wdGlvbiA9ICQob3B0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0ICRmb3JtID0gJGNoYW5nZWRPcHRpb24ucGFyZW50cygnZm9ybScpO1xuICAgICAgICAgICAgY29uc3QgJHN1Ym1pdCA9ICQoJ2lucHV0LmJ1dHRvbicsICRmb3JtKTtcbiAgICAgICAgICAgIGNvbnN0ICRtZXNzYWdlQm94ID0gJCgnLmFsZXJ0TWVzc2FnZUJveCcpO1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9ICQoJ1tuYW1lPVwiaXRlbV9pZFwiXScsICRmb3JtKS5hdHRyKCd2YWx1ZScpO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKGl0ZW0sICRmb3JtLnNlcmlhbGl6ZSgpLCAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzdWx0LmRhdGEgfHwge307XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgncC5hbGVydEJveC1tZXNzYWdlJywgJG1lc3NhZ2VCb3gpLnRleHQoZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICRtZXNzYWdlQm94LnNob3coKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZUJveC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZnJlc2hDb250ZW50KHJlbW92ZSkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIGNvbnN0ICRjYXJ0SXRlbXNSb3dzID0gJCgnW2RhdGEtaXRlbS1yb3ddJywgdGhpcy4kY2FydENvbnRlbnQpO1xuICAgICAgICBjb25zdCAkY2FydFBhZ2VUaXRsZSA9ICQoJ1tkYXRhLWNhcnQtcGFnZS10aXRsZV0nKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ2NhcnQvY29udGVudCcsXG4gICAgICAgICAgICAgICAgdG90YWxzOiAnY2FydC90b3RhbHMnLFxuICAgICAgICAgICAgICAgIHBhZ2VUaXRsZTogJ2NhcnQvcGFnZS10aXRsZScsXG4gICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZXM6ICdjYXJ0L3N0YXR1cy1tZXNzYWdlcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBsYXN0IGl0ZW0gZnJvbSBjYXJ0PyBSZWxvYWRcbiAgICAgICAgaWYgKHJlbW92ZSAmJiAkY2FydEl0ZW1zUm93cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0Q29udGVudC5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy4kY2FydFRvdGFscy5odG1sKHJlc3BvbnNlLnRvdGFscyk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0TWVzc2FnZXMuaHRtbChyZXNwb25zZS5zdGF0dXNNZXNzYWdlcyk7XG5cbiAgICAgICAgICAgICRjYXJ0UGFnZVRpdGxlLnJlcGxhY2VXaXRoKHJlc3BvbnNlLnBhZ2VUaXRsZSk7XG4gICAgICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJywgdGhpcy4kY2FydENvbnRlbnQpLmRhdGEoJ2NhcnRRdWFudGl0eScpIHx8IDA7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF1YW50aXR5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZENhcnRFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IGRlYm91bmNlVGltZW91dCA9IDQwMDtcbiAgICAgICAgY29uc3QgY2FydFVwZGF0ZSA9IF8uYmluZChfLmRlYm91bmNlKHRoaXMuY2FydFVwZGF0ZSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlID0gXy5iaW5kKF8uZGVib3VuY2UodGhpcy5jYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IGNhcnRSZW1vdmVJdGVtID0gXy5iaW5kKF8uZGVib3VuY2UodGhpcy5jYXJ0UmVtb3ZlSXRlbSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XG4gICAgICAgIGxldCBwcmVWYWw7XG5cbiAgICAgICAgLy8gY2FydCB1cGRhdGVcbiAgICAgICAgJCgnW2RhdGEtY2FydC11cGRhdGVdJywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgY2FydCBxdWFudGl0eVxuICAgICAgICAgICAgY2FydFVwZGF0ZSgkdGFyZ2V0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY2FydCBxdHkgbWFudWFsbHkgdXBkYXRlc1xuICAgICAgICAkKCcuY2FydC1pdGVtLXF0eS1pbnB1dCcsIHRoaXMuJGNhcnRDb250ZW50KS5vbignZm9jdXMnLCBmdW5jdGlvbiBvblF0eUZvY3VzKCkge1xuICAgICAgICAgICAgcHJlVmFsID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfSkuY2hhbmdlKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGNhcnQgcXVhbnRpdHlcbiAgICAgICAgICAgIGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlKCR0YXJnZXQsIHByZVZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5jYXJ0LXJlbW92ZScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NhcnRJdGVtaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY29uZmlybURlbGV0ZScpO1xuICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG4gICAgICAgICAgICAgICAgY2FydFJlbW92ZUl0ZW0oaXRlbUlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtaXRlbS1lZGl0XScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2l0ZW1FZGl0Jyk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBlZGl0IGl0ZW0gaW4gY2FydFxuICAgICAgICAgICAgdGhpcy5jYXJ0RWRpdE9wdGlvbnMoaXRlbUlkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnI2VtcHR5Q2FydCcpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3BlblRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY29uZmlybSgkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NvbmZpcm0nKSk7XG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IG5ldyBEYXRlKCkgLSBvcGVuVGltZTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIERlbHRhIHdvcmthcm91bmQgZm9yIENocm9tZSdzIFwicHJldmVudCBwb3B1cFwiXG4gICAgICAgICAgICBpZiAoIXJlc3VsdCAmJiBkZWx0YSA+IDEwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGl0ZW1zPVtdO1xuICAgICAgICAgICAgdGhpcy4kY2FydENvbnRlbnQuZmluZCgnLmNhcnQtcmVtb3ZlJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQodGhpcykuZGF0YSgnY2FydC1pdGVtaWQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkZWwgPSAwO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAkKHRoaXMpLmRhdGEoJ2NhcnQtaXRlbWlkJykgKVxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goe2lkOml0ZW1JZCxxdWFudGl0eTowfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC51cGRhdGUoaXRlbXMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZFByb21vQ29kZUV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgJGNvdXBvbkNvbnRhaW5lciA9ICQoJy5jb3Vwb24tY29kZScpO1xuICAgICAgICBjb25zdCAkY291cG9uRm9ybSA9ICQoJy5jb3Vwb24tZm9ybScpO1xuICAgICAgICBjb25zdCAkY29kZUlucHV0ID0gJCgnW25hbWU9XCJjb3Vwb25jb2RlXCJdJywgJGNvdXBvbkZvcm0pO1xuXG4gICAgICAgICQoJy5jb3Vwb24tY29kZS1hZGQnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmhpZGUoKTtcbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuc2hvdygpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLnNob3coKTtcbiAgICAgICAgICAgICRjb2RlSW5wdXQudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuaGlkZSgpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJy5jb3Vwb24tY29kZS1hZGQnKS5zaG93KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRjb3Vwb25Gb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNvZGVJbnB1dC52YWwoKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gRW1wdHkgY29kZVxuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAkY29kZUlucHV0LmRhdGEoJ2Vycm9yJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5Q29kZShjb2RlLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRjZXJ0Q29udGFpbmVyID0gJCgnLmdpZnQtY2VydGlmaWNhdGUtY29kZScpO1xuICAgICAgICBjb25zdCAkY2VydEZvcm0gPSAkKCcuY2FydC1naWZ0LWNlcnRpZmljYXRlLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGNlcnRJbnB1dCA9ICQoJ1tuYW1lPVwiY2VydGNvZGVcIl0nLCAkY2VydEZvcm0pO1xuXG4gICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWFkZCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJGNlcnRDb250YWluZXIudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkJykudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGNlcnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNlcnRJbnB1dC52YWwoKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKCFnaWZ0Q2VydENoZWNrKGNvZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAkY2VydElucHV0LmRhdGEoJ2Vycm9yJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5R2lmdENlcnRpZmljYXRlKGNvZGUsIChlcnIsIHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3AuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcblxuICAgICAgICAkKCdbZGF0YS1pdGVtLWdpZnR3cmFwXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnaXRlbUdpZnR3cmFwJyk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvZ2lmdC13cmFwcGluZy1mb3JtJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIG1vZGFsLm9wZW4oKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMoaXRlbUlkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UuY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdGb3JtKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRXcmFwcGluZ0Zvcm0oKSB7XG4gICAgICAgICQoJy5naWZ0V3JhcHBpbmctc2VsZWN0Jykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSAkc2VsZWN0LnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSAkc2VsZWN0LmRhdGEoJ2luZGV4Jyk7XG5cbiAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGFsbG93TWVzc2FnZSA9ICRzZWxlY3QuZmluZChgb3B0aW9uW3ZhbHVlPSR7aWR9XWApLmRhdGEoJ2FsbG93TWVzc2FnZScpO1xuXG4gICAgICAgICAgICAkKGAuZ2lmdFdyYXBwaW5nLWltYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xuICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1pbWFnZS0ke2luZGV4fS0ke2lkfWApLnNob3coKTtcblxuICAgICAgICAgICAgaWYgKGFsbG93TWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctbWVzc2FnZS0ke2luZGV4fWApLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1tZXNzYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuZ2lmdFdyYXBwaW5nLXNlbGVjdCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZVZpZXdzKCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAkKCdpbnB1dDpyYWRpb1tuYW1lID1cImdpZnR3cmFwdHlwZVwiXTpjaGVja2VkJykudmFsKCk7XG4gICAgICAgICAgICBjb25zdCAkc2luZ2xlRm9ybSA9ICQoJy5naWZ0V3JhcHBpbmctc2luZ2xlJyk7XG4gICAgICAgICAgICBjb25zdCAkbXVsdGlGb3JtID0gJCgnLmdpZnRXcmFwcGluZy1tdWx0aXBsZScpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09ICdzYW1lJykge1xuICAgICAgICAgICAgICAgICRzaW5nbGVGb3JtLnNob3coKTtcbiAgICAgICAgICAgICAgICAkbXVsdGlGb3JtLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNpbmdsZUZvcm0uaGlkZSgpO1xuICAgICAgICAgICAgICAgICRtdWx0aUZvcm0uc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJCgnW25hbWU9XCJnaWZ0d3JhcHR5cGVcIl0nKS5vbignY2xpY2snLCB0b2dnbGVWaWV3cyk7XG5cbiAgICAgICAgdG9nZ2xlVmlld3MoKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmJpbmRDYXJ0RXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZFByb21vQ29kZUV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzKCk7XG5cbiAgICAgICAgLy8gaW5pdGlhdGUgc2hpcHBpbmcgZXN0aW1hdG9yIG1vZHVsZVxuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gbmV3IFNoaXBwaW5nRXN0aW1hdG9yKCQoJ1tkYXRhLXNoaXBwaW5nLWVzdGltYXRvcl0nKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHN0YXRlQ291bnRyeSBmcm9tICcuLi9jb21tb24vc3RhdGUtY291bnRyeSc7XG5pbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICcuLi9jb21tb24vZm9ybS11dGlscyc7XG5pbXBvcnQgc3dhbCBmcm9tICcuLi9nbG9iYWwvc3dlZXQtYWxlcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwcGluZ0VzdGltYXRvciB7XG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuXG4gICAgICAgIHRoaXMuJHN0YXRlID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJywgdGhpcy4kZWxlbWVudCk7XG4gICAgICAgIHRoaXMuaW5pdEZvcm1WYWxpZGF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmluZFN0YXRlQ291bnRyeUNoYW5nZSgpO1xuICAgICAgICB0aGlzLmJpbmRFc3RpbWF0b3JFdmVudHMoKTtcbiAgICB9XG5cbiAgICBpbml0Rm9ybVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IgPSAnZm9ybVtkYXRhLXNoaXBwaW5nLWVzdGltYXRvcl0nO1xuICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gLnNoaXBwaW5nLWVzdGltYXRlLXN1Ym1pdGAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1zdWJtaXQnLCB0aGlzLiRlbGVtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAvLyBXaGVuIHN3aXRjaGluZyBiZXR3ZWVuIGNvdW50cmllcywgdGhlIHN0YXRlL3JlZ2lvbiBpcyBkeW5hbWljXG4gICAgICAgICAgICAvLyBPbmx5IHBlcmZvcm0gYSBjaGVjayBmb3IgYWxsIGZpZWxkcyB3aGVuIGNvdW50cnkgaGFzIGEgdmFsdWVcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSBhcmVBbGwoJ3ZhbGlkJykgd2lsbCBjaGVjayBjb3VudHJ5IGZvciB2YWxpZGl0eVxuICAgICAgICAgICAgaWYgKCQoYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdYCkudmFsKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYmluZFZhbGlkYXRpb24oKTtcbiAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmluZFVQU1JhdGVzKCk7XG4gICAgfVxuXG4gICAgYmluZFZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdYCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY291bnRyeUlkID0gTnVtYmVyKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvdW50cnlJZCAhPT0gMCAmJiAhTnVtYmVyLmlzTmFOKGNvdW50cnlJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1RoZSBcXCdDb3VudHJ5XFwnIGZpZWxkIGNhbm5vdCBiZSBibGFuay4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgYmluZFN0YXRlVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKSxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGVsZSA9ICQoYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXWApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkZWxlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlVmFsID0gJGVsZS52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZWxlVmFsICYmIGVsZVZhbC5sZW5ndGggJiYgZWxlVmFsICE9PSAnU3RhdGUvcHJvdmluY2UnO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1RoZSBcXCdTdGF0ZS9Qcm92aW5jZVxcJyBmaWVsZCBjYW5ub3QgYmUgYmxhbmsuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBiZXR3ZWVuIGRlZmF1bHQgc2hpcHBpbmcgYW5kIHVwcyBzaGlwcGluZyByYXRlc1xuICAgICAqL1xuICAgIGJpbmRVUFNSYXRlcygpIHtcbiAgICAgICAgY29uc3QgVVBTUmF0ZVRvZ2dsZSA9ICcuZXN0aW1hdG9yLWZvcm0tdG9nZ2xlVVBTUmF0ZSc7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsIFVQU1JhdGVUb2dnbGUsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm1VcHMgPSAkKCcuZXN0aW1hdG9yLWZvcm0tLXVwcycpO1xuICAgICAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm1EZWZhdWx0ID0gJCgnLmVzdGltYXRvci1mb3JtLS1kZWZhdWx0Jyk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICRlc3RpbWF0b3JGb3JtVXBzLnRvZ2dsZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICAkZXN0aW1hdG9yRm9ybURlZmF1bHQudG9nZ2xlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZFN0YXRlQ291bnRyeUNoYW5nZSgpIHtcbiAgICAgICAgbGV0ICRsYXN0O1xuXG4gICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcbiAgICAgICAgc3RhdGVDb3VudHJ5KHRoaXMuJHN0YXRlLCB0aGlzLmNvbnRleHQsIHsgdXNlSWRGb3JTdGF0ZXM6IHRydWUgfSwgKGVyciwgZmllbGQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZXJyLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5nZXRTdGF0dXModGhpcy4kc3RhdGUpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucmVtb3ZlKHRoaXMuJHN0YXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRmaWVsZC5hdHRyKCdwbGFjZWhvbGRlcicsICdTdGF0ZS9wcm92aW5jZScpO1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdoZW4geW91IGNoYW5nZSBhIGNvdW50cnksIHlvdSBzd2FwIHRoZSBzdGF0ZS9wcm92aW5jZSBiZXR3ZWVuIGFuIGlucHV0IGFuZCBhIHNlbGVjdCBkcm9wZG93blxuICAgICAgICAgICAgLy8gTm90IGFsbCBjb3VudHJpZXMgcmVxdWlyZSB0aGUgcHJvdmluY2UgdG8gYmUgZmlsbGVkXG4gICAgICAgICAgICAvLyBXZSBoYXZlIHRvIHJlbW92ZSB0aGlzIGNsYXNzIHdoZW4gd2Ugc3dhcCBzaW5jZSBub2QgdmFsaWRhdGlvbiBkb2Vzbid0IGNsZWFudXAgZm9yIHVzXG4gICAgICAgICAgICAkKHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IpLmZpbmQoJy5mb3JtLWZpZWxkLS1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2Zvcm0tZmllbGQtLXN1Y2Nlc3MnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEVzdGltYXRvckV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgJGVzdGltYXRvckNvbnRhaW5lciA9ICQoJy5zaGlwcGluZy1lc3RpbWF0b3InKTtcbiAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm0gPSAkKCcuZXN0aW1hdG9yLWZvcm0nKTtcblxuICAgICAgICAkZXN0aW1hdG9yRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGNvdW50cnlfaWQ6ICQoJ1tuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBzdGF0ZV9pZDogJCgnW25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBjaXR5OiAkKCdbbmFtZT1cInNoaXBwaW5nLWNpdHlcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICAgICAgemlwX2NvZGU6ICQoJ1tuYW1lPVwic2hpcHBpbmctemlwXCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0U2hpcHBpbmdRdW90ZXMocGFyYW1zLCAnY2FydC9zaGlwcGluZy1xdW90ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5zaGlwcGluZy1xdW90ZXMnKS5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gYmluZCB0aGUgc2VsZWN0IGJ1dHRvblxuICAgICAgICAgICAgICAgICQoJy5zZWxlY3Qtc2hpcHBpbmctcXVvdGUnKS5vbignY2xpY2snLCBjbGlja0V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGVJZCA9ICQoJy5zaGlwcGluZy1xdW90ZTpjaGVja2VkJykudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2xpY2tFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LnN1Ym1pdFNoaXBwaW5nUXVvdGUocXVvdGVJZCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc2hvdycpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuaGlkZSgpO1xuICAgICAgICAgICAgJGVzdGltYXRvckNvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLWhpZGUnKS5zaG93KCk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLWhpZGUnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkZXN0aW1hdG9yQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc2hvdycpLnNob3coKTtcbiAgICAgICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1oaWRlJykuaGlkZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY2VydCkge1xuICAgIGlmICh0eXBlb2YgY2VydCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIEFkZCBhbnkgY3VzdG9tIGdpZnQgY2VydGlmaWNhdGUgdmFsaWRhdGlvbiBsb2dpYyBoZXJlXG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgc3dlZXRBbGVydCBmcm9tICdzd2VldGFsZXJ0Mic7XG5cbi8vIFNldCBkZWZhdWx0cyBmb3Igc3dlZXRhbGVydDIgcG9wdXAgYm94ZXNcbnN3ZWV0QWxlcnQuc2V0RGVmYXVsdHMoe1xuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICBjb25maXJtQnV0dG9uQ2xhc3M6ICdidXR0b24nLFxuICAgIGNhbmNlbEJ1dHRvbkNsYXNzOiAnYnV0dG9uJyxcbn0pO1xuXG4vLyBSZS1leHBvcnRcbmV4cG9ydCBkZWZhdWx0IHN3ZWV0QWxlcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9