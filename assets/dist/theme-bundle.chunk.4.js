(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

/***/ "./assets/js/theme/common/state-country.js":
/*!*************************************************!*\
  !*** ./assets/js/theme/common/state-country.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/transform */ "./node_modules/lodash/transform.js");
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_transform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");









/**
 * If there are no options from bcapp, a text field will be sent. This will create a select element to hold options after the remote request.
 * @returns {jQuery|HTMLElement}
 */
function makeStateRequired(stateElement, context) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    id: attrs.id,
    'data-label': attrs['data-label'],
    class: 'form-select',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<select></select>', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  var $hiddenInput = $('[name*="FormFieldIsText"]');
  if ($hiddenInput.length !== 0) {
    $hiddenInput.remove();
  }
  if ($newElement.prev().find('small').length === 0) {
    // String is injected from localizer
    $newElement.prev().append("<small>" + context.required + "</small>");
  } else {
    $newElement.prev().find('small').show();
  }
  return $newElement;
}

/**
 * If a country with states is the default, a select will be sent,
 * In this case we need to be able to switch to an input field and hide the required field
 */
function makeStateOptional(stateElement) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    type: 'text',
    id: attrs.id,
    'data-label': attrs['data-label'],
    class: 'form-input',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<input />', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  if ($newElement.length !== 0) {
    Object(_form_utils__WEBPACK_IMPORTED_MODULE_6__["insertStateHiddenField"])($newElement);
    $newElement.prev().find('small').hide();
  }
  return $newElement;
}

/**
 * Adds the array of options from the remote request to the newly created select box.
 * @param {Object} statesArray
 * @param {jQuery} $selectElement
 * @param {Object} options
 */
function addOptions(statesArray, $selectElement, options) {
  var container = [];
  container.push("<option value=\"\">" + statesArray.prefix + "</option>");
  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()($selectElement)) {
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(statesArray.states, function (stateObj) {
      if (options.useIdForStates) {
        container.push("<option value=\"" + stateObj.id + "\">" + stateObj.name + "</option>");
      } else {
        container.push("<option value=\"" + stateObj.name + "\">" + stateObj.name + "</option>");
      }
    });
    $selectElement.html(container.join(' '));
  }
}

/**
 *
 * @param {jQuery} stateElement
 * @param {Object} context
 * @param {Object} options
 * @param {Function} callback
 */
