webpackJsonp([0],{

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(49)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(43),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-147d71a8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            columns1: [{
                title: '样品原号',
                key: 'name',
                sortable: true
            }, {
                title: '岩石/矿物',
                key: 'type',
                sortable: true
            }, {
                title: 'δ<sup>18</sup>O<sub>V-SMOW</sub>(‰)',
                key: 'norm',
                sortable: true
            }],
            data1: [{
                name: '甘肃',
                type: '水样',
                norm: -11.1
            }, {
                name: '宁夏',
                type: '水样',
                norm: -10.1
            }, {
                name: '北疆',
                type: '水样',
                norm: -10.3
            }, {
                name: '怀来',
                type: '水样',
                norm: -9.5
            }, {
                name: '烟台',
                type: '水样',
                norm: -8.6
            }, {
                name: '昌黎',
                type: '水样',
                norm: -8.4
            }],
            columns2: [{
                title: '样品',
                key: 'name',
                sortable: true
            }, {
                title: '岩石/矿物',
                key: 'type',
                sortable: true
            }, {
                title: 'δ<sup>18</sup>O<sub>V-SMOW</sub>(‰)',
                key: 'norm',
                sortable: true
            }],
            data2: [{
                name: '纯净水',
                type: '水样',
                norm: -8.129
            }, {
                name: '全汁白葡萄酒',
                type: '水样',
                norm: -1.657
            }, {
                name: '加20%水葡萄酒',
                type: '水样',
                norm: -2.936
            }, {
                name: '加40%水葡萄酒',
                type: '水样',
                norm: -4.936
            }, {
                name: '加50%水葡萄酒',
                type: '水样',
                norm: -6.885
            }, {
                name: '加20%水再补平糖发酵葡萄酒',
                type: '水样',
                norm: -4.383
            }, {
                name: '加40%水再补平糖发酵葡萄酒',
                type: '水样',
                norm: -6.8374
            }, {
                name: '加50%水再补平糖发酵葡萄酒',
                type: '水样',
                norm: -7.602
            }]
        };
    },
    created() {
        console.log("feedback-created.");
    }
});

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".ivu-table-wrapper[data-v-147d71a8]{margin-bottom:30px}", ""]);

// exports


/***/ }),

/***/ 43:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Card', [_c('div', {
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-flask-outline"
    }
  }), _vm._v(" 酿造用水\n        ")], 1), _vm._v(" "), _c('Row', {
    attrs: {
      "gutter": 16
    }
  }, [_c('Col', {
    attrs: {
      "sm": 24,
      "md": 12
    }
  }, [_c('h3', [_vm._v("不同产区酿造用水的氧同位素")]), _vm._v(" "), _c('Table', {
    attrs: {
      "border": "",
      "stripe": "",
      "highlight-row": "",
      "size": "small",
      "columns": _vm.columns1,
      "data": _vm.data1
    }
  })], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "sm": 24,
      "md": 12
    }
  }, [_c('h3', [_vm._v("不同葡萄酒中水的氧同位素")]), _vm._v(" "), _c('Table', {
    attrs: {
      "border": "",
      "stripe": "",
      "highlight-row": "",
      "size": "small",
      "columns": _vm.columns2,
      "data": _vm.data2
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('BackTop')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("ca26dbfe", content, true);

/***/ })

});
//# sourceMappingURL=0.main.js.map