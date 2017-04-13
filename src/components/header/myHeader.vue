<template>
  <div id="myHeader">
    <mt-header 
      :title="title"
      fixed
      style="height: 44px;background: #256ddb;z-index: 99999;">
      <mt-button icon="back" slot="left" @click="go"></mt-button>
      <mt-button icon="search" slot="right" @click="search" v-if="title !== '搜索'"></mt-button>
    </mt-header>
  </div>
</template>

<script>
  export default{
    name: 'myHeader',
    data () {
      return {
      }
    },
    computed: {
      // 动态获取详情页title
      title: function () {
        if (this.$route.meta.title) {
          return this.$route.meta.title
        } else {
          return this.$route.query.title
        }
      }
    },
    methods: {
      // 后退
      go () {
        // console.log(`后退`)
        this.$router.go(-1)
      },
      search () {
        this.$router.push('/search')
      }
    }
  }
</script>

<style lang="less">
  #myHeader{
    z-index: 999999999;
    width: 100%;
  }
</style>
