/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/marks/Span.js":
/*!************************************!*\
  !*** ./resources/js/marks/Span.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Span)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Mark = Statamic.$bard.tiptap.core.Mark;
var toggleMark = Statamic.$bard.tiptap.commands.toggleMark;

var BaseSpan = /*#__PURE__*/function (_Mark) {
  _inherits(BaseSpan, _Mark);

  var _super = _createSuper(BaseSpan);

  function BaseSpan() {
    _classCallCheck(this, BaseSpan);

    return _super.apply(this, arguments);
  }

  _createClass(BaseSpan, [{
    key: "name",
    get: function get() {
      return 'bts_span';
    }
  }, {
    key: "schema",
    get: function get() {
      return {
        parseDOM: [{
          tag: 'span'
        }],
        toDOM: function toDOM() {
          return ['span', 0];
        }
      };
    }
  }, {
    key: "commands",
    value: function commands(_ref) {
      var type = _ref.type;
      return function (attrs) {
        return toggleMark(type, attrs);
      };
    }
  }]);

  return BaseSpan;
}(Mark);

var Span = /*#__PURE__*/function (_BardMutator$mutatesN) {
  _inherits(Span, _BardMutator$mutatesN);

  var _super2 = _createSuper(Span);

  function Span() {
    _classCallCheck(this, Span);

    return _super2.apply(this, arguments);
  }

  return Span;
}(BardMutator.mutatesNode(BaseSpan));



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
/* harmony import */ var _marks_Span__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./marks/Span */ "./resources/js/marks/Span.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var toggleBlockType = Statamic.$bard.tiptap.commands.toggleBlockType;
var chars = {
  heading: 'H',
  paragraph: 'P',
  span: 'T'
};
var exts = {
  heading: 'heading',
  paragraph: 'paragraph',
  span: 'bts_span'
};
Statamic.booting(function () {
  var types = ['heading', 'paragraph', 'span'];
  var _BardMutator = BardMutator,
      mutator = _BardMutator.mutator;
  Statamic.$bard.addExtension(function () {
    return new _marks_Span__WEBPACK_IMPORTED_MODULE_0__.default();
  });
  var styles = Statamic.$config.get('statamic-bard-texstyle.styles') || [];

  var activeTypes = _.uniq(Object.entries(styles).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        style = _ref2[1];

    return style.type;
  }));

  var css = {};
  Object.entries(styles).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        style = _ref4[1];

    if (!types.includes(style.type)) {
      return;
    }

    css["".concat(exts[style.type], "__").concat(style["class"])] = style.cp_css;
  });

  var schemaMutator = function schemaMutator(schema, _ref5) {
    var extendSchema = _ref5.extendSchema;
    return extendSchema(schema, {
      attrs: {
        "class": {
          "default": null
        }
      },
      parseDOMAttrs: function parseDOMAttrs(dom) {
        return {
          "class": dom.getAttribute('data-bts-class')
        };
      },
      toDOMAttrs: function toDOMAttrs(node) {
        var _ref6;

        return _ref6 = {}, _defineProperty(_ref6, 'data-bts-class', node.attrs["class"]), _defineProperty(_ref6, "style", css["".concat(node.type.name, "__").concat(node.attrs["class"])]), _ref6;
      }
    });
  };

  if (activeTypes.includes('heading')) {
    mutator.schema('heading', schemaMutator);
  }

  if (activeTypes.includes('paragraph')) {
    mutator.schema('paragraph', schemaMutator);
    mutator.commands('paragraph', function (commands, _ref7) {
      var type = _ref7.type,
          schema = _ref7.schema;
      return _objectSpread(_objectSpread({}, commands), {}, _defineProperty({}, type.name, function (attrs) {
        return toggleBlockType(type, schema.nodes.paragraph, attrs);
      }));
    });
  }

  if (activeTypes.includes('span')) {
    mutator.schema('bts_span', schemaMutator);
  }

  Statamic.$bard.buttons(function (buttons, button) {
    var index = _.findLastIndex(buttons, {
      command: 'heading'
    });

    buttons.splice.apply(buttons, [index + 1, 0].concat(_toConsumableArray(Object.entries(styles).map(function (_ref8) {
      var _ref9 = _slicedToArray(_ref8, 2),
          key = _ref9[0],
          style = _ref9[1];

      if (!types.includes(style.type)) {
        return;
      }

      var data = {
        name: style.button || "bts_".concat(key),
        text: style.name,
        command: exts[style.type],
        args: style.type === 'heading' ? {
          "class": style["class"],
          level: style.level
        } : {
          "class": style["class"]
        },
        html: "<div style=\"margin-bottom: -1px\"><span style=\"font-size: 21px; font-family: Times, serif;\">".concat(chars[style.type], "</span><sup>").concat(style.ident || '', "</sup></div>")
      };
      return style.global ? data : button(data);
    }).filter(function (button) {
      return button;
    }))));
  });
});
})();

/******/ })()
;