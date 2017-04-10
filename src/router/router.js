// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home', // 首页
    component: resolve => require([''],
      resolve)
  },
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 输出router
export default router
