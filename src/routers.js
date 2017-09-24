const routers = [ {
    path: '/',
    meta: { title: "首页" },
    component: resolve => require(['./views/index.vue'], resolve)
}, {
    path: '/isotope',
    meta: { title: "同位素" },
    component: resolve => require(['./views/isotope.vue'], resolve),
    children: [{
        path: '',
        meta: { title: "酿造用水" },
        redirect: 'water'
    }, {
        path: 'water',
        meta: { title: "酿造用水" },
        component: resolve => require(['./pages/water.vue'], resolve)
    }, {
        path: 'type',
        meta: { title: "品种数据" },
        component: resolve => require(['./pages/type.vue'], resolve)
    }, {
        path: 'year',
        meta: { title: "年份数据" },
        component: resolve => require(['./pages/year.vue'], resolve)
    }, {
        path: 'district',
        meta: { title: "产区数据" },
        component: resolve => require(['./pages/district.vue'], resolve)
    }, {
        path: 'sugar',
        meta: { title: "不同糖来源" },
        component: resolve => require(['./pages/sugar.vue'], resolve)
    }]
}];

export default routers;