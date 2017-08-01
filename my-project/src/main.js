// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import VueLazyload from 'vue-lazyload' 

/**
 * @desc 懒加载配置
 * @author wtniu
 */
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/error.jpg',
  loading: '../static/loading.gif',
  attempt: 1
})
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/></app>',
  components: { App }
})
