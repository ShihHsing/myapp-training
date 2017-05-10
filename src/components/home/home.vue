<template>
  <div id="home">
    <mt-loadmore
      :top-method="loadTop"
      ref="loadmore"
      :maxDistance="0">
      <mySwiper></mySwiper>
      <myFourGrid></myFourGrid>
    </mt-loadmore>
  </div>
</template>

<script>
  import mySwiper from './swiper.vue'
  import myFourGrid from './fourGrid.vue'
  export default{
    name: 'home',
    data () {
      return {
        title: 'home.vue'
      }
    },
    methods: {
      // 刷新 偷懒
      loadTop () {
        setTimeout(() => {
          this.$refs.loadmore.onTopLoaded()
          window.location.reload()
        }, 1500)
      }
    },
    components: { mySwiper, myFourGrid }
  }
</script>

<style lang="less">
  #home{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 44px;
  }
</style>
