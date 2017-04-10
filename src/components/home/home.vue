<template>
  <div id="home">
    <h1 :title></h1>
    <h2>{{ title }}</h2>
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
