/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttributesButton.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttributesButton.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AttributesPanel_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttributesPanel.vue */ "./resources/js/components/AttributesPanel.vue");
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
    AttributesPanel: _AttributesPanel_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttributesPanel.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttributesPanel.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    var _this$editor$commands = this.editor.commands.btsAttributesFetch(),
        info = _this$editor$commands.info,
        items = _this$editor$commands.items;

    return {
      activeItem: 0,
      info: info,
      items: items,
      titles: {
        blockquote: __('Blockquote'),
        bold: __('Bold'),
        bulletList: __('Unordered List'),
        code: __('Code'),
        codeBlock: __('Code Block'),
        heading: __('Heading'),
        horizontalRule: __('Horizontal Rule'),
        image: __('Image'),
        italic: __('Italic'),
        link: __('Link'),
        listItem: __('List Item'),
        orderedList: __('Ordered List'),
        paragraph: __('Paragraph'),
        strike: __('Strike'),
        subscript: __('Subscript'),
        superscript: __('Superscript'),
        table: __('Table'),
        tableCell: __('Table Cell'),
        tableHeader: __('Table Header'),
        tableRow: __('Table Row'),
        underline: __('Underline')
      }
    };
  },
  created: function created() {
    var _this = this;

    this.bard.$on('bts-update', function () {
      return _this.$emit('close');
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.bard.$off('bts-update');
  },
  methods: {
    fields: function fields(type) {
      return this.btsOptions.attributes[type];
    },
    apply: function apply() {
      this.editor.commands.btsAttributesApply({
        info: this.info,
        items: this.items
      });
      this.$emit('applied');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StylesButton.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StylesButton.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StylesMenu_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StylesMenu.vue */ "./resources/js/components/StylesMenu.vue");
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
    StylesMenu: _StylesMenu_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StylesItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StylesItem.vue?vue&type=script&lang=js& ***!
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StylesMenu.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StylesMenu.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StylesItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StylesItem.vue */ "./resources/js/components/StylesItem.vue");
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
    StylesItem: _StylesItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    config: {},
    bard: {},
    editor: {},
    btsOptions: {}
  },
  created: function created() {
    var _this = this;

    this.bard.$on('bts-update', function () {
      return _this.$emit('close');
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.bard.$off('bts-update');
  },
  computed: {
    items: function items() {
      var _this2 = this;

      var buttons = this.bard.buttons;
      var menu = (this.config.bts_styles || []).filter(function (option) {
        return Object.keys(_this2.btsOptions.styleOptions).includes(option);
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
      attributeTypes: {}
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
    var attributeTypes = this.options.attributeTypes;
    return {
      btsAttributesFetch: function btsAttributesFetch() {
        return function (_ref7) {
          var state = _ref7.state;
          var _state$selection = state.selection,
              from = _state$selection.from,
              to = _state$selection.to;
          var items = [];
          state.doc.nodesBetween(from, from + 1, function (node) {
            if (attributeTypes.includes(node.type.name)) {
              items.push({
                kind: 'node',
                type: node.type.name,
                attrs: _objectSpread({}, node.attrs)
              });
            } else if (node.type.name === 'text') {
              node.marks.forEach(function (mark) {
                if (attributeTypes.includes(mark.type.name)) {
                  items.push({
                    kind: 'mark',
                    type: mark.type.name,
                    attrs: _objectSpread({}, mark.attrs)
                  });
                }
              });
            }
          });
          return {
            info: {
              from: from,
              to: to
            },
            items: items.reverse()
          };
        };
      },
      btsAttributesApply: function btsAttributesApply(_ref8) {
        var info = _ref8.info,
            items = _ref8.items;
        return function (_ref9) {
          var state = _ref9.state,
              chain = _ref9.chain;
          var _state$selection2 = state.selection,
              from = _state$selection2.from,
              to = _state$selection2.to;

          if (from !== info.from || to !== info.to) {
            return; // This shouldn't be possible, but sanity check just in case
          }

          var apply = chain().focus();
          items.forEach(function (item) {
            if (item.kind === 'mark') {
              apply = apply.extendMarkRange(item.type);
            }

            apply = apply.updateAttributes(item.type, item.attrs);
          });
          return apply.setTextSelection({
            from: from,
            to: to
          }).run();
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
  onUpdate: function onUpdate() {
    this.options.bard.$emit('bts-update');
  },
  onSelectionUpdate: function onSelectionUpdate() {
    this.options.bard.$emit('bts-update');
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Core);

/***/ }),

/***/ "./resources/js/extensions/overrides.js":
/*!**********************************************!*\
  !*** ./resources/js/extensions/overrides.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Extension = Statamic.$bard.tiptap.core.Extension;
var Overrides = Extension.create({
  name: 'btsOverrides',
  addOptions: function addOptions() {
    return {
      bard: {},
      styleTypes: [],
      styleOptions: {}
    };
  },
  onCreate: function onCreate() {
    var _this$options = this.options,
        bard = _this$options.bard,
        styleTypes = _this$options.styleTypes,
        styleOptions = _this$options.styleOptions;
    var blanks = [].concat(_toConsumableArray(styleTypes.includes('heading') ? ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] : []), _toConsumableArray(styleTypes.includes('bulletList') ? ['unorderedlist'] : []), _toConsumableArray(styleTypes.includes('orderedList') ? ['orderedlist'] : []));
    bard.buttons.forEach(function (button) {
      if (blanks.includes(button.name)) {
        button.args = _objectSpread(_objectSpread({}, button.args || {}), {}, {
          "class": null
        });
      }

      if (button.name === 'unorderedlist' && styleTypes.includes('bulletList')) {
        button.command = function (editor, args) {
          return editor.chain().focus().btsToggleBulletList(args).run();
        };
      }

      if (button.name === 'orderedlist' && styleTypes.includes('orderedList')) {
        button.command = function (editor, args) {
          return editor.chain().focus().btsToggleOrderedList(args).run();
        };
      }
    });

    if (bard.buttons.find(function (button) {
      return button.name === 'bts_styles';
    })) {
      var movedOptions = (bard.config.bts_styles || []).filter(function (option) {
        return Object.keys(styleOptions).includes(option);
      });
      bard.buttons.forEach(function (button) {
        if (movedOptions.includes(button.name)) {
          button.visible = function () {
            return false;
          };
        }
      });
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Overrides);

/***/ }),

/***/ "./resources/js/icons.js":
/*!*******************************!*\
  !*** ./resources/js/icons.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attributesIcon": () => (/* binding */ attributesIcon),
/* harmony export */   "styleToIcon": () => (/* binding */ styleToIcon),
/* harmony export */   "stylesIcon": () => (/* binding */ stylesIcon)
/* harmony export */ });
var maskCount = 0;
var icons = {
  classic: {
    'letter': function letter(style) {
      var _heading$paragraph$bt;

      var letter = (_heading$paragraph$bt = {
        heading: 'H',
        paragraph: 'P',
        btsSpan: 'T'
      }[style.type]) !== null && _heading$paragraph$bt !== void 0 ? _heading$paragraph$bt : 'S';
      var ident = style.ident;
      return "\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"16\" viewBox=\"0 0 24 16\" fill=\"currentColor\" style=\"width: 24px;\">\n                    <text text-anchor=\"middle\" x=\"8.3\" y=\"15\" style=\"font-family: Times, Times New Roman, serif; font-size: 21px;\">".concat(letter, "</text>\n                    <text text-anchor=\"middle\" x=\"20\" y=\"12.5\" style=\"font-size: 12px;\">").concat(ident, "</text>\n                </svg>\n            ");
    },
    'square': function square(style) {
      var ident = style.ident;
      return "\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                    <rect width=\"15\" height=\"15\" x=\"0.5\" y=\"0.5\" rx=\"2\" stroke-width=\"1\" stroke=\"currentColor\" fill=\"none\" />\n                    <text text-anchor=\"middle\" x=\"8\" y=\"12\" style=\"font-size: 11px;\">".concat(ident, "</text>\n                </svg>\n            ");
    },
    'square-solid': function squareSolid(style) {
      var ident = style.ident;
      var maskId = "bts-mask-".concat(maskCount++);
      return "\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                    <mask id=\"".concat(maskId, "\">\n                        <rect width=\"16\" height=\"16\" fill=\"white\" />\n                        <text text-anchor=\"middle\" x=\"8\" y=\"12\" style=\"font-size: 11px;\" fill=\"black\">").concat(ident, "</text>\n                    </mask>\n                    <rect width=\"15\" height=\"15\" x=\"0.5\" y=\"0.5\" rx=\"2\" stroke-width=\"1\" stroke=\"currentColor\" mask=\"url(#").concat(maskId, ")\" />\n                </svg>\n            ");
    },
    'circle': function circle(style) {
      var ident = style.ident;
      return "\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                    <circle cx=\"8\" cy=\"8\" r=\"7.5\" stroke-width=\"1\" stroke=\"currentColor\" fill=\"none\" />\n                    <text text-anchor=\"middle\" x=\"8\" y=\"12\" style=\"font-size: 11px;\">".concat(ident, "</text>\n                </svg>\n            ");
    },
    'circle-solid': function circleSolid(style) {
      var ident = style.ident;
      var maskId = "bts-mask-".concat(maskCount++);
      return "\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                    <mask id=\"".concat(maskId, "\">\n                        <rect width=\"16\" height=\"16\" fill=\"white\" />\n                        <text text-anchor=\"middle\" x=\"8\" y=\"12\" style=\"font-size: 11px;\" fill=\"black\">").concat(ident, "</text>\n                    </mask>\n                    <circle cx=\"8\" cy=\"8\" r=\"7.5\" stroke-width=\"1\" stroke=\"currentColor\" mask=\"url(#").concat(maskId, ")\" />\n                </svg>\n            ");
    },
    'bullet-list': function bulletList(style) {
      var ident = style.ident;
      return "\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                    <path d=\"M384 1408c0 53.33-18.667 98.67-56 136s-82.667 56-136 56-98.667-18.67-136-56-56-82.67-56-136 18.667-98.67 56-136 82.667-56 136-56 98.667 18.67 136 56 56 82.67 56 136Zm0-512c0 53.333-18.667 98.667-56 136-37.333 37.33-82.667 56-136 56s-98.667-18.67-136-56C18.667 994.667 0 949.333 0 896s18.667-98.667 56-136 82.667-56 136-56 98.667 18.667 136 56 56 82.667 56 136Zm0-512c0 53.333-18.667 98.667-56 136s-82.667 56-136 56-98.667-18.667-136-56S0 437.333 0 384s18.667-98.667 56-136 82.667-56 136-56 98.667 18.667 136 56 56 82.667 56 136Z\" transform=\"scale(.00893)\"/>\n                    <text text-anchor=\"middle\" x=\"11\" y=\"12\" style=\"font-size: 11px;\">".concat(ident, "</text>\n                </svg>\n            ");
    },
    'ordered-list': function orderedList(style) {
      var ident = style.ident;
      return "\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                    <path d=\"M381 1620c0 53.33-18.167 95.33-54.5 126s-81.5 46-135.5 46c-70.667 0-128-22-172-66l57-88c32.667 30 68 45 106 45 19.333 0 36.167-4.83 50.5-14.5 14.333-9.67 21.5-23.83 21.5-42.5 0-42.67-35-61.33-105-56l-26-56c5.333-6.67 16.167-21.17 32.5-43.5s30.5-40.33 42.5-54c12-13.67 24.333-26.5 37-38.5v-1c-10.667 0-26.833.33-48.5 1-21.667.67-37.833 1-48.5 1v53H32v-152h333v88l-95 115c34 8 61 24.33 81 49s30 54 30 88Zm2-627v159H21c-4-24-6-42-6-54 0-34 7.833-65 23.5-93S73 954.333 95 937s44-33.167 66-47.5c22-14.333 40.833-28.833 56.5-43.5 15.667-14.667 23.5-29.667 23.5-45 0-16.667-4.833-29.5-14.5-38.5S203.667 749 187 749c-30.667 0-57.667 19.333-81 58l-85-59c16-34 39.833-60.5 71.5-79.5S159.333 640 198 640c48.667 0 89.667 13.833 123 41.5s50 65.167 50 112.5c0 33.333-11.333 63.833-34 91.5s-47.667 49.167-75 64.5c-27.333 15.333-52.5 32.167-75.5 50.5-23 18.33-34.833 35.83-35.5 52.5h127v-60h105Zm1-580v99H49v-99h107c0-27.333.167-67.833.5-121.5.333-53.667.5-94.167.5-121.5v-12h-2c-5.333 11.333-22 29.333-50 54l-71-76L170 9h106v404h108Z\" transform=\"scale(.00893)\"/>\n                    <text text-anchor=\"middle\" x=\"11\" y=\"12\" style=\"font-size: 11px;\">".concat(ident, "</text>\n                </svg>\n            ");
    },
    'link': function link(style) {
      var ident = style.ident;
      return "\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                    <path d=\"M1520 1216c0-26.67-9.33-49.33-28-68l-208-208c-18.67-18.667-41.33-28-68-28-28 0-52 10.667-72 32 2 2 8.33 8.167 19 18.5s17.83 17.5 21.5 21.5c3.67 4 8.67 10.333 15 19 6.33 8.67 10.67 17.17 13 25.5 2.33 8.33 3.5 17.5 3.5 27.5 0 26.67-9.33 49.33-28 68s-41.33 28-68 28c-10 0-19.17-1.17-27.5-3.5-8.33-2.33-16.83-6.67-25.5-13-8.67-6.33-15-11.33-19-15s-11.17-10.83-21.5-21.5-16.5-17-18.5-19c-22 20.67-33 45-33 73 0 26.67 9.333 49.33 28 68l206 207c18 18 40.67 27 68 27 26.67 0 49.33-8.67 68-26l147-146c18.67-18.67 28-41 28-67ZM817 511c0-26.667-9.333-49.333-28-68L583 236c-18.667-18.667-41.333-28-68-28-26 0-48.667 9-68 27L300 381c-18.667 18.667-28 41-28 67 0 26.667 9.333 49.333 28 68l208 208c18 18 40.667 27 68 27 28 0 52-10.333 72-31-2-2-8.333-8.167-19-18.5S611.167 684 607.5 680c-3.667-4-8.667-10.333-15-19s-10.667-17.167-13-25.5c-2.333-8.333-3.5-17.5-3.5-27.5 0-26.667 9.333-49.333 28-68s41.333-28 68-28c10 0 19.167 1.167 27.5 3.5 8.333 2.333 16.833 6.667 25.5 13 8.667 6.333 15 11.333 19 15s11.167 10.833 21.5 21.5 16.5 17 18.5 19c22-20.667 33-45 33-73Zm895 705c0 80-28.33 147.67-85 203l-147 146c-55.33 55.33-123 83-203 83-80.67 0-148.67-28.33-204-85l-206-207c-55.333-55.33-83-123-83-203 0-82 29.333-151.67 88-209l-88-88c-57.333 58.667-126.667 88-208 88-80 0-148-28-204-84L164 652c-56-56-84-124-84-204s28.333-147.667 85-203L312 99c55.333-55.333 123-83 203-83 80.667 0 148.667 28.333 204 85l206 207c55.333 55.333 83 123 83 203 0 82-29.333 151.667-88 209l88 88c57.33-58.667 126.67-88 208-88 80 0 148 28 204 84l208 208c56 56 84 124 84 204Z\" transform=\"matrix(.00702 0 0 .00702 -.562 3.86)\"/>\n                    <text text-anchor=\"middle\" x=\"11\" y=\"8\" style=\"font-size: 11px;\">".concat(ident, "</text>\n                </svg>\n            ");
    },
    'symbol': function symbol(style) {
      var ident = style.ident;
      return "\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                    <text text-anchor=\"middle\" x=\"8\" y=\"16\" style=\"font-size: 23px;\">".concat(ident, "</text>\n                </svg>\n            ");
    }
  },
  modern: {
    'letter': function letter(style) {
      var _heading$paragraph$bt2;

      var letter = (_heading$paragraph$bt2 = {
        heading: 'H',
        paragraph: 'P',
        btsSpan: 'T'
      }[style.type]) !== null && _heading$paragraph$bt2 !== void 0 ? _heading$paragraph$bt2 : 'S';
      var ident = style.ident;
      return "\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"16\" viewBox=\"0 0 24 16\" fill=\"currentColor\" style=\"width: 24px;\">\n                    <text text-anchor=\"middle\" x=\"8.3\" y=\"15\" style=\"font-family: Times, Times New Roman, serif; font-size: 21px;\">".concat(letter, "</text>\n                    <text text-anchor=\"middle\" x=\"20\" y=\"12.5\" style=\"font-size: 12px;\">").concat(ident, "</text>\n                </svg>\n            ");
    },
    'square': function square(style) {
      var ident = style.ident;
      return "\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                    <rect width=\"15\" height=\"15\" x=\"0.5\" y=\"0.5\" rx=\"2\" stroke-width=\"1\" stroke=\"currentColor\" fill=\"none\" />\n                    <text text-anchor=\"middle\" x=\"8\" y=\"12\" style=\"font-size: 11px;\">".concat(ident, "</text>\n                </svg>\n            ");
    },
    'square-solid': function squareSolid(style) {
      var ident = style.ident;
      var maskId = "bts-mask-".concat(maskCount++);
      return "\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                    <mask id=\"".concat(maskId, "\">\n                        <rect width=\"16\" height=\"16\" fill=\"white\" />\n                        <text text-anchor=\"middle\" x=\"8\" y=\"12\" style=\"font-size: 11px;\" fill=\"black\">").concat(ident, "</text>\n                    </mask>\n                    <rect width=\"15\" height=\"15\" x=\"0.5\" y=\"0.5\" rx=\"2\" stroke-width=\"1\" stroke=\"currentColor\" mask=\"url(#").concat(maskId, ")\" />\n                </svg>\n            ");
    },
    'circle': function circle(style) {
      var ident = style.ident;
      return "\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                    <circle cx=\"8\" cy=\"8\" r=\"7.5\" stroke-width=\"1\" stroke=\"currentColor\" fill=\"none\" />\n                    <text text-anchor=\"middle\" x=\"8\" y=\"12\" style=\"font-size: 11px;\">".concat(ident, "</text>\n                </svg>\n            ");
    },
    'circle-solid': function circleSolid(style) {
      var ident = style.ident;
      var maskId = "bts-mask-".concat(maskCount++);
      return "\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                    <mask id=\"".concat(maskId, "\">\n                        <rect width=\"16\" height=\"16\" fill=\"white\" />\n                        <text text-anchor=\"middle\" x=\"8\" y=\"12\" style=\"font-size: 11px;\" fill=\"black\">").concat(ident, "</text>\n                    </mask>\n                    <circle cx=\"8\" cy=\"8\" r=\"7.5\" stroke-width=\"1\" stroke=\"currentColor\" mask=\"url(#").concat(maskId, ")\" />\n                </svg>\n            ");
    },
    'bullet-list': function bulletList(style) {
      var ident = style.ident;
      return "\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                    <path d=\"M384 1408c0 53.33-18.667 98.67-56 136s-82.667 56-136 56-98.667-18.67-136-56-56-82.67-56-136 18.667-98.67 56-136 82.667-56 136-56 98.667 18.67 136 56 56 82.67 56 136Zm0-512c0 53.333-18.667 98.667-56 136-37.333 37.33-82.667 56-136 56s-98.667-18.67-136-56C18.667 994.667 0 949.333 0 896s18.667-98.667 56-136 82.667-56 136-56 98.667 18.667 136 56 56 82.667 56 136Zm0-512c0 53.333-18.667 98.667-56 136s-82.667 56-136 56-98.667-18.667-136-56S0 437.333 0 384s18.667-98.667 56-136 82.667-56 136-56 98.667 18.667 136 56 56 82.667 56 136Z\" transform=\"scale(.00893)\"/>\n                    <text text-anchor=\"middle\" x=\"11\" y=\"12\" style=\"font-size: 11px;\">".concat(ident, "</text>\n                </svg>\n            ");
    },
    'ordered-list': function orderedList(style) {
      var ident = style.ident;
      return "\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                    <path d=\"M381 1620c0 53.33-18.167 95.33-54.5 126s-81.5 46-135.5 46c-70.667 0-128-22-172-66l57-88c32.667 30 68 45 106 45 19.333 0 36.167-4.83 50.5-14.5 14.333-9.67 21.5-23.83 21.5-42.5 0-42.67-35-61.33-105-56l-26-56c5.333-6.67 16.167-21.17 32.5-43.5s30.5-40.33 42.5-54c12-13.67 24.333-26.5 37-38.5v-1c-10.667 0-26.833.33-48.5 1-21.667.67-37.833 1-48.5 1v53H32v-152h333v88l-95 115c34 8 61 24.33 81 49s30 54 30 88Zm2-627v159H21c-4-24-6-42-6-54 0-34 7.833-65 23.5-93S73 954.333 95 937s44-33.167 66-47.5c22-14.333 40.833-28.833 56.5-43.5 15.667-14.667 23.5-29.667 23.5-45 0-16.667-4.833-29.5-14.5-38.5S203.667 749 187 749c-30.667 0-57.667 19.333-81 58l-85-59c16-34 39.833-60.5 71.5-79.5S159.333 640 198 640c48.667 0 89.667 13.833 123 41.5s50 65.167 50 112.5c0 33.333-11.333 63.833-34 91.5s-47.667 49.167-75 64.5c-27.333 15.333-52.5 32.167-75.5 50.5-23 18.33-34.833 35.83-35.5 52.5h127v-60h105Zm1-580v99H49v-99h107c0-27.333.167-67.833.5-121.5.333-53.667.5-94.167.5-121.5v-12h-2c-5.333 11.333-22 29.333-50 54l-71-76L170 9h106v404h108Z\" transform=\"scale(.00893)\"/>\n                    <text text-anchor=\"middle\" x=\"11\" y=\"12\" style=\"font-size: 11px;\">".concat(ident, "</text>\n                </svg>\n            ");
    },
    'link': function link(style) {
      var ident = style.ident;
      return "\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                    <path d=\"M1520 1216c0-26.67-9.33-49.33-28-68l-208-208c-18.67-18.667-41.33-28-68-28-28 0-52 10.667-72 32 2 2 8.33 8.167 19 18.5s17.83 17.5 21.5 21.5c3.67 4 8.67 10.333 15 19 6.33 8.67 10.67 17.17 13 25.5 2.33 8.33 3.5 17.5 3.5 27.5 0 26.67-9.33 49.33-28 68s-41.33 28-68 28c-10 0-19.17-1.17-27.5-3.5-8.33-2.33-16.83-6.67-25.5-13-8.67-6.33-15-11.33-19-15s-11.17-10.83-21.5-21.5-16.5-17-18.5-19c-22 20.67-33 45-33 73 0 26.67 9.333 49.33 28 68l206 207c18 18 40.67 27 68 27 26.67 0 49.33-8.67 68-26l147-146c18.67-18.67 28-41 28-67ZM817 511c0-26.667-9.333-49.333-28-68L583 236c-18.667-18.667-41.333-28-68-28-26 0-48.667 9-68 27L300 381c-18.667 18.667-28 41-28 67 0 26.667 9.333 49.333 28 68l208 208c18 18 40.667 27 68 27 28 0 52-10.333 72-31-2-2-8.333-8.167-19-18.5S611.167 684 607.5 680c-3.667-4-8.667-10.333-15-19s-10.667-17.167-13-25.5c-2.333-8.333-3.5-17.5-3.5-27.5 0-26.667 9.333-49.333 28-68s41.333-28 68-28c10 0 19.167 1.167 27.5 3.5 8.333 2.333 16.833 6.667 25.5 13 8.667 6.333 15 11.333 19 15s11.167 10.833 21.5 21.5 16.5 17 18.5 19c22-20.667 33-45 33-73Zm895 705c0 80-28.33 147.67-85 203l-147 146c-55.33 55.33-123 83-203 83-80.67 0-148.67-28.33-204-85l-206-207c-55.333-55.33-83-123-83-203 0-82 29.333-151.67 88-209l-88-88c-57.333 58.667-126.667 88-208 88-80 0-148-28-204-84L164 652c-56-56-84-124-84-204s28.333-147.667 85-203L312 99c55.333-55.333 123-83 203-83 80.667 0 148.667 28.333 204 85l206 207c55.333 55.333 83 123 83 203 0 82-29.333 151.667-88 209l88 88c57.33-58.667 126.67-88 208-88 80 0 148 28 204 84l208 208c56 56 84 124 84 204Z\" transform=\"matrix(.00702 0 0 .00702 -.562 3.86)\"/>\n                    <text text-anchor=\"middle\" x=\"11\" y=\"8\" style=\"font-size: 11px;\">".concat(ident, "</text>\n                </svg>\n            ");
    },
    'symbol': function symbol(style) {
      var ident = style.ident;
      return "\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n                    <text text-anchor=\"middle\" x=\"8\" y=\"16\" style=\"font-size: 23px;\">".concat(ident, "</text>\n                </svg>\n            ");
    }
  }
};
var styleToIcon = function styleToIcon(style, major) {
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

  var set = major >= 4 ? icons.modern : icons.classic;
  return set[icon] ? set[icon](style) : icon;
};
var stylesIcon = "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"16\" viewBox=\"0 0 24 16\" fill=\"currentColor\" style=\"width: 24px;\">\n        <text text-anchor=\"middle\" x=\"12\" y=\"15\" style=\"font-family: Times, Times New Roman, serif; font-size: 21px; letter-spacing: -1px;\">Aa</text>\n    </svg>\n";
var attributesIcon = "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n        <path d=\"m491 1536 91-91-235-235-91 91v107h128v128h107Zm523-928c0-14.667-7.33-22-22-22-6.667 0-12.333 2.333-17 7l-542 542c-4.667 4.67-7 10.33-7 17 0 14.67 7.333 22 22 22 6.667 0 12.333-2.33 17-7l542-542c4.67-4.667 7-10.333 7-17Zm-54-192 416 416-832 832H128v-416l832-832Zm683 96c0 35.333-12.33 65.333-37 90l-166 166-416-416 166-165c24-25.333 54-38 90-38 35.33 0 65.67 12.667 91 38l235 234c24.67 26 37 56.333 37 91Z\" transform=\"scale(.00893)\"/>\n    </svg>\n";

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
/* harmony import */ var _extensions_overrides__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extensions/overrides */ "./resources/js/extensions/overrides.js");
/* harmony import */ var _extensions_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extensions/attributes */ "./resources/js/extensions/attributes.js");
/* harmony import */ var _components_StylesButton_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/StylesButton.vue */ "./resources/js/components/StylesButton.vue");
/* harmony import */ var _components_AttributesButton_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/AttributesButton.vue */ "./resources/js/components/AttributesButton.vue");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons */ "./resources/js/icons.js");
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
    this.bootExtensions(options).bootStyleButtons(options).bootStylesButton(options).bootAttributesButton(options).bootCss(options);
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
      Statamic.$bard.addExtension(function (_ref4) {
        var bard = _ref4.bard;
        return _extensions_overrides__WEBPACK_IMPORTED_MODULE_3__["default"].configure(_objectSpread(_objectSpread({}, options), {}, {
          bard: bard
        }));
      });
      Statamic.$bard.addExtension(function () {
        return _marks_span__WEBPACK_IMPORTED_MODULE_0__["default"];
      });

      if (options.pro) {
        Statamic.$bard.addExtension(function () {
          return _extensions_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].configure(options);
        });
        Statamic.$bard.addExtension(function () {
          return _nodes_div__WEBPACK_IMPORTED_MODULE_1__["default"];
        });
      }

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
          var icon = (0,_icons__WEBPACK_IMPORTED_MODULE_7__.styleToIcon)(style, options.major);
          var args = style.type === 'heading' ? (_ref7 = {}, _defineProperty(_ref7, options.attr, style[options.store]), _defineProperty(_ref7, "level", style.level), _ref7) : _defineProperty({}, options.attr, style[options.store]);
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
    key: "bootStylesButton",
    value: function bootStylesButton(options) {
      if (!options.pro) {
        return this;
      }

      Statamic.$bard.buttons(function (buttons, button) {
        buttons.splice(buttons.indexOf('bts_styles'), 0, button({
          name: 'bts_styles',
          text: __('Style'),
          component: _components_StylesButton_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
          html: _icons__WEBPACK_IMPORTED_MODULE_7__.stylesIcon,
          btsOptions: options
        }));
      });
      return this;
    }
  }, {
    key: "bootAttributesButton",
    value: function bootAttributesButton(options) {
      if (!options.pro) {
        return this;
      }

      Statamic.$bard.buttons(function (buttons, button) {
        buttons.splice(buttons.indexOf('bts_attributes'), 0, button({
          name: 'bts_attributes',
          text: __('Attributes'),
          component: _components_AttributesButton_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
          html: _icons__WEBPACK_IMPORTED_MODULE_7__.attributesIcon,
          btsOptions: options
        }));
      });
      return this;
    }
  }, {
    key: "bootCss",
    value: function bootCss(options) {
      var css = [].concat(_toConsumableArray(this.gatherStyleCss(options)), _toConsumableArray(options.pro ? this.gatherDivCss(options) : []));
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
        var menuSelector = ".bard-fieldtype .bts-styles-preview[data-bts-match~=\"".concat(key, "\"]");
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
    value: function gatherDivCss(options) {
      var css = [];
      var selector = ['.bard-fieldtype .ProseMirror >', '.bard-fieldtype .ProseMirror div[data-bts] >'];
      var cpFile = options.major >= 4 ? 'statamic/cp/build/assets/tailwind' : 'statamic/cp/css/cp';
      var cpCss = Array.from(document.styleSheets).find(function (sheet) {
        return sheet.href && sheet.href.includes(cpFile);
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
___CSS_LOADER_EXPORT___.push([module.id, ".bard-fieldtype .ProseMirror div[data-bts] {\n  border: #e4ebf1 solid;\n  border-width: 2px 0;\n  padding: 0.85em 0;\n  margin-top: 1.7em;\n  margin-bottom: 1.7em;\n}\n.bard-fieldtype .ProseMirror [data-bts]::before {\n  display: none;\n}\n.bard-fieldtype .ProseMirror h1[data-bts]::before, .bard-fieldtype .ProseMirror h2[data-bts]::before, .bard-fieldtype .ProseMirror h3[data-bts]::before, .bard-fieldtype .ProseMirror h4[data-bts]::before, .bard-fieldtype .ProseMirror h5[data-bts]::before, .bard-fieldtype .ProseMirror h6[data-bts]::before, .bard-fieldtype .ProseMirror p[data-bts]::before, .bard-fieldtype .ProseMirror ul[data-bts]::before, .bard-fieldtype .ProseMirror ol[data-bts]::before, .bard-fieldtype .ProseMirror div[data-bts]::before {\n  background-color: #e4ebf1;\n  border-radius: 2px;\n  color: #1c2e36;\n  font-size: 10px;\n  font-weight: normal;\n  font-family: Inter UI, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;\n  line-height: 1;\n  padding: 4px 6px;\n  display: block;\n  max-width: -webkit-max-content;\n  max-width: -moz-max-content;\n  max-width: max-content;\n  position: relative;\n}\n.bard-fieldtype .ProseMirror ul[data-bts]::before, .bard-fieldtype .ProseMirror ol[data-bts]::before {\n  margin-bottom: 0.85em;\n}\n.bard-fieldtype .ProseMirror div[data-bts] {\n  position: relative;\n}\n.bard-fieldtype .ProseMirror div[data-bts]::before {\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.bard-fieldtype .bts-panel {\n  background-color: white;\n  border-radius: 3px;\n  position: absolute;\n  line-height: 1;\n  box-shadow: 0 0 0 1px rgba(49, 49, 93, 0.05), 0 2px 5px 0 rgba(49, 49, 93, 0.08), 0 1px 3px 0 rgba(49, 49, 93, 0.15);\n  margin-top: 8px;\n  z-index: 100;\n  top: 100%;\n}\n.bard-fieldtype .bts-panel::before {\n  content: \"\";\n  border: 6px solid transparent;\n  border-bottom-color: white;\n  position: absolute;\n  bottom: 100%;\n  left: 10px;\n}\n.bard-fieldtype .bts-styles-items {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 4px;\n  max-height: 500px;\n  overflow-y: auto;\n}\n.bard-fieldtype .bts-styles-item {\n  white-space: nowrap;\n  padding: 8px 12px;\n  font-size: 1rem;\n  border-radius: 3px;\n  text-align: left;\n}\n.bard-fieldtype .bts-styles-item:hover {\n  background-color: #f5f8fc;\n}\n.bard-fieldtype .bts-styles-item.active {\n  background-color: #eef2f6;\n}\n.bard-fieldtype .bts-styles-preview {\n  margin: 0 !important;\n}\n.bard-fieldtype .bts-styles-preview[data-bts-match~=h1] {\n  font-size: 2em;\n  font-weight: 700;\n}\n.bard-fieldtype .bts-styles-preview[data-bts-match~=h2] {\n  font-size: 1.75em;\n  font-weight: 700;\n}\n.bard-fieldtype .bts-styles-preview[data-bts-match~=h3] {\n  font-size: 1.5em;\n  font-weight: 700;\n}\n.bard-fieldtype .bts-styles-preview[data-bts-match~=h4] {\n  font-size: 1.25em;\n  font-weight: 700;\n}\n.bard-fieldtype .bts-styles-preview[data-bts-match~=h5] {\n  font-size: 1em;\n  font-weight: 700;\n}\n.bard-fieldtype .bts-styles-preview[data-bts-match~=h6] {\n  font-size: 1em;\n  font-weight: 700;\n}\n.bard-fieldtype .bts-styles-preview[data-bts-match~=bts-span], .bard-fieldtype .bts-styles-preview[data-bts-match~=bts-link] {\n  display: inline;\n}\n.bard-fieldtype .bts-styles-preview[data-bts-match~=unorderedlist], .bard-fieldtype .bts-styles-preview[data-bts-match~=bulletList] {\n  display: list-item;\n  list-style-type: disc;\n  margin-left: 17px !important;\n}\n.bard-fieldtype .bts-styles-preview[data-bts-match~=orderedlist], .bard-fieldtype .bts-styles-preview[data-bts-match~=orderedList] {\n  display: list-item;\n  list-style-type: decimal;\n  margin-left: 17px !important;\n}\n.bard-fieldtype .bts-arrow {\n  margin-left: -0.3rem;\n  margin-right: 0.3rem;\n}\n.bard-fieldtype .bts-py-1\\.25 {\n  padding-top: 0.6rem;\n  padding-bottom: 0.6rem;\n}\n.bard-fieldtype .bts-gap-0\\.5 {\n  gap: 0.3rem;\n}\n\n.bts-tw-p-0 {\n  padding: 0px;\n}\n.bts-tw-p-0\\.5 {\n  padding: 0.125rem;\n}\n.bts-tw-p-1 {\n  padding: 0.25rem;\n}\n.bts-tw-p-1\\.5 {\n  padding: 0.375rem;\n}\n.bts-tw-p-2 {\n  padding: 0.5rem;\n}\n.bts-tw-p-2\\.5 {\n  padding: 0.625rem;\n}\n.bts-tw-p-3 {\n  padding: 0.75rem;\n}\n.bts-tw-p-3\\.5 {\n  padding: 0.875rem;\n}\n.bts-tw-p-4 {\n  padding: 1rem;\n}\n.bts-tw-p-5 {\n  padding: 1.25rem;\n}\n.bts-tw-p-6 {\n  padding: 1.5rem;\n}\n.bts-tw-p-7 {\n  padding: 1.75rem;\n}\n.bts-tw-p-8 {\n  padding: 2rem;\n}\n.bts-tw-px-0 {\n  padding-inline: 0px;\n}\n.bts-tw-px-0\\.5 {\n  padding-inline: 0.125rem;\n}\n.bts-tw-px-1 {\n  padding-inline: 0.25rem;\n}\n.bts-tw-px-1\\.5 {\n  padding-inline: 0.375rem;\n}\n.bts-tw-px-2 {\n  padding-inline: 0.5rem;\n}\n.bts-tw-px-2\\.5 {\n  padding-inline: 0.625rem;\n}\n.bts-tw-px-3 {\n  padding-inline: 0.75rem;\n}\n.bts-tw-px-3\\.5 {\n  padding-inline: 0.875rem;\n}\n.bts-tw-px-4 {\n  padding-inline: 1rem;\n}\n.bts-tw-px-5 {\n  padding-inline: 1.25rem;\n}\n.bts-tw-px-6 {\n  padding-inline: 1.5rem;\n}\n.bts-tw-px-7 {\n  padding-inline: 1.75rem;\n}\n.bts-tw-px-8 {\n  padding-inline: 2rem;\n}\n.bts-tw-py-0 {\n  padding-block: 0px;\n}\n.bts-tw-py-0\\.5 {\n  padding-block: 0.125rem;\n}\n.bts-tw-py-1 {\n  padding-block: 0.25rem;\n}\n.bts-tw-py-1\\.5 {\n  padding-block: 0.375rem;\n}\n.bts-tw-py-2 {\n  padding-block: 0.5rem;\n}\n.bts-tw-py-2\\.5 {\n  padding-block: 0.625rem;\n}\n.bts-tw-py-3 {\n  padding-block: 0.75rem;\n}\n.bts-tw-py-3\\.5 {\n  padding-block: 0.875rem;\n}\n.bts-tw-py-4 {\n  padding-block: 1rem;\n}\n.bts-tw-py-5 {\n  padding-block: 1.25rem;\n}\n.bts-tw-py-6 {\n  padding-block: 1.5rem;\n}\n.bts-tw-py-7 {\n  padding-block: 1.75rem;\n}\n.bts-tw-py-8 {\n  padding-block: 2rem;\n}\n.bts-tw-pt-0 {\n  padding-top: 0px;\n}\n.bts-tw-pt-0\\.5 {\n  padding-top: 0.125rem;\n}\n.bts-tw-pt-1 {\n  padding-top: 0.25rem;\n}\n.bts-tw-pt-1\\.5 {\n  padding-top: 0.375rem;\n}\n.bts-tw-pt-2 {\n  padding-top: 0.5rem;\n}\n.bts-tw-pt-2\\.5 {\n  padding-top: 0.625rem;\n}\n.bts-tw-pt-3 {\n  padding-top: 0.75rem;\n}\n.bts-tw-pt-3\\.5 {\n  padding-top: 0.875rem;\n}\n.bts-tw-pt-4 {\n  padding-top: 1rem;\n}\n.bts-tw-pt-5 {\n  padding-top: 1.25rem;\n}\n.bts-tw-pt-6 {\n  padding-top: 1.5rem;\n}\n.bts-tw-pt-7 {\n  padding-top: 1.75rem;\n}\n.bts-tw-pt-8 {\n  padding-top: 2rem;\n}\n.bts-tw-pr-0 {\n  padding-right: 0px;\n}\n.bts-tw-pr-0\\.5 {\n  padding-right: 0.125rem;\n}\n.bts-tw-pr-1 {\n  padding-right: 0.25rem;\n}\n.bts-tw-pr-1\\.5 {\n  padding-right: 0.375rem;\n}\n.bts-tw-pr-2 {\n  padding-right: 0.5rem;\n}\n.bts-tw-pr-2\\.5 {\n  padding-right: 0.625rem;\n}\n.bts-tw-pr-3 {\n  padding-right: 0.75rem;\n}\n.bts-tw-pr-3\\.5 {\n  padding-right: 0.875rem;\n}\n.bts-tw-pr-4 {\n  padding-right: 1rem;\n}\n.bts-tw-pr-5 {\n  padding-right: 1.25rem;\n}\n.bts-tw-pr-6 {\n  padding-right: 1.5rem;\n}\n.bts-tw-pr-7 {\n  padding-right: 1.75rem;\n}\n.bts-tw-pr-8 {\n  padding-right: 2rem;\n}\n.bts-tw-pb-0 {\n  padding-bottom: 0px;\n}\n.bts-tw-pb-0\\.5 {\n  padding-bottom: 0.125rem;\n}\n.bts-tw-pb-1 {\n  padding-bottom: 0.25rem;\n}\n.bts-tw-pb-1\\.5 {\n  padding-bottom: 0.375rem;\n}\n.bts-tw-pb-2 {\n  padding-bottom: 0.5rem;\n}\n.bts-tw-pb-2\\.5 {\n  padding-bottom: 0.625rem;\n}\n.bts-tw-pb-3 {\n  padding-bottom: 0.75rem;\n}\n.bts-tw-pb-3\\.5 {\n  padding-bottom: 0.875rem;\n}\n.bts-tw-pb-4 {\n  padding-bottom: 1rem;\n}\n.bts-tw-pb-5 {\n  padding-bottom: 1.25rem;\n}\n.bts-tw-pb-6 {\n  padding-bottom: 1.5rem;\n}\n.bts-tw-pb-7 {\n  padding-bottom: 1.75rem;\n}\n.bts-tw-pb-8 {\n  padding-bottom: 2rem;\n}\n.bts-tw-pl-0 {\n  padding-left: 0px;\n}\n.bts-tw-pl-0\\.5 {\n  padding-left: 0.125rem;\n}\n.bts-tw-pl-1 {\n  padding-left: 0.25rem;\n}\n.bts-tw-pl-1\\.5 {\n  padding-left: 0.375rem;\n}\n.bts-tw-pl-2 {\n  padding-left: 0.5rem;\n}\n.bts-tw-pl-2\\.5 {\n  padding-left: 0.625rem;\n}\n.bts-tw-pl-3 {\n  padding-left: 0.75rem;\n}\n.bts-tw-pl-3\\.5 {\n  padding-left: 0.875rem;\n}\n.bts-tw-pl-4 {\n  padding-left: 1rem;\n}\n.bts-tw-pl-5 {\n  padding-left: 1.25rem;\n}\n.bts-tw-pl-6 {\n  padding-left: 1.5rem;\n}\n.bts-tw-pl-7 {\n  padding-left: 1.75rem;\n}\n.bts-tw-pl-8 {\n  padding-left: 2rem;\n}\n.bts-tw-m-0 {\n  margin: 0px;\n}\n.bts-tw-m-0\\.5 {\n  margin: 0.125rem;\n}\n.bts-tw-m-1 {\n  margin: 0.25rem;\n}\n.bts-tw-m-1\\.5 {\n  margin: 0.375rem;\n}\n.bts-tw-m-2 {\n  margin: 0.5rem;\n}\n.bts-tw-m-2\\.5 {\n  margin: 0.625rem;\n}\n.bts-tw-m-3 {\n  margin: 0.75rem;\n}\n.bts-tw-m-3\\.5 {\n  margin: 0.875rem;\n}\n.bts-tw-m-4 {\n  margin: 1rem;\n}\n.bts-tw-m-5 {\n  margin: 1.25rem;\n}\n.bts-tw-m-6 {\n  margin: 1.5rem;\n}\n.bts-tw-m-7 {\n  margin: 1.75rem;\n}\n.bts-tw-m-8 {\n  margin: 2rem;\n}\n.bts-tw-mx-0 {\n  margin-inline: 0px;\n}\n.bts-tw-mx-0\\.5 {\n  margin-inline: 0.125rem;\n}\n.bts-tw-mx-1 {\n  margin-inline: 0.25rem;\n}\n.bts-tw-mx-1\\.5 {\n  margin-inline: 0.375rem;\n}\n.bts-tw-mx-2 {\n  margin-inline: 0.5rem;\n}\n.bts-tw-mx-2\\.5 {\n  margin-inline: 0.625rem;\n}\n.bts-tw-mx-3 {\n  margin-inline: 0.75rem;\n}\n.bts-tw-mx-3\\.5 {\n  margin-inline: 0.875rem;\n}\n.bts-tw-mx-4 {\n  margin-inline: 1rem;\n}\n.bts-tw-mx-5 {\n  margin-inline: 1.25rem;\n}\n.bts-tw-mx-6 {\n  margin-inline: 1.5rem;\n}\n.bts-tw-mx-7 {\n  margin-inline: 1.75rem;\n}\n.bts-tw-mx-8 {\n  margin-inline: 2rem;\n}\n.bts-tw-my-0 {\n  margin-block: 0px;\n}\n.bts-tw-my-0\\.5 {\n  margin-block: 0.125rem;\n}\n.bts-tw-my-1 {\n  margin-block: 0.25rem;\n}\n.bts-tw-my-1\\.5 {\n  margin-block: 0.375rem;\n}\n.bts-tw-my-2 {\n  margin-block: 0.5rem;\n}\n.bts-tw-my-2\\.5 {\n  margin-block: 0.625rem;\n}\n.bts-tw-my-3 {\n  margin-block: 0.75rem;\n}\n.bts-tw-my-3\\.5 {\n  margin-block: 0.875rem;\n}\n.bts-tw-my-4 {\n  margin-block: 1rem;\n}\n.bts-tw-my-5 {\n  margin-block: 1.25rem;\n}\n.bts-tw-my-6 {\n  margin-block: 1.5rem;\n}\n.bts-tw-my-7 {\n  margin-block: 1.75rem;\n}\n.bts-tw-my-8 {\n  margin-block: 2rem;\n}\n.bts-tw-mt-0 {\n  margin-top: 0px;\n}\n.bts-tw-mt-0\\.5 {\n  margin-top: 0.125rem;\n}\n.bts-tw-mt-1 {\n  margin-top: 0.25rem;\n}\n.bts-tw-mt-1\\.5 {\n  margin-top: 0.375rem;\n}\n.bts-tw-mt-2 {\n  margin-top: 0.5rem;\n}\n.bts-tw-mt-2\\.5 {\n  margin-top: 0.625rem;\n}\n.bts-tw-mt-3 {\n  margin-top: 0.75rem;\n}\n.bts-tw-mt-3\\.5 {\n  margin-top: 0.875rem;\n}\n.bts-tw-mt-4 {\n  margin-top: 1rem;\n}\n.bts-tw-mt-5 {\n  margin-top: 1.25rem;\n}\n.bts-tw-mt-6 {\n  margin-top: 1.5rem;\n}\n.bts-tw-mt-7 {\n  margin-top: 1.75rem;\n}\n.bts-tw-mt-8 {\n  margin-top: 2rem;\n}\n.bts-tw-mr-0 {\n  margin-right: 0px;\n}\n.bts-tw-mr-0\\.5 {\n  margin-right: 0.125rem;\n}\n.bts-tw-mr-1 {\n  margin-right: 0.25rem;\n}\n.bts-tw-mr-1\\.5 {\n  margin-right: 0.375rem;\n}\n.bts-tw-mr-2 {\n  margin-right: 0.5rem;\n}\n.bts-tw-mr-2\\.5 {\n  margin-right: 0.625rem;\n}\n.bts-tw-mr-3 {\n  margin-right: 0.75rem;\n}\n.bts-tw-mr-3\\.5 {\n  margin-right: 0.875rem;\n}\n.bts-tw-mr-4 {\n  margin-right: 1rem;\n}\n.bts-tw-mr-5 {\n  margin-right: 1.25rem;\n}\n.bts-tw-mr-6 {\n  margin-right: 1.5rem;\n}\n.bts-tw-mr-7 {\n  margin-right: 1.75rem;\n}\n.bts-tw-mr-8 {\n  margin-right: 2rem;\n}\n.bts-tw-mb-0 {\n  margin-bottom: 0px;\n}\n.bts-tw-mb-0\\.5 {\n  margin-bottom: 0.125rem;\n}\n.bts-tw-mb-1 {\n  margin-bottom: 0.25rem;\n}\n.bts-tw-mb-1\\.5 {\n  margin-bottom: 0.375rem;\n}\n.bts-tw-mb-2 {\n  margin-bottom: 0.5rem;\n}\n.bts-tw-mb-2\\.5 {\n  margin-bottom: 0.625rem;\n}\n.bts-tw-mb-3 {\n  margin-bottom: 0.75rem;\n}\n.bts-tw-mb-3\\.5 {\n  margin-bottom: 0.875rem;\n}\n.bts-tw-mb-4 {\n  margin-bottom: 1rem;\n}\n.bts-tw-mb-5 {\n  margin-bottom: 1.25rem;\n}\n.bts-tw-mb-6 {\n  margin-bottom: 1.5rem;\n}\n.bts-tw-mb-7 {\n  margin-bottom: 1.75rem;\n}\n.bts-tw-mb-8 {\n  margin-bottom: 2rem;\n}\n.bts-tw-ml-0 {\n  margin-left: 0px;\n}\n.bts-tw-ml-0\\.5 {\n  margin-left: 0.125rem;\n}\n.bts-tw-ml-1 {\n  margin-left: 0.25rem;\n}\n.bts-tw-ml-1\\.5 {\n  margin-left: 0.375rem;\n}\n.bts-tw-ml-2 {\n  margin-left: 0.5rem;\n}\n.bts-tw-ml-2\\.5 {\n  margin-left: 0.625rem;\n}\n.bts-tw-ml-3 {\n  margin-left: 0.75rem;\n}\n.bts-tw-ml-3\\.5 {\n  margin-left: 0.875rem;\n}\n.bts-tw-ml-4 {\n  margin-left: 1rem;\n}\n.bts-tw-ml-5 {\n  margin-left: 1.25rem;\n}\n.bts-tw-ml-6 {\n  margin-left: 1.5rem;\n}\n.bts-tw-ml-7 {\n  margin-left: 1.75rem;\n}\n.bts-tw-ml-8 {\n  margin-left: 2rem;\n}\n.bts-tw-gap-0 {\n  gap: 0px;\n}\n.bts-tw-gap-0\\.5 {\n  gap: 0.125rem;\n}\n.bts-tw-gap-1 {\n  gap: 0.25rem;\n}\n.bts-tw-gap-1\\.5 {\n  gap: 0.375rem;\n}\n.bts-tw-gap-2 {\n  gap: 0.5rem;\n}\n.bts-tw-gap-2\\.5 {\n  gap: 0.625rem;\n}\n.bts-tw-gap-3 {\n  gap: 0.75rem;\n}\n.bts-tw-gap-3\\.5 {\n  gap: 0.875rem;\n}\n.bts-tw-gap-4 {\n  gap: 1rem;\n}\n.bts-tw-gap-5 {\n  gap: 1.25rem;\n}\n.bts-tw-gap-6 {\n  gap: 1.5rem;\n}\n.bts-tw-gap-7 {\n  gap: 1.75rem;\n}\n.bts-tw-gap-8 {\n  gap: 2rem;\n}\n.bts-tw-gap-x-0 {\n  gap-x: 0px;\n}\n.bts-tw-gap-x-0\\.5 {\n  gap-x: 0.125rem;\n}\n.bts-tw-gap-x-1 {\n  gap-x: 0.25rem;\n}\n.bts-tw-gap-x-1\\.5 {\n  gap-x: 0.375rem;\n}\n.bts-tw-gap-x-2 {\n  gap-x: 0.5rem;\n}\n.bts-tw-gap-x-2\\.5 {\n  gap-x: 0.625rem;\n}\n.bts-tw-gap-x-3 {\n  gap-x: 0.75rem;\n}\n.bts-tw-gap-x-3\\.5 {\n  gap-x: 0.875rem;\n}\n.bts-tw-gap-x-4 {\n  gap-x: 1rem;\n}\n.bts-tw-gap-x-5 {\n  gap-x: 1.25rem;\n}\n.bts-tw-gap-x-6 {\n  gap-x: 1.5rem;\n}\n.bts-tw-gap-x-7 {\n  gap-x: 1.75rem;\n}\n.bts-tw-gap-x-8 {\n  gap-x: 2rem;\n}\n.bts-tw-gap-y-0 {\n  gap-y: 0px;\n}\n.bts-tw-gap-y-0\\.5 {\n  gap-y: 0.125rem;\n}\n.bts-tw-gap-y-1 {\n  gap-y: 0.25rem;\n}\n.bts-tw-gap-y-1\\.5 {\n  gap-y: 0.375rem;\n}\n.bts-tw-gap-y-2 {\n  gap-y: 0.5rem;\n}\n.bts-tw-gap-y-2\\.5 {\n  gap-y: 0.625rem;\n}\n.bts-tw-gap-y-3 {\n  gap-y: 0.75rem;\n}\n.bts-tw-gap-y-3\\.5 {\n  gap-y: 0.875rem;\n}\n.bts-tw-gap-y-4 {\n  gap-y: 1rem;\n}\n.bts-tw-gap-y-5 {\n  gap-y: 1.25rem;\n}\n.bts-tw-gap-y-6 {\n  gap-y: 1.5rem;\n}\n.bts-tw-gap-y-7 {\n  gap-y: 1.75rem;\n}\n.bts-tw-gap-y-8 {\n  gap-y: 2rem;\n}\n.bts-tw-text-gray-100 {\n  color: #fafcff;\n}\n.bts-tw-text-gray-200 {\n  color: #f5f8fc;\n}\n.bts-tw-text-gray-300 {\n  color: #eef2f6;\n}\n.bts-tw-text-gray-400 {\n  color: #dde3e9;\n}\n.bts-tw-text-gray-500 {\n  color: #c4ccd4;\n}\n.bts-tw-text-gray-600 {\n  color: #a7b3be;\n}\n.bts-tw-text-gray-700 {\n  color: #73808c;\n}\n.bts-tw-text-gray-800 {\n  color: #1c2e36;\n}\n.bts-tw-text-gray-900 {\n  color: #19292f;\n}\n.bts-tw-text-gray-950 {\n  color: #141a1f;\n}\n.bts-tw-bg-gray-100 {\n  background-color: #fafcff;\n}\n.bts-tw-bg-gray-200 {\n  background-color: #f5f8fc;\n}\n.bts-tw-bg-gray-300 {\n  background-color: #eef2f6;\n}\n.bts-tw-bg-gray-400 {\n  background-color: #dde3e9;\n}\n.bts-tw-bg-gray-500 {\n  background-color: #c4ccd4;\n}\n.bts-tw-bg-gray-600 {\n  background-color: #a7b3be;\n}\n.bts-tw-bg-gray-700 {\n  background-color: #73808c;\n}\n.bts-tw-bg-gray-800 {\n  background-color: #1c2e36;\n}\n.bts-tw-bg-gray-900 {\n  background-color: #19292f;\n}\n.bts-tw-bg-gray-950 {\n  background-color: #141a1f;\n}\n.bts-tw-border-gray-100 {\n  border-color: #fafcff;\n}\n.bts-tw-border-gray-200 {\n  border-color: #f5f8fc;\n}\n.bts-tw-border-gray-300 {\n  border-color: #eef2f6;\n}\n.bts-tw-border-gray-400 {\n  border-color: #dde3e9;\n}\n.bts-tw-border-gray-500 {\n  border-color: #c4ccd4;\n}\n.bts-tw-border-gray-600 {\n  border-color: #a7b3be;\n}\n.bts-tw-border-gray-700 {\n  border-color: #73808c;\n}\n.bts-tw-border-gray-800 {\n  border-color: #1c2e36;\n}\n.bts-tw-border-gray-900 {\n  border-color: #19292f;\n}\n.bts-tw-border-gray-950 {\n  border-color: #141a1f;\n}", ""]);
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

/***/ "./resources/js/components/AttributesButton.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/AttributesButton.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AttributesButton_vue_vue_type_template_id_36265558___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttributesButton.vue?vue&type=template&id=36265558& */ "./resources/js/components/AttributesButton.vue?vue&type=template&id=36265558&");
/* harmony import */ var _AttributesButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttributesButton.vue?vue&type=script&lang=js& */ "./resources/js/components/AttributesButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AttributesButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AttributesButton_vue_vue_type_template_id_36265558___WEBPACK_IMPORTED_MODULE_0__.render,
  _AttributesButton_vue_vue_type_template_id_36265558___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AttributesButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/AttributesPanel.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/AttributesPanel.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AttributesPanel_vue_vue_type_template_id_199f7cd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttributesPanel.vue?vue&type=template&id=199f7cd2& */ "./resources/js/components/AttributesPanel.vue?vue&type=template&id=199f7cd2&");
/* harmony import */ var _AttributesPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttributesPanel.vue?vue&type=script&lang=js& */ "./resources/js/components/AttributesPanel.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AttributesPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AttributesPanel_vue_vue_type_template_id_199f7cd2___WEBPACK_IMPORTED_MODULE_0__.render,
  _AttributesPanel_vue_vue_type_template_id_199f7cd2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AttributesPanel.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/StylesButton.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/StylesButton.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StylesButton_vue_vue_type_template_id_4fdcf49f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StylesButton.vue?vue&type=template&id=4fdcf49f& */ "./resources/js/components/StylesButton.vue?vue&type=template&id=4fdcf49f&");
/* harmony import */ var _StylesButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StylesButton.vue?vue&type=script&lang=js& */ "./resources/js/components/StylesButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StylesButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StylesButton_vue_vue_type_template_id_4fdcf49f___WEBPACK_IMPORTED_MODULE_0__.render,
  _StylesButton_vue_vue_type_template_id_4fdcf49f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/StylesButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/StylesItem.vue":
/*!************************************************!*\
  !*** ./resources/js/components/StylesItem.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StylesItem_vue_vue_type_template_id_62533d80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StylesItem.vue?vue&type=template&id=62533d80& */ "./resources/js/components/StylesItem.vue?vue&type=template&id=62533d80&");
/* harmony import */ var _StylesItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StylesItem.vue?vue&type=script&lang=js& */ "./resources/js/components/StylesItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StylesItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StylesItem_vue_vue_type_template_id_62533d80___WEBPACK_IMPORTED_MODULE_0__.render,
  _StylesItem_vue_vue_type_template_id_62533d80___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/StylesItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/StylesMenu.vue":
/*!************************************************!*\
  !*** ./resources/js/components/StylesMenu.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StylesMenu_vue_vue_type_template_id_64a9f58c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StylesMenu.vue?vue&type=template&id=64a9f58c& */ "./resources/js/components/StylesMenu.vue?vue&type=template&id=64a9f58c&");
/* harmony import */ var _StylesMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StylesMenu.vue?vue&type=script&lang=js& */ "./resources/js/components/StylesMenu.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StylesMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StylesMenu_vue_vue_type_template_id_64a9f58c___WEBPACK_IMPORTED_MODULE_0__.render,
  _StylesMenu_vue_vue_type_template_id_64a9f58c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/StylesMenu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/AttributesButton.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/AttributesButton.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttributesButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AttributesButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttributesButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttributesButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AttributesPanel.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/AttributesPanel.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttributesPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AttributesPanel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttributesPanel.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AttributesPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/StylesButton.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/StylesButton.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StylesButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StylesButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StylesButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StylesButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/StylesItem.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/StylesItem.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StylesItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StylesItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StylesItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StylesItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/StylesMenu.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/StylesMenu.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StylesMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StylesMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StylesMenu.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StylesMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AttributesButton.vue?vue&type=template&id=36265558&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/AttributesButton.vue?vue&type=template&id=36265558& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttributesButton_vue_vue_type_template_id_36265558___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttributesButton_vue_vue_type_template_id_36265558___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttributesButton_vue_vue_type_template_id_36265558___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AttributesButton.vue?vue&type=template&id=36265558& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttributesButton.vue?vue&type=template&id=36265558&");


/***/ }),

