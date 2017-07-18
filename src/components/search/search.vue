<template>
  <div id="search">
    <el-row class="search_body">
      <el-col :span="20" class="search_input">
        <el-input
          placeholder="搜索"
          v-model="value"
          autofocus>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="text" @click="getSearchList" class="search_button">搜索</el-button>
      </el-col>
    </el-row>
    <template v-if="searchList.length != 0">
      <mt-loadmore
        :top-method="loadTop"
        ref="loadmore"
        :maxDistance="88"
        style="min-height: 80%;">
        <template v-for="list in searchList">
          <router-link :to="{ path: 'details', query: { id: list.id, title: list.title }}">
            <el-row class="searchList">
              <el-col :span="8" class="searchList_left">
                <div style="position: relative;overflow: hidden;">
                  <img src="../../img/img.png" alt="占位图片" class="placeholder_img">
                  <img :src="list.thumb_image" :alt="list.title" class="img">
                </div>
              </el-col>
              <el-col :span="16" class="searchList_right">
                <p class="title">{{ list.title }}</p>
                <p class="sub_title">{{ list.classify_name }}</p>
              </el-col>
            </el-row>
          </router-link>
        </template>
      </mt-loadmore>
    </template>
    <template v-else>
      <p style="text-align: center;color: #999;margin-top: 20px;">暂无搜索结果</p>
    </template>
    </mt-loadmore>

    <mt-spinner
      type="double-bounce"
      color="#256ddb"
      :size="30"
      class="loding"
      v-show="loading">
    </mt-spinner>
  </div>
</template>

<script>
  import * as API from '../../axios/api.js'
  export default{
    name: 'search',
    data () {
      return {
        value: '',
        searchList: [],
        loading: false // 下拉
      }
    },
    methods: {
      getSearchList () {
        this.loading = true
        this.$axios.post(API.listTrainingInfo, {
          'keyword': this.value
        })
        .then(msg => {
          var data = msg.data
          this.loading = false
          switch (data.flag >> 0) {
            case 1000:
              this.searchList = msg.data.training_list
              this.myOnTopLoaded('loadmore')
              break
            default:
              this.searchList = []
              break
          }
        })
        .catch(error => {
          this.loading = false
          this.myOnTopLoaded('loadmore')
        })
      },
      // 下拉刷新
      loadTop () {
        this.getSearchList()
      },
      // 下拉关闭刷新文字
      myOnTopLoaded (mtRef) {
        this.$refs[mtRef].onTopLoaded()
        this.loading = false
      }
    }
  }
</script>

<style lang="less">
  #search{
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 44px;
    .search_body{
      box-sizing: border-box;
      padding: 0 15px;
      .search_input{
        border-bottom: 1px solid #e6e6e6;
        input{
          border: none;
          outline: none;
        }
      }
      .search_button{
        float: right;
        padding-top: 15px;
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
      }
      .searchList_right{
        box-sizing: border-box;
        padding-left: 10px;
        .title{
          margin: 10px 0;
          font-size: 16px;
          color: #666;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          word-break: break-all;
        }
        .sub_title{
          font-size: 12px;
          color: #999;
        }
      }
    }
    .loding{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 150%;
      z-index: 99999;
      background: rgba(0,0,0,0.35);
      .mint-spinner-double-bounce{
        margin: auto;
        top: 30%;
      }
    }
  }
</style>
