<template>
  <div id="swiper">
    <mt-swipe 
      :auto="4000"
      style="height: 187.5px;">
      <mt-swipe-item class="swipe">{{ title }}</mt-swipe-item>
      <mt-swipe-item class="swipe">{{ title }}</mt-swipe-item>
      <mt-swipe-item class="swipe">{{ title }}</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default{
    name: 'swiper',
    data () {
      return {
        title: 'swiper.vue'
      }
    }
  }
</script>

<style lang="less">
  .swipe{
    text-align: center;
    line-height: 187.5px;
  }
  .swipe:nth-of-type(1){
    background: red;
  }
  .swipe:nth-of-type(2){
    background: yellow;
  }
  .swipe:nth-of-type(3){
    background: blue;
  }
</style>