/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Jost-300-Light.otf */ "./src/Jost-300-Light.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  * {\n    margin: 0;\n  }\n  html, body {\n    height: 100%;\n  }\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n  }\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  input, button, textarea, select {\n    font: inherit;\n  }\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  #root, #__next {\n    isolation: isolate;\n  }\n  ul {\n      list-style: none;\n  }\n\n  button {\n      border-radius: 5px;\n  }\n\n@font-face {\n    font-family: jost;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    font-style: normal;\n}\n\nbody {\n    background: black;\n    font-family: jost, sans-serif;\n}\n\n\n\n#body-content {\n    color: white;\n    font-size: 20px;\n    font-family: jost, sans-serif;\n    min-height: 100vh;\n    max-height: 100vh;\n    width: 100vw;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    display: grid; \n    grid-template-rows: 1fr 10fr 0.6fr;\n}\n\n\nheader, footer {\n    display: grid;\n    align-items: end;\n    justify-content: center;\n    grid-auto-flow: column;\n}\n\nheader {\n    gap: 50px;\n    font-size: 20px;\n    font-weight: 900;\n}\n\nfooter {\n    font-size: 30px;\n}\n/* HOME TAB */\n\n.tab.home{\n    color: yellow;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    min-height: 100%;\n    letter-spacing: 1px;\n    text-shadow: 0 2px 2px yellow;\n    font-weight: 600;\n}\n\n.tab.home div:first-child {\n    font-size: 50px;\n    margin-top: 20px;\n    text-shadow: -550px 0 3px white, 550px 0 3px white;\n}\n.tab.home div:nth-child(2) {\n    width: 35%;\n    font-weight: 900;\n}\n.tab.home div:last-child {\n    margin-bottom: 15px;\n}\n\n/* MENU TAB */\n\n.tab.menu {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \n    \"menu menu\"\n    \"sides beverages\"\n    \"main lorem\"\n    \"menuName menuName\";\n    min-height: 100%;\n    align-items: center;\n    justify-items: center;\n    font-size: 24px;\n    color: red;\n    text-shadow: 0 0 5px wheat;\n    font-weight: 600;\n}\n\n.tab.menu div:first-child {\n    grid-area: menu;\n    color: yellow;\n    font-size: 45px;\n    position: absolute;\n    margin-bottom: 500px;\n    /* margin-top: 25px; */\n}\n.tab.menu .food1 {\n    grid-area: sides;\n}\n.tab.tab.menu .food2 {\n    grid-area: main;\n    color: yellow;\n    margin-left: 400px;\n}\n.tab.menu .food3 {\n    grid-area: beverages;\n}\n.tab.menu div:nth-child(5) {\n    grid-area: lorem;\n    color: yellow;\n    margin-right: 400px;\n}\n.tab.menu div:last-child {\n    grid-area: menuName;\n    font-size: 50px;\n    color: yellow;\n}\n\n/* CONTACT TAB */\n\n.tab.contact {\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    min-height: 100%;\n    font-size: 35px;\n}\n\n.tab.contact div {\n    width: 300px;\n    font-weight: 900;\n    text-shadow: 0 3px 5px whitesmoke;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;CAGC;AACD;IACI,sBAAsB;EACxB;EACA;IACE,SAAS;EACX;EACA;IACE,YAAY;EACd;EACA;IACE,gBAAgB;IAChB,mCAAmC;EACrC;EACA;IACE,cAAc;IACd,eAAe;EACjB;EACA;IACE,aAAa;EACf;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,kBAAkB;EACpB;EACA;MACI,gBAAgB;EACpB;;EAEA;MACI,kBAAkB;EACtB;;AAEF;IACI,iBAAiB;IACjB,4CAAgC;IAChC,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,6BAA6B;AACjC;;;;AAIA;IACI,YAAY;IACZ,eAAe;IACf,6BAA6B;IAC7B,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,mDAAiC;IACjC,aAAa;IACb,kCAAkC;AACtC;;;AAGA;IACI,aAAa;IACb,gBAAgB;IAChB,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;AACA,aAAa;;AAEb;IACI,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,gBAAgB;IAChB,mBAAmB;IACnB,6BAA6B;IAC7B,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kDAAkD;AACtD;AACA;IACI,UAAU;IACV,gBAAgB;AACpB;AACA;IACI,mBAAmB;AACvB;;AAEA,aAAa;;AAEb;IACI,aAAa;IACb,8BAA8B;IAC9B;;;;uBAImB;IACnB,gBAAgB;IAChB,mBAAmB;IACnB,qBAAqB;IACrB,eAAe;IACf,UAAU;IACV,0BAA0B;IAC1B,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,sBAAsB;AAC1B;AACA;IACI,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,aAAa;IACb,kBAAkB;AACtB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,eAAe;IACf,aAAa;AACjB;;AAEA,gBAAgB;;AAEhB;IACI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,iCAAiC;AACrC","sourcesContent":["/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  * {\n    margin: 0;\n  }\n  html, body {\n    height: 100%;\n  }\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n  }\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  input, button, textarea, select {\n    font: inherit;\n  }\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  #root, #__next {\n    isolation: isolate;\n  }\n  ul {\n      list-style: none;\n  }\n\n  button {\n      border-radius: 5px;\n  }\n\n@font-face {\n    font-family: jost;\n    src: url('./Jost-300-Light.otf');\n    font-style: normal;\n}\n\nbody {\n    background: black;\n    font-family: jost, sans-serif;\n}\n\n\n\n#body-content {\n    color: white;\n    font-size: 20px;\n    font-family: jost, sans-serif;\n    min-height: 100vh;\n    max-height: 100vh;\n    width: 100vw;\n    background: url(./restaurant.jpg);\n    display: grid; \n    grid-template-rows: 1fr 10fr 0.6fr;\n}\n\n\nheader, footer {\n    display: grid;\n    align-items: end;\n    justify-content: center;\n    grid-auto-flow: column;\n}\n\nheader {\n    gap: 50px;\n    font-size: 20px;\n    font-weight: 900;\n}\n\nfooter {\n    font-size: 30px;\n}\n/* HOME TAB */\n\n.tab.home{\n    color: yellow;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    min-height: 100%;\n    letter-spacing: 1px;\n    text-shadow: 0 2px 2px yellow;\n    font-weight: 600;\n}\n\n.tab.home div:first-child {\n    font-size: 50px;\n    margin-top: 20px;\n    text-shadow: -550px 0 3px white, 550px 0 3px white;\n}\n.tab.home div:nth-child(2) {\n    width: 35%;\n    font-weight: 900;\n}\n.tab.home div:last-child {\n    margin-bottom: 15px;\n}\n\n/* MENU TAB */\n\n.tab.menu {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \n    \"menu menu\"\n    \"sides beverages\"\n    \"main lorem\"\n    \"menuName menuName\";\n    min-height: 100%;\n    align-items: center;\n    justify-items: center;\n    font-size: 24px;\n    color: red;\n    text-shadow: 0 0 5px wheat;\n    font-weight: 600;\n}\n\n.tab.menu div:first-child {\n    grid-area: menu;\n    color: yellow;\n    font-size: 45px;\n    position: absolute;\n    margin-bottom: 500px;\n    /* margin-top: 25px; */\n}\n.tab.menu .food1 {\n    grid-area: sides;\n}\n.tab.tab.menu .food2 {\n    grid-area: main;\n    color: yellow;\n    margin-left: 400px;\n}\n.tab.menu .food3 {\n    grid-area: beverages;\n}\n.tab.menu div:nth-child(5) {\n    grid-area: lorem;\n    color: yellow;\n    margin-right: 400px;\n}\n.tab.menu div:last-child {\n    grid-area: menuName;\n    font-size: 50px;\n    color: yellow;\n}\n\n/* CONTACT TAB */\n\n.tab.contact {\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    min-height: 100%;\n    font-size: 35px;\n}\n\n.tab.contact div {\n    width: 300px;\n    font-weight: 900;\n    text-shadow: 0 3px 5px whitesmoke;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });


const contact = (function() {

    const contactButton = document.querySelector('.button2')
    const bodyContent = document.querySelector('#reso-content');

    function generate() {
    const body = document.createElement('div');
    body.classList.add('tab', 'contact')
    bodyContent.appendChild(body);

    let contactArray = [];
    for (let i = 0; i < 3; i++) {
        contactArray.push(document.createElement('div'));
        contactArray[i].classList.add('person', `${i}`);
        body.appendChild(contactArray[i]);
    }

    contactArray[0].textContent = 'Milliam Willingham mwilli@notemail.com 123-123-1234';
    contactArray[1].textContent = 'Mcintyre Laurenzi mlau@notemail.com 123-123-2345';
}

    contactButton.addEventListener('click', (e) => {
        bodyContent.innerText = '';
        generate();
    })
})();

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "load": () => (/* binding */ load)
/* harmony export */ });