/* harmony default export */ __webpack_exports__["default"] = (function (stateElement, context, options, callback) {
  if (context === void 0) {
    context = {};
  }
  /**
   * Backwards compatible for three parameters instead of four
   *
   * Available options:
   *
   * useIdForStates {Bool} - Generates states dropdown using id for values instead of strings
   */
  if (typeof options === 'function') {
    /* eslint-disable no-param-reassign */
    callback = options;
    options = {};
    /* eslint-enable no-param-reassign */
  }
  $('select[data-field-type="Country"]').on('change', function (event) {
    var countryName = $(event.currentTarget).val();
    if (countryName === '') {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.country.getByName(countryName, function (err, response) {
      if (err) {
        Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["showAlertModal"])(context.state_error);
        return callback(err);
      }
      var $currentInput = $('[data-field-type="State"]');
      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(response.data.states)) {
        // The element may have been replaced with a select, reselect it
        var $selectElement = makeStateRequired($currentInput, context);
        addOptions(response.data, $selectElement, options);
        callback(null, $selectElement);
      } else {
        var newElement = makeStateOptional($currentInput, context);
        callback(null, newElement);
      }
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9tb2RlbHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9zdGF0ZS1jb3VudHJ5LmpzIl0sIm5hbWVzIjpbImlucHV0VGFnTmFtZXMiLCJjbGFzc2lmeUlucHV0IiwiaW5wdXQiLCJmb3JtRmllbGRDbGFzcyIsIiRpbnB1dCIsIiQiLCIkZm9ybUZpZWxkIiwicGFyZW50IiwidGFnTmFtZSIsInByb3AiLCJ0b0xvd2VyQ2FzZSIsImNsYXNzTmFtZSIsInNwZWNpZmljQ2xhc3NOYW1lIiwiaW5wdXRUeXBlIiwiX2luY2x1ZGVzIiwiX2NhbWVsQ2FzZSIsIl9jYXBpdGFsaXplIiwiYWRkQ2xhc3MiLCJjbGFzc2lmeUZvcm0iLCJmb3JtU2VsZWN0b3IiLCJvcHRpb25zIiwiJGZvcm0iLCIkaW5wdXRzIiwiZmluZCIsImpvaW4iLCJfb3B0aW9ucyIsIl9vcHRpb25zJGZvcm1GaWVsZENsYSIsImVhY2giLCJfXyIsImdldEZpZWxkSWQiLCIkZmllbGQiLCJmaWVsZElkIiwibWF0Y2giLCJsZW5ndGgiLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwiJHN0YXRlRmllbGQiLCJzdGF0ZUZpZWxkQXR0cnMiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYWZ0ZXIiLCJWYWxpZGF0b3JzIiwic2V0RW1haWxWYWxpZGF0aW9uIiwidmFsaWRhdG9yIiwiZmllbGQiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJ2YWwiLCJyZXN1bHQiLCJmb3JtcyIsImVtYWlsIiwiZXJyb3JNZXNzYWdlIiwic2V0UGFzc3dvcmRWYWxpZGF0aW9uIiwicGFzc3dvcmRTZWxlY3RvciIsInBhc3N3b3JkMlNlbGVjdG9yIiwicmVxdWlyZW1lbnRzIiwiaXNPcHRpb25hbCIsIiRwYXNzd29yZCIsInBhc3N3b3JkVmFsaWRhdGlvbnMiLCJSZWdFeHAiLCJhbHBoYSIsIm51bWVyaWMiLCJtaW5sZW5ndGgiLCJlcnJvciIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInNlbGVjdG9ycyIsImVycm9yU2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwibWF4UHJpY2VTZWxlY3RvciIsIm1pblByaWNlU2VsZWN0b3IiLCJjb25maWd1cmUiLCJmb3JtIiwicHJldmVudFN1Ym1pdCIsInN1Y2Nlc3NDbGFzcyIsInNldE1lc3NhZ2VPcHRpb25zIiwiZXJyb3JTcGFuIiwic2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbiIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCIkZmllbGRDbGFzc0VsZW1lbnQiLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsIm5vZCIsImNsYXNzZXMiLCJmb3JFYWNoIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInJlIiwidGVzdCIsInBhc3N3b3JkIiwibm90RW1wdHkiLCJtYWtlU3RhdGVSZXF1aXJlZCIsInN0YXRlRWxlbWVudCIsImNvbnRleHQiLCJhdHRycyIsIl90cmFuc2Zvcm0iLCJpdGVtIiwicmV0IiwicmVwbGFjZW1lbnRBdHRyaWJ1dGVzIiwiaWQiLCJjbGFzcyIsInJlcGxhY2VXaXRoIiwiJG5ld0VsZW1lbnQiLCIkaGlkZGVuSW5wdXQiLCJyZW1vdmUiLCJwcmV2IiwiYXBwZW5kIiwicmVxdWlyZWQiLCJzaG93IiwibWFrZVN0YXRlT3B0aW9uYWwiLCJoaWRlIiwiYWRkT3B0aW9ucyIsInN0YXRlc0FycmF5IiwiJHNlbGVjdEVsZW1lbnQiLCJjb250YWluZXIiLCJwdXNoIiwicHJlZml4IiwiX2lzRW1wdHkiLCJfZWFjaCIsInN0YXRlcyIsInN0YXRlT2JqIiwidXNlSWRGb3JTdGF0ZXMiLCJodG1sIiwiY2FsbGJhY2siLCJvbiIsImV2ZW50IiwiY291bnRyeU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwidXRpbHMiLCJhcGkiLCJjb3VudHJ5IiwiZ2V0QnlOYW1lIiwiZXJyIiwicmVzcG9uc2UiLCJzaG93QWxlcnRNb2RhbCIsInN0YXRlX2Vycm9yIiwiJGN1cnJlbnRJbnB1dCIsIm5ld0VsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDd0I7QUFDVztBQUVuQyxJQUFNQSxhQUFhLEdBQUcsQ0FDbEIsT0FBTyxFQUNQLFFBQVEsRUFDUixVQUFVLENBQ2I7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0MsYUFBYUEsQ0FBQ0MsS0FBSyxFQUFFQyxjQUFjLEVBQUU7RUFDMUMsSUFBTUMsTUFBTSxHQUFHQyxDQUFDLENBQUNILEtBQUssQ0FBQztFQUN2QixJQUFNSSxVQUFVLEdBQUdGLE1BQU0sQ0FBQ0csTUFBTSxPQUFLSixjQUFnQixDQUFDO0VBQ3RELElBQU1LLE9BQU8sR0FBR0osTUFBTSxDQUFDSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0VBRXBELElBQUlDLFNBQVMsR0FBTVIsY0FBYyxVQUFLSyxPQUFTO0VBQy9DLElBQUlJLGlCQUFpQjs7RUFFckI7RUFDQSxJQUFJSixPQUFPLEtBQUssT0FBTyxFQUFFO0lBQ3JCLElBQU1LLFNBQVMsR0FBR1QsTUFBTSxDQUFDSyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRXJDLElBQUlLLHNEQUFBLENBQVcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxFQUFFRCxTQUFTLENBQUMsRUFBRTtNQUN4RDtNQUNBRixTQUFTLEdBQU1SLGNBQWMsVUFBS1ksdURBQUEsQ0FBWUYsU0FBUyxDQUFHO0lBQzlELENBQUMsTUFBTTtNQUNIO01BQ0FELGlCQUFpQixRQUFNRCxTQUFTLEdBQUdLLHdEQUFBLENBQWFILFNBQVMsQ0FBRztJQUNoRTtFQUNKOztFQUVBO0VBQ0EsT0FBT1AsVUFBVSxDQUNaVyxRQUFRLENBQUNOLFNBQVMsQ0FBQyxDQUNuQk0sUUFBUSxDQUFDTCxpQkFBaUIsQ0FBQztBQUNw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aEQsSUFBSStFLFdBQVcsS0FBSyxFQUFFLEVBQUU7TUFDcEI7SUFDSjtJQUVBRSxrRUFBSyxDQUFDQyxHQUFHLENBQUNDLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDTCxXQUFXLEVBQUUsVUFBQ00sR0FBRyxFQUFFQyxRQUFRLEVBQUs7TUFDeEQsSUFBSUQsR0FBRyxFQUFFO1FBQ0xFLG9FQUFjLENBQUN6QyxPQUFPLENBQUMwQyxXQUFXLENBQUM7UUFDbkMsT0FBT1osUUFBUSxDQUFDUyxHQUFHLENBQUM7TUFDeEI7TUFFQSxJQUFNSSxhQUFhLEdBQUdySSxDQUFDLENBQUMsMkJBQTJCLENBQUM7TUFFcEQsSUFBSSxDQUFDa0gscURBQUEsQ0FBVWdCLFFBQVEsQ0FBQ3RELElBQUksQ0FBQ3dDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDO1FBQ0EsSUFBTU4sY0FBYyxHQUFHdEIsaUJBQWlCLENBQUM2QyxhQUFhLEVBQUUzQyxPQUFPLENBQUM7UUFFaEVrQixVQUFVLENBQUNzQixRQUFRLENBQUN0RCxJQUFJLEVBQUVrQyxjQUFjLEVBQUUvRixPQUFPLENBQUM7UUFDbER5RyxRQUFRLENBQUMsSUFBSSxFQUFFVixjQUFjLENBQUM7TUFDbEMsQ0FBQyxNQUFNO1FBQ0gsSUFBTXdCLFVBQVUsR0FBRzVCLGlCQUFpQixDQUFDMkIsYUFBYSxFQUFFM0MsT0FBTyxDQUFDO1FBRTVEOEIsUUFBUSxDQUFDLElBQUksRUFBRWMsVUFBVSxDQUFDO01BQzlCO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ04sQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbm9kIGZyb20gJy4vbm9kJztcbmltcG9ydCBmb3JtcyBmcm9tICcuL21vZGVscy9mb3Jtcyc7XG5cbmNvbnN0IGlucHV0VGFnTmFtZXMgPSBbXG4gICAgJ2lucHV0JyxcbiAgICAnc2VsZWN0JyxcbiAgICAndGV4dGFyZWEnLFxuXTtcblxuLyoqXG4gKiBBcHBseSBjbGFzcyBuYW1lIHRvIGFuIGlucHV0IGVsZW1lbnQgb24gaXRzIHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBpbnB1dFxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1GaWVsZENsYXNzXG4gKiBAcmV0dXJuIHtvYmplY3R9IEVsZW1lbnQgaXRzZWxmXG4gKi9cbmZ1bmN0aW9uIGNsYXNzaWZ5SW5wdXQoaW5wdXQsIGZvcm1GaWVsZENsYXNzKSB7XG4gICAgY29uc3QgJGlucHV0ID0gJChpbnB1dCk7XG4gICAgY29uc3QgJGZvcm1GaWVsZCA9ICRpbnB1dC5wYXJlbnQoYC4ke2Zvcm1GaWVsZENsYXNzfWApO1xuICAgIGNvbnN0IHRhZ05hbWUgPSAkaW5wdXQucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBsZXQgY2xhc3NOYW1lID0gYCR7Zm9ybUZpZWxkQ2xhc3N9LS0ke3RhZ05hbWV9YDtcbiAgICBsZXQgc3BlY2lmaWNDbGFzc05hbWU7XG5cbiAgICAvLyBJbnB1dCBjYW4gYmUgdGV4dC9jaGVja2JveC9yYWRpbyBldGMuLi5cbiAgICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICBjb25zdCBpbnB1dFR5cGUgPSAkaW5wdXQucHJvcCgndHlwZScpO1xuXG4gICAgICAgIGlmIChfLmluY2x1ZGVzKFsncmFkaW8nLCAnY2hlY2tib3gnLCAnc3VibWl0J10sIGlucHV0VHlwZSkpIHtcbiAgICAgICAgICAgIC8vIGllOiAuZm9ybS1maWVsZC0tY2hlY2tib3gsIC5mb3JtLWZpZWxkLS1yYWRpb1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gYCR7Zm9ybUZpZWxkQ2xhc3N9LS0ke18uY2FtZWxDYXNlKGlucHV0VHlwZSl9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGllOiAuZm9ybS1maWVsZC0taW5wdXQgLmZvcm0tZmllbGQtLWlucHV0VGV4dFxuICAgICAgICAgICAgc3BlY2lmaWNDbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9JHtfLmNhcGl0YWxpemUoaW5wdXRUeXBlKX1gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgY2xhc3MgbW9kaWZpZXJcbiAgICByZXR1cm4gJGZvcm1GaWVsZFxuICAgICAgICAuYWRkQ2xhc3MoY2xhc3NOYW1lKVxuICAgICAgICAuYWRkQ2xhc3Moc3BlY2lmaWNDbGFzc05hbWUpO1xufVxuXG4vKipcbiAqIEFwcGx5IGNsYXNzIG5hbWUgdG8gZWFjaCBpbnB1dCBlbGVtZW50IGluIGEgZm9ybSBiYXNlZCBvbiBpdHMgdHlwZVxuICogQGV4YW1wbGVcbiAqIC8vIEJlZm9yZVxuICogPGZvcm0gaWQ9XCJmb3JtXCI+XG4gKiAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAqICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XG4gKiAgICAgPC9kaXY+XG4gKiAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAqICAgICAgICAgPHNlbGVjdD4uLi48L3NlbGVjdD5cbiAqICAgICA8L2Rpdj5cbiAqIDwvZm9ybT5cbiAqXG4gKiBjbGFzc2lmeUZvcm0oJyNmb3JtJywgeyBmb3JtRmllbGRDbGFzczogJ2Zvcm0tZmllbGQnIH0pO1xuICpcbiAqIC8vIEFmdGVyXG4gKiA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1pbnB1dCBmb3JtLWZpZWxkLS1pbnB1dFRleHRcIj4uLi48L2Rpdj5cbiAqIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLXNlbGVjdFwiPi4uLjwvZGl2PlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gZm9ybVNlbGVjdG9yIC0gc2VsZWN0b3Igb3IgZWxlbWVudFxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge2pRdWVyeX0gRWxlbWVudCBpdHNlbGZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5Rm9ybShmb3JtU2VsZWN0b3IsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0ICRmb3JtID0gJChmb3JtU2VsZWN0b3IpO1xuICAgIGNvbnN0ICRpbnB1dHMgPSAkZm9ybS5maW5kKGlucHV0VGFnTmFtZXMuam9pbignLCAnKSk7XG5cbiAgICAvLyBPYnRhaW4gb3B0aW9uc1xuICAgIGNvbnN0IHsgZm9ybUZpZWxkQ2xhc3MgPSAnZm9ybS1maWVsZCcgfSA9IG9wdGlvbnM7XG5cbiAgICAvLyBDbGFzc2lmeSBlYWNoIGlucHV0IGluIGEgZm9ybVxuICAgICRpbnB1dHMuZWFjaCgoX18sIGlucHV0KSA9PiB7XG4gICAgICAgIGNsYXNzaWZ5SW5wdXQoaW5wdXQsIGZvcm1GaWVsZENsYXNzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAkZm9ybTtcbn1cblxuLyoqXG4gKiBHZXQgaWQgZnJvbSBnaXZlbiBmaWVsZFxuICogQHBhcmFtIHtvYmplY3R9ICRmaWVsZCBKUXVlcnkgZmllbGQgb2JqZWN0XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldEZpZWxkSWQoJGZpZWxkKSB7XG4gICAgY29uc3QgZmllbGRJZCA9ICRmaWVsZC5wcm9wKCduYW1lJykubWF0Y2goLyhcXFsuKlxcXSkvKTtcblxuICAgIGlmIChmaWVsZElkICYmIGZpZWxkSWQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBmaWVsZElkWzBdO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBJbnNlcnQgaGlkZGVuIGZpZWxkIGFmdGVyIFN0YXRlL1Byb3ZpbmNlIGZpZWxkXG4gKiBAcGFyYW0ge29iamVjdH0gJHN0YXRlRmllbGQgSlF1ZXJ5IGZpZWxkIG9iamVjdFxuICovXG5mdW5jdGlvbiBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKCRzdGF0ZUZpZWxkKSB7XG4gICAgY29uc3QgZmllbGRJZCA9IGdldEZpZWxkSWQoJHN0YXRlRmllbGQpO1xuICAgIGNvbnN0IHN0YXRlRmllbGRBdHRycyA9IHtcbiAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgIG5hbWU6IGBGb3JtRmllbGRJc1RleHQke2ZpZWxkSWR9YCxcbiAgICAgICAgdmFsdWU6ICcxJyxcbiAgICB9O1xuXG4gICAgJHN0YXRlRmllbGQuYWZ0ZXIoJCgnPGlucHV0IC8+Jywgc3RhdGVGaWVsZEF0dHJzKSk7XG59XG5cbmNvbnN0IFZhbGlkYXRvcnMgPSB7XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIG5ldyB2YWxpZGF0aW9uIHdoZW4gdGhlIGZvcm0gaXMgZGlydHlcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0RW1haWxWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMuZW1haWwodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSB2YWxpZCBlbWFpbC4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgcGFzc3dvcmQgZmllbGRzXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBwYXNzd29yZFNlbGVjdG9yXG4gICAgICogQHBhcmFtIHBhc3N3b3JkMlNlbGVjdG9yXG4gICAgICogQHBhcmFtIHJlcXVpcmVtZW50c1xuICAgICAqIEBwYXJhbSBpc09wdGlvbmFsXG4gICAgICovXG4gICAgc2V0UGFzc3dvcmRWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBwYXNzd29yZFNlbGVjdG9yLCBwYXNzd29yZDJTZWxlY3RvciwgcmVxdWlyZW1lbnRzLCBpc09wdGlvbmFsKSA9PiB7XG4gICAgICAgIGNvbnN0ICRwYXNzd29yZCA9ICQocGFzc3dvcmRTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkVmFsaWRhdGlvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubWF0Y2gobmV3IFJlZ0V4cChyZXF1aXJlbWVudHMuYWxwaGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsLm1hdGNoKG5ldyBSZWdFeHAocmVxdWlyZW1lbnRzLm51bWVyaWMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsLmxlbmd0aCA+PSByZXF1aXJlbWVudHMubWlubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG9wdGlvbmFsIGFuZCBub3RoaW5nIGVudGVyZWQsIGl0IGlzIHZhbGlkXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsICYmIHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHJlcXVpcmVtZW50cy5lcnJvcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSBwYXNzd29yZC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbCA9PT0gJHBhc3N3b3JkLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3VyIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2guJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZChwYXNzd29yZFZhbGlkYXRpb25zKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgcGFzc3dvcmQgZmllbGRzXG4gICAgICogQHBhcmFtIHtOb2R9IHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3RvcnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmVycm9yU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmZpZWxkc2V0U2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmZvcm1TZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMubWF4UHJpY2VTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMubWluUHJpY2VTZWxlY3RvclxuICAgICAqL1xuICAgIHNldE1pbk1heFByaWNlVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgc2VsZWN0b3JzKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGVycm9yU2VsZWN0b3IsXG4gICAgICAgICAgICBmaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yLFxuICAgICAgICAgICAgbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgIH0gPSBzZWxlY3RvcnM7XG5cbiAgICAgICAgdmFsaWRhdG9yLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBmb3JtOiBmb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBwcmV2ZW50U3VibWl0OiB0cnVlLFxuICAgICAgICAgICAgc3VjY2Vzc0NsYXNzOiAnXycsIC8vIEtMVURHRTogRG9uJ3QgYXBwbHkgc3VjY2VzcyBjbGFzc1xuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01pbiBwcmljZSBtdXN0IGJlIGxlc3MgdGhhbiBtYXguIHByaWNlLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiBgbWluLW1heDoke21pblByaWNlU2VsZWN0b3J9OiR7bWF4UHJpY2VTZWxlY3Rvcn1gLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01pbiBwcmljZSBtdXN0IGJlIGxlc3MgdGhhbiBtYXguIHByaWNlLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiBgbWluLW1heDoke21pblByaWNlU2VsZWN0b3J9OiR7bWF4UHJpY2VTZWxlY3Rvcn1gLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01heC4gcHJpY2UgaXMgcmVxdWlyZWQuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluLiBwcmljZSBpcyByZXF1aXJlZC4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdJbnB1dCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogW21pblByaWNlU2VsZWN0b3IsIG1heFByaWNlU2VsZWN0b3JdLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdtaW4tbnVtYmVyOjAnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3Iuc2V0TWVzc2FnZU9wdGlvbnMoe1xuICAgICAgICAgICAgc2VsZWN0b3I6IFttaW5QcmljZVNlbGVjdG9yLCBtYXhQcmljZVNlbGVjdG9yXSxcbiAgICAgICAgICAgIHBhcmVudDogZmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGVycm9yU3BhbjogZXJyb3JTZWxlY3RvcixcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBuZXcgdmFsaWRhdGlvbiB3aGVuIHRoZSBmb3JtIGlzIGRpcnR5XG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIHNldFN0YXRlQ291bnRyeVZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1RoZSBcXCdTdGF0ZS9Qcm92aW5jZVxcJyBmaWVsZCBjYW5ub3QgYmUgYmxhbmsuJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgY2xhc3NlcyBmcm9tIGRpcnR5IGZvcm0gaWYgcHJldmlvdXNseSBjaGVja2VkXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgY2xlYW5VcFN0YXRlVmFsaWRhdGlvbjogKGZpZWxkKSA9PiB7XG4gICAgICAgIGNvbnN0ICRmaWVsZENsYXNzRWxlbWVudCA9ICQoKGBbZGF0YS10eXBlPVwiJHtmaWVsZC5kYXRhKCdmaWVsZFR5cGUnKX1cIl1gKSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMobm9kLmNsYXNzZXMpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoJGZpZWxkQ2xhc3NFbGVtZW50Lmhhc0NsYXNzKG5vZC5jbGFzc2VzW3ZhbHVlXSkpIHtcbiAgICAgICAgICAgICAgICAkZmllbGRDbGFzc0VsZW1lbnQucmVtb3ZlQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCB7IFZhbGlkYXRvcnMsIGluc2VydFN0YXRlSGlkZGVuRmllbGQgfTtcbiIsImNvbnN0IGZvcm1zID0ge1xuICAgIGVtYWlsKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHJlID0gL14uK0AuK1xcLi4rLztcbiAgICAgICAgcmV0dXJuIHJlLnRlc3QodmFsdWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgYSBwYXNzd29yZCBmaWVsZFxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHBhc3N3b3JkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdEVtcHR5KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogdmFsaWRhdGVzIGlmIGEgZmllbGQgaXMgZW1wdHlcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKlxuICAgICAqL1xuICAgIG5vdEVtcHR5KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtcztcbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9IGZyb20gJy4vZm9ybS11dGlscyc7XG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5cbi8qKlxuICogSWYgdGhlcmUgYXJlIG5vIG9wdGlvbnMgZnJvbSBiY2FwcCwgYSB0ZXh0IGZpZWxkIHdpbGwgYmUgc2VudC4gVGhpcyB3aWxsIGNyZWF0ZSBhIHNlbGVjdCBlbGVtZW50IHRvIGhvbGQgb3B0aW9ucyBhZnRlciB0aGUgcmVtb3RlIHJlcXVlc3QuXG4gKiBAcmV0dXJucyB7alF1ZXJ5fEhUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBtYWtlU3RhdGVSZXF1aXJlZChzdGF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRycyA9IF8udHJhbnNmb3JtKHN0YXRlRWxlbWVudC5wcm9wKCdhdHRyaWJ1dGVzJyksIChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gcmVzdWx0O1xuICAgICAgICByZXRbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXBsYWNlbWVudEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGlkOiBhdHRycy5pZCxcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxuICAgICAgICBjbGFzczogJ2Zvcm0tc2VsZWN0JyxcbiAgICAgICAgbmFtZTogYXR0cnMubmFtZSxcbiAgICAgICAgJ2RhdGEtZmllbGQtdHlwZSc6IGF0dHJzWydkYXRhLWZpZWxkLXR5cGUnXSxcbiAgICB9O1xuXG4gICAgc3RhdGVFbGVtZW50LnJlcGxhY2VXaXRoKCQoJzxzZWxlY3Q+PC9zZWxlY3Q+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XG5cbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuICAgIGNvbnN0ICRoaWRkZW5JbnB1dCA9ICQoJ1tuYW1lKj1cIkZvcm1GaWVsZElzVGV4dFwiXScpO1xuXG4gICAgaWYgKCRoaWRkZW5JbnB1dC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgJGhpZGRlbklucHV0LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICgkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gU3RyaW5nIGlzIGluamVjdGVkIGZyb20gbG9jYWxpemVyXG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5hcHBlbmQoYDxzbWFsbD4ke2NvbnRleHQucmVxdWlyZWR9PC9zbWFsbD5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5zaG93KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICRuZXdFbGVtZW50O1xufVxuXG4vKipcbiAqIElmIGEgY291bnRyeSB3aXRoIHN0YXRlcyBpcyB0aGUgZGVmYXVsdCwgYSBzZWxlY3Qgd2lsbCBiZSBzZW50LFxuICogSW4gdGhpcyBjYXNlIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBzd2l0Y2ggdG8gYW4gaW5wdXQgZmllbGQgYW5kIGhpZGUgdGhlIHJlcXVpcmVkIGZpZWxkXG4gKi9cbmZ1bmN0aW9uIG1ha2VTdGF0ZU9wdGlvbmFsKHN0YXRlRWxlbWVudCkge1xuICAgIGNvbnN0IGF0dHJzID0gXy50cmFuc2Zvcm0oc3RhdGVFbGVtZW50LnByb3AoJ2F0dHJpYnV0ZXMnKSwgKHJlc3VsdCwgaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSByZXN1bHQ7XG4gICAgICAgIHJldFtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzID0ge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGlkOiBhdHRycy5pZCxcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxuICAgICAgICBjbGFzczogJ2Zvcm0taW5wdXQnLFxuICAgICAgICBuYW1lOiBhdHRycy5uYW1lLFxuICAgICAgICAnZGF0YS1maWVsZC10eXBlJzogYXR0cnNbJ2RhdGEtZmllbGQtdHlwZSddLFxuICAgIH07XG5cbiAgICBzdGF0ZUVsZW1lbnQucmVwbGFjZVdpdGgoJCgnPGlucHV0IC8+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XG5cbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuXG4gICAgaWYgKCRuZXdFbGVtZW50Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKCRuZXdFbGVtZW50KTtcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmZpbmQoJ3NtYWxsJykuaGlkZSgpO1xuICAgIH1cblxuICAgIHJldHVybiAkbmV3RWxlbWVudDtcbn1cblxuLyoqXG4gKiBBZGRzIHRoZSBhcnJheSBvZiBvcHRpb25zIGZyb20gdGhlIHJlbW90ZSByZXF1ZXN0IHRvIHRoZSBuZXdseSBjcmVhdGVkIHNlbGVjdCBib3guXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVzQXJyYXlcbiAqIEBwYXJhbSB7alF1ZXJ5fSAkc2VsZWN0RWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gYWRkT3B0aW9ucyhzdGF0ZXNBcnJheSwgJHNlbGVjdEVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBbXTtcblxuICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiXCI+JHtzdGF0ZXNBcnJheS5wcmVmaXh9PC9vcHRpb24+YCk7XG5cbiAgICBpZiAoIV8uaXNFbXB0eSgkc2VsZWN0RWxlbWVudCkpIHtcbiAgICAgICAgXy5lYWNoKHN0YXRlc0FycmF5LnN0YXRlcywgKHN0YXRlT2JqKSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy51c2VJZEZvclN0YXRlcykge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5pZH1cIj4ke3N0YXRlT2JqLm5hbWV9PC9vcHRpb24+YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5uYW1lfVwiPiR7c3RhdGVPYmoubmFtZX08L29wdGlvbj5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHNlbGVjdEVsZW1lbnQuaHRtbChjb250YWluZXIuam9pbignICcpKTtcbiAgICB9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7alF1ZXJ5fSBzdGF0ZUVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlRWxlbWVudCwgY29udGV4dCA9IHt9LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIC8qKlxuICAgICAqIEJhY2t3YXJkcyBjb21wYXRpYmxlIGZvciB0aHJlZSBwYXJhbWV0ZXJzIGluc3RlYWQgb2YgZm91clxuICAgICAqXG4gICAgICogQXZhaWxhYmxlIG9wdGlvbnM6XG4gICAgICpcbiAgICAgKiB1c2VJZEZvclN0YXRlcyB7Qm9vbH0gLSBHZW5lcmF0ZXMgc3RhdGVzIGRyb3Bkb3duIHVzaW5nIGlkIGZvciB2YWx1ZXMgaW5zdGVhZCBvZiBzdHJpbmdzXG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgfVxuXG4gICAgJCgnc2VsZWN0W2RhdGEtZmllbGQtdHlwZT1cIkNvdW50cnlcIl0nKS5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBjb3VudHJ5TmFtZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCk7XG5cbiAgICAgICAgaWYgKGNvdW50cnlOYW1lID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdXRpbHMuYXBpLmNvdW50cnkuZ2V0QnlOYW1lKGNvdW50cnlOYW1lLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGNvbnRleHQuc3RhdGVfZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkY3VycmVudElucHV0ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG5cbiAgICAgICAgICAgIGlmICghXy5pc0VtcHR5KHJlc3BvbnNlLmRhdGEuc3RhdGVzKSkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IG1heSBoYXZlIGJlZW4gcmVwbGFjZWQgd2l0aCBhIHNlbGVjdCwgcmVzZWxlY3QgaXRcbiAgICAgICAgICAgICAgICBjb25zdCAkc2VsZWN0RWxlbWVudCA9IG1ha2VTdGF0ZVJlcXVpcmVkKCRjdXJyZW50SW5wdXQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgYWRkT3B0aW9ucyhyZXNwb25zZS5kYXRhLCAkc2VsZWN0RWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgJHNlbGVjdEVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gbWFrZVN0YXRlT3B0aW9uYWwoJGN1cnJlbnRJbnB1dCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBuZXdFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9