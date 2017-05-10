<template>
  <div id="myHeader">
    <mt-header
      :title="title"
      fixed
      class="myHeader">
      <mt-button slot="left" @click="retreat">
        <i class="el-icon-arrow-left search_icon"></i>
      </mt-button>
      <mt-button slot="right" v-if="title !== '搜索'">
        <router-link to="/search">
          <i class="el-icon-search search_icon"></i>
        </router-link>
      </mt-button>
    </mt-header>
  </div>
</template>

<script>
  export default{
    name: 'myHeader',
    data () {
      return {}
    },
    computed: {
      // 动态获取详情页title
      title: function () {
        return this.$route.meta.title ? this.$route.meta.title : this.$route.query.title
      },
      path: function () {
        return this.$route.path
      }
    },
    methods: {
      // 后退
      retreat () {
        if (this.path === '/home') {
          this.$router.push('/logOut')
        } else {
          this.$router.go(-1)
        }
      }
    }
  }
</script>

<style lang="less">
  #myHeader{
    z-index: 999999999;
    width: 100%;
    .myHeader{
      font-size: 16px;
      height: 44px;
      background: #256ddb;
      z-index: 99999;
      .search_icon{
        color: #fff;
      }
    }
  }
</style>
