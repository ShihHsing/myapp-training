<template>
  <div id="swiper">
    <h1 :title></h1>
    <h2>{{ title }}</h2>
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
