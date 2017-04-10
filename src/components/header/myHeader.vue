<template>
  <div id="myHeader">
    <mt-header 
      :title="title"
      style="height: 44px;">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="search" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
  export default{
    name: 'myHeader',
    data () {
      return {
        title: '培训'
      }
    } 
  }
</script>