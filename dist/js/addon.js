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

var Span = /*#__PURE__*/function (_Mark) {
  _inherits(Span, _Mark);

  var _super = _createSuper(Span);

  function Span() {
    _classCallCheck(this, Span);

    return _super.apply(this, arguments);
  }

  _createClass(Span, [{
    key: "name",
    get: function get() {
      return 'span';
    }
  }, {
    key: "schema",
    get: function get() {
      var schema = {
        parseDOM: [{
          tag: 'span'
        }],
        toDOM: function toDOM() {
          return ['span', 0];
        }
      };
      return BardMutator.mutator.mutateSchema(this.name, schema);
    }
  }, {
    key: "commands",
    value: function commands(data) {
      var type = data.type;

      var commands = function commands() {
        return toggleMark(type);
      };

      return BardMutator.mutator.mutateCommands(this.name, data, commands);
    }
  }]);

  return Span;
}(Mark);



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

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var _Statamic$$bard$tipta = Statamic.$bard.tiptap.commands,
    toggleBlockType = _Statamic$$bard$tipta.toggleBlockType,
    toggleMark = _Statamic$$bard$tipta.toggleMark;
Statamic.booting(function () {
  var _BardMutator = BardMutator,
      mutator = _BardMutator.mutator;
  Statamic.$bard.addExtension(function () {
    return new _marks_Span__WEBPACK_IMPORTED_MODULE_0__.default();
  });
  var styles = Statamic.$config.get('statamic-bard-textstyle.styles') || [];

  var mutatingTypes = _.uniq(styles.map(function (v) {
    return v.type;
  }));

  var css = {
    heading: {},
    paragraph: {},
    span: {}
  };
  styles.forEach(function (style) {
    css[style.type][style["class"]] = style.cp_css;
  });

  var schemaMutator = function schemaMutator(schema, _ref) {
    var extendSchema = _ref.extendSchema;
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
        var _ref2;

        return _ref2 = {}, _defineProperty(_ref2, 'data-bts-class', node.attrs["class"]), _defineProperty(_ref2, "style", css[node.type.name][node.attrs["class"]]), _ref2;
      }
    });
  };

  var nodeCommandsMutator = function nodeCommandsMutator(_ref3, commands, _ref4) {
    var type = _ref3.type,
        schema = _ref3.schema;
    var extendCommands = _ref4.extendCommands;
    return extendCommands(commands, _defineProperty({}, type.name, function (attrs) {
      return toggleBlockType(type, schema.nodes.paragraph, attrs);
    }));
  };

  var markCommandsMutator = function markCommandsMutator(_ref5, commands, _ref6) {
    var type = _ref5.type;
    var extendCommands = _ref6.extendCommands;
    return extendCommands(commands, _defineProperty({}, type.name, function (attrs) {
      return toggleMark(type, attrs);
    }));
  };

  if (mutatingTypes.includes('heading')) {
    mutator.schema('heading', schemaMutator).commands('heading', nodeCommandsMutator);
  }

  if (mutatingTypes.includes('paragraph')) {
    mutator.schema('paragraph', schemaMutator).commands('paragraph', nodeCommandsMutator);
  }

  if (mutatingTypes.includes('span')) {
    mutator.schema('span', schemaMutator).commands('span', markCommandsMutator);
  }

  var types = {
    heading: {
      command: 'heading',
      character: 'H'
    },
    paragraph: {
      command: 'paragraph',
      character: 'P'
    },
    span: {
      command: 'span',
      character: 'T'
    }
  };
  Statamic.$bard.buttons(function (buttons) {
    var index = _.findLastIndex(buttons, {
      command: 'heading'
    });

    buttons.splice.apply(buttons, [index + 1, 0].concat(_toConsumableArray(styles.map(function (style) {
      var type = types[style.type || 'paragraph'];

      if (!type) {
        return;
      }

      var button = "bts_".concat(type, "_").concat(style["class"]);
      return {
        name: style.button,
        text: style.name,
        command: type.command,
        args: type === 'heading' ? {
          level: style.level,
          "class": style["class"]
        } : {
          "class": style["class"]
        },
        html: "<span><span style=\"font-size: 21px; font-family: Times, serif;\">".concat(type.character, "</span><sup>").concat(style.ident, "</sup></span>"),
        condition: function condition(config) {
          return config.buttons.includes(style.button || button);
        }
      };
    }))));
  });
});
})();

/******/ })()
;