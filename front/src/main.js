// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueBus from 'vue-bus'
import VueRouter from 'vue-router'
import router from './router'
import store from './store/'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'style/reset.css'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueBus);

/* eslint-disable no-new */

router.beforeEach(({meta, path}, from, next) => {
    var { auth = true } = meta
    // console.log(JSON.stringify(meta));
    // console.warn(JSON.stringify(path));
    var isLogin;
    if(store.state.user.user){
      isLogin = true; //true用户已登录， false用户未登录
    } else {
      isLogin = false;
    }

    if (auth && !isLogin && path !== '/admin/login' && path !== '/' && !(/^\/book\/.*$/).test(path)) {
        return next({ path: '/admin/login' })
    }

    next()
})


new Vue({
  el: '#app',
  router,
})
