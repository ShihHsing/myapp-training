import Vue from 'vue'
import App from './App.vue'
// import Router from './router/router.js'
import Axios from './axios/http.js'

new Vue({
  el: '#app',
  // Router,
  Axios,
  render: h => h(App)
})
