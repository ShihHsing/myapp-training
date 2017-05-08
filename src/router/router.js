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
    path: '/logOut', // 退出
    component: resolve => require(['../components/header/logOut.vue'],
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
    path: '/details', // 搜索
    component: resolve => require(['../components/details/details.vue'],
      resolve)
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
