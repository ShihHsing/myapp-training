<template>
  <div id="trainingDetails">
    <h1 :title></h1>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
  export default{
    name: 'trainingDetails',
    data () {
      return {
        title: 'trainingDetails.vue'
      }
    }
  }
</script>
