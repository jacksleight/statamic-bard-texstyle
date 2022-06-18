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
  name: 'bts_core',
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
      },
      btsToggleBulletList: function btsToggleBulletList(attributes) {
        return function (_ref4) {
          var commands = _ref4.commands;

          if (editor.isActive('bulletList', attributes)) {
            return commands.toggleList('bulletList', 'listItem');
          }

          if (editor.isActive('bulletList')) {
            return commands.updateAttributes('bulletList', attributes);
          }

          return editor.chain().toggleList('bulletList', 'listItem').updateAttributes('bulletList', attributes).run();
        };
      },
      btsToggleOrderedList: function btsToggleOrderedList(attributes) {
        return function (_ref5) {
          var commands = _ref5.commands,
              editor = _ref5.editor;

          if (editor.isActive('orderedList', attributes)) {
            return commands.toggleList('orderedList', 'listItem');
          }

          if (editor.isActive('orderedList')) {
            return commands.updateAttributes('orderedList', attributes);
          }

          return editor.chain().toggleList('orderedList', 'listItem').updateAttributes('orderedList', attributes).run();
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
      span: 'T',
      div: 'C',
      bulletList: 'L',
      orderedList: 'L'
    }[style.type];
    var ident = style.ident;
    return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"16\" viewBox=\"0 0 24 16\" fill=\"currentColor\" style=\"width: 24px;\">\n                <text text-anchor=\"middle\" x=\"8.3\" y=\"15\" style=\"font-family: Times, serif; font-size: 21px;\">".concat(letter, "</text>\n                <text text-anchor=\"middle\" x=\"20\" y=\"12.5\" style=\"font-size: 12px;\" text-anchor=\"end\">").concat(ident, "</text>\n            </svg>\n        ");
  },
  'square': function square(style) {
    var ident = style.ident;
    return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                <rect width=\"15\" height=\"15\" x=\"0.5\" y=\"0.5\" rx=\"2\" stroke-width=\"1\" stroke=\"currentColor\" fill=\"none\" />\n                <text text-anchor=\"middle\" x=\"8\" y=\"12\" style=\"font-size: 11px;\" text-anchor=\"end\">".concat(ident, "</text>\n            </svg>\n        ");
  },
  'square-solid': function squareSolid(style) {
    var ident = style.ident;
    var maskId = "bts-mask-".concat(maskCount++);
    return "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                <mask id=\"".concat(maskId, "\">\n                    <rect width=\"16\" height=\"16\" fill=\"white\" />\n                    <text text-anchor=\"middle\" x=\"8\" y=\"12\" style=\"font-size: 11px;\" text-anchor=\"end\" fill=\"black\">").concat(ident, "</text>\n                </mask>\n                <rect width=\"15\" height=\"15\" x=\"0.5\" y=\"0.5\" rx=\"2\" stroke-width=\"1\" stroke=\"currentColor\" mask=\"url(#").concat(maskId, ")\" />\n            </svg>\n        ");
  },
  'circle': function circle(style) {
    var ident = style.ident;
    return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                <circle cx=\"8\" cy=\"8\" r=\"7.5\" stroke-width=\"1\" stroke=\"currentColor\" fill=\"none\" />\n                <text text-anchor=\"middle\" x=\"8\" y=\"12\" style=\"font-size: 11px;\" text-anchor=\"end\">".concat(ident, "</text>\n            </svg>\n        ");
  },
  'circle-solid': function circleSolid(style) {
    var ident = style.ident;
    var maskId = "bts-mask-".concat(maskCount++);
    return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                <mask id=\"".concat(maskId, "\">\n                    <rect width=\"16\" height=\"16\" fill=\"white\" />\n                    <text text-anchor=\"middle\" x=\"8\" y=\"12\" style=\"font-size: 11px;\" text-anchor=\"end\" fill=\"black\">").concat(ident, "</text>\n                </mask>\n                <circle cx=\"8\" cy=\"8\" r=\"7.5\" stroke-width=\"1\" stroke=\"currentColor\" mask=\"url(#").concat(maskId, ")\" />\n            </svg>\n        ");
  },
  'symbol': function symbol(style) {
    var ident = style.ident;
    return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                <text text-anchor=\"middle\" x=\"8\" y=\"16\" style=\"font-size: 23px;\">".concat(ident, "</text>\n            </svg>\n        ");
  }
};
var styleToIcon = function styleToIcon(style, type) {
  var icon = style.icon ? style.icon : style.type === 'div' ? 'square' : 'letter';
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
  name: 'bts_span',
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

/***/ "./resources/js/nodes/Div.js":
/*!***********************************!*\
  !*** ./resources/js/nodes/Div.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Node = Statamic.$bard.tiptap.core.Node;
var Div = Node.create({
  name: 'bts_div',
  content: 'block+',
  group: 'block',
  defining: false,
  parseHTML: function parseHTML() {
    return [{
      tag: 'div[data-bts]'
    }];
  },
  renderHTML: function renderHTML(_ref) {
    var HTMLAttributes = _ref.HTMLAttributes;
    return ['div', HTMLAttributes, 0];
  },
  addCommands: function addCommands() {
    var _this = this;

    return {
      btsToggleDiv: function btsToggleDiv(attributes) {
        return function (_ref2) {
          var editor = _ref2.editor,
              commands = _ref2.commands;

          if (editor.isActive(_this.name, attributes)) {
            return commands.lift(_this.name);
          } else if (editor.isActive(_this.name)) {
            return commands.updateAttributes(_this.name, attributes);
          }

          return commands.wrapIn(_this.name, attributes);
        };
      }
    };
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Div);

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./resources/js/addon.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _marks_span__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./marks/span */ "./resources/js/marks/span.js");
/* harmony import */ var _nodes_Div__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodes/Div */ "./resources/js/nodes/Div.js");
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
    ext: 'bts_span',
    cmd: 'btsToggleSpan'
  },
  div: {
    tag: 'div',
    ext: 'bts_div',
    cmd: 'btsToggleDiv'
  },
  bulletList: {
    tag: 'ul',
    ext: 'bulletList',
    cmd: 'btsToggleBulletList'
  },
  orderedList: {
    tag: 'ol',
    ext: 'orderedList',
    cmd: 'btsToggleOrderedList'
  }
};
Statamic.booting(function () {
  // Initialization
  var _Statamic$$config$get = Statamic.$config.get('statamic-bard-texstyle'),
      store = _Statamic$$config$get.store,
      attr = _Statamic$$config$get.attr,
      styles = _Statamic$$config$get.styles,
      styleTypes = _Statamic$$config$get.styleTypes; // Extensions


  Statamic.$bard.addExtension(function () {
    return _marks_span__WEBPACK_IMPORTED_MODULE_0__["default"];
  });
  Statamic.$bard.addExtension(function () {
    return _nodes_Div__WEBPACK_IMPORTED_MODULE_1__["default"];
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

  var css = [".bard-fieldtype .ProseMirror [data-bts] { margin-top: 0px; margin-bottom: 0.85em; }"];
  var selector = [".bard-fieldtype .ProseMirror >", ".bard-fieldtype .ProseMirror [data-bts] >"];
  var cpCss = Array.from(document.styleSheets).find(function (sheet) {
    return sheet.href && sheet.href.includes('statamic/cp/css/cp.css');
  });
  Array.from(cpCss.cssRules).filter(function (rule) {
    return rule.selectorText && rule.selectorText.startsWith(selector[0]);
  }).forEach(function (rule) {
    return css.push(rule.cssText.replaceAll(selector[0], selector[1]));
  });
  Object.entries(styles).forEach(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        style = _ref6[1];

    if (!types[style.type]) {
      return;
    }

    var type = types[style.type];
    var tag = style.type === 'heading' ? "".concat(type.tag).concat(style.level) : "".concat(type.tag);
    css.push(".bard-fieldtype .ProseMirror ".concat(tag, "[data-bts=\"").concat(style[store], "\"] { ").concat(style.cp_css, " }"));
  });
  var el = document.createElement('style');
  el.appendChild(document.createTextNode(css.join(' ')));
  document.head.appendChild(el);
});
})();

/******/ })()
;