"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./src/styles/theme.ts
const defaultTheme = {
  white: '#fafafa',
  dark: '#293241',
  medium: '#555',
  light: '#8d99ae',
  primary: '#222',
  secondary: '#2196f3',
  footer: '#3586ff'
};
/* harmony default export */ const theme = (defaultTheme);
;// CONCATENATED MODULE: ./src/styles/Global.ts

const GlobalStyle = (0,external_styled_components_.createGlobalStyle)(["*,*:after,*:before{box-sizing:border-box;margin:0;outline:none}body{font-size:calc(14px + .5vw);font-family:'Fira Sans','Lato',sans-serif;line-height:1.7;background:", ";color:", ";}a{text-decoration:none;color:", "}ul{list-style:none}"], ({
  theme
}) => theme.white, ({
  theme
}) => theme.medium, ({
  theme
}) => theme.dark);
/* harmony default export */ const Global = (GlobalStyle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const CustomApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
    theme: theme,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(Global, {})]
  });
};

/* harmony default export */ const _app = (CustomApp);

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5491));
module.exports = __webpack_exports__;

})();