const load =  (function() {
    const body = document.querySelector('body');
    const bodyContent = document.createElement('div');
    bodyContent.setAttribute('id', 'body-content');
    body.appendChild(bodyContent);
    
    const bodyContentArray = [document.createElement('header'), document.createElement('div'),
    document.createElement('footer')];
    const [header, resoContent, footer] = bodyContentArray;

    (function pageLoad(){
        for (const element of bodyContentArray) {
        bodyContent.appendChild(element);
        }
    })();
    resoContent.setAttribute('id', 'reso-content')

    footer.textContent = '';

    const buttonLabels = ['Home', 'Menu', 'Contact Us'];
    const headerButtonArray = [];
        for (let i = 0; i < 3; i++) {
            headerButtonArray.push(document.createElement('button'));
            headerButtonArray[i].classList.add(`button${i}`)
            headerButtonArray[i].innerText = buttonLabels[i];
            header.appendChild(headerButtonArray[i]);
        }
    const [homeButton, menuButton, contactButton] = headerButtonArray;

    function homeContent() {


    const body = document.createElement('div');
    body.classList.add('tab', 'home');
    resoContent.appendChild(body);

    const homeElementsArray = [];
    ((e) => {
        for (let i = 0; i < 4; i++) {
            homeElementsArray.push(document.createElement('div'));
        } 
    })();
    const resoHoursUnorderedList = document.createElement('ul');
    resoHoursUnorderedList.textContent = 'Hours of Operation';
    const [resoName, resoDescription, resoHours, resoAddress] = homeElementsArray;

    resoName.textContent = '"The Restaurant Place"';
    resoDescription.textContent = 
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eius aperiam officiis temporibus, consectetur quia nam inventore dolore assumenda ea minus eum? Quibusdam corrupti reiciendis fugiat a eum, aspernatur vero dolorum sit dolore necessitatibus nobis sapiente laboriosam, illo, reprehenderit explicabo possimus natus quae suscipit quia quod? Quae autem eius nemo et vitae quisquam! Ducimus nostrum ipsam eos expedita corporis eius. Sed sint voluptatibus placeat odio magnam excepturi voluptas veritatis impedit.'    

    const resoHoursArray = ['Sunday: 8am - 8pm', 'Monday: 6am - 6pm', 'Tuesday: 6am - 6pm', 'Wednesday: 6am - 6pm',
                      'Thursday: 6am - 10pm', 'Friday: 6am - 10pm', 'Saturday: 8am - 10pm'];

    let resoHoursList;
    ((e) => {
        for (let i = 0; i < 8; i++) {
            resoHoursList = document.createElement('li');
            resoHoursList.textContent = resoHoursArray[i];
            resoHoursUnorderedList.appendChild(resoHoursList);
        } 
    })();
    resoHours.appendChild(resoHoursUnorderedList);
    resoAddress.textContent = '123 Notareal Ahdres, Snotreal, Defknotreel';

    ((e) => {
        for (let i = 0; i < 4; i++) {
        body.appendChild(homeElementsArray[i])
        }
    })();
}
homeContent();

homeButton.addEventListener('click', (e) => {
    resoContent.innerText = '';
    homeContent();
})

})();

 

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });

