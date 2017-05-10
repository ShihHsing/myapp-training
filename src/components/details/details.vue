<template>
  <div id="details">
    <template v-if="value">
      <el-row v-html="value" class="detail"></el-row>
    </template>
    <template v-else>
      <p style="text-align: center;margin-top: 30px;color: #333;height: 500px;">暂无数据，刷新页面尝试</p>
    </template>
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
          switch (data.flag >> 0) {
            case 1000:
              this.value = data.training_detail.training_value
              break;
            default:
              console.log(`${data.return_code}`)
          }
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
          switch (data.flag >> 0) {
            case 1000:
              this.value = data.carousel_drawing_detail.value
              break;
            default:
              console.log(`${data.return_code}`)
          }
        })
      }
    }
  }
</script>

<style lang="less">
  #details{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
    padding-top: 44px;
    .detail{
      img{
        width: 100% !important;
      }
      iframe{
        width: 100%;
      }
    }
  }
</style>
