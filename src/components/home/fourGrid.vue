<template>
  <div id="fourGrid">
    <el-row class="recommended_course" type="flex" justify="space-between">
      <span class="left_text">推荐课程</span>
      <router-link to="/trainingList"><el-button type="text" class="right_button">更多<i class="el-icon-d-arrow-right my_icon"></i></el-button></router-link>
    </el-row>
    <el-row type="flex" justify="space-between" class="first_grid" v-for="grid in gridList">
      <el-col :span="12" class="grid">
        <img src="../../img/r2_c2.png" alt="培训课程图片">
        <div class="title">{{ grid }}门店如何统计大量客门店如何统计大量客</div>
        <div class="sub_title">机器人专业知识培训</div>
      </el-col>
      <el-col :span="12" class="grid">
        <img src="../../img/r2_c2.png" alt="培训课程图片">
        <div class="title">门店如何统计大量客门店如何统计大量客</div>
        <div class="sub_title">机器人专业知识培训</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default{
    name: 'fourGrid',
    data () {
      return {
        title: 'fourGrid.vue',
        gridList: 2
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
      img{
        width: 100%;
        height: auto;
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