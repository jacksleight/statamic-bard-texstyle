/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MenuButton.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MenuButton.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MenuPanel_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuPanel.vue */ "./resources/js/components/MenuPanel.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [BardToolbarButton],
  components: {
    MenuPanel: _MenuPanel_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      panelActive: false
    };
  },
  methods: {
    togglePanel: function togglePanel() {
      this.panelActive = !this.panelActive;
    },
    closePanel: function closePanel() {
      this.panelActive = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MenuItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MenuItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    item: Object,
    config: {},
    bard: {},
    editor: {},
    btsConfig: {}
  },
  computed: {
    active: function active() {
      if (this.item.hasOwnProperty('isActive')) {
        return this.item.isActive(this.editor, this.item.args);
      }

      var nameProperty = this.item.hasOwnProperty('activeName') ? 'activeName' : 'name';
      var name = this.item[nameProperty];
      return this.editor.isActive(name, this.item.args);
    },
    visible: function visible() {
      if (this.item.hasOwnProperty('isVisible')) {
        return this.item.isVisible(this.editor, this.item.args);
      }

      return true;
    },
    previewMatch: function previewMatch() {
      var style = this.item.btsStyle || {};
      return [this.item.name, "bts-".concat(style.type), style.level ? "h".concat(style.level) : null].join(' ');
    }
  },
  methods: {
    click: function click() {
      this.item.command(this.editor, this.item.args);
      this.$emit('bts-menu-click');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MenuPanel.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MenuPanel.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MenuItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuItem.vue */ "./resources/js/components/MenuItem.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    MenuItem: _MenuItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    config: {},
    bard: {},
    editor: {},
    btsConfig: {}
  },
  computed: {
    items: function items() {
      var buttons = this.bard.buttons;
      var menu = this.config.bts_menu;
      return buttons.filter(function (button) {
        return _typeof(button) === 'object' && menu.includes(button.name);
      });
    }
  }
});