const menu = (function() {


const menuButton = document.querySelector('.button1')
const bodyContent = document.querySelector('#reso-content');

function generate() {

    const body = document.createElement('div');
    body.classList.add('tab', 'menu');
    bodyContent.appendChild(body);

    const menuElements = [];
    for (let i = 0; i < 6; i++) {
        menuElements.push(document.createElement('div'));

        if(i > 0 && i < 4) {
            menuElements[i].classList.add(`food${i}`);    
        }
        body.appendChild(menuElements[i]);
    };
    let [menuMenu, menuSides, menuMain, menuBev, menuFiller, menuResoName] = menuElements;

    const foodList = (function() {

        function menuCreator(appendTo, menuItemName,...food) {
        const foodList = document.createElement('ul');
        foodList.textContent = menuItemName;
        const foodItems = [];
        for (let i = 0; i < 3; i++) {
            foodItems.push(document.createElement('li'));
            foodList.appendChild(foodItems[i]);
            foodItems[i].textContent = food[i];
        }
        appendTo.appendChild(foodList);
    }

        return {
            menuCreator,
        }
    })();

    let menuItems = {
        sides: foodList.menuCreator(menuSides, 'Sides', '$8 Yummy Eggs', '$12 Restaurant Wings', '$10 FeelsGood Potatoes'),
        mains: foodList.menuCreator(menuMain, 'Mains', '$22 Trust Me Spaghetti', 
        '$45 Over the TOP Steak', '$100 This Is The One Platter'),
        beverages: foodList.menuCreator(menuBev, 'Beverages', '$6 "Tastes Like Water Lemonade"', '$4 Sodie Pop', '$5 Choccy Milk'),
        lorems: foodList.menuCreator(menuFiller, 'Lorems', '$5 Lorem ipsum dolor sit amet.', '$32 Lorem Can Cook Seafood', '$13 Randomizer'),
    }; 

    menuMenu.textContent = 'The Food We Cook'

    menuResoName.textContent = 'The Restaurant Place'
}

    menuButton.addEventListener('click', (e) => {
        bodyContent.innerText = '';
        generate();
    })
})();

