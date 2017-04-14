<template>
  <div id="details">
    <el-row v-html="value" class="detail"></el-row>
  </div>
</template>

<script>
  import * as API from '../../axios/api.js'
  export default{
    name: 'details',
    data () {
      return {
        value: ''
      }
    },
    created: function () {
      // 获取详情
      this.$route.query.type ? this.getSwiperDetails() : this.getDetailsValue()
    },
    methods: {
      // 获取培训详情
      getDetailsValue () {
        const Data = {
          'training_id': this.$route.query.id
        }
        this.$axios.post(API.getTrainingDetail, Data)
        .then(msg => {
          const data = msg.data
          this.value = data.training_detail.training_value
        })
      },
      // 获取轮播图详情
      getSwiperDetails () {
        const Data = {
          'carousel_drawing_id': this.$route.query.id
        }
        this.$axios.post(API.getCarouselDrawingDetail, Data)
        .then(msg => {
          const data = msg.data
          this.value = data.carousel_drawing_detail.value
        })
      }
    }
  }
</script>

<style lang="less">
  #details{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 44px;
    .detail{
      img{
        width: 100%;
      }
      iframe{
        width: 100%;
      }
    }
  }
</style>