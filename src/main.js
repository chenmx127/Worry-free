// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

Vue.prototype.$axios = Axios
Vue.use(VueAxios, Axios)
Vue.config.productionTip = false
Vue.use(ElementUI)

Axios.interceptors.request.use(
  config=>{
    if(localStorage.getItem('Authorization')){
      config.headers.Authorization = localStorage.getItem('Authorization');
    }
    return config;
  },
  error=>{
    return Promise.reject(error);
  }
);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