/***/ }),

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
      styleExtensions: []
    };
  },
  addGlobalAttributes: function addGlobalAttributes() {
    var _this$options = this.options,
        attr = _this$options.attr,
        styleExtensions = _this$options.styleExtensions;
    return [{
      types: styleExtensions,
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
      btsToggleLink: function btsToggleLink(attributes) {
        return function (_ref4) {
          var commands = _ref4.commands,
              editor = _ref4.editor;

          if (editor.isActive('link', attributes)) {
            return commands.resetAttributes('link', 'class');
          } else {
            return commands.updateAttributes('link', attributes);
          }
        };
      },
      btsToggleList: function btsToggleList(attributes, type) {
        return function (_ref5) {
          var commands = _ref5.commands,
              editor = _ref5.editor;

          if (editor.isActive(type, attributes)) {
            return commands.toggleList(type, 'listItem');
          } else if (editor.isActive(type)) {
            return commands.updateAttributes(type, attributes);
          }

          return editor.chain().toggleList(type, 'listItem').updateAttributes(type, attributes).run();
        };
      },
      btsToggleBulletList: function btsToggleBulletList(attributes) {
        return function (_ref6) {
          var commands = _ref6.commands;
          return commands.btsToggleList(attributes, 'bulletList');
        };
      },
      btsToggleOrderedList: function btsToggleOrderedList(attributes) {
        return function (_ref7) {
          var commands = _ref7.commands;
          return commands.btsToggleList(attributes, 'orderedList');
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
/* harmony export */   "menuIcon": () => (/* binding */ menuIcon),
/* harmony export */   "styleToIcon": () => (/* binding */ styleToIcon)
/* harmony export */ });
var maskCount = 0;
var icons = {
  'letter': function letter(style) {
    var letter = {
      heading: 'H',
      paragraph: 'P',
      span: 'T',
      link: 'L',
      bulletList: 'L',
      orderedList: 'L',
      div: 'C'
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
  'dashes': function dashes(style) {
    var ident = style.ident;
    return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                <rect width=\"4\" height=\"2\" x=\"0\" y=\"2\" rx=\"1\" fill=\"currentColor\" />\n                <rect width=\"4\" height=\"2\" x=\"0\" y=\"7\" rx=\"1\" fill=\"currentColor\" />\n                <rect width=\"4\" height=\"2\" x=\"0\" y=\"12\" rx=\"1\" fill=\"currentColor\" />\n                <text text-anchor=\"middle\" x=\"11\" y=\"12\" style=\"font-size: 11px;\">".concat(ident, "</text>\n            </svg>\n        ");
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
  } else if (style.type === 'bulletList' || style.type === 'orderedList') {
    icon = 'dashes';
  } else if (style.type === 'div') {
    icon = 'square';
  } else {
    icon = 'letter';
  }

  return icons[icon] ? icons[icon](style) : icon;
};
var menuIcon = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2\"><path fill=\"currentColor\" d=\"M12 17.989V16h.532a.67.67 0 0 0 .633-.887L12.349 13H6.117l-.815 2.113a.67.67 0 0 0 .633.887H7v2H0v-2h.43a1.4 1.4 0 0 0 1.32-.935L7.257 0h3.952l4.768 13.042-.346.319c-1.407 1.317-1.454 1.899-1.909 4.069a.865.865 0 0 0-.016.258 1.074 1.074 0 0 0-.114-.006c-.648.007-1.166.12-1.592.307ZM7.114 10h4.238L9.093 3.801 7.114 10Z\" style=\"fill-rule:nonzero\"/><path fill=\"currentColor\" d=\"M0 21.398c5.504.456 3.533-5.392 8.626-5.445l2.206 1.841c.549 6.645-7.579 8.127-10.832 3.604Zm16.878-8.538c1.713-2.687 7.016-11.698 7.016-11.698.423-.747-.515-1.528-1.17-.976 0 0-7.887 6.857-10.213 9.03-1.838 1.719-1.846 2.504-2.441 5.336l2.016 1.681c2.67-1.098 3.439-1.248 4.792-3.373Z\" style=\"fill-rule:nonzero\" transform=\"translate(7.766 7.766) scale(.6764)\"/></svg>";

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
  name: 'btsDiv',
  content: 'block+',
  group: 'root',
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

/***/ }),

/***/ "./resources/js/provider.js":
/*!**********************************!*\
  !*** ./resources/js/provider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _marks_span__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./marks/span */ "./resources/js/marks/span.js");
/* harmony import */ var _nodes_Div__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodes/Div */ "./resources/js/nodes/Div.js");
/* harmony import */ var _extensions_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extensions/core */ "./resources/js/extensions/core.js");
/* harmony import */ var _components_MenuButton_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MenuButton.vue */ "./resources/js/components/MenuButton.vue");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons */ "./resources/js/icons.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Provider = /*#__PURE__*/function () {
  function Provider(options) {
    _classCallCheck(this, Provider);

    _defineProperty(this, "types", {
      heading: {
        tag: 'h',
        extension: 'heading',
        command: 'btsToggleHeading',
        autohide: false
      },
      paragraph: {
        tag: 'p',
        extension: 'paragraph',
        command: 'btsToggleParagraph',
        autohide: false
      },
      span: {
        tag: 'span',
        extension: 'btsSpan',
        command: 'btsToggleSpan',
        autohide: false
      },
      link: {
        tag: 'a',
        extension: 'link',
        command: 'btsToggleLink',
        autohide: true
      },
      bulletList: {
        tag: 'ul',
        extension: 'bulletList',
        command: 'btsToggleBulletList',
        autohide: false
      },
      orderedList: {
        tag: 'ol',
        extension: 'orderedList',
        command: 'btsToggleOrderedList',
        autohide: false
      },
      div: {
        tag: 'div',
        extension: 'btsDiv',
        command: 'btsToggleDiv',
        autohide: false
      }
    });

    options = _objectSpread(_objectSpread({}, options), {}, {
      types: this.mergeTypeData(options.types)
    });
    this.bootDirectives().bootExtensions(options).bootOverrides(options).bootStyleButtons(options).bootMenuButton(options).bootCss(options);
  }

  _createClass(Provider, [{
    key: "mergeTypeData",
    value: function mergeTypeData(types) {
      var _this = this;

      return Object.fromEntries(Object.entries(types).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            type = _ref2[1];

        return [key, _objectSpread(_objectSpread({}, type), _this.types[key])];
      }));
    }
  }, {
    key: "bootDirectives",
    value: function bootDirectives() {
      Vue.directive('bts-click-outside', {
        bind: function bind(el, binding, vnode) {
          el.clickOutsideEvent = function (event) {
            if (!(el == event.target || el.contains(event.target))) {
              vnode.context[binding.expression](event);
            }
          };

          document.body.addEventListener('click', el.clickOutsideEvent);
        },
        unbind: function unbind(el) {
          document.body.removeEventListener('click', el.clickOutsideEvent);
        }
      });
      return this;
    }
  }, {
    key: "bootExtensions",
    value: function bootExtensions(options) {
      Statamic.$bard.addExtension(function () {
        return _extensions_core__WEBPACK_IMPORTED_MODULE_2__["default"].configure(options);
      });
      Statamic.$bard.addExtension(function () {
        return _marks_span__WEBPACK_IMPORTED_MODULE_0__["default"];
      });

      if (options.pro) {
        Statamic.$bard.addExtension(function () {
          return _nodes_Div__WEBPACK_IMPORTED_MODULE_1__["default"];
        });
      }

      return this;
    }
  }, {
    key: "bootOverrides",
    value: function bootOverrides(options) {
      Statamic.$bard.addExtension(function (_ref3) {
        var bard = _ref3.bard;
        var buttons = bard.buttons;

        if (!buttons.find(function (button) {
          return button.name === 'bts_menu';
        })) {
          return;
        }

        var menu = bard.config.bts_menu || [];
        bard.buttons.forEach(function (button) {
          if (menu.includes(button.name)) {
            button.visibleWhenActive = 'btsVoid';
          }
        });
      });
      Statamic.$bard.addExtension(function (_ref4) {
        var bard = _ref4.bard;
        var blank = [].concat(_toConsumableArray(options.styleExtensions.includes('heading') ? ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] : []), _toConsumableArray(options.styleExtensions.includes('bulletList') ? ['unordererdlist'] : []), _toConsumableArray(options.styleExtensions.includes('ordererdList') ? ['ordererdlist'] : []));
        bard.buttons.forEach(function (button) {
          if (blank.includes(button.name)) {
            button.args["class"] = null;
          }
        });
      });
      return this;
    }
  }, {
    key: "bootStyleButtons",
    value: function bootStyleButtons(options) {
      Statamic.$bard.buttons(function (buttons, button) {
        Object.entries(options.styles).forEach(function (_ref5) {
          var _ref7;

          var _ref6 = _slicedToArray(_ref5, 2),
              key = _ref6[0],
              style = _ref6[1];

          var type = options.types[style.type];
          var icon = (0,_icons__WEBPACK_IMPORTED_MODULE_4__.styleToIcon)(style, type);
          var args = style.type === 'heading' ? (_ref7 = {}, _defineProperty(_ref7, options.attr, style[options.store]), _defineProperty(_ref7, "level", style.level), _ref7) : _defineProperty({}, options.attr, style[options.store]);
          var data = {
            name: key,
            text: style.name,
            args: args,
            activeName: type.extension,
            html: icon,
            isVisible: function isVisible(editor) {
              return editor.isActive(type.extension);
            },
            command: function command(editor, args) {
              return editor.commands[type.command](args);
            },
            btsStyle: style
          };
          buttons.splice(buttons.indexOf(key), 0, button(data));
        });
      });
      return this;
    }
  }, {
    key: "bootMenuButton",
    value: function bootMenuButton(options) {
      if (options.pro) {
        Statamic.$bard.buttons(function (buttons, button) {
          buttons.splice(buttons.indexOf('bts_menu'), 0, button({
            name: 'bts_menu',
            text: 'Style',
            component: _components_MenuButton_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
            html: _icons__WEBPACK_IMPORTED_MODULE_4__.menuIcon,
            btsConfig: options
          }));
        });
      }

      return this;
    }
  }, {
    key: "bootCss",
    value: function bootCss(options) {
      var css = [].concat(_toConsumableArray(this.gatherStyleCss(options)), _toConsumableArray(options.pro ? this.gatherDivCss() : []));
      var el = document.createElement('style');
      el.appendChild(document.createTextNode(css.join(' ')));
      document.head.appendChild(el);
      return this;
    }
  }, {
    key: "gatherStyleCss",
    value: function gatherStyleCss(options) {
      var _this2 = this;

      var css = [];
      Object.entries(options.styles).forEach(function (_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2),
            key = _ref10[0],
            style = _ref10[1];

        var type = options.types[style.type];
        var tag = style.type === 'heading' ? "".concat(type.tag).concat(style.level) : "".concat(type.tag);
        var selector = ".bard-fieldtype .ProseMirror ".concat(tag, "[data-bts=\"").concat(style[options.store], "\"]");
        var badgeSelector = ".bard-fieldtype .ProseMirror ".concat(tag, "[data-bts=\"").concat(style[options.store], "\"]::before");
        var menuSelector = ".bard-fieldtype .bts-menu-preview[data-bts-match~=\"".concat(key, "\"]");
        css.push.apply(css, _toConsumableArray(_this2.parseCss(selector, style.cp_css)));
        css.push.apply(css, _toConsumableArray(_this2.parseMenuCss(menuSelector, style.cp_css)));

        if (style.cp_badge) {
          css.push("".concat(badgeSelector, " { content: \"").concat(style.name, "\"; }"));
        }
      });
      return css;
    }
  }, {
    key: "gatherDivCss",
    value: function gatherDivCss() {
      var css = [];
      css.push('.bard-fieldtype .ProseMirror div[data-bts] { margin-top: 0px; margin-bottom: 0.85em; }');
      var selector = ['.bard-fieldtype .ProseMirror >', '.bard-fieldtype .ProseMirror div[data-bts] >'];
      var cpCss = Array.from(document.styleSheets).find(function (sheet) {
        return sheet.href && sheet.href.includes('statamic/cp/css/cp.css');
      });
      Array.from(cpCss.cssRules).filter(function (rule) {
        return rule.selectorText && rule.selectorText.startsWith(selector[0]);
      }).forEach(function (rule) {
        return css.push(rule.cssText.replaceAll(selector[0], selector[1]));
      });
      return css;
    }
  }, {
    key: "parseCss",
    value: function parseCss(prefix, data) {
      if (typeof data === 'string') {
        return ["".concat(prefix, " { ").concat(data, " }")];
      }

      return Object.entries(data).map(function (_ref11) {
        var _ref12 = _slicedToArray(_ref11, 2),
            selector = _ref12[0],
            properties = _ref12[1];

        var prefixed = selector.includes('&') ? selector.replace('&', prefix) : "".concat(prefix, " ").concat(selector);
        var string = _typeof(properties) === 'object' ? Object.entries(properties).map(function (_ref13) {
          var _ref14 = _slicedToArray(_ref13, 2),
              name = _ref14[0],
              value = _ref14[1];

          return "".concat(name, ": ").concat(value, ";");
        }).join('') : properties;
        return "".concat(prefixed, " { ").concat(string, " }");
      });
    }
  }, {
    key: "parseMenuCss",
    value: function parseMenuCss(prefix, data) {
      return this.parseCss(prefix, typeof data === 'string' ? data : data['&'] || '');
    }
  }]);

  return Provider;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Provider);

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/css/addon.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/css/addon.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".bard-fieldtype .ProseMirror div[data-bts] {\n  border: 1px solid #e4ebf1;\n  border-radius: 2px;\n  padding: 16px;\n}\n.bard-fieldtype .ProseMirror [data-bts]::before {\n  display: none;\n}\n.bard-fieldtype .ProseMirror h1[data-bts]::before, .bard-fieldtype .ProseMirror h2[data-bts]::before, .bard-fieldtype .ProseMirror h3[data-bts]::before, .bard-fieldtype .ProseMirror h4[data-bts]::before, .bard-fieldtype .ProseMirror h5[data-bts]::before, .bard-fieldtype .ProseMirror h6[data-bts]::before, .bard-fieldtype .ProseMirror p[data-bts]::before, .bard-fieldtype .ProseMirror div[data-bts]::before {\n  background-color: #e4ebf1;\n  border-radius: 2px;\n  color: #1c2e36;\n  font-size: 10px;\n  font-weight: normal;\n  font-family: Inter UI, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;\n  line-height: 1;\n  padding: 4px 6px;\n  display: block;\n  max-width: -webkit-max-content;\n  max-width: -moz-max-content;\n  max-width: max-content;\n  position: relative;\n}\n.bard-fieldtype .ProseMirror div[data-bts] {\n  position: relative;\n}\n.bard-fieldtype .ProseMirror div[data-bts]::before {\n  position: absolute;\n  top: -1px;\n  left: -1px;\n}\n.bard-fieldtype .bts-menu-panel {\n  background-color: white;\n  border-radius: 3px;\n  position: absolute;\n  line-height: 1;\n  box-shadow: 0 0 0 1px rgba(49, 49, 93, 0.05), 0 2px 5px 0 rgba(49, 49, 93, 0.08), 0 1px 3px 0 rgba(49, 49, 93, 0.15);\n  margin-top: 8px;\n  z-index: 100;\n  top: 100%;\n}\n.bard-fieldtype .bts-menu-panel::before {\n  content: \"\";\n  border: 6px solid transparent;\n  border-bottom-color: white;\n  position: absolute;\n  bottom: 100%;\n  left: 10px;\n}\n.bard-fieldtype .bts-menu-items {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 4px;\n  max-height: 500px;\n  overflow-y: auto;\n}\n.bard-fieldtype .bts-menu-item {\n  white-space: nowrap;\n  padding: 8px 12px;\n  font-size: 1rem;\n  border-radius: 3px;\n  text-align: left;\n}\n.bard-fieldtype .bts-menu-item:hover {\n  background-color: #f5f8fc;\n}\n.bard-fieldtype .bts-menu-item.active {\n  background-color: #eef2f6;\n}\n.bard-fieldtype .bts-menu-preview {\n  margin: 0 !important;\n}\n.bard-fieldtype .bts-menu-preview[data-bts-match~=h1] {\n  font-size: 2em;\n  font-weight: 700;\n}\n.bard-fieldtype .bts-menu-preview[data-bts-match~=h2] {\n  font-size: 1.75em;\n  font-weight: 700;\n}\n.bard-fieldtype .bts-menu-preview[data-bts-match~=h3] {\n  font-size: 1.5em;\n  font-weight: 700;\n}\n.bard-fieldtype .bts-menu-preview[data-bts-match~=h4] {\n  font-size: 1.25em;\n  font-weight: 700;\n}\n.bard-fieldtype .bts-menu-preview[data-bts-match~=h5] {\n  font-size: 1em;\n  font-weight: 700;\n}\n.bard-fieldtype .bts-menu-preview[data-bts-match~=h6] {\n  font-size: 1em;\n  font-weight: 700;\n}\n.bard-fieldtype .bts-menu-preview[data-bts-match~=bts-span], .bard-fieldtype .bts-menu-preview[data-bts-match~=bts-link] {\n  display: inline;\n}\n.bard-fieldtype .bts-menu-preview[data-bts-match~=bts-unorderedlist] {\n  display: list-item;\n  list-style-type: disc;\n  margin-left: 17px !important;\n}\n.bard-fieldtype .bts-menu-preview[data-bts-match~=bts-orderedlist] {\n  display: list-item;\n  list-style-type: decimal;\n  margin-left: 17px !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************/
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
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_addon_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./addon.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./resources/css/addon.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_addon_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_addon_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ }),

