import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/filter';
import $ from 'jquery';
import 'bootstrap3/dist/css/bootstrap.min.css'
import 'bootstrap3/dist/js/bootstrap.min.js'

import '@style/common.scss'
import moment from 'moment';
import { getRequest, postRequest } from '@/api'
import { formDataObject } from "@uit/comtool";

Vue.prototype.moment = moment;
Vue.prototype.fetchget = getRequest;
Vue.prototype.fetchpost = postRequest;
Vue.prototype.formDataObject = formDataObject;

Vue.config.productionTip = false
console.log('env：', process.env.NODE_ENV);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
