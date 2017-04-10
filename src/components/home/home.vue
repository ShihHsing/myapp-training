<template>
  <div id="home">
    <mt-swipe 
      :auto="4000"
      style="height: 187.5px;">
      <mt-swipe-item class="swipe">1</mt-swipe-item>
      <mt-swipe-item class="swipe">2</mt-swipe-item>
      <mt-swipe-item class="swipe">3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default{
    name: 'home',
    data () {
      return {
        title: 'home.vue'
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