/***/ "./resources/js/components/MenuButton.vue":
/*!************************************************!*\
  !*** ./resources/js/components/MenuButton.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MenuButton_vue_vue_type_template_id_90641cc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuButton.vue?vue&type=template&id=90641cc8& */ "./resources/js/components/MenuButton.vue?vue&type=template&id=90641cc8&");
/* harmony import */ var _MenuButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuButton.vue?vue&type=script&lang=js& */ "./resources/js/components/MenuButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MenuButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuButton_vue_vue_type_template_id_90641cc8___WEBPACK_IMPORTED_MODULE_0__.render,
  _MenuButton_vue_vue_type_template_id_90641cc8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MenuButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/MenuItem.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/MenuItem.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MenuItem_vue_vue_type_template_id_23ec797d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuItem.vue?vue&type=template&id=23ec797d& */ "./resources/js/components/MenuItem.vue?vue&type=template&id=23ec797d&");
/* harmony import */ var _MenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem.vue?vue&type=script&lang=js& */ "./resources/js/components/MenuItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuItem_vue_vue_type_template_id_23ec797d___WEBPACK_IMPORTED_MODULE_0__.render,
  _MenuItem_vue_vue_type_template_id_23ec797d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MenuItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/MenuPanel.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/MenuPanel.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MenuPanel_vue_vue_type_template_id_f8f490ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuPanel.vue?vue&type=template&id=f8f490ec& */ "./resources/js/components/MenuPanel.vue?vue&type=template&id=f8f490ec&");
