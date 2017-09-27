webpackJsonp([2],{

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(48)
}
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(42),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-13b466b0",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".ivu-menu-item[data-v-13b466b0]{border-bottom:1px dashed #ddd}.pro-sidebar[data-v-13b466b0]{border-top:1px dashed #ddd}", ""]);

// exports


/***/ }),

/***/ 42:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pro-content"
  }, [_c('aside', {
    staticClass: "pro-sidebar"
  }, [_c('Menu', {
    attrs: {
      "width": "auto",
      "theme": "light"
    }
  }, [_c('router-link', {
    staticClass: "ivu-menu-item",
    attrs: {
      "tag": "li",
      "to": "/isotope/water"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-flask-outline"
    }
  }), _vm._v(" 酿造用水\n            ")], 1), _vm._v(" "), _c('router-link', {
    staticClass: "ivu-menu-item",
    attrs: {
      "tag": "li",
      "to": "/isotope/type"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-pricetags-outline"
    }
  }), _vm._v(" 品种\n            ")], 1), _vm._v(" "), _c('router-link', {
    staticClass: "ivu-menu-item",
    attrs: {
      "tag": "li",
      "to": "/isotope/year"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "clock"
    }
  }), _vm._v(" 年份\n            ")], 1), _vm._v(" "), _c('router-link', {
    staticClass: "ivu-menu-item",
    attrs: {
      "tag": "li",
      "to": "/isotope/district"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "map"
    }
  }), _vm._v(" 产区\n            ")], 1), _vm._v(" "), _c('router-link', {
    staticClass: "ivu-menu-item",
    attrs: {
      "tag": "li",
      "to": "/isotope/sugar"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-pulse"
    }
  }), _vm._v(" 不同糖来源\n            ")], 1)], 1)], 1), _vm._v(" "), _c('article', {
    staticClass: "pro-article"
  }, [_c('router-view')], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("7b5988a4", content, true);

/***/ })

});
//# sourceMappingURL=2.main.js.map