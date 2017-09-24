import Vue from 'vue'
import VueRouter from 'vue-router'
import iView from 'iview'
import App from './app.vue'
import Routers from './routers'
import './main.less'

Vue.use(VueRouter)
Vue.use(iView)

// === Routers ===================================
const router = new VueRouter({
    linkActiveClass: 'ivu-menu-item-active',
    routes: Routers
});

router.afterEach( route => {
    let title = route.meta.title;
    title = title ? title + " - " + App.title : App.title;
    window.document.title = title;
    window.scrollTo(0, 0);
});

// === Vue ===================================
new Vue({
    el: '#app',
    router: router,
    // store: store,
    render: h => h(App)
});