/* harmony import */ var _MenuPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuPanel.vue?vue&type=script&lang=js& */ "./resources/js/components/MenuPanel.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MenuPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuPanel_vue_vue_type_template_id_f8f490ec___WEBPACK_IMPORTED_MODULE_0__.render,
  _MenuPanel_vue_vue_type_template_id_f8f490ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MenuPanel.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/MenuButton.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/MenuButton.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MenuButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MenuButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MenuItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/MenuItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MenuItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MenuItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MenuPanel.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/MenuPanel.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MenuPanel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MenuPanel.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MenuButton.vue?vue&type=template&id=90641cc8&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/MenuButton.vue?vue&type=template&id=90641cc8& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuButton_vue_vue_type_template_id_90641cc8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuButton_vue_vue_type_template_id_90641cc8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuButton_vue_vue_type_template_id_90641cc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MenuButton.vue?vue&type=template&id=90641cc8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MenuButton.vue?vue&type=template&id=90641cc8&");


/***/ }),

/***/ "./resources/js/components/MenuItem.vue?vue&type=template&id=23ec797d&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/MenuItem.vue?vue&type=template&id=23ec797d& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_template_id_23ec797d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_template_id_23ec797d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuItem_vue_vue_type_template_id_23ec797d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MenuItem.vue?vue&type=template&id=23ec797d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MenuItem.vue?vue&type=template&id=23ec797d&");


