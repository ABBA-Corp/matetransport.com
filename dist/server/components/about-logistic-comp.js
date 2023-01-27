exports.ids = [1,5,20];
exports.modules = {

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Title.vue?vue&type=template&id=39e72820&lang=html&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "title-comp"
  }, [_vm._ssrNode("<div><h1>" + _vm._s(_vm.title) + "</h1> <span></span></div> <div>" + (_vm.text ? "<p>" + _vm._s(_vm.text) + "</p>" : "<!---->") + "</div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Title.vue?vue&type=template&id=39e72820&lang=html&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Title.vue?vue&type=script&lang=js&
/* harmony default export */ var Titlevue_type_script_lang_js_ = ({
  props: ["title", "text"]
});
// CONCATENATED MODULE: ./components/Title.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Titlevue_type_script_lang_js_ = (Titlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Title.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Titlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "73692cc9"
  
)

/* harmony default export */ var Title = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(183);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("be2f0d3a", content, true, context)
};

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/cards/AboutLogisticCard.vue?vue&type=template&id=0aa13986&lang=html&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "about-logistic-card"
  }, [_vm._ssrNode("<div class=\"al-card-title-grid\"><div class=\"al-card-icon\"><svg width=\"39\" height=\"46\" viewBox=\"0 0 39 46\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.4481 14.3621C14.818 14.3621 11.0513 18.2631 11.0513 23.0581C11.0513 27.8534 14.818 31.7545 19.4481 31.7545C24.0779 31.7545 27.8446 27.8534 27.8446 23.0581C27.8446 18.2631 24.0779 14.3621 19.4481 14.3621ZM24.4333 21.4204L18.4179 27.6504C18.1654 27.9119 17.8343 28.0428 17.5034 28.0428C17.1726 28.0428 16.8417 27.9122 16.5892 27.6504L14.2905 25.2696C13.7855 24.7469 13.7855 23.899 14.2905 23.376C14.7951 22.853 15.6139 22.853 16.1189 23.376L17.5034 24.81L22.6049 19.5268C23.1096 19.0038 23.9283 19.0038 24.4333 19.5268C24.9383 20.0495 24.9383 20.8974 24.4333 21.4204Z\" fill=\"#024E90\"></path> <path d=\"M38.1683 12.6203L38.167 12.5848C38.1478 12.1464 38.1351 11.6825 38.1273 11.1665C38.0913 8.64992 36.1597 6.56828 33.7295 6.4276C28.6627 6.13475 24.743 4.42362 21.3939 1.04278L21.3653 1.01458C20.2729 -0.0227621 18.6251 -0.0227621 17.5323 1.01458L17.5038 1.04278C14.1546 4.42362 10.235 6.13475 5.16808 6.42795C2.7382 6.56828 0.806267 8.64992 0.770291 11.1668C0.762894 11.6794 0.749782 12.1432 0.730617 12.5848L0.7286 12.6673C0.630087 18.0183 0.507702 24.678 2.65885 30.7227C3.84169 34.0468 5.63308 36.9363 7.98294 39.3115C10.6593 42.0164 14.1647 44.1638 18.4018 45.6939C18.5397 45.7437 18.6829 45.7841 18.8288 45.8144C19.0346 45.8569 19.2417 45.8781 19.4488 45.8781C19.6559 45.8781 19.8634 45.8569 20.0688 45.8144C20.2147 45.7841 20.359 45.7434 20.4975 45.6932C24.7295 44.1604 28.2313 42.0119 30.9053 39.3073C33.2541 36.9314 35.0455 34.0412 36.2293 30.7164C38.3886 24.6536 38.2665 17.9814 38.1683 12.6203ZM19.4481 34.4326C13.3921 34.4326 8.46542 29.3302 8.46542 23.0581C8.46542 16.786 13.3921 11.6836 19.4481 11.6836C25.5038 11.6836 30.4308 16.786 30.4308 23.0581C30.4308 29.3302 25.5038 34.4326 19.4481 34.4326Z\" fill=\"#024E90\"></path></svg></div> <div class=\"al-card-title\"><h2>Leave it to the pros</h2></div></div> <div class=\"al-card-text\"><p>\n      Lorem Ipsum is simply dummy text of the printing and typesetting\n      industry. Lorem Ipsum has been the industry's standard dummy text ever\n      since the 1500s,Lorem Ipsum is simply dummy text of the printing and\n      typesetting industry. Lorem Ipsum has been the industry's standard dummy\n      text ever since.\n    </p></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/cards/AboutLogisticCard.vue?vue&type=template&id=0aa13986&lang=html&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/cards/AboutLogisticCard.vue?vue&type=script&lang=js&
/* harmony default export */ var AboutLogisticCardvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/cards/AboutLogisticCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var cards_AboutLogisticCardvue_type_script_lang_js_ = (AboutLogisticCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/cards/AboutLogisticCard.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cards_AboutLogisticCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3145e496"
  
)

/* harmony default export */ var AboutLogisticCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutLogisticComp_vue_vue_type_style_index_0_id_b34eb8c8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(164);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutLogisticComp_vue_vue_type_style_index_0_id_b34eb8c8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutLogisticComp_vue_vue_type_style_index_0_id_b34eb8c8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutLogisticComp_vue_vue_type_style_index_0_id_b34eb8c8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutLogisticComp_vue_vue_type_style_index_0_id_b34eb8c8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".about-logistic-comp{padding-top:60px;padding-bottom:120px}.about-logistic-comp-grid{display:grid;grid-template-columns:repeat(3, 1fr);grid-gap:20px}.about-shadow{position:relative}.about-shadow::after{content:\"\";position:absolute;width:395px;height:381px;left:-425px;background:#73abff;opacity:.45;filter:blur(165.385px)}.about-shadow::before{content:\"\";position:absolute;width:395px;height:381px;top:30px;right:-445px;background:#73abff;opacity:.45;filter:blur(165.385px)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutLogisticComp.vue?vue&type=template&id=b34eb8c8&lang=html&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "about-logistic-comp"
  }, [_vm._ssrNode("<div class=\"container_xl\">", "</div>", [_c('Title', {
    attrs: {
      "title": "Mate logistics Company",
      "text": "Why you should book with one of the best auto <br/> shipping companies:"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"about-logistic-comp-grid about-shadow\">", "</div>", [_c('AboutLogisticCard'), _vm._ssrNode(" "), _c('AboutLogisticCard'), _vm._ssrNode(" "), _c('AboutLogisticCard')], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AboutLogisticComp.vue?vue&type=template&id=b34eb8c8&lang=html&

// EXTERNAL MODULE: ./components/cards/AboutLogisticCard.vue + 4 modules
var AboutLogisticCard = __webpack_require__(167);

// EXTERNAL MODULE: ./components/Title.vue + 4 modules
var Title = __webpack_require__(144);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutLogisticComp.vue?vue&type=script&lang=js&


/* harmony default export */ var AboutLogisticCompvue_type_script_lang_js_ = ({
  components: {
    Title: Title["default"],
    AboutLogisticCard: AboutLogisticCard["default"]
  }
});
// CONCATENATED MODULE: ./components/AboutLogisticComp.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AboutLogisticCompvue_type_script_lang_js_ = (AboutLogisticCompvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AboutLogisticComp.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(182)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AboutLogisticCompvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "70ecacad"
  
)

/* harmony default export */ var AboutLogisticComp = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Title: __webpack_require__(144).default})


/***/ })

};;
//# sourceMappingURL=about-logistic-comp.js.map