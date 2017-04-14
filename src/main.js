import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import Axios from './axios/http.js'
import './MintUi/index.js'
import './ElementUi/index.js'
import './progressive/progressive.css'
import './progressive/index.js'

new Vue({
  el: '#app',
  router,
  Axios,
  render: h => h(App)
})
