// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home', // 首页
    component: resolve => require(['../components/home/home.vue'],
      resolve),
    meta: { title: '培训' }
  },
  {
    path: '/trainingList', // 全部课程
    component: resolve => require(['../components/training/trainingList.vue'],
      resolve),
    meta: { title: '全部课程' }
  },
  {
    path: '/search', // 搜索
    component: resolve => require(['../components/search/search.vue'],
      resolve),
    meta: { title: '搜索' }
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 输出router
export default router