/***/ }),

/***/ "./resources/js/components/MenuPanel.vue?vue&type=template&id=f8f490ec&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/MenuPanel.vue?vue&type=template&id=f8f490ec& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuPanel_vue_vue_type_template_id_f8f490ec___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuPanel_vue_vue_type_template_id_f8f490ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuPanel_vue_vue_type_template_id_f8f490ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MenuPanel.vue?vue&type=template&id=f8f490ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MenuPanel.vue?vue&type=template&id=f8f490ec&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MenuButton.vue?vue&type=template&id=90641cc8&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MenuButton.vue?vue&type=template&id=90641cc8& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "bts-click-outside",
          rawName: "v-bts-click-outside",
          value: _vm.closePanel,
          expression: "closePanel",
        },
      ],
      staticClass: "inline-block relative",
    },
    [
      _c("button", {
        directives: [
          {
            name: "tooltip",
            rawName: "v-tooltip",
            value: _vm.button.text,
            expression: "button.text",
          },
        ],
        staticClass: "bard-toolbar-button bts-menu-button",
        attrs: { "aria-label": _vm.button.text },
        domProps: { innerHTML: _vm._s(_vm.button.html) },
        on: { click: _vm.togglePanel },
      }),
      _vm._v(" "),
      _vm.panelActive
        ? _c("MenuPanel", {
            attrs: {
              config: _vm.config,
              bard: _vm.bard,
              editor: _vm.editor,
              btsConfig: _vm.button.btsConfig,
            },
            on: { "bts-menu-click": _vm.closePanel },
          })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MenuItem.vue?vue&type=template&id=23ec797d&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MenuItem.vue?vue&type=template&id=23ec797d& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.visible
    ? _c(
        "button",
        {
          staticClass: "bts-menu-item",
          class: { active: _vm.active },
          on: { click: _vm.click },
        },
        [
          _c(
            "div",
            {
              staticClass: "bts-menu-preview",
              attrs: { "data-bts-match": _vm.previewMatch },
            },
            [_vm._v("\n        " + _vm._s(_vm.item.text) + "\n    ")]
          ),
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MenuPanel.vue?vue&type=template&id=f8f490ec&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MenuPanel.vue?vue&type=template&id=f8f490ec& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "bts-menu-panel" }, [
    _c(
      "div",
      { staticClass: "bts-menu-items" },
      _vm._l(_vm.items, function (item) {
        return _c("MenuItem", {
          key: item.name,
          attrs: {
            item: item,
            config: _vm.config,
            bard: _vm.bard,
            editor: _vm.editor,
            btsConfig: _vm.btsConfig,
          },
          on: {
            "bts-menu-click": function ($event) {
              return _vm.$emit("bts-menu-click")
            },
          },
        })
      }),
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


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
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider */ "./resources/js/provider.js");


Statamic.booting(function () {
  new _provider__WEBPACK_IMPORTED_MODULE_1__["default"](Statamic.$config.get('bard-texstyle'));
});
})();

/******/ })()
;