// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import validator from './js/validator.js'
import request from './js/request.js'
Vue.prototype.$validator = validator;
Vue.prototype.$request = request;


require('../static/css/bootstrap.css')
require('../static/css/bootstrap-table.min.css')
require('../static/js/bootstrap.js')
require('../static/js/bootstrap-table.min.js')
require('../static/js/bootstrap-table-zh-CN.min.js')
require('./assets/css/common.css')


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
