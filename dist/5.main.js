webpackJsonp([5],{

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(44),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 34:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            columns: [{
                title: ' ',
                key: 'name',
                align: 'center'
            }, {
                title: '(D/H)<sub>Ⅰ</sub> (mg/L)',
                key: 'd1',
                sortable: true,
                align: 'right'
            }, {
                title: '(D/H)<sub>H</sub> (mg/L)',
                key: 'd2',
                sortable: true,
                align: 'right'
            }, {
                title: 'R',
                key: 'd3',
                sortable: true,
                align: 'right'
            }],
            data: [{
                name: '甘蔗糖发酵乙醇',
                d1: 110.78,
                d2: 118.45,
                d3: 2.1385
            }, {
                name: '甜菜糖发酵乙醇',
                d1: 91.23,
                d2: 117.52,
                d3: 2.5763
            }]
        };
    }
});

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Card', [_c('div', {
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-pulse"
    }
  }), _vm._v(" 不同糖来源\n        ")], 1), _vm._v(" "), _c('Table', {
    attrs: {
      "border": "",
      "stripe": "",
      "highlight-row": "",
      "size": "small",
      "columns": _vm.columns,
      "data": _vm.data
    }
  })], 1), _vm._v(" "), _c('BackTop')], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=5.main.js.map