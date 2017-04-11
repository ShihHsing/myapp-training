<template>
  <div id="search">
    <el-row>
      <el-col :span="24">
        <el-input
          placeholder="搜索"
          icon="search"
          v-model="input2"
          :on-icon-click="handleIconClick">
        </el-input>
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
    <template v-else>
      <p style="text-align: center;color: #999;margin-top: 20px;">暂无搜索结果</p>
    </template>
  </div>
</template>

<script>
  export default{
    name: 'search',
    data () {
      return {
        value: '',
        searchList: 5
      }
    },
    methods: {
    },
    components: {}
  }
</script>

<style lang="less">
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
