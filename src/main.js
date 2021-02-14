import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import '@/utils/filter';

import Vant from 'vant'
import 'vant/lib/index.css'
import '@style/common.scss'
import moment from 'moment';
import { getRequest, postRequest } from '@/api'
import { formDataObject } from "@uit/comtool";
import { i18n } from '@/i18n/index' //国际化
import axios from 'axios'; // 请求时，header中需要传token时使用

Vue.prototype.moment = moment;
Vue.prototype.fetchget = getRequest;
Vue.prototype.fetchpost = postRequest;
Vue.prototype.formDataObject = formDataObject;
Vue.prototype.axios = axios;
Vue.prototype.i18n = i18n; //TODO

Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.baseUrl = 'http://dev.ninepay.in/api';
console.log('env：', process.env.NODE_ENV,Vue.prototype.baseUrl);


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