/***/ "./resources/js/components/AttributesPanel.vue?vue&type=template&id=199f7cd2&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/AttributesPanel.vue?vue&type=template&id=199f7cd2& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttributesPanel_vue_vue_type_template_id_199f7cd2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttributesPanel_vue_vue_type_template_id_199f7cd2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AttributesPanel_vue_vue_type_template_id_199f7cd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AttributesPanel.vue?vue&type=template&id=199f7cd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttributesPanel.vue?vue&type=template&id=199f7cd2&");


/***/ }),

/***/ "./resources/js/components/StylesButton.vue?vue&type=template&id=4fdcf49f&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/StylesButton.vue?vue&type=template&id=4fdcf49f& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StylesButton_vue_vue_type_template_id_4fdcf49f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StylesButton_vue_vue_type_template_id_4fdcf49f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StylesButton_vue_vue_type_template_id_4fdcf49f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StylesButton.vue?vue&type=template&id=4fdcf49f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StylesButton.vue?vue&type=template&id=4fdcf49f&");


/***/ }),

/***/ "./resources/js/components/StylesItem.vue?vue&type=template&id=62533d80&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/StylesItem.vue?vue&type=template&id=62533d80& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StylesItem_vue_vue_type_template_id_62533d80___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StylesItem_vue_vue_type_template_id_62533d80___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StylesItem_vue_vue_type_template_id_62533d80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StylesItem.vue?vue&type=template&id=62533d80& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StylesItem.vue?vue&type=template&id=62533d80&");


