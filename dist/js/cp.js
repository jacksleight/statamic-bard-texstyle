/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/paragraph.js":
/*!***********************************!*\
  !*** ./resources/js/paragraph.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Paragraph)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var toggleBlockType = Statamic.$bard.tiptap.commands.toggleBlockType;

var Paragraph = /*#__PURE__*/function () {
  function Paragraph() {
    _classCallCheck(this, Paragraph);
  }

  _createClass(Paragraph, [{
    key: "name",
    value: function name() {
      return 'paragraph';
    }
  }, {
    key: "schema",
    value: function schema() {
      return {
        attrs: {
          "class": {
            "default": null
          }
        },
        content: 'inline*',
        group: 'block',
        draggable: false,
        parseDOM: [{
          tag: 'p',
          getAttrs: function getAttrs(dom) {
            return {
              "class": dom.getAttribute('class')
            };
          }
        }],
        toDOM: function toDOM(node) {
          return ['p', node.attrs, 0];
        }
      };
    }
  }, {
    key: "commands",
    value: function commands(_ref) {
      var type = _ref.type,
          schema = _ref.schema;
      return function (attrs) {
        return toggleBlockType(type, schema.nodes.paragraph, attrs);
      };
    }
  }, {
    key: "pasteRules",
    value: function pasteRules() {
      return [];
    }
  }, {
    key: "plugins",
    value: function plugins() {
      return [];
    }
  }]);

  return Paragraph;
}();



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
/*!****************************!*\
  !*** ./resources/js/cp.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paragraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paragraph */ "./resources/js/paragraph.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


Statamic.booting(function () {
  var styles = Statamic.$config.get('statamic-bard-textstyle.styles') || [];
  Statamic.$bard.extend(function (_ref) {
    var node = _ref.node;
    return node(new _paragraph__WEBPACK_IMPORTED_MODULE_0__.default());
  });
  Statamic.$bard.buttons(function (buttons) {
    var index = _.findLastIndex(buttons, {
      command: 'heading'
    });

    buttons.splice.apply(buttons, [index + 1, 0].concat(_toConsumableArray(styles.map(function (style) {
      return {
        name: style.button,
        text: style.name,
        command: 'paragraph',
        args: {
          "class": style["class"]
        },
        html: "<span><span style=\"font-size: 21px; font-family: Times, serif;\">P</span><sup>".concat(style.ident, "</sup></span>"),
        condition: function condition(config) {
          return style.button ? config.buttons.includes(style.button) : true;
        }
      };
    }))));
  });
  var css = styles.map(function (style) {
    return ".bard-fieldtype .ProseMirror p.".concat(style["class"], " { ").concat(style.cp_css, " }");
  }).join(' ');
  var style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
});
})();

/******/ })()
;