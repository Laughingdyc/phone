import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from "./routes"
import axios from 'axios'

import { store } from "./store/store";

Vue.use(VueRouter)

axios.defaults.baseURL = 'https://buyphone-39f3e.firebaseio.com/'

// 配置Vue的原型,让axios在任何组件中不需要引入就可以使用
Vue.prototype.http = axios

const router = new VueRouter ({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition
    }else{
      return {x: 0, y: 0}
    }
  }
})


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
