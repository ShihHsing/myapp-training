<template>
  <div id="home">
    <mt-loadmore 
      :top-method="loadTop"
      ref="loadmore"
      :maxDistance="88">
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
        title: 'home.vue',
        topStatus: ''
      }
    },
    methods: {
      loadTop () {
        console.log(`下拉刷新!`)
        setTimeout(() => {
          this.$refs.loadmore.onTopLoaded()
          window.location.reload()
        }, 2000)
      }
    },
    components: { mySwiper, myFourGrid }
  }
</script>
