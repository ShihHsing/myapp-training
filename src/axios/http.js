import Vue from 'vue'
import axios from 'axios'
import Qs from 'qs'

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.$axios = axios
// 将Qs挂载到prototype上，在组件中可以直接使用this.Qs访问
Vue.prototype.$Qs = Qs
// axios 配置
axios.defaults.timeout = 5000

axios.defaults.baseURL = 'http://a001.aybc.so/'

// 请求前对数据做处理
axios.defaults.transformRequest = [function (data) {
  // 依自己的需求对请求数据进行处理
  return Qs.stringify(data, { arrayFormat: 'indices' })
}]

export default axios
