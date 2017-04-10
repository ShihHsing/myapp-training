<template>
  <div id="app">
    <myHeader></myHeader>
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

<style lang="less">
@import '~vux/src/styles/reset.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
