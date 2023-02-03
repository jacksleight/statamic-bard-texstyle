/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/extensions/core.js":
/*!*****************************************!*\
  !*** ./resources/js/extensions/core.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Extension = Statamic.$bard.tiptap.core.Extension;
var Core = Extension.create({
  name: 'btsCore',
  addOptions: function addOptions() {
    return {
      attr: null,
      styleTypes: []
    };
  },
  addGlobalAttributes: function addGlobalAttributes() {
    var _this$options = this.options,
        attr = _this$options.attr,
        styleTypes = _this$options.styleTypes;
    return [{
      types: styleTypes,
      attributes: _defineProperty({}, attr, {
        parseHTML: function parseHTML(element) {
          return element.getAttribute('data-bts');
        },
        renderHTML: function renderHTML(attributes) {
          return _defineProperty({}, 'data-bts', attributes[attr]);
        }
      })
    }];
  },
  addCommands: function addCommands() {
    return {
      btsToggleHeading: function btsToggleHeading(attributes) {
        return function (_ref2) {
          var commands = _ref2.commands;
          return commands.toggleNode('heading', 'paragraph', attributes);
        };
      },
      btsToggleParagraph: function btsToggleParagraph(attributes) {
        return function (_ref3) {
          var commands = _ref3.commands;
          return commands.toggleNode('paragraph', 'paragraph', attributes);
        };
      }
    };
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Core);

/***/ }),

/***/ "./resources/js/icons.js":
/*!*******************************!*\
  !*** ./resources/js/icons.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styleToIcon": () => (/* binding */ styleToIcon)
/* harmony export */ });
var maskCount = 0;
var icons = {
  'letter': function letter(style) {
    var letter = {
      heading: 'H',
      paragraph: 'P',
      span: 'T'
    }[style.type];
    var ident = style.ident;
    return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"16\" viewBox=\"0 0 24 16\" fill=\"currentColor\" style=\"width: 24px;\">\n                <text text-anchor=\"middle\" x=\"8.3\" y=\"15\" style=\"font-family: Times, serif; font-size: 21px;\">".concat(letter, "</text>\n                <text text-anchor=\"middle\" x=\"20\" y=\"12.5\" style=\"font-size: 12px;\">").concat(ident, "</text>\n            </svg>\n        ");
  },
  'square': function square(style) {
    var ident = style.ident;
    return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                <rect width=\"15\" height=\"15\" x=\"0.5\" y=\"0.5\" rx=\"2\" stroke-width=\"1\" stroke=\"currentColor\" fill=\"none\" />\n                <text text-anchor=\"middle\" x=\"8\" y=\"12\" style=\"font-size: 11px;\">".concat(ident, "</text>\n            </svg>\n        ");
  },
  'square-solid': function squareSolid(style) {
    var ident = style.ident;
    var maskId = "bts-mask-".concat(maskCount++);
    return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                <mask id=\"".concat(maskId, "\">\n                    <rect width=\"16\" height=\"16\" fill=\"white\" />\n                    <text text-anchor=\"middle\" x=\"8\" y=\"12\" style=\"font-size: 11px;\" fill=\"black\">").concat(ident, "</text>\n                </mask>\n                <rect width=\"15\" height=\"15\" x=\"0.5\" y=\"0.5\" rx=\"2\" stroke-width=\"1\" stroke=\"currentColor\" mask=\"url(#").concat(maskId, ")\" />\n            </svg>\n        ");
  },
  'circle': function circle(style) {
    var ident = style.ident;
    return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                <circle cx=\"8\" cy=\"8\" r=\"7.5\" stroke-width=\"1\" stroke=\"currentColor\" fill=\"none\" />\n                <text text-anchor=\"middle\" x=\"8\" y=\"12\" style=\"font-size: 11px;\">".concat(ident, "</text>\n            </svg>\n        ");
  },
  'circle-solid': function circleSolid(style) {
    var ident = style.ident;
    var maskId = "bts-mask-".concat(maskCount++);
    return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                <mask id=\"".concat(maskId, "\">\n                    <rect width=\"16\" height=\"16\" fill=\"white\" />\n                    <text text-anchor=\"middle\" x=\"8\" y=\"12\" style=\"font-size: 11px;\" fill=\"black\">").concat(ident, "</text>\n                </mask>\n                <circle cx=\"8\" cy=\"8\" r=\"7.5\" stroke-width=\"1\" stroke=\"currentColor\" mask=\"url(#").concat(maskId, ")\" />\n            </svg>\n        ");
  },
  'symbol': function symbol(style) {
    var ident = style.ident;
    return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                <text text-anchor=\"middle\" x=\"8\" y=\"16\" style=\"font-size: 23px;\">".concat(ident, "</text>\n            </svg>\n        ");
  }
};
var styleToIcon = function styleToIcon(style, type) {
  var icon;

  if (style.icon) {
    icon = style.icon;
  } else {
    icon = 'letter';
  }

  return icons[icon] ? icons[icon](style) : icon;
};

/***/ }),

