/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ToolbarButton.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ToolbarButton.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [BardToolbarButton],
  data: function data() {
    var style = this.button.bts_style;
    return {
      style: style,
      icon: style.icon
    };
  },
  methods: {
    isActive: function isActive() {
      var _this$button$bts_conf = this.button.bts_config,
          store = _this$button$bts_conf.store,
          attr = _this$button$bts_conf.attr;

      if (this.style.type === 'span') {
        return this.editor.getMarkAttrs(this.button.command)[attr] === this.style[store];
      } else {
        return this.active;
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/commands.js":
/*!**********************************!*\
  !*** ./resources/js/commands.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleWrapFlat": () => (/* binding */ toggleWrapFlat),
/* harmony export */   "updateNodeMerge": () => (/* binding */ updateNodeMerge)
/* harmony export */ });
var _Statamic$$bard$tipta = Statamic.$bard.tiptap.commands,
    wrapIn = _Statamic$$bard$tipta.wrapIn,
    lift = _Statamic$$bard$tipta.lift;
var nodeIsActive = Statamic.$bard.tiptap.utils.nodeIsActive;
function updateNodeMerge(type) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (state, dispatch) {
    var _state$selection = state.selection,
        from = _state$selection.from,
        to = _state$selection.to;
    var node, pos;
    state.doc.nodesBetween(from, to, function (n, p) {
      if (n.type.name !== type.name) {
        return;
      }

      node = n;
      pos = p;
      return false;
    });
    dispatch(state.tr.setNodeMarkup(pos, null, Object.assign({}, node.attrs, attrs)));
    return true;
  };
}
function toggleWrapFlat(type) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (state, dispatch, view) {
    var isActive = nodeIsActive(state, type, attrs);

    if (isActive) {
      return lift(state, dispatch, view);
    }

    var isAnyActive = nodeIsActive(state, type);

    if (isAnyActive) {
      return updateNodeMerge(type, attrs)(state, dispatch, view);
    }

    return wrapIn(type, attrs)(state, dispatch, view);
  };
}

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
var icons = {
  'letter': function letter(style) {
    var letter = {
      heading: 'H',
      paragraph: 'P',
      span: 'T',
      div: 'C'
    }[style.type];
    var ident = style.ident;
    return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"16\" viewBox=\"0 0 24 16\" style=\"width: 24px;\">\n                <text text-anchor=\"middle\" x=\"8.3\" y=\"16\" style=\"font-family: Times, serif; font-size: 23px;\">".concat(letter, "</text>\n                <text text-anchor=\"middle\" x=\"20\" y=\"12.5\" style=\"font-size: 12px;\" text-anchor=\"end\">").concat(ident, "</text>\n            </svg>\n        ");
  },
  'square': function square(style) {
    var ident = style.ident;
    return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\">\n                <rect width=\"15\" height=\"15\" x=\"0.5\" y=\"0.5\" rx=\"2\" stroke-width=\"1\" stroke=\"currentColor\" fill=\"none\" />\n                <text text-anchor=\"middle\" x=\"8\" y=\"12\" style=\"font-size: 11px;\" text-anchor=\"end\">".concat(ident, "</text>\n            </svg>\n        ");
  },
  'square_filled': function square_filled(style) {
    var ident = style.ident;
    return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\">\n                <rect width=\"15\" height=\"15\" x=\"0.5\" y=\"0.5\" rx=\"2\" stroke-width=\"1\" stroke=\"currentColor\" fill=\"black\" />\n                <text text-anchor=\"middle\" x=\"8\" y=\"12\" style=\"font-size: 11px;\" fill=\"white\" text-anchor=\"end\">".concat(ident, "</text>\n            </svg>\n        ");
  },
  'circle': function circle(style) {
    var ident = style.ident;
    return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\">\n                <circle cx=\"8\" cy=\"8\" r=\"7.5\" stroke-width=\"1\" stroke=\"currentColor\" fill=\"none\" />\n                <text text-anchor=\"middle\" x=\"8\" y=\"12\" style=\"font-size: 11px;\" text-anchor=\"end\">".concat(ident, "</text>\n            </svg>\n        ");
  },
  'circle_filled': function circle_filled(style) {
    var ident = style.ident;
    return "\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\">\n                <circle cx=\"8\" cy=\"8\" r=\"7.5\" stroke-width=\"1\" stroke=\"currentColor\" fill=\"black\" />\n                <text text-anchor=\"middle\" x=\"8\" y=\"12\" style=\"font-size: 11px;\" fill=\"white\" text-anchor=\"end\">".concat(ident, "</text>\n            </svg>\n        ");
  }
};
var styleToIcon = function styleToIcon(style, type) {
  var icon = style.icon ? style.icon : style.type === 'div' ? 'square' : 'letter';
  return icons[icon] ? icons[icon](style) : icon;
};

/***/ }),