/***/ }),

/***/ "./src/Jost-300-Light.otf":
/*!********************************!*\
  !*** ./src/Jost-300-Light.otf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3d5489e426f2a36a8fd.otf";

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c68428f33d37af98d25.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg");
/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load.js */ "./src/load.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnFCO0FBQ2U7QUFDTDtBQUNBO0FBQ00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Kb3N0LTMwMC1MaWdodC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL3Jlc3RhdXJhbnQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuICBKb3NoJ3MgQ3VzdG9tIENTUyBSZXNldFxcbiAgaHR0cHM6Ly93d3cuam9zaHdjb21lYXUuY29tL2Nzcy9jdXN0b20tY3NzLXJlc2V0L1xcbiovXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICAqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbiAgaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG4gIGJvZHkge1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIH1cXG4gIGltZywgcGljdHVyZSwgdmlkZW8sIGNhbnZhcywgc3ZnIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG4gIGlucHV0LCBidXR0b24sIHRleHRhcmVhLCBzZWxlY3Qge1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgfVxcbiAgcCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB9XFxuICAjcm9vdCwgI19fbmV4dCB7XFxuICAgIGlzb2xhdGlvbjogaXNvbGF0ZTtcXG4gIH1cXG4gIHVsIHtcXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgfVxcblxcbiAgYnV0dG9uIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBqb3N0O1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBmb250LWZhbWlseTogam9zdCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuXFxuI2JvZHktY29udGVudCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogam9zdCwgc2Fucy1zZXJpZjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7IFxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyIDAuNmZyO1xcbn1cXG5cXG5cXG5oZWFkZXIsIGZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG4vKiBIT01FIFRBQiAqL1xcblxcbi50YWIuaG9tZXtcXG4gICAgY29sb3I6IHllbGxvdztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggMnB4IHllbGxvdztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnRhYi5ob21lIGRpdjpmaXJzdC1jaGlsZCB7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgdGV4dC1zaGFkb3c6IC01NTBweCAwIDNweCB3aGl0ZSwgNTUwcHggMCAzcHggd2hpdGU7XFxufVxcbi50YWIuaG9tZSBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gICAgd2lkdGg6IDM1JTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuLnRhYi5ob21lIGRpdjpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLyogTUVOVSBUQUIgKi9cXG5cXG4udGFiLm1lbnUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwibWVudSBtZW51XFxcIlxcbiAgICBcXFwic2lkZXMgYmV2ZXJhZ2VzXFxcIlxcbiAgICBcXFwibWFpbiBsb3JlbVxcXCJcXG4gICAgXFxcIm1lbnVOYW1lIG1lbnVOYW1lXFxcIjtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHdoZWF0O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udGFiLm1lbnUgZGl2OmZpcnN0LWNoaWxkIHtcXG4gICAgZ3JpZC1hcmVhOiBtZW51O1xcbiAgICBjb2xvcjogeWVsbG93O1xcbiAgICBmb250LXNpemU6IDQ1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTAwcHg7XFxuICAgIC8qIG1hcmdpbi10b3A6IDI1cHg7ICovXFxufVxcbi50YWIubWVudSAuZm9vZDEge1xcbiAgICBncmlkLWFyZWE6IHNpZGVzO1xcbn1cXG4udGFiLnRhYi5tZW51IC5mb29kMiB7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgY29sb3I6IHllbGxvdztcXG4gICAgbWFyZ2luLWxlZnQ6IDQwMHB4O1xcbn1cXG4udGFiLm1lbnUgLmZvb2QzIHtcXG4gICAgZ3JpZC1hcmVhOiBiZXZlcmFnZXM7XFxufVxcbi50YWIubWVudSBkaXY6bnRoLWNoaWxkKDUpIHtcXG4gICAgZ3JpZC1hcmVhOiBsb3JlbTtcXG4gICAgY29sb3I6IHllbGxvdztcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MDBweDtcXG59XFxuLnRhYi5tZW51IGRpdjpsYXN0LWNoaWxkIHtcXG4gICAgZ3JpZC1hcmVhOiBtZW51TmFtZTtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBjb2xvcjogeWVsbG93O1xcbn1cXG5cXG4vKiBDT05UQUNUIFRBQiAqL1xcblxcbi50YWIuY29udGFjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbn1cXG5cXG4udGFiLmNvbnRhY3QgZGl2IHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAzcHggNXB4IHdoaXRlc21va2U7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDO0FBQ0Q7SUFDSSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO01BQ0ksZ0JBQWdCO0VBQ3BCOztFQUVBO01BQ0ksa0JBQWtCO0VBQ3RCOztBQUVGO0lBQ0ksaUJBQWlCO0lBQ2pCLDRDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsNkJBQTZCO0FBQ2pDOzs7O0FBSUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtREFBaUM7SUFDakMsYUFBYTtJQUNiLGtDQUFrQztBQUN0Qzs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQSxhQUFhOztBQUViO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0RBQWtEO0FBQ3REO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUEsYUFBYTs7QUFFYjtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUI7Ozs7dUJBSW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUEsZ0JBQWdCOztBQUVoQjtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQ0FBaUM7QUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypcXG4gIEpvc2gncyBDdXN0b20gQ1NTIFJlc2V0XFxuICBodHRwczovL3d3dy5qb3Nod2NvbWVhdS5jb20vY3NzL2N1c3RvbS1jc3MtcmVzZXQvXFxuKi9cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG4gICoge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuICBodG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbiAgYm9keSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgfVxcbiAgaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEsIHNlbGVjdCB7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICB9XFxuICBwLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIH1cXG4gICNyb290LCAjX19uZXh0IHtcXG4gICAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbiAgfVxcbiAgdWwge1xcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB9XFxuXFxuICBidXR0b24ge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IGpvc3Q7XFxuICAgIHNyYzogdXJsKCcuL0pvc3QtMzAwLUxpZ2h0Lm90ZicpO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgZm9udC1mYW1pbHk6IGpvc3QsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcblxcbiNib2R5LWNvbnRlbnQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6IGpvc3QsIHNhbnMtc2VyaWY7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9yZXN0YXVyYW50LmpwZyk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7IFxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyIDAuNmZyO1xcbn1cXG5cXG5cXG5oZWFkZXIsIGZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG4vKiBIT01FIFRBQiAqL1xcblxcbi50YWIuaG9tZXtcXG4gICAgY29sb3I6IHllbGxvdztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggMnB4IHllbGxvdztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnRhYi5ob21lIGRpdjpmaXJzdC1jaGlsZCB7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgdGV4dC1zaGFkb3c6IC01NTBweCAwIDNweCB3aGl0ZSwgNTUwcHggMCAzcHggd2hpdGU7XFxufVxcbi50YWIuaG9tZSBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gICAgd2lkdGg6IDM1JTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuLnRhYi5ob21lIGRpdjpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLyogTUVOVSBUQUIgKi9cXG5cXG4udGFiLm1lbnUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwibWVudSBtZW51XFxcIlxcbiAgICBcXFwic2lkZXMgYmV2ZXJhZ2VzXFxcIlxcbiAgICBcXFwibWFpbiBsb3JlbVxcXCJcXG4gICAgXFxcIm1lbnVOYW1lIG1lbnVOYW1lXFxcIjtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHdoZWF0O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udGFiLm1lbnUgZGl2OmZpcnN0LWNoaWxkIHtcXG4gICAgZ3JpZC1hcmVhOiBtZW51O1xcbiAgICBjb2xvcjogeWVsbG93O1xcbiAgICBmb250LXNpemU6IDQ1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTAwcHg7XFxuICAgIC8qIG1hcmdpbi10b3A6IDI1cHg7ICovXFxufVxcbi50YWIubWVudSAuZm9vZDEge1xcbiAgICBncmlkLWFyZWE6IHNpZGVzO1xcbn1cXG4udGFiLnRhYi5tZW51IC5mb29kMiB7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgY29sb3I6IHllbGxvdztcXG4gICAgbWFyZ2luLWxlZnQ6IDQwMHB4O1xcbn1cXG4udGFiLm1lbnUgLmZvb2QzIHtcXG4gICAgZ3JpZC1hcmVhOiBiZXZlcmFnZXM7XFxufVxcbi50YWIubWVudSBkaXY6bnRoLWNoaWxkKDUpIHtcXG4gICAgZ3JpZC1hcmVhOiBsb3JlbTtcXG4gICAgY29sb3I6IHllbGxvdztcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MDBweDtcXG59XFxuLnRhYi5tZW51IGRpdjpsYXN0LWNoaWxkIHtcXG4gICAgZ3JpZC1hcmVhOiBtZW51TmFtZTtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBjb2xvcjogeWVsbG93O1xcbn1cXG5cXG4vKiBDT05UQUNUIFRBQiAqL1xcblxcbi50YWIuY29udGFjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbn1cXG5cXG4udGFiLmNvbnRhY3QgZGl2IHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAzcHggNXB4IHdoaXRlc21va2U7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcblxuZXhwb3J0IGNvbnN0IGNvbnRhY3QgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbjInKVxuICAgIGNvbnN0IGJvZHlDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc28tY29udGVudCcpO1xuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgndGFiJywgJ2NvbnRhY3QnKVxuICAgIGJvZHlDb250ZW50LmFwcGVuZENoaWxkKGJvZHkpO1xuXG4gICAgbGV0IGNvbnRhY3RBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGNvbnRhY3RBcnJheS5wdXNoKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgY29udGFjdEFycmF5W2ldLmNsYXNzTGlzdC5hZGQoJ3BlcnNvbicsIGAke2l9YCk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFjdEFycmF5W2ldKTtcbiAgICB9XG5cbiAgICBjb250YWN0QXJyYXlbMF0udGV4dENvbnRlbnQgPSAnTWlsbGlhbSBXaWxsaW5naGFtIG13aWxsaUBub3RlbWFpbC5jb20gMTIzLTEyMy0xMjM0JztcbiAgICBjb250YWN0QXJyYXlbMV0udGV4dENvbnRlbnQgPSAnTWNpbnR5cmUgTGF1cmVuemkgbWxhdUBub3RlbWFpbC5jb20gMTIzLTEyMy0yMzQ1Jztcbn1cblxuICAgIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBib2R5Q29udGVudC5pbm5lclRleHQgPSAnJztcbiAgICAgICAgZ2VuZXJhdGUoKTtcbiAgICB9KVxufSkoKTsiLCJcblxuZXhwb3J0IGNvbnN0IGxvYWQgPSAgKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgYm9keUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2R5Q29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JvZHktY29udGVudCcpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYm9keUNvbnRlbnQpO1xuICAgIFxuICAgIGNvbnN0IGJvZHlDb250ZW50QXJyYXkgPSBbZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyksIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXTtcbiAgICBjb25zdCBbaGVhZGVyLCByZXNvQ29udGVudCwgZm9vdGVyXSA9IGJvZHlDb250ZW50QXJyYXk7XG5cbiAgICAoZnVuY3Rpb24gcGFnZUxvYWQoKXtcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGJvZHlDb250ZW50QXJyYXkpIHtcbiAgICAgICAgYm9keUNvbnRlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9KSgpO1xuICAgIHJlc29Db250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAncmVzby1jb250ZW50JylcblxuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgY29uc3QgYnV0dG9uTGFiZWxzID0gWydIb21lJywgJ01lbnUnLCAnQ29udGFjdCBVcyddO1xuICAgIGNvbnN0IGhlYWRlckJ1dHRvbkFycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBoZWFkZXJCdXR0b25BcnJheS5wdXNoKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKTtcbiAgICAgICAgICAgIGhlYWRlckJ1dHRvbkFycmF5W2ldLmNsYXNzTGlzdC5hZGQoYGJ1dHRvbiR7aX1gKVxuICAgICAgICAgICAgaGVhZGVyQnV0dG9uQXJyYXlbaV0uaW5uZXJUZXh0ID0gYnV0dG9uTGFiZWxzW2ldO1xuICAgICAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckJ1dHRvbkFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgIGNvbnN0IFtob21lQnV0dG9uLCBtZW51QnV0dG9uLCBjb250YWN0QnV0dG9uXSA9IGhlYWRlckJ1dHRvbkFycmF5O1xuXG4gICAgZnVuY3Rpb24gaG9tZUNvbnRlbnQoKSB7XG5cblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ3RhYicsICdob21lJyk7XG4gICAgcmVzb0NvbnRlbnQuYXBwZW5kQ2hpbGQoYm9keSk7XG5cbiAgICBjb25zdCBob21lRWxlbWVudHNBcnJheSA9IFtdO1xuICAgICgoZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgaG9tZUVsZW1lbnRzQXJyYXkucHVzaChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIH0gXG4gICAgfSkoKTtcbiAgICBjb25zdCByZXNvSG91cnNVbm9yZGVyZWRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICByZXNvSG91cnNVbm9yZGVyZWRMaXN0LnRleHRDb250ZW50ID0gJ0hvdXJzIG9mIE9wZXJhdGlvbic7XG4gICAgY29uc3QgW3Jlc29OYW1lLCByZXNvRGVzY3JpcHRpb24sIHJlc29Ib3VycywgcmVzb0FkZHJlc3NdID0gaG9tZUVsZW1lbnRzQXJyYXk7XG5cbiAgICByZXNvTmFtZS50ZXh0Q29udGVudCA9ICdcIlRoZSBSZXN0YXVyYW50IFBsYWNlXCInO1xuICAgIHJlc29EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFxuJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFZlbmlhbSwgZWl1cyBhcGVyaWFtIG9mZmljaWlzIHRlbXBvcmlidXMsIGNvbnNlY3RldHVyIHF1aWEgbmFtIGludmVudG9yZSBkb2xvcmUgYXNzdW1lbmRhIGVhIG1pbnVzIGV1bT8gUXVpYnVzZGFtIGNvcnJ1cHRpIHJlaWNpZW5kaXMgZnVnaWF0IGEgZXVtLCBhc3Blcm5hdHVyIHZlcm8gZG9sb3J1bSBzaXQgZG9sb3JlIG5lY2Vzc2l0YXRpYnVzIG5vYmlzIHNhcGllbnRlIGxhYm9yaW9zYW0sIGlsbG8sIHJlcHJlaGVuZGVyaXQgZXhwbGljYWJvIHBvc3NpbXVzIG5hdHVzIHF1YWUgc3VzY2lwaXQgcXVpYSBxdW9kPyBRdWFlIGF1dGVtIGVpdXMgbmVtbyBldCB2aXRhZSBxdWlzcXVhbSEgRHVjaW11cyBub3N0cnVtIGlwc2FtIGVvcyBleHBlZGl0YSBjb3Jwb3JpcyBlaXVzLiBTZWQgc2ludCB2b2x1cHRhdGlidXMgcGxhY2VhdCBvZGlvIG1hZ25hbSBleGNlcHR1cmkgdm9sdXB0YXMgdmVyaXRhdGlzIGltcGVkaXQuJyAgICBcblxuICAgIGNvbnN0IHJlc29Ib3Vyc0FycmF5ID0gWydTdW5kYXk6IDhhbSAtIDhwbScsICdNb25kYXk6IDZhbSAtIDZwbScsICdUdWVzZGF5OiA2YW0gLSA2cG0nLCAnV2VkbmVzZGF5OiA2YW0gLSA2cG0nLFxuICAgICAgICAgICAgICAgICAgICAgICdUaHVyc2RheTogNmFtIC0gMTBwbScsICdGcmlkYXk6IDZhbSAtIDEwcG0nLCAnU2F0dXJkYXk6IDhhbSAtIDEwcG0nXTtcblxuICAgIGxldCByZXNvSG91cnNMaXN0O1xuICAgICgoZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgcmVzb0hvdXJzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICByZXNvSG91cnNMaXN0LnRleHRDb250ZW50ID0gcmVzb0hvdXJzQXJyYXlbaV07XG4gICAgICAgICAgICByZXNvSG91cnNVbm9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKHJlc29Ib3Vyc0xpc3QpO1xuICAgICAgICB9IFxuICAgIH0pKCk7XG4gICAgcmVzb0hvdXJzLmFwcGVuZENoaWxkKHJlc29Ib3Vyc1Vub3JkZXJlZExpc3QpO1xuICAgIHJlc29BZGRyZXNzLnRleHRDb250ZW50ID0gJzEyMyBOb3RhcmVhbCBBaGRyZXMsIFNub3RyZWFsLCBEZWZrbm90cmVlbCc7XG5cbiAgICAoKGUpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChob21lRWxlbWVudHNBcnJheVtpXSlcbiAgICAgICAgfVxuICAgIH0pKCk7XG59XG5ob21lQ29udGVudCgpO1xuXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICByZXNvQ29udGVudC5pbm5lclRleHQgPSAnJztcbiAgICBob21lQ29udGVudCgpO1xufSlcblxufSkoKTtcblxuICIsIlxuZXhwb3J0IGNvbnN0IG1lbnUgPSAoZnVuY3Rpb24oKSB7XG5cblxuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24xJylcbmNvbnN0IGJvZHlDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc28tY29udGVudCcpO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZSgpIHtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ3RhYicsICdtZW51Jyk7XG4gICAgYm9keUNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9keSk7XG5cbiAgICBjb25zdCBtZW51RWxlbWVudHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICBtZW51RWxlbWVudHMucHVzaChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG5cbiAgICAgICAgaWYoaSA+IDAgJiYgaSA8IDQpIHtcbiAgICAgICAgICAgIG1lbnVFbGVtZW50c1tpXS5jbGFzc0xpc3QuYWRkKGBmb29kJHtpfWApOyAgICBcbiAgICAgICAgfVxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1lbnVFbGVtZW50c1tpXSk7XG4gICAgfTtcbiAgICBsZXQgW21lbnVNZW51LCBtZW51U2lkZXMsIG1lbnVNYWluLCBtZW51QmV2LCBtZW51RmlsbGVyLCBtZW51UmVzb05hbWVdID0gbWVudUVsZW1lbnRzO1xuXG4gICAgY29uc3QgZm9vZExpc3QgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgZnVuY3Rpb24gbWVudUNyZWF0b3IoYXBwZW5kVG8sIG1lbnVJdGVtTmFtZSwuLi5mb29kKSB7XG4gICAgICAgIGNvbnN0IGZvb2RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgZm9vZExpc3QudGV4dENvbnRlbnQgPSBtZW51SXRlbU5hbWU7XG4gICAgICAgIGNvbnN0IGZvb2RJdGVtcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgZm9vZEl0ZW1zLnB1c2goZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSk7XG4gICAgICAgICAgICBmb29kTGlzdC5hcHBlbmRDaGlsZChmb29kSXRlbXNbaV0pO1xuICAgICAgICAgICAgZm9vZEl0ZW1zW2ldLnRleHRDb250ZW50ID0gZm9vZFtpXTtcbiAgICAgICAgfVxuICAgICAgICBhcHBlbmRUby5hcHBlbmRDaGlsZChmb29kTGlzdCk7XG4gICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZW51Q3JlYXRvcixcbiAgICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICBsZXQgbWVudUl0ZW1zID0ge1xuICAgICAgICBzaWRlczogZm9vZExpc3QubWVudUNyZWF0b3IobWVudVNpZGVzLCAnU2lkZXMnLCAnJDggWXVtbXkgRWdncycsICckMTIgUmVzdGF1cmFudCBXaW5ncycsICckMTAgRmVlbHNHb29kIFBvdGF0b2VzJyksXG4gICAgICAgIG1haW5zOiBmb29kTGlzdC5tZW51Q3JlYXRvcihtZW51TWFpbiwgJ01haW5zJywgJyQyMiBUcnVzdCBNZSBTcGFnaGV0dGknLCBcbiAgICAgICAgJyQ0NSBPdmVyIHRoZSBUT1AgU3RlYWsnLCAnJDEwMCBUaGlzIElzIFRoZSBPbmUgUGxhdHRlcicpLFxuICAgICAgICBiZXZlcmFnZXM6IGZvb2RMaXN0Lm1lbnVDcmVhdG9yKG1lbnVCZXYsICdCZXZlcmFnZXMnLCAnJDYgXCJUYXN0ZXMgTGlrZSBXYXRlciBMZW1vbmFkZVwiJywgJyQ0IFNvZGllIFBvcCcsICckNSBDaG9jY3kgTWlsaycpLFxuICAgICAgICBsb3JlbXM6IGZvb2RMaXN0Lm1lbnVDcmVhdG9yKG1lbnVGaWxsZXIsICdMb3JlbXMnLCAnJDUgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQuJywgJyQzMiBMb3JlbSBDYW4gQ29vayBTZWFmb29kJywgJyQxMyBSYW5kb21pemVyJyksXG4gICAgfTsgXG5cbiAgICBtZW51TWVudS50ZXh0Q29udGVudCA9ICdUaGUgRm9vZCBXZSBDb29rJ1xuXG4gICAgbWVudVJlc29OYW1lLnRleHRDb250ZW50ID0gJ1RoZSBSZXN0YXVyYW50IFBsYWNlJ1xufVxuXG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGJvZHlDb250ZW50LmlubmVyVGV4dCA9ICcnO1xuICAgICAgICBnZW5lcmF0ZSgpO1xuICAgIH0pXG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9yZXN0YXVyYW50LmpwZyc7XG5pbXBvcnQge2xvYWR9IGZyb20gJy4vbG9hZC5qcyc7XG5pbXBvcnQge21lbnV9IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQge2NvbnRhY3R9IGZyb20gJy4vY29udGFjdC5qcyc7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9