"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./src/components/Layout.tsx + 5 modules
var Layout = __webpack_require__(4571);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/styles/Containers.ts
var Containers = __webpack_require__(6387);
// EXTERNAL MODULE: ./src/styles/TextElements.ts
var TextElements = __webpack_require__(6893);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/styles/ButtonElements.ts

const ButtonElement = external_styled_components_default().button.withConfig({
  displayName: "ButtonElements__ButtonElement",
  componentId: "sc-165c64b-0"
})(["border:none;background:", ";padding:10px 20px;text-transform:uppercase;cursor:pointer;color:", ";font-weight:bold;&:hover{opacity:0.8;}"], ({
  theme
}) => theme.secondary, ({
  theme
}) => theme.white);
/* harmony default export */ const ButtonElements = (ButtonElement);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Hero.tsx







const Hero = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Containers/* HeroContainer */.OU, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(TextElements/* Title */.Dx, {
      hero: true,
      children: "Gaston's  Blog"
    }), /*#__PURE__*/jsx_runtime_.jsx(TextElements/* Paragraph */.nv, {
      light: true,
      children: "Compartiendo mi experiencia & pasi\xF3n"
    }), /*#__PURE__*/jsx_runtime_.jsx(ButtonElements, {
      children: "Suscr\xEDbete"
    })]
  });
};

/* harmony default export */ const components_Hero = (Hero);
// EXTERNAL MODULE: ./src/components/AppLink.tsx
var AppLink = __webpack_require__(5136);
;// CONCATENATED MODULE: ./src/styles/ListingElement.ts

const ListingElement = external_styled_components_default().div.withConfig({
  displayName: "ListingElement",
  componentId: "sc-1jpil98-0"
})(["margin-bottom:1.4em;a{font-weight:bold;font-size:1.1em;transition:0.1s;}a:hover{border-bottom:solid 2px #111;}"]);
/* harmony default export */ const styles_ListingElement = (ListingElement);
;// CONCATENATED MODULE: ./src/components/ListingItem.tsx






const ListingItem = ({
  post
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_ListingElement, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(AppLink/* default */.Z, {
      href: "/blog/[slug]",
      as: `/blog/${post.slug}`,
      label: post.title
    }), post.excerpt && /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: post.excerpt
    })]
  });
};

/* harmony default export */ const components_ListingItem = (ListingItem);
;// CONCATENATED MODULE: ./src/components/PostListing.tsx




const PostListing = ({
  posts
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: posts.map(post => /*#__PURE__*/jsx_runtime_.jsx(components_ListingItem, {
      post: post
    }, post.slug))
  });
};

/* harmony default export */ const components_PostListing = (PostListing);
;// CONCATENATED MODULE: ./src/components/MainSection.tsx







const MainSection = ({
  posts
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("main", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Containers/* Container */.W2, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(TextElements/* Title */.Dx, {
        children: "All Posts"
      }), /*#__PURE__*/jsx_runtime_.jsx(components_PostListing, {
        posts: posts
      })]
    })
  });
};

/* harmony default export */ const components_MainSection = (MainSection);
;// CONCATENATED MODULE: ./src/pages/index.tsx








const Blog = ({
  posts
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
    pageTitle: "Blog",
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Hero, {}), /*#__PURE__*/jsx_runtime_.jsx(components_MainSection, {
      posts: posts
    })]
  });
};

const getStaticProps = async () => {
  const files = external_fs_default().readdirSync('src/_posts');
  const posts = files.map(fname => {
    const md = external_fs_default().readFileSync(`src/_posts/${fname}`).toString();
    const {
      data,
      excerpt
    } = external_gray_matter_default()(md, {
      excerpt_separator: '/n/n'
    });
    return {
      slug: fname.replace('.md', ''),
      title: data.title,
      excerpt
    };
  });
  return {
    props: {
      posts
    }
  };
};
/* harmony default export */ const pages = (Blog);

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,664,571], () => (__webpack_exec__(8229)));
module.exports = __webpack_exports__;

})();