/***/ "./resources/js/marks/Span.js":
/*!************************************!*\
  !*** ./resources/js/marks/Span.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Span)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

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

var Span = /*#__PURE__*/function (_BardMutator$mutatesM) {
  _inherits(Span, _BardMutator$mutatesM);

  var _super2 = _createSuper(Span);

  function Span() {
    _classCallCheck(this, Span);

    return _super2.apply(this, arguments);
  }

  return _createClass(Span);
}(BardMutator.mutatesMark(BaseSpan));



/***/ }),

/***/ "./resources/js/nodes/Div.js":
/*!***********************************!*\
  !*** ./resources/js/nodes/Div.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Div)
/* harmony export */ });
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commands */ "./resources/js/commands.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Node = Statamic.$bard.tiptap.core.Node;
var wrappingInputRule = Statamic.$bard.tiptap.commands.wrappingInputRule;

var BaseDiv = /*#__PURE__*/function (_Node) {
  _inherits(BaseDiv, _Node);

  var _super = _createSuper(BaseDiv);

  function BaseDiv() {
    _classCallCheck(this, BaseDiv);

    return _super.apply(this, arguments);
  }

  _createClass(BaseDiv, [{
    key: "name",
    get: function get() {
      return 'bts_div';
    }
  }, {
    key: "schema",
    get: function get() {
      return {
        content: 'block*',
        group: 'block',
        defining: false,
        draggable: false,
        parseDOM: [{
          tag: 'div'
        }],
        toDOM: function toDOM() {
          return ['div', 0];
        }
      };
    }
  }, {
    key: "commands",
    value: function commands(_ref) {
      var type = _ref.type;
      return function (attrs) {
        return (0,_commands__WEBPACK_IMPORTED_MODULE_0__.toggleWrapFlat)(type, attrs);
      };
    }
  }, {
    key: "inputRules",
    value: function inputRules(_ref2) {
      var type = _ref2.type;
      return [wrappingInputRule(/^\s*>\s$/, type)];
    }
  }]);

  return BaseDiv;
}(Node);

var Div = /*#__PURE__*/function (_BardMutator$mutatesN) {
  _inherits(Div, _BardMutator$mutatesN);

  var _super2 = _createSuper(Div);

  function Div() {
    _classCallCheck(this, Div);

    return _super2.apply(this, arguments);
  }

  return _createClass(Div);
}(BardMutator.mutatesNode(BaseDiv));



/***/ }),

