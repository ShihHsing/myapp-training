<template>
  <div id="app">
    <myHeader></myHeader>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import myHeader from './components/header/myHeader.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  methods: {
    eslint () {
      this.$axios.post('axiosTest', {
        name: 'shixin'
      })
      .then(msg => {
        console.log(msg)
      })
      .catch(error => {
        console.log(`服务器${error}`)
      })
    }
  },

  components: { myHeader }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  html, body{
    width: 100%;
  }
</style>
