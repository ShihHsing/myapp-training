<template>
  <div id="trainingList">
    <el-row class="select">
      <el-col :span="12" class="select_left">
        <el-row type="flex" justify="center" class="align_items_center">
          <el-button type="text" class="left_text span">综合<i class="el-icon-caret-bottom"></i></el-button>
        </el-row>
      </el-col>
      <el-col :span="12" class="select_right">
        <el-row type="flex" justify="center" class="align_items_center">
          <el-button type="text" class="left_right span">时间<i class="el-icon-d-caret"></i></el-button>
        </el-row>
      </el-col>
    </el-row>

    <template v-if="searchList" v-for="item in searchList">
      <el-row class="searchList">
        <el-col :span="8" class="searchList_left">
          <img src="../../img/img.png" alt="站位图">
        </el-col>
        <el-col :span="16" class="searchList_right">
          <p class="title">门店如何统计大量客户的管理门店如何统计大量客户的管理门店如何统计大量客户的管理
</p>
          <p class="sub_title">机器人专业知识培训
</p>
        </el-col>
      </el-row>
    </template>
  </div>
</template>

<script>
  export default{
    name: 'trainingList',
    data () {
      return {
        title: 'trainingList.vue',
        searchList: 5
      }
    }
  }
</script>

<style lang="less">
  .select{
    height: 40px;
    box-sizing: border-box;
    .select_left,.select_right{
      height: 100%;
      .align_items_center{
        height: 100%;
        align-items:center;
        .span{
          font-size: 16px;
          color: #666;
          i{
            font-size: 10px;
            margin-left: 5px;
            color: #999;
          }
        }
      }
    }
  }
  .searchList{
    padding: 15px 15px 0 15px;
    &:after{
      content: '';
      width: 100%;
      height: 14px;
      border-bottom: 1px solid #e6e6e6;
    }
    .searchList_left{
      img{
        width: 100%;
      }
    }
    .searchList_right{
      box-sizing: border-box;
      padding-left: 10px;
      .title{
        margin: 10px 0;
        font-size: 16px;
        color: #666;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .sub_title{
        font-size: 12px;
        color: #999;
      }
    }
  }
</style>