/***/ "./resources/js/components/ToolbarButton.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/ToolbarButton.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ToolbarButton_vue_vue_type_template_id_c3d2389c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToolbarButton.vue?vue&type=template&id=c3d2389c& */ "./resources/js/components/ToolbarButton.vue?vue&type=template&id=c3d2389c&");
/* harmony import */ var _ToolbarButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToolbarButton.vue?vue&type=script&lang=js& */ "./resources/js/components/ToolbarButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ToolbarButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ToolbarButton_vue_vue_type_template_id_c3d2389c___WEBPACK_IMPORTED_MODULE_0__.render,
  _ToolbarButton_vue_vue_type_template_id_c3d2389c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ToolbarButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/ToolbarButton.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/ToolbarButton.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ToolbarButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ToolbarButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ToolbarButton.vue?vue&type=template&id=c3d2389c&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/ToolbarButton.vue?vue&type=template&id=c3d2389c& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButton_vue_vue_type_template_id_c3d2389c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButton_vue_vue_type_template_id_c3d2389c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButton_vue_vue_type_template_id_c3d2389c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ToolbarButton.vue?vue&type=template&id=c3d2389c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ToolbarButton.vue?vue&type=template&id=c3d2389c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ToolbarButton.vue?vue&type=template&id=c3d2389c&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ToolbarButton.vue?vue&type=template&id=c3d2389c& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    "button",
    {
      directives: [
        {
          name: "tooltip",
          rawName: "v-tooltip",
          value: _vm.button.text,
          expression: "button.text",
        },
      ],
      staticClass: "bard-toolbar-button",
      class: { active: _vm.isActive() },
      attrs: { "aria-label": _vm.button.text },
      on: {
        click: function ($event) {
          _vm.editor.commands[_vm.button.command](_vm.button.args)
        },
      },
    },
    [
      _c("div", {
        staticClass: "flex items-center",
        domProps: { innerHTML: _vm._s(_vm.icon) },
      }),
    ]
  )
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
/* harmony import */ var _nodes_Div__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodes/Div */ "./resources/js/nodes/Div.js");
/* harmony import */ var _components_ToolbarButton_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ToolbarButton.vue */ "./resources/js/components/ToolbarButton.vue");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ "./resources/js/icons.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var toggleBlockType = Statamic.$bard.tiptap.commands.toggleBlockType;
var types = {
  heading: {
    tag: 'h',
    cmd: 'heading'
  },
  paragraph: {
    tag: 'p',
    cmd: 'paragraph'
  },
  span: {
    tag: 'span',
    cmd: 'bts_span'
  },
  div: {
    tag: 'div',
    cmd: 'bts_div'
  }
};
Statamic.booting(function () {
  var _BardMutator = BardMutator,
      mutator = _BardMutator.mutator;
  Statamic.$bard.addExtension(function () {
    return new _marks_Span__WEBPACK_IMPORTED_MODULE_0__["default"]();
  });
  Statamic.$bard.addExtension(function () {
    return new _nodes_Div__WEBPACK_IMPORTED_MODULE_1__["default"]();
  });
  var store = Statamic.$config.get('statamic-bard-texstyle.store') || 'class';
  var attr = store === 'class' ? 'class' : 'bts_key';
  var styles = Statamic.$config.get('statamic-bard-texstyle.styles') || [];
  var activeTypes = Object.entries(styles).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        style = _ref2[1];

    return style.type;
  }).filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });

  var schemaMutator = function schemaMutator(schema, _ref3) {
    var extendSchema = _ref3.extendSchema;
    return extendSchema(schema, {
      attrs: _defineProperty({}, attr, {
        "default": null
      }),
      parseDOMAttrs: function parseDOMAttrs(dom) {
        return _defineProperty({}, attr, dom.getAttribute("data-bts-".concat(attr)));
      },
      toDOMAttrs: function toDOMAttrs(node) {
        return _defineProperty({}, "data-bts-".concat(attr), node.attrs[attr]);
      }
    });
  };

  if (activeTypes.includes('heading')) {
    mutator.schema('heading', schemaMutator);
  }

  if (activeTypes.includes('paragraph')) {
    mutator.schema('paragraph', schemaMutator);
    mutator.commands('paragraph', function (commands, _ref6) {
      var type = _ref6.type,
          schema = _ref6.schema;
      return _objectSpread(_objectSpread({}, commands), {}, {
        paragraph: function paragraph(attrs) {
          return toggleBlockType(type, schema.nodes.paragraph, attrs);
        }
      });
    });
  }

  if (activeTypes.includes('span')) {
    mutator.schema('bts_span', schemaMutator);
  }

  if (activeTypes.includes('div')) {
    mutator.schema('bts_div', schemaMutator);
  } // Buttons


  Statamic.$bard.buttons(function (buttons, button) {
    Object.entries(styles).forEach(function (_ref7) {
      var _ref9;

      var _ref8 = _slicedToArray(_ref7, 2),
          key = _ref8[0],
          style = _ref8[1];

      if (!types[style.type]) {
        return;
      }

      var type = types[style.type];
      var icon = (0,_icons__WEBPACK_IMPORTED_MODULE_3__.styleToIcon)(style, type);
      var data = {
        name: key,
        text: style.name,
        command: type.cmd,
        args: style.type === 'heading' ? (_ref9 = {}, _defineProperty(_ref9, attr, style[store]), _defineProperty(_ref9, "level", style.level), _ref9) : _defineProperty({}, attr, style[store]),
        component: _components_ToolbarButton_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
        html: icon,
        bts_config: {
          store: store,
          attr: attr
        },
        bts_style: _objectSpread(_objectSpread({}, style), {}, {
          icon: icon
        })
      };
      buttons.splice(buttons.indexOf(key), 0, button(data));
    });
  }); // CSS

  var css = [".bard-fieldtype .ProseMirror [data-bts-".concat(attr, "] { margin-top: 0px; margin-bottom: 0.85em; }")];
  var selector = [".bard-fieldtype .ProseMirror >", ".bard-fieldtype .ProseMirror [data-bts-".concat(attr, "] >")];
  var cpCss = Array.from(document.styleSheets).find(function (sheet) {
    return sheet.href && sheet.href.includes('statamic/cp/css/cp.css');
  });
  Array.from(cpCss.cssRules).filter(function (rule) {
    return rule.selectorText && rule.selectorText.startsWith(selector[0]);
  }).forEach(function (rule) {
    return css.push(rule.cssText.replaceAll(selector[0], selector[1]));
  });
  Object.entries(styles).forEach(function (_ref11) {
    var _ref12 = _slicedToArray(_ref11, 2),
        style = _ref12[1];

    if (!types[style.type]) {
      return;
    }

    var type = types[style.type];
    var tag = style.type === 'heading' ? "".concat(type.tag).concat(style.level) : "".concat(type.tag);
    css.push(".bard-fieldtype .ProseMirror ".concat(tag, "[data-bts-").concat(attr, "=\"").concat(style[store], "\"] { ").concat(style.cp_css, " }"));
  });
  var el = document.createElement('style');
  el.appendChild(document.createTextNode(css.join(' ')));
  document.head.appendChild(el);
});
})();

/******/ })()
;