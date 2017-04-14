<template>
  <div id="trainingList">
    <el-row class="select">
      <el-col :span="12" class="select_left">
        <el-row type="flex" justify="center" class="align_items_center">

            <el-select v-model="trainingClassify" placeholder="请选择" class="input_select">
              <el-option label="综合" value=""></el-option>
              <el-option
                v-for="item in trainingClassifyList"
                :label="item.classify_name"
                :value="item.id"
                :key="item.id">
              </el-option>
            </el-select>
        </el-row>
      </el-col>
      <el-col :span="12" class="select_right">
        <el-row type="flex" justify="center" class="align_items_center">

          <el-select v-model="sort" placeholder="请选择" class="input_select">
            <el-option label="推荐" value="0"></el-option>
            <el-option label="时间" value="1">
              <span style="float: left">时间</span>
              <span style="float: right; color: #8492a6; font-size: 13px"><i class="el-icon-arrow-up"></i></span>
            </el-option>
            <el-option label="时间" value="2">
              <span style="float: left">时间</span>
              <span style="float: right; color: #8492a6; font-size: 13px"><i class="el-icon-arrow-down"></i></span>
            </el-option>
          </el-select>
        </el-row>
      </el-col>
    </el-row>
    <mt-loadmore 
      :top-method="loadTop"
      ref="loadmore"
      :maxDistance="88"
      style="min-height: 80%;">
      <template v-if="searchList.length != 0">
        <mt-loadmore 
          :bottom-method="loadBottom" 
          :bottom-all-loaded="allLoaded" 
          ref="loadBottomMore"
          :maxDistance="88">
          <template 
            v-for="list in searchList">
            <router-link :to="{ path: 'details', query: { id: list.id, title: list.title }}">
              <el-row class="searchList">
                <el-col :span="8" class="searchList_left">
                  <div style="position: relative;overflow: hidden;">
                    <img src="../../img/img.png" alt="占位图片" class="placeholder_img">
                    <img :src="list.thumb_image" :alt="list.title" class="img">
                    <div style="clear: both;"></div>
                  </div>
                </el-col>
                <el-col :span="16" class="searchList_right">
                  <p class="title">{{ list.title }}</p>
                  <p class="sub_title">{{ list.classify_name }}</p>
                </el-col>
              </el-row>
            </router-link> 
          </template>
          <p v-if="allLoaded" style="text-align: center;color: #666;padding: 15px 0;">--------- 我也是有底线的 --------</p>
        </mt-loadmore>
      </template>
      <template v-else>
        <p style="text-align: center;margin-top: 30px;color: #333;height: 500px;">暂无数据，刷新页面尝试</p>
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
    name: 'trainingList',
    data () {
      return {
        title: 'trainingList.vue',
        // 获取培训列表
        searchList: [],
        // 获取培训分类列表
        trainingClassifyList: [],
        // 类型
        trainingClassify: '',
        // 排序
        sort: '0',
        // 下拉
        loading: false,
        // 总页数
        pages: 1,
        // 当前页
        currentPage: 1
      }
    },
    computed: {
      allLoaded: function () {
        return !(this.currentPage < this.pages)
      }
    },
    created: function () {
      // 获取培训列表
      this.getGrid()
      // 获取培训分类
      this.getTrainingClassifyList()
    },
    watch: {
      sort: function (value) {
        this.loading = true
        this.$axios.post(API.listTrainingInfo, {
          'sort': value,
          'training_classify': this.trainingClassify
        })
        .then(msg => {
          // console.log(msg.data)
          this.searchList = msg.data.training_list
          // 总页数
          this.pages = msg.data.pages
            // 当前页
          this.currentPage = msg.data.current_page
          this.clearLoding(800)
        })
        .catch(error => {
          // console.log(`error.return_code`)
        })
      },
      trainingClassify: function (value) {
        this.loading = true
        this.$axios.post(API.listTrainingInfo, {
          'training_classify': value,
          'sort': this.sort
        })
        .then(msg => {
          // console.log(msg.data)
          this.searchList = msg.data.training_list
          // 总页数
          this.pages = msg.data.pages
          // 当前页
          this.currentPage = msg.data.current_page
          this.clearLoding(800)
        })
        .catch(error => {
          // console.log(`error.return_code`)
        })
      }
    },
    methods: {
      // 上拉获取下一页
      loadBottom () {
        // console.log('下一页')
        this.loading = true
        if (this.pages > this.currentPage) {
          this.$axios.post(API.listTrainingInfo, {
            'current_page': ++this.currentPage,
            'training_classify': this.trainingClassify,
            'sort': this.sort
          })
          .then(msg => {
            // console.log(msg.data)
            // 列表数据
            for (var i = msg.data.training_list.length - 1; i >= 0; i--) {
              this.searchList.push(msg.data.training_list[i])
            }
            // 总页数
            this.pages = msg.data.pages
            // 当前页
            this.currentPage = msg.data.current_page
            this.loading = false
            this.$refs.loadBottomMore.onBottomLoaded()
          })
          .catch(error => {
            // console.log(`error.return_code`)
          })
        }
      },

      // 下拉刷新
      loadTop () {
        this.loading = true
        this.getGrid()
      },

      // 获取数据
      getGrid () {
        this.$axios.post(API.listTrainingInfo, {
          'training_classify': this.trainingClassify,
          'sort': this.sort
        })
        .then(msg => {
          // console.log(msg.data)
          // 列表数据
          this.searchList = msg.data.training_list
          // 总页数
          this.pages = msg.data.pages
          // 当前页
          this.currentPage = msg.data.current_page
          this.myOnTopLoaded('loadmore')
          this.clearLoding(800)
        })
        .catch(error => {
          // console.log(`error.return_code`)
        })
      },

      // 获取分类
      getTrainingClassifyList () {
        this.$axios.post(API.getTrainingClassifyList)
        .then(msg => {
          this.trainingClassifyList = msg.data.training_classify_list
          // console.log(this.trainingClassifyList)
        })
        .catch(error => {
          // console.log(`error.return_code`)
        })
      },

      // 关闭loading
      clearLoding (time) {
        setTimeout(() => {
          this.loading = false
        }, time)
      },

      // 下拉关闭刷新文字
      myOnTopLoaded (mtRef) {
        // setTimeout(() => {
        this.$refs[mtRef].onTopLoaded()
        // }, 800)
      },
      // 上拉关闭刷新文字
      myOnBottomLoaded (mtRef) {
        // setTimeout(() => {
        this.allLoaded = true
        this.$refs[mtRef].onBottomLoaded()
        // }, 800)
      }
    }
  }
</script>

<style lang="less">
  .select{
    height: 40px;
    box-sizing: border-box;
    position: relative;
    z-index: 9999;
    border-bottom: 1px solid #e6e6e6;
    background: #fff;
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
  .input_select{
    input{
      border: none!important;
    }
  }
  .el-select-dropdown{
    width: 100%;
    border: none;
    box-shadow: none;
    padding: 0 15px;
  }
  .select_left_down{
    position: absolute;
    top: 84px;
    left: 0;
    width: 100%;
    height: 150px;
    background: #fff;
    z-index: 2017;
    border-bottom: 1px solid #e6e6e6;
    box-sizing: border-box;
    padding: 15px;
    .select_text{
      font-size: 16px;
      color: #666;
      padding: 5px 0
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
  #trainingList{
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 44px;
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
</style>