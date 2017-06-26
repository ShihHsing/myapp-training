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
      return {
        browser: null // 客户端信息
      }
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
    created: function () {
      /*
      * 智能机浏览器版本信息:
      *
      */
      this.browser = {
        versions: function () {
          var u = navigator.userAgent, app = navigator.appVersion
          return { // 移动终端浏览器版本信息 
            trident: u.indexOf('Trident') > -1, // IE内核
            presto: u.indexOf('Presto') > -1, // opera内核
            webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, // 火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, // 是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, // 是否iPad
            webApp: u.indexOf('Safari') == -1 // 是否web应该程序，没有头部与底部
          }
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
      }
    },
    methods: {
      // 后退
      retreat () {
        if (this.path === '/home') {
          if (this.browser.versions.ios || this.browser.versions.iPhone || this.browser.versions.iPad) {
            this.$router.push('/logOut')
          } else if (this.browser.versions.android) {
            window.doBack.actionFromJs()
          }
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
