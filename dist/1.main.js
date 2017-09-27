webpackJsonp([1],{

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(50)
}
var Component = __webpack_require__(1)(
  /* script */
  null,
  /* template */
  __webpack_require__(47),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "#index a{color:#fff}#index h5{margin-top:5px;color:hsla(0,0%,100%,.8)}#index .ivu-card{margin-bottom:20px}#index .ivu-icon{transition:all .3s linear;position:absolute;top:5px;right:0;z-index:0;font-weight:700;font-size:40px;color:rgba(0,0,0,.25)}#index .ivu-card:hover .ivu-icon{font-size:60px}", ""]);

// exports


/***/ }),

/***/ 47:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pro-content",
    staticStyle: {
      "padding": "20px"
    },
    attrs: {
      "id": "index"
    }
  }, [_c('Row', {
    attrs: {
      "gutter": 24
    }
  }, [_c('Col', {
    attrs: {
      "xs": 24,
      "sm": 8,
      "md": 6,
      "lg": 5
    }
  }, [_c('Card', {
    staticStyle: {
      "background-color": "#19be6b"
    }
  }, [_c('router-link', {
    staticClass: "ivu-menu-item",
    attrs: {
      "to": "/isotope/water"
    }
  }, [_c('h1', [_vm._v("酿造用水")]), _vm._v(" "), _c('Icon', {
    attrs: {
      "type": "ios-flask-outline"
    }
  })], 1), _vm._v(" "), _c('h5', [_vm._v("简要说明")])], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "xs": 24,
      "sm": 8,
      "md": 6,
      "lg": 5
    }
  }, [_c('Card', {
    staticStyle: {
      "background-color": "#ff9900"
    }
  }, [_c('router-link', {
    staticClass: "ivu-menu-item",
    attrs: {
      "to": "/isotope/type"
    }
  }, [_c('h1', [_vm._v("品种数据")]), _vm._v(" "), _c('Icon', {
    attrs: {
      "type": "ios-pricetags-outline"
    }
  })], 1), _vm._v(" "), _c('h5', [_vm._v("简要说明")])], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "xs": 24,
      "sm": 8,
      "md": 6,
      "lg": 5
    }
  }, [_c('Card', {
    staticStyle: {
      "background-color": "#2d8cf0"
    }
  }, [_c('router-link', {
    staticClass: "ivu-menu-item",
    attrs: {
      "to": "/isotope/year"
    }
  }, [_c('h1', [_vm._v("年份数据")]), _vm._v(" "), _c('Icon', {
    attrs: {
      "type": "clock"
    }
  })], 1), _vm._v(" "), _c('h5', [_vm._v("简要说明")])], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "xs": 24,
      "sm": 8,
      "md": 6,
      "lg": 5
    }
  }, [_c('Card', {
    staticStyle: {
      "background-color": "#ed3f14"
    }
  }, [_c('router-link', {
    staticClass: "ivu-menu-item",
    attrs: {
      "to": "/isotope/district"
    }
  }, [_c('h1', [_vm._v("产区数据")]), _vm._v(" "), _c('Icon', {
    attrs: {
      "type": "map"
    }
  })], 1), _vm._v(" "), _c('h5', [_vm._v("简要说明")])], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "xs": 24,
      "sm": 8,
      "md": 6,
      "lg": 4
    }
  }, [_c('Card', {
    staticStyle: {
      "background-color": "#00c0ef"
    }
  }, [_c('router-link', {
    staticClass: "ivu-menu-item",
    attrs: {
      "to": "/isotope/sugar"
    }
  }, [_c('h1', [_vm._v("不同糖源")]), _vm._v(" "), _c('Icon', {
    attrs: {
      "type": "ios-pulse"
    }
  })], 1), _vm._v(" "), _c('h5', [_vm._v("简要说明")])], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("765430f6", content, true);

/***/ })

});
//# sourceMappingURL=1.main.js.map