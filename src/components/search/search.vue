<template>
  <div id="search">
    <el-row style="box-sizing: border-box;padding: 0 15px;">
      <el-col :span="20" class="search_input">
        <el-input
          placeholder="搜索"
          v-model="value"
          autofocus>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="text" @click="getSearchList" style="float: right;padding-top: 15px;">搜索</el-button>
      </el-col>
    </el-row>
    <!-- <transition name="fade" mode="out-in"> -->
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
    <!-- </transition> -->
  </div>
</template>

<script>
  export default{
    name: 'search',
    data () {
      return {
        value: '',
        searchList: ''
      }
    },
    methods: {
      getSearchList () {
        console.log(`搜索数据:${this.value}`)
        setTimeout(() => {
          this.searchList = 5
        }, 1500)
      }
    },
    components: {}
  }
</script>

<style lang="less">
  .search_input{
    border-bottom: 1px solid #e6e6e6;
    input{
      border: none;
      outline: none;
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
