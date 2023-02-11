/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttrsButton.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttrsButton.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AttrsPanel_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttrsPanel.vue */ "./resources/js/components/AttrsPanel.vue");
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
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [BardToolbarButton],
  components: {
    AttrsPanel: _AttrsPanel_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      panelActive: false
    };
  },
  methods: {
    togglePanel: function togglePanel() {
      this.panelActive = !this.panelActive;

      if (!this.panelActive) {
        this.editor.commands.focus();
      }
    },
    closePanel: function closePanel() {
      if (this.panelActive) {
        this.togglePanel();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttrsPanel.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttrsPanel.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    config: {},
    bard: {},
    editor: {},
    btsOptions: {}
  },
  data: function data() {
    return {
      activeItem: 0,
      items: this.editor.commands.btsAttrsFetchItems().reverse(),
      titles: {
        blockquote: __('Blockquote'),
        bulletList: __('Unordered List'),
        codeBlock: __('Code Block'),
        heading: __('Heading'),
        horizontalRule: __('Horizontal Rule'),
        image: __('Image'),
        listItem: __('List Item'),
        orderedList: __('Ordered List'),
        paragraph: __('Paragraph'),
        table: __('Table'),
        tableCell: __('Table Cell'),
        tableHeader: __('Table Header'),
        tableRow: __('Table Row')
      }
    };
  },
  created: function created() {
    var _this = this;

    this.bard.$on('bts-reselected', function () {
      return _this.$emit('close');
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.bard.$off('bts-reselected');
  },
  methods: {
    fields: function fields(type) {
      return this.btsOptions.attributes[type];
    },
    apply: function apply() {
      this.editor.commands.btsAttrsApplyItems(this.items);
      this.$emit('applied');
    }
  }
});

/***/ }),

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

      if (!this.panelActive) {
        this.editor.commands.focus();
      }
    },
    closePanel: function closePanel() {
      if (this.panelActive) {
        this.togglePanel();
      }
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
    btsOptions: {}
  },
  computed: {
    active: function active() {
      if (this.item.hasOwnProperty('active')) {
        return this.item.active(this.editor, this.item.args);
      }

      var nameProperty = this.item.hasOwnProperty('activeName') ? 'activeName' : 'name';
      var name = this.item[nameProperty];
      return this.editor.isActive(name, this.item.args);
    },
    visible: function visible() {
      if (this.item.hasOwnProperty('btsMenuVisible')) {
        return this.item.btsMenuVisible(this.editor, this.item.args);
      }

      return true;
    },
    previewMatch: function previewMatch() {
      return (this.item.btsStyle ? [this.item.name, this.item.btsStyle.type, this.item.btsStyle.level ? "h".concat(this.item.btsStyle.level) : null] : [this.item.name]).join(' ');
    }
  },
  methods: {
    click: function click() {
      this.item.command(this.editor, this.item.args);
      this.$emit('picked');
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
    btsOptions: {}
  },
  created: function created() {
    var _this = this;

    this.bard.$on('bts-reselected', function () {
      return _this.$emit('close');
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.bard.$off('bts-reselected');
  },
  computed: {
    items: function items() {
      var _this2 = this;

      var buttons = this.bard.buttons;
      var menu = this.config.btsstyles.filter(function (option) {
        return Object.keys(_this2.btsOptions.menuOptions).includes(option);
      });
      return buttons.filter(function (button) {
        return _typeof(button) === 'object' && menu.includes(button.name);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/extensions/attributes.js":
/*!***********************************************!*\
  !*** ./resources/js/extensions/attributes.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _Statamic$$bard$tipta = Statamic.$bard.tiptap.core,
    Extension = _Statamic$$bard$tipta.Extension,
    getNodeAttributes = _Statamic$$bard$tipta.getNodeAttributes;
var Attributes = Extension.create({
  name: 'btsAttributes',
  addOptions: function addOptions() {
    return {
      attributes: {},
      attributesTypes: {}
    };
  },
  addGlobalAttributes: function addGlobalAttributes() {
    var attributes = this.options.attributes;
    return Object.entries(attributes).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          type = _ref2[0],
          attrs = _ref2[1];

      return {
        types: [type],
        attributes: Object.fromEntries(Object.entries(attrs).filter(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              name = _ref4[0],
              attr = _ref4[1];

          return attr.extra;
        }).map(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              name = _ref6[0],
              attr = _ref6[1];

          return [name, {
            "default": typeof attr["default"] !== 'undefined' ? attr["default"] : null,
            rendered: typeof attr.rendered !== 'undefined' ? attr.rendered : true
          }];
        }))
      };
    });
  },
  addCommands: function addCommands() {
    var attributesTypes = this.options.attributesTypes;
    return {
      btsAttrsFetchItems: function btsAttrsFetchItems() {
        return function (_ref7) {
          var state = _ref7.state;
          var from = state.selection.from;
          var items = [];
          state.doc.nodesBetween(from, from, function (node, pos) {
            var type = node.type.name;

            if (attributesTypes.includes(type)) {
              items.push({
                pos: pos,
                type: type,
                attrs: _objectSpread({}, node.attrs)
              });
            }
          });
          return items;
        };
      },
      btsAttrsApplyItems: function btsAttrsApplyItems(items) {
        return function (_ref8) {
          var state = _ref8.state;
          items.forEach(function (item) {
            state.tr.setNodeMarkup(item.pos, undefined, item.attrs);
          });
        };
      }
    };
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Attributes);

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
      bard: {},
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
              editor = _ref5.editor,
              chain = _ref5.chain;

          if (editor.isActive(type, attributes)) {
            return commands.toggleList(type, 'listItem');
          } else if (editor.isActive(type)) {
            return commands.updateAttributes(type, attributes);
          }

          return chain().toggleList(type, 'listItem').updateAttributes(type, attributes).run();
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
  },
  onSelectionUpdate: function onSelectionUpdate() {
    this.options.bard.$emit('bts-reselected');
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
/* harmony export */   "attrsIcon": () => (/* binding */ attrsIcon),
/* harmony export */   "menuIcon": () => (/* binding */ menuIcon),
/* harmony export */   "styleToIcon": () => (/* binding */ styleToIcon)
/* harmony export */ });
var maskCount = 0;
var icons = {
  'letter': function letter(style) {
    var _heading$paragraph$bt;

    var letter = (_heading$paragraph$bt = {
      heading: 'H',
      paragraph: 'P',
      btsSpan: 'T'
    }[style.type]) !== null && _heading$paragraph$bt !== void 0 ? _heading$paragraph$bt : 'S';
    var ident = style.ident;
    return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"16\" viewBox=\"0 0 24 16\" fill=\"currentColor\" style=\"width: 24px;\">\n                <text text-anchor=\"middle\" x=\"8.3\" y=\"15\" style=\"font-family: Times, Times New Roman, serif; font-size: 21px;\">".concat(letter, "</text>\n                <text text-anchor=\"middle\" x=\"20\" y=\"12.5\" style=\"font-size: 12px;\">").concat(ident, "</text>\n            </svg>\n        ");
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
  'bullet-list': function bulletList(style) {
    var ident = style.ident;
    return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                <path d=\"M384 1408c0 53.33-18.667 98.67-56 136s-82.667 56-136 56-98.667-18.67-136-56-56-82.67-56-136 18.667-98.67 56-136 82.667-56 136-56 98.667 18.67 136 56 56 82.67 56 136Zm0-512c0 53.333-18.667 98.667-56 136-37.333 37.33-82.667 56-136 56s-98.667-18.67-136-56C18.667 994.667 0 949.333 0 896s18.667-98.667 56-136 82.667-56 136-56 98.667 18.667 136 56 56 82.667 56 136Zm0-512c0 53.333-18.667 98.667-56 136s-82.667 56-136 56-98.667-18.667-136-56S0 437.333 0 384s18.667-98.667 56-136 82.667-56 136-56 98.667 18.667 136 56 56 82.667 56 136Z\" transform=\"scale(.00893)\"/>\n                <text text-anchor=\"middle\" x=\"11\" y=\"12\" style=\"font-size: 11px;\">".concat(ident, "</text>\n            </svg>\n        ");
  },
  'ordered-list': function orderedList(style) {
    var ident = style.ident;
    return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                <path d=\"M381 1620c0 53.33-18.167 95.33-54.5 126s-81.5 46-135.5 46c-70.667 0-128-22-172-66l57-88c32.667 30 68 45 106 45 19.333 0 36.167-4.83 50.5-14.5 14.333-9.67 21.5-23.83 21.5-42.5 0-42.67-35-61.33-105-56l-26-56c5.333-6.67 16.167-21.17 32.5-43.5s30.5-40.33 42.5-54c12-13.67 24.333-26.5 37-38.5v-1c-10.667 0-26.833.33-48.5 1-21.667.67-37.833 1-48.5 1v53H32v-152h333v88l-95 115c34 8 61 24.33 81 49s30 54 30 88Zm2-627v159H21c-4-24-6-42-6-54 0-34 7.833-65 23.5-93S73 954.333 95 937s44-33.167 66-47.5c22-14.333 40.833-28.833 56.5-43.5 15.667-14.667 23.5-29.667 23.5-45 0-16.667-4.833-29.5-14.5-38.5S203.667 749 187 749c-30.667 0-57.667 19.333-81 58l-85-59c16-34 39.833-60.5 71.5-79.5S159.333 640 198 640c48.667 0 89.667 13.833 123 41.5s50 65.167 50 112.5c0 33.333-11.333 63.833-34 91.5s-47.667 49.167-75 64.5c-27.333 15.333-52.5 32.167-75.5 50.5-23 18.33-34.833 35.83-35.5 52.5h127v-60h105Zm1-580v99H49v-99h107c0-27.333.167-67.833.5-121.5.333-53.667.5-94.167.5-121.5v-12h-2c-5.333 11.333-22 29.333-50 54l-71-76L170 9h106v404h108Z\" transform=\"scale(.00893)\"/>\n                <text text-anchor=\"middle\" x=\"11\" y=\"12\" style=\"font-size: 11px;\">".concat(ident, "</text>\n            </svg>\n        ");
  },
  'link': function link(style) {
    var ident = style.ident;
    return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                <path d=\"M1520 1216c0-26.67-9.33-49.33-28-68l-208-208c-18.67-18.667-41.33-28-68-28-28 0-52 10.667-72 32 2 2 8.33 8.167 19 18.5s17.83 17.5 21.5 21.5c3.67 4 8.67 10.333 15 19 6.33 8.67 10.67 17.17 13 25.5 2.33 8.33 3.5 17.5 3.5 27.5 0 26.67-9.33 49.33-28 68s-41.33 28-68 28c-10 0-19.17-1.17-27.5-3.5-8.33-2.33-16.83-6.67-25.5-13-8.67-6.33-15-11.33-19-15s-11.17-10.83-21.5-21.5-16.5-17-18.5-19c-22 20.67-33 45-33 73 0 26.67 9.333 49.33 28 68l206 207c18 18 40.67 27 68 27 26.67 0 49.33-8.67 68-26l147-146c18.67-18.67 28-41 28-67ZM817 511c0-26.667-9.333-49.333-28-68L583 236c-18.667-18.667-41.333-28-68-28-26 0-48.667 9-68 27L300 381c-18.667 18.667-28 41-28 67 0 26.667 9.333 49.333 28 68l208 208c18 18 40.667 27 68 27 28 0 52-10.333 72-31-2-2-8.333-8.167-19-18.5S611.167 684 607.5 680c-3.667-4-8.667-10.333-15-19s-10.667-17.167-13-25.5c-2.333-8.333-3.5-17.5-3.5-27.5 0-26.667 9.333-49.333 28-68s41.333-28 68-28c10 0 19.167 1.167 27.5 3.5 8.333 2.333 16.833 6.667 25.5 13 8.667 6.333 15 11.333 19 15s11.167 10.833 21.5 21.5 16.5 17 18.5 19c22-20.667 33-45 33-73Zm895 705c0 80-28.33 147.67-85 203l-147 146c-55.33 55.33-123 83-203 83-80.67 0-148.67-28.33-204-85l-206-207c-55.333-55.33-83-123-83-203 0-82 29.333-151.67 88-209l-88-88c-57.333 58.667-126.667 88-208 88-80 0-148-28-204-84L164 652c-56-56-84-124-84-204s28.333-147.667 85-203L312 99c55.333-55.333 123-83 203-83 80.667 0 148.667 28.333 204 85l206 207c55.333 55.333 83 123 83 203 0 82-29.333 151.667-88 209l88 88c57.33-58.667 126.67-88 208-88 80 0 148 28 204 84l208 208c56 56 84 124 84 204Z\" transform=\"matrix(.00702 0 0 .00702 -.562 3.86)\"/>\n                <text text-anchor=\"middle\" x=\"11\" y=\"8\" style=\"font-size: 11px;\">".concat(ident, "</text>\n            </svg>\n        ");
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
  } else if (style.type === 'link') {
    icon = 'link';
  } else if (style.type === 'bulletList') {
    icon = 'bullet-list';
  } else if (style.type === 'orderedList') {
    icon = 'ordered-list';
  } else if (style.type === 'btsDiv') {
    icon = 'square';
  } else {
    icon = 'letter';
  }

  return icons[icon] ? icons[icon](style) : icon;
};
var menuIcon = "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"16\" viewBox=\"0 0 24 16\" fill=\"currentColor\" style=\"width: 24px;\">\n        <text text-anchor=\"middle\" x=\"12\" y=\"15\" style=\"font-family: Times, Times New Roman, serif; font-size: 21px; letter-spacing: -1px;\">Aa</text>\n    </svg>\n";
var attrsIcon = "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n        <path d=\"m491 1536 91-91-235-235-91 91v107h128v128h107Zm523-928c0-14.667-7.33-22-22-22-6.667 0-12.333 2.333-17 7l-542 542c-4.667 4.67-7 10.33-7 17 0 14.67 7.333 22 22 22 6.667 0 12.333-2.33 17-7l542-542c4.67-4.667 7-10.333 7-17Zm-54-192 416 416-832 832H128v-416l832-832Zm683 96c0 35.333-12.33 65.333-37 90l-166 166-416-416 166-165c24-25.333 54-38 90-38 35.33 0 65.67 12.667 91 38l235 234c24.67 26 37 56.333 37 91Z\" transform=\"scale(.00893)\"/>\n    </svg>\n";

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

/***/ "./resources/js/nodes/div.js":
/*!***********************************!*\
  !*** ./resources/js/nodes/div.js ***!
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
/* harmony import */ var _nodes_div__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodes/div */ "./resources/js/nodes/div.js");
/* harmony import */ var _extensions_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extensions/core */ "./resources/js/extensions/core.js");
/* harmony import */ var _extensions_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extensions/attributes */ "./resources/js/extensions/attributes.js");
/* harmony import */ var _components_MenuButton_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MenuButton.vue */ "./resources/js/components/MenuButton.vue");
/* harmony import */ var _components_AttrsButton_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/AttrsButton.vue */ "./resources/js/components/AttrsButton.vue");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons */ "./resources/js/icons.js");
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
        command: 'btsToggleHeading',
        toggleVisibility: false
      },
      paragraph: {
        tag: 'p',
        command: 'btsToggleParagraph',
        toggleVisibility: false
      },
      btsSpan: {
        tag: 'span',
        command: 'btsToggleSpan',
        toggleVisibility: false
      },
      link: {
        tag: 'a',
        command: 'btsToggleLink',
        toggleVisibility: true
      },
      bulletList: {
        tag: 'ul',
        command: 'btsToggleBulletList',
        toggleVisibility: false
      },
      orderedList: {
        tag: 'ol',
        command: 'btsToggleOrderedList',
        toggleVisibility: false
      },
      btsDiv: {
        tag: 'div',
        command: 'btsToggleDiv',
        toggleVisibility: false
      }
    });

    options = _objectSpread(_objectSpread({}, options), {}, {
      types: this.mergeTypeData(options.types)
    });
    this.bootExtensions(options).bootOverrides(options).bootStyleButtons(options).bootMenuButton(options).bootAttrsButton(options).bootCss(options);
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
    key: "bootExtensions",
    value: function bootExtensions(options) {
      Statamic.$bard.addExtension(function (_ref3) {
        var bard = _ref3.bard;
        return _extensions_core__WEBPACK_IMPORTED_MODULE_2__["default"].configure(_objectSpread(_objectSpread({}, options), {}, {
          bard: bard
        }));
      });
      Statamic.$bard.addExtension(function () {
        return _marks_span__WEBPACK_IMPORTED_MODULE_0__["default"];
      });

      if (options.pro) {
        Statamic.$bard.addExtension(function () {
          return _extensions_attributes__WEBPACK_IMPORTED_MODULE_3__["default"].configure(options);
        });
        Statamic.$bard.addExtension(function () {
          return _nodes_div__WEBPACK_IMPORTED_MODULE_1__["default"];
        });
      }

      return this;
    }
  }, {
    key: "bootOverrides",
    value: function bootOverrides(options) {
      Statamic.$bard.addExtension(function (_ref4) {
        var bard = _ref4.bard;
        var buttons = bard.buttons;

        if (!buttons.find(function (button) {
          return button.name === 'btsstyles';
        })) {
          return;
        }

        var menu = (bard.config.btsstyles || []).filter(function (option) {
          return Object.keys(options.menuOptions).includes(option);
        });
        bard.buttons.forEach(function (button) {
          if (menu.includes(button.name)) {
            button.visible = function () {
              return false;
            };
          }
        });
      });
      Statamic.$bard.addExtension(function (_ref5) {
        var bard = _ref5.bard;
        var blank = [].concat(_toConsumableArray(options.styleTypes.includes('heading') ? ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] : []), _toConsumableArray(options.styleTypes.includes('bulletList') ? ['unorderedlist'] : []), _toConsumableArray(options.styleTypes.includes('orderedList') ? ['orderedlist'] : []));
        bard.buttons.forEach(function (button) {
          if (blank.includes(button.name)) {
            button.args = _objectSpread(_objectSpread({}, button.args || {}), {}, {
              "class": null
            });
          }

          if (button.name === 'unorderedlist' && options.styleTypes.includes('bulletList')) {
            button.command = function (editor, args) {
              return editor.chain().focus().btsToggleBulletList(args).run();
            };
          }

          if (button.name === 'orderedlist' && options.styleTypes.includes('orderedList')) {
            button.command = function (editor, args) {
              return editor.chain().focus().btsToggleOrderedList(args).run();
            };
          }
        });
      });
      return this;
    }
  }, {
    key: "bootStyleButtons",
    value: function bootStyleButtons(options) {
      Statamic.$bard.buttons(function (buttons, button) {
        Object.entries(options.styles).forEach(function (_ref6) {
          var _ref8;

          var _ref7 = _slicedToArray(_ref6, 2),
              key = _ref7[0],
              style = _ref7[1];

          var type = options.types[style.type];
          var icon = (0,_icons__WEBPACK_IMPORTED_MODULE_6__.styleToIcon)(style, type);
          var args = style.type === 'heading' ? (_ref8 = {}, _defineProperty(_ref8, options.attr, style[options.store]), _defineProperty(_ref8, "level", style.level), _ref8) : _defineProperty({}, options.attr, style[options.store]);
          var data = {
            name: key,
            text: style.name,
            args: args,
            html: icon,
            active: function active(editor, args) {
              return editor.isActive(type.key, args);
            },
            visible: type.toggleVisibility ? function (editor) {
              return editor.isActive(type.key);
            } : function () {
              return true;
            },
            btsMenuVisible: type.toggleVisibility ? function (editor) {
              return editor.isActive(type.key);
            } : function () {
              return true;
            },
            command: function command(editor, args) {
              return editor.chain().focus()[type.command](args).run();
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
      if (!options.pro) {
        return this;
      }

      Statamic.$bard.buttons(function (buttons, button) {
        buttons.splice(buttons.indexOf('btsstyles'), 0, button({
          name: 'btsstyles',
          text: __('Style'),
          component: _components_MenuButton_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
          html: _icons__WEBPACK_IMPORTED_MODULE_6__.menuIcon,
          btsOptions: options
        }));
      });
      return this;
    }
  }, {
    key: "bootAttrsButton",
    value: function bootAttrsButton(options) {
      if (!options.pro) {
        return this;
      }

      Statamic.$bard.buttons(function (buttons, button) {
        buttons.splice(buttons.indexOf('btsattributes'), 0, button({
          name: 'btsattributes',
          text: __('Attributes'),
          component: _components_AttrsButton_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
          html: _icons__WEBPACK_IMPORTED_MODULE_6__.attrsIcon,
          btsOptions: options
        }));
      });
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
      Object.entries(options.styles).forEach(function (_ref10) {
        var _ref11 = _slicedToArray(_ref10, 2),
            key = _ref11[0],
            style = _ref11[1];

        var type = options.types[style.type];
        var tag = style.type === 'heading' ? "".concat(type.tag).concat(style.level) : "".concat(type.tag);
        var selector = ".bard-fieldtype .ProseMirror ".concat(tag, "[data-bts=\"").concat(style[options.store], "\"]");
        var badgeSelector = ".bard-fieldtype .ProseMirror ".concat(tag, "[data-bts=\"").concat(style[options.store], "\"]::before");
        var menuSelector = ".bard-fieldtype .bts-menu-preview[data-bts-match~=\"".concat(key, "\"]");
        css.push.apply(css, _toConsumableArray(_this2.parseCss(selector, style.cp_css || '')));
        css.push.apply(css, _toConsumableArray(_this2.parseMenuCss(menuSelector, style.cp_css || '')));

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

      return Object.entries(data).map(function (_ref12) {
        var _ref13 = _slicedToArray(_ref12, 2),
            selector = _ref13[0],
            properties = _ref13[1];

        var prefixed = selector.includes('&') ? selector.replace('&', prefix) : "".concat(prefix, " ").concat(selector);
        var string = _typeof(properties) === 'object' ? Object.entries(properties).map(function (_ref14) {
          var _ref15 = _slicedToArray(_ref14, 2),
              name = _ref15[0],
              value = _ref15[1];

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
___CSS_LOADER_EXPORT___.push([module.id, ".bard-fieldtype .ProseMirror div[data-bts] {\n  border: #e4ebf1 solid;\n  border-width: 4px 0;\n  padding: 0.85em 0;\n  margin-top: 0;\n  margin-bottom: 0.85em;\n  border-radius: 4px;\n}\n.bard-fieldtype .ProseMirror [data-bts]::before {\n  display: none;\n}\n.bard-fieldtype .ProseMirror h1[data-bts]::before, .bard-fieldtype .ProseMirror h2[data-bts]::before, .bard-fieldtype .ProseMirror h3[data-bts]::before, .bard-fieldtype .ProseMirror h4[data-bts]::before, .bard-fieldtype .ProseMirror h5[data-bts]::before, .bard-fieldtype .ProseMirror h6[data-bts]::before, .bard-fieldtype .ProseMirror p[data-bts]::before, .bard-fieldtype .ProseMirror ul[data-bts]::before, .bard-fieldtype .ProseMirror ol[data-bts]::before, .bard-fieldtype .ProseMirror div[data-bts]::before {\n  background-color: #e4ebf1;\n  border-radius: 2px;\n  color: #1c2e36;\n  font-size: 10px;\n  font-weight: normal;\n  font-family: Inter UI, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;\n  line-height: 1;\n  padding: 4px 6px;\n  display: block;\n  max-width: -webkit-max-content;\n  max-width: -moz-max-content;\n  max-width: max-content;\n  position: relative;\n}\n.bard-fieldtype .ProseMirror ul[data-bts]::before, .bard-fieldtype .ProseMirror ol[data-bts]::before {\n  margin-bottom: 0.85em;\n}\n.bard-fieldtype .ProseMirror div[data-bts] {\n  position: relative;\n  margin-top: 1.7em;\n  margin-bottom: 1.7em;\n}\n.bard-fieldtype .ProseMirror div[data-bts]::before {\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.bard-fieldtype .bts-panel {\n  background-color: white;\n  border-radius: 3px;\n  position: absolute;\n  line-height: 1;\n  box-shadow: 0 0 0 1px rgba(49, 49, 93, 0.05), 0 2px 5px 0 rgba(49, 49, 93, 0.08), 0 1px 3px 0 rgba(49, 49, 93, 0.15);\n  margin-top: 8px;\n  z-index: 100;\n  top: 100%;\n}\n.bard-fieldtype .bts-panel::before {\n  content: \"\";\n  border: 6px solid transparent;\n  border-bottom-color: white;\n  position: absolute;\n  bottom: 100%;\n  left: 10px;\n}\n.bard-fieldtype .bts-menu-items {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 4px;\n  max-height: 500px;\n  overflow-y: auto;\n}\n.bard-fieldtype .bts-menu-item {\n  white-space: nowrap;\n  padding: 8px 12px;\n  font-size: 1rem;\n  border-radius: 3px;\n  text-align: left;\n}\n.bard-fieldtype .bts-menu-item:hover {\n  background-color: #f5f8fc;\n}\n.bard-fieldtype .bts-menu-item.active {\n  background-color: #eef2f6;\n}\n.bard-fieldtype .bts-menu-preview {\n  margin: 0 !important;\n}\n.bard-fieldtype .bts-menu-preview[data-bts-match~=h1] {\n  font-size: 2em;\n  font-weight: 700;\n}\n.bard-fieldtype .bts-menu-preview[data-bts-match~=h2] {\n  font-size: 1.75em;\n  font-weight: 700;\n}\n.bard-fieldtype .bts-menu-preview[data-bts-match~=h3] {\n  font-size: 1.5em;\n  font-weight: 700;\n}\n.bard-fieldtype .bts-menu-preview[data-bts-match~=h4] {\n  font-size: 1.25em;\n  font-weight: 700;\n}\n.bard-fieldtype .bts-menu-preview[data-bts-match~=h5] {\n  font-size: 1em;\n  font-weight: 700;\n}\n.bard-fieldtype .bts-menu-preview[data-bts-match~=h6] {\n  font-size: 1em;\n  font-weight: 700;\n}\n.bard-fieldtype .bts-menu-preview[data-bts-match~=bts-span], .bard-fieldtype .bts-menu-preview[data-bts-match~=bts-link] {\n  display: inline;\n}\n.bard-fieldtype .bts-menu-preview[data-bts-match~=unorderedlist], .bard-fieldtype .bts-menu-preview[data-bts-match~=bulletList] {\n  display: list-item;\n  list-style-type: disc;\n  margin-left: 17px !important;\n}\n.bard-fieldtype .bts-menu-preview[data-bts-match~=orderedlist], .bard-fieldtype .bts-menu-preview[data-bts-match~=orderedList] {\n  display: list-item;\n  list-style-type: decimal;\n  margin-left: 17px !important;\n}\n.bard-fieldtype .bts-arrow {\n  margin-left: -0.3rem;\n  margin-right: 0.3rem;\n}\n.bard-fieldtype .bts-py-1\\.25 {\n  padding-top: 0.6rem;\n  padding-bottom: 0.6rem;\n}\n.bard-fieldtype .bts-gap-0\\.5 {\n  gap: 0.3rem;\n}", ""]);
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

/***/ "./resources/js/components/AttrsButton.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/AttrsButton.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AttrsButton_vue_vue_type_template_id_3ea59759___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttrsButton.vue?vue&type=template&id=3ea59759& */ "./resources/js/components/AttrsButton.vue?vue&type=template&id=3ea59759&");
/* harmony import */ var _AttrsButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttrsButton.vue?vue&type=script&lang=js& */ "./resources/js/components/AttrsButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AttrsButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AttrsButton_vue_vue_type_template_id_3ea59759___WEBPACK_IMPORTED_MODULE_0__.render,
  _AttrsButton_vue_vue_type_template_id_3ea59759___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AttrsButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/AttrsPanel.vue":
/*!************************************************!*\
  !*** ./resources/js/components/AttrsPanel.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AttrsPanel_vue_vue_type_template_id_4b1833a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttrsPanel.vue?vue&type=template&id=4b1833a6& */ "./resources/js/components/AttrsPanel.vue?vue&type=template&id=4b1833a6&");
/* harmony import */ var _AttrsPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttrsPanel.vue?vue&type=script&lang=js& */ "./resources/js/components/AttrsPanel.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AttrsPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AttrsPanel_vue_vue_type_template_id_4b1833a6___WEBPACK_IMPORTED_MODULE_0__.render,
  _AttrsPanel_vue_vue_type_template_id_4b1833a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AttrsPanel.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/components/AttrsButton.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/AttrsButton.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttrsButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AttrsButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttrsButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttrsButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AttrsPanel.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/AttrsPanel.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttrsPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AttrsPanel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttrsPanel.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttrsPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/AttrsButton.vue?vue&type=template&id=3ea59759&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/AttrsButton.vue?vue&type=template&id=3ea59759& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttrsButton_vue_vue_type_template_id_3ea59759___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttrsButton_vue_vue_type_template_id_3ea59759___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttrsButton_vue_vue_type_template_id_3ea59759___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AttrsButton.vue?vue&type=template&id=3ea59759& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttrsButton.vue?vue&type=template&id=3ea59759&");


/***/ }),

/***/ "./resources/js/components/AttrsPanel.vue?vue&type=template&id=4b1833a6&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/AttrsPanel.vue?vue&type=template&id=4b1833a6& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttrsPanel_vue_vue_type_template_id_4b1833a6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttrsPanel_vue_vue_type_template_id_4b1833a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttrsPanel_vue_vue_type_template_id_4b1833a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AttrsPanel.vue?vue&type=template&id=4b1833a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttrsPanel.vue?vue&type=template&id=4b1833a6&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttrsButton.vue?vue&type=template&id=3ea59759&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttrsButton.vue?vue&type=template&id=3ea59759& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "inline-block relative" },
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
        ? _c("AttrsPanel", {
            attrs: {
              config: _vm.config,
              bard: _vm.bard,
              editor: _vm.editor,
              btsOptions: _vm.button.btsOptions,
            },
            on: { close: _vm.closePanel, applied: _vm.closePanel },
          })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttrsPanel.vue?vue&type=template&id=4b1833a6&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttrsPanel.vue?vue&type=template&id=4b1833a6& ***!
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
  return _c("div", { staticClass: "bts-panel" }, [
    _vm.items.length
      ? _c(
          "div",
          [
            _vm._l(_vm.items, function (item, i) {
              return _c("div", [
                _c(
                  "div",
                  {
                    staticClass:
                      "font-bold px-2 bts-py-1.25 bg-grey-10 title-case border-b flex items-center cursor-pointer",
                    on: {
                      click: function ($event) {
                        _vm.activeItem = i
                      },
                    },
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "w-4 h-4 bts-arrow text-grey-70",
                        class: { "rotate-90": _vm.activeItem === i },
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          "stroke-width": "1.5",
                          stroke: "currentColor",
                        },
                      },
                      [
                        _c("path", {
                          attrs: {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M8.25 4.5l7.5 7.5-7.5 7.5",
                          },
                        }),
                      ]
                    ),
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.titles[item.type]) +
                        "\n            "
                    ),
                  ]
                ),
                _vm._v(" "),
                _vm.activeItem === i
                  ? _c(
                      "div",
                      { staticClass: "p-2 border-b space-y-1.5" },
                      _vm._l(_vm.fields(item.type), function (field, name) {
                        return _c("div", [
                          field.type === "toggle"
                            ? _c(
                                "label",
                                {
                                  staticClass:
                                    "flex items-baseline bts-gap-0.5 font-normal",
                                },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: item.attrs[name],
                                        expression: "item.attrs[name]",
                                      },
                                    ],
                                    attrs: {
                                      type: "checkbox",
                                      "true-value": true,
                                      "false-value": null,
                                    },
                                    domProps: {
                                      checked: Array.isArray(item.attrs[name])
                                        ? _vm._i(item.attrs[name], null) > -1
                                        : item.attrs[name],
                                    },
                                    on: {
                                      change: function ($event) {
                                        var $$a = item.attrs[name],
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : null
                                        if (Array.isArray($$a)) {
                                          var $$v = null,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              _vm.$set(
                                                item.attrs,
                                                name,
                                                $$a.concat([$$v])
                                              )
                                          } else {
                                            $$i > -1 &&
                                              _vm.$set(
                                                item.attrs,
                                                name,
                                                $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1))
                                              )
                                          }
                                        } else {
                                          _vm.$set(item.attrs, name, $$c)
                                        }
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "text-sm" }, [
                                    _vm._v(_vm._s(field.display || name)),
                                  ]),
                                ]
                              )
                            : _c("label", { staticClass: "font-normal" }, [
                                _c(
                                  "div",
                                  { staticClass: "text-sm leading-none" },
                                  [_vm._v(_vm._s(field.display || name))]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: item.attrs[name],
                                      expression: "item.attrs[name]",
                                    },
                                  ],
                                  staticClass:
                                    "input h-8 p-1 border text-sm border-grey-50 rounded mt-1",
                                  attrs: { type: "text" },
                                  domProps: { value: item.attrs[name] },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item.attrs,
                                        name,
                                        $event.target.value
                                      )
                                    },
                                  },
                                }),
                              ]),
                        ])
                      }),
                      0
                    )
                  : _vm._e(),
              ])
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex items-center justify-end space-x-1 font-normal px-2 py-1.5",
              },
              [
                _c(
                  "button",
                  { staticClass: "btn btn-sm", on: { click: _vm.apply } },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.__("OK")) +
                        "\n            "
                    ),
                  ]
                ),
              ]
            ),
          ],
          2
        )
      : _c("div", { staticClass: "p-4 w-40 text-center text-grey-40" }, [
          _c(
            "svg",
            {
              staticClass: "w-12 h-12",
              attrs: {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
              },
            },
            [
              _c("path", {
                staticStyle: {
                  fill: "none",
                  "fill-rule": "nonzero",
                  "stroke-width": "1.5px",
                },
                attrs: {
                  d: "M23.168.832.809 23.191M21 12c0 4.937-4.063 9-9 9s-9-4.063-9-9 4.063-9 9-9 9 4.063 9 9Z",
                  stroke: "currentColor",
                },
              }),
            ]
          ),
        ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



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
    { staticClass: "inline-block relative" },
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
              btsOptions: _vm.button.btsOptions,
            },
            on: { close: _vm.closePanel, picked: _vm.closePanel },
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
  return _c("div", { staticClass: "bts-panel" }, [
    _vm.items.length
      ? _c(
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
                btsOptions: _vm.btsOptions,
              },
              on: {
                picked: function ($event) {
                  return _vm.$emit("picked")
                },
              },
            })
          }),
          1
        )
      : _c("div", { staticClass: "p-4 w-40 text-center text-grey-40" }, [
          _c(
            "svg",
            {
              staticClass: "w-12 h-12",
              attrs: {
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
              },
            },
            [
              _c("path", {
                staticStyle: {
                  fill: "none",
                  "fill-rule": "nonzero",
                  "stroke-width": "1.5px",
                },
                attrs: {
                  d: "M23.168.832.809 23.191M21 12c0 4.937-4.063 9-9 9s-9-4.063-9-9 4.063-9 9-9 9 4.063 9 9Z",
                  stroke: "currentColor",
                },
              }),
            ]
          ),
        ]),
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