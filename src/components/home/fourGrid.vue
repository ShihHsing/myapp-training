<template>
  <div id="fourGrid">
    <el-row class="recommended_course" type="flex" justify="space-between">
      <span class="left_text">推荐课程</span>
      <router-link to="/trainingList"><el-button type="text" class="right_button">更多<i class="el-icon-d-arrow-right my_icon"></i></el-button></router-link>
    </el-row>
    <el-row class="first_grid">
      <template v-for="list in gridList">
        <router-link :to="{ path: 'details', query: { id: list.id, title: list.title }}">
          <el-col :span="12" class="grid">
            <div style="position: relative;overflow: hidden;">
              <img src="../../img/img.png" alt="占位图片" class="placeholder_img">
              <img :src="list.thumb_image" :alt="list.title" class="img">
              <div style="clear: both;"></div>
            </div>
            <div class="title">{{ list.title }}</div>
            <div class="sub_title">{{ list.classify_name }}</div>
          </el-col>
        </router-link>
      </template>
    </el-row>
  </div>
</template>

<script>
  import * as API from '../../axios/api.js'
  export default{
    name: 'fourGrid',
    data () {
      return {
        title: 'fourGrid.vue',
        gridList: []
      }
    },
    created: function () {
      // 获取推荐列表 4
      this.getGrid()
    },
    methods: {
      getGrid () {
        this.$axios.post(API.listTrainingInfo)
        .then(msg => {
          // console.log(msg.data)
          var data = msg.data
          var trainingList = this.myIsObject(data.training_list, 'recommend', 1)
          // 从小到大排序
          trainingList.sort((a, b) => {
            return a.recommend_time < b.recommend_time ? 1 : -1
          })
          // 展示前四个
          this.gridList = trainingList.slice(0, 4)
          // console.log(this.gridList, '处理后数据')
        })
        .catch(error => {
          // console.log(`error.return_code`)
        })
      },

      // 判断数组中是否有特定的对象的值 若为假则剔除 并返回一个新的数组
      myIsObject (Array, Object, ObjectVlaue) {
        var myArray = Array.concat()
        for (var i = myArray.length - 1; i >= 0; i--) {
          if (myArray[i][Object] >> 0 !== ObjectVlaue) {
            myArray.splice(i, 1)
          }
        }
        return myArray
      }
    }
  }
</script>

<style lang="less">
  .recommended_course{
    box-sizing: border-box;
    padding: 25px 15px 0 15px;
    height: 55.5px;
    background: #efeff5;
    .left_text{
      font-size: 16px;
      color: #333;
      &:before{
        content: '';
        border-left: 2px solid #256ddb;
        margin-right: 5px;
      }
    }
    .right_button{
      font-size: 14px;
      color: #999;
      padding: 0 !important;
      .my_icon{
        margin-left: 5px;
        font-size: 14px;
        color: #999;
      }
    }
  }
  .first_grid{
    box-sizing: border-box;
    padding: 15px 7.5px;
    .grid{
      box-sizing: border-box;
      padding: 0 7.5px;
      .placeholder_img{
        width: 100%;
      }
      .img{
        position: absolute;
        height: 100%;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      .title{
        font-size: 16px;
        color: #666;
        margin-top: 9.5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .sub_title{
        font-size: 12px;
        color: #999;
        margin: 10px 0;
      }
    }
  }
</style>