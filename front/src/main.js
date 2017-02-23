// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueBus from 'vue-bus'
import VueRouter from 'vue-router'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'style/reset.css'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueBus);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
})
