<template>
  <div id="swiper">
    <mt-swipe 
      :auto="4000"
      style="height: 187.5px;">
      <template v-for="list in swiperList">
        <mt-swipe-item class="swipe">
          <div class="progressive">
            <img :src="list.url" :alt="list.name"/>
          </div>
        </mt-swipe-item>
      </template>
    </mt-swipe>
  </div>
</template>

<script>
  import * as API from '../../axios/api.js'
  export default{
    name: 'swiper',
    data () {
      return {
        title: 'swiper.vue',
        swiperList: []
      }
    },
    created: function () {
      // 获取轮播图
      this.getSwipe()
    },
    methods: {
      // 轮播图
      // 左右滑动/点击
      // 1、轮播图最多显示5张，图片每隔1.5秒自动向左滑动下一张图片，滑动至最后一张图片时循环滑动第一张。
      // 2、点击轮播图跳转页面类型为：图文详情类型和视频类型
      // 3、轮播图手动向左滑动显示下一张，向右滑动显示上一张
      getSwipe () {
        // 3 === 储客APP
        // 获取储客APP轮播图
        const Data = {
          'carousel_drawing_location': 3
        }
        this.$axios.post(API.getSpecialCarouselDrawing, Data)
        .then(msg => {
          // console.log(msg.data)
          const data = msg.data
          this.swiperList = data.carousel_drawing_list
        })
        .catch(error => {
          // console.log(`error.return_code`)
        })
      },

      // 点击轮播图跳转详情页
      goDetails (id, title) {
        this.$router.push({ path: 'details', query: { id: id, type: 'swiper', title: title }})
      }
    }
  }
</script>

<style lang="less">
  .swipe{
    text-align: center;
    line-height: 187.5px;
    img{
      height: 100%;
    }
  }
</style>