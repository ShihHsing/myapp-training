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
  </div>
</template>

<script>
  export default{
    name: 'trainingList',
    data () {
      return {
        title: 'trainingList.vue'
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
</style>