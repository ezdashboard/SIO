exports.id = 516;
exports.ids = [516];
exports.modules = {

/***/ 99497:
/***/ (() => {



/***/ }),

/***/ 79720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99322);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19574);
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const MsgModal = (props)=>{
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: props && props.msg ? props.msg : "",
        text: "",
        icon: props && props.msgType ? props.msgType : "",
        confirmButtonText: "ok"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgModal);


/***/ }),

/***/ 62538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_src_app_dashboard_layout_js_import_Roboto_arguments_weight_100_300_400_500_700_900_style_normal_italic_subsets_latin_display_swap_variableName_roboto___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4483);
/* harmony import */ var next_font_google_target_css_path_src_app_dashboard_layout_js_import_Roboto_arguments_weight_100_300_400_500_700_900_style_normal_italic_subsets_latin_display_swap_variableName_roboto___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_dashboard_layout_js_import_Roboto_arguments_weight_100_300_400_500_700_900_style_normal_italic_subsets_latin_display_swap_variableName_roboto___WEBPACK_IMPORTED_MODULE_1__);
// import './globals.css'


const metadata = {
    title: "Dashboard",
    description: "Dashboard"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("head", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
                className: (next_font_google_target_css_path_src_app_dashboard_layout_js_import_Roboto_arguments_weight_100_300_400_500_700_900_style_normal_italic_subsets_latin_display_swap_variableName_roboto___WEBPACK_IMPORTED_MODULE_1___default().className),
                children: children
            })
        ]
    });
}


/***/ })

};
;