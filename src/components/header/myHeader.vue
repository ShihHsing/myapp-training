<template>
  <div id="myHeader">
    
  </div>
</template>

<script>
  import { AlertPlugin, ToastPlugin } from 'vux'
  export default{
    name: 'myHeader',
    data () {
      return {
        title: 'myHeader.vue'
      }
    },
    components: {
      AlertPlugin, ToastPlugin
    }
  }
</script>
