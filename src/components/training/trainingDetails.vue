<template>
  <div id="trainingDetails">
    <mt-loadmore 
      :bottom-method="loadBottom" 
      :bottom-all-loaded="allLoaded" 
      ref="loadmore">
      <ul>
        <li v-for="item in list" style="text-align: center;height: 88px;border-bottom: 1px solid #333;line-height: 88px;">{{ item }}</li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
  export default{
    name: 'trainingDetails',
    data () {
      return {
        title: 'trainingDetails.vue',
        allLoaded: false,
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    },
    methods: {
      loadBottom () {
        // console.log('触发了')
        this.allLoaded = true
        setTimeout(() => {
          var last = this.list[this.list.length - 1]
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i)
          }
          this.allLoaded = false
          this.$refs.loadmore.onBottomLoaded()
        }, 2500)
      }
    }
  }
</script>