/***/ }),

/***/ "./resources/js/components/StylesMenu.vue?vue&type=template&id=64a9f58c&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/StylesMenu.vue?vue&type=template&id=64a9f58c& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StylesMenu_vue_vue_type_template_id_64a9f58c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StylesMenu_vue_vue_type_template_id_64a9f58c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StylesMenu_vue_vue_type_template_id_64a9f58c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StylesMenu.vue?vue&type=template&id=64a9f58c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StylesMenu.vue?vue&type=template&id=64a9f58c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttributesButton.vue?vue&type=template&id=36265558&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttributesButton.vue?vue&type=template&id=36265558& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
        staticClass: "bard-toolbar-button",
        attrs: { "aria-label": _vm.button.text },
        domProps: { innerHTML: _vm._s(_vm.button.html) },
        on: { click: _vm.togglePanel },
      }),
      _vm._v(" "),
      _vm.panelActive
        ? _c("AttributesPanel", {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttributesPanel.vue?vue&type=template&id=199f7cd2&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AttributesPanel.vue?vue&type=template&id=199f7cd2& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
                      "font-bold bts-tw-px-4 bts-py-1.25 bts-tw-bg-gray-100 title-case border-b flex items-center cursor-pointer",
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
                        staticClass: "w-4 h-4 bts-arrow bts-tw-text-gray-700",
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
                      { staticClass: "bts-tw-p-4 bts-tw-pt-1 border-b" },
                      _vm._l(_vm.fields(item.type), function (field, name) {
                        return _c("div", { staticClass: "bts-tw-mt-3" }, [
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
                                    "input h-8 bts-tw-p-2 border text-sm bts-tw-border-gray-500 rounded bts-tw-mt-2",
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
                  "flex items-center justify-end font-normal bts-tw-px-4 bts-tw-py-3",
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
      : _c(
          "div",
          { staticClass: "bts-tw-p-8 w-40 text-center bts-tw-text-gray-400" },
          [
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
          ]
        ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StylesButton.vue?vue&type=template&id=4fdcf49f&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StylesButton.vue?vue&type=template&id=4fdcf49f& ***!
  \************************************************************************************************************************************************************************************************************************/
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
        staticClass: "bard-toolbar-button",
        attrs: { "aria-label": _vm.button.text },
        domProps: { innerHTML: _vm._s(_vm.button.html) },
        on: { click: _vm.togglePanel },
      }),
      _vm._v(" "),
      _vm.panelActive
        ? _c("StylesMenu", {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StylesItem.vue?vue&type=template&id=62533d80&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StylesItem.vue?vue&type=template&id=62533d80& ***!
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
  return _vm.visible
    ? _c(
        "button",
        {
          staticClass: "bts-styles-item",
          class: { active: _vm.active },
          on: { click: _vm.click },
        },
        [
          _c(
            "div",
            {
              staticClass: "bts-styles-preview",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StylesMenu.vue?vue&type=template&id=64a9f58c&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StylesMenu.vue?vue&type=template&id=64a9f58c& ***!
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
  return _c("div", { staticClass: "bts-panel bts-styles" }, [
    _vm.items.length
      ? _c(
          "div",
          { staticClass: "bts-styles-items" },
          _vm._l(_vm.items, function (item) {
            return _c("StylesItem", {
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
      : _c(
          "div",
          { staticClass: "bts-tw-p-8 w-40 text-center bts-tw-text-gray-400" },
          [
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
          ]
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