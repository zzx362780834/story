// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import validator from './js/validator.js'
import request from './js/request.js'
import store from './js/store.js'
Vue.prototype.$validator = validator;
Vue.prototype.$request = request;
Vue.prototype.$store = store;



require('./style/common.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