/***/ "./resources/js/marks/span.js":
/*!************************************!*\
  !*** ./resources/js/marks/span.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Mark = Statamic.$bard.tiptap.core.Mark;
var Span = Mark.create({
  name: 'btsSpan',
  parseHTML: function parseHTML() {
    return [{
      tag: 'span[data-bts]'
    }];
  },
  renderHTML: function renderHTML(_ref) {
    var HTMLAttributes = _ref.HTMLAttributes;
    return ['span', HTMLAttributes, 0];
  },
  addCommands: function addCommands() {
    var _this = this;

    return {
      btsToggleSpan: function btsToggleSpan(attributes) {
        return function (_ref2) {
          var commands = _ref2.commands;
          return commands.toggleMark(_this.name, attributes);
        };
      }
    };
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Span);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/css/addon.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/css/addon.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".bard-fieldtype .ProseMirror h1[data-bts]::before, .bard-fieldtype .ProseMirror h2[data-bts]::before, .bard-fieldtype .ProseMirror h3[data-bts]::before, .bard-fieldtype .ProseMirror h4[data-bts]::before, .bard-fieldtype .ProseMirror h5[data-bts]::before, .bard-fieldtype .ProseMirror h6[data-bts]::before, .bard-fieldtype .ProseMirror p[data-bts]::before {\n  background-color: #e4ebf1;\n  border-radius: 0 2px 2px 0;\n  color: #1c2e36;\n  font-size: 10px;\n  font-weight: normal;\n  font-family: Inter UI, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;\n  line-height: 1;\n  padding: 4px 6px 4px 16px;\n  display: block;\n  max-width: -webkit-max-content;\n  max-width: -moz-max-content;\n  max-width: max-content;\n  position: relative;\n  left: -16px;\n}\n.bard-fieldtype .ProseMirror span[data-bts]::before {\n  display: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./resources/css/addon.scss":
/*!**********************************!*\
  !*** ./resources/css/addon.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_addon_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./addon.scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/css/addon.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_addon_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_addon_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./resources/js/addon.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_addon_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/addon.scss */ "./resources/css/addon.scss");
/* harmony import */ var _marks_span__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marks/span */ "./resources/js/marks/span.js");
/* harmony import */ var _extensions_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extensions/core */ "./resources/js/extensions/core.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ "./resources/js/icons.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var types = {
  heading: {
    tag: 'h',
    ext: 'heading',
    cmd: 'btsToggleHeading'
  },
  paragraph: {
    tag: 'p',
    ext: 'paragraph',
    cmd: 'btsToggleParagraph'
  },
  span: {
    tag: 'span',
    ext: 'btsSpan',
    cmd: 'btsToggleSpan'
  }
};
Statamic.booting(function () {
  // Initialization
  var _Statamic$$config$get = Statamic.$config.get('bard-texstyle'),
      store = _Statamic$$config$get.store,
      attr = _Statamic$$config$get.attr,
      styles = _Statamic$$config$get.styles,
      styleTypes = _Statamic$$config$get.styleTypes; // Extensions


  Statamic.$bard.addExtension(function () {
    return _marks_span__WEBPACK_IMPORTED_MODULE_1__["default"];
  });
  Statamic.$bard.addExtension(function () {
    return _extensions_core__WEBPACK_IMPORTED_MODULE_2__["default"].configure({
      attr: attr,
      styleTypes: styleTypes
    });
  }); // Buttons

  Statamic.$bard.buttons(function (buttons, button) {
    Object.entries(styles).forEach(function (_ref) {
      var _ref3;

      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          style = _ref2[1];

      if (!types[style.type]) {
        return;
      }

      var type = types[style.type];
      var icon = (0,_icons__WEBPACK_IMPORTED_MODULE_3__.styleToIcon)(style, type);
      var args = style.type === 'heading' ? (_ref3 = {}, _defineProperty(_ref3, attr, style[store]), _defineProperty(_ref3, "level", style.level), _ref3) : _defineProperty({}, attr, style[store]);
      var data = {
        name: key,
        text: style.name,
        args: args,
        activeName: type.ext,
        html: icon,
        command: function command(editor, args) {
          return editor.chain().focus()[type.cmd](args).run();
        }
      };
      buttons.splice(buttons.indexOf(key), 0, button(data));
    });
  }); // CSS

  var css = [];
  Object.entries(styles).forEach(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        style = _ref6[1];

    if (!types[style.type]) {
      return;
    }

    var type = types[style.type];
    var tag = style.type === 'heading' ? "".concat(type.tag).concat(style.level) : "".concat(type.tag);
    css.push(".bard-fieldtype .ProseMirror ".concat(tag, "[data-bts=\"").concat(style[store], "\"] { ").concat(style.cp_css, " }"));

    if (style.cp_badge) {
      css.push(".bard-fieldtype .ProseMirror ".concat(tag, "[data-bts=\"").concat(style[store], "\"]::before { content: \"").concat(style.name, "\"; }"));
    }
  });
  var el = document.createElement('style');
  el.appendChild(document.createTextNode(css.join(' ')));
  document.head.appendChild(el);
});
})();

/******/ })()
;