<template>
  <div id="trainingList">
    <el-row class="select">
      <el-col :span="12" class="select_left">
        <el-row type="flex" justify="center" class="align_items_center">
          <!-- <el-button 
            type="text" 
            class="left_text span"
            @click.stop="select = !select">综合
            <template v-if="select">
              <i class="el-icon-caret-top" style="color: #256ddb;"></i>
            </template>
            <template v-else>
              <i class="el-icon-caret-bottom"></i>
            </template>
            </el-button> -->
            <el-select v-model="trainingClassify" placeholder="请选择" class="input_select">
              <el-option label="综合" value=""></el-option>
              <el-option
                v-for="item in trainingClassifyList"
                :label="item.classify_name"
                :value="item.id">
              </el-option>
            </el-select>
        </el-row>
      </el-col>
      <el-col :span="12" class="select_right">
        <el-row type="flex" justify="center" class="align_items_center">
          <!-- <el-button 
            type="text" 
            class="left_right span"
            @click="time = !time">时间
            <template v-if="time">
              <i class="el-icon-caret-top" style="color: #256ddb;"></i>
            </template>
            <template v-else>
              <i class="el-icon-caret-bottom" style="color: #256ddb;"></i>
            </template>
          </el-button> -->
          <el-select v-model="sort" placeholder="请选择" class="input_select">
            <el-option label="时间排序" value=""></el-option>
            <el-option label="从新->旧" value="0"></el-option>
            <el-option label="从旧->新" value="1"></el-option>
          </el-select>
        </el-row>
      </el-col>
    </el-row>
    <!-- 下拉列表 -->
    <!-- <transition
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp">
      <div class="select_left_down" v-if="select">
        <template v-for="list in trainingClassifyList">
          <el-row>
            <el-col :span="20" class="select_text">
              {{ list.classify_name }}
            </el-col>
            <el-col :span="4">
              <i class="el-icon-check" style="color: #256ddb;padding-top: 8px;float: right;"></i>
            </el-col>
          </el-row>
        </template>
      </div>
    </transition> -->

    <template v-if="searchList" v-for="list in searchList">
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
  </div>
</template>

<script>
  import * as API from '../../axios/api.js'
  import '../../public/animate.css'
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
        sort: '',
        select: false,
        time: false
      }
    },
    created: function () {
      // 获取培训列表
      this.getGrid()
      // 获取培训分类
      this.getTrainingClassifyList()
    },
    methods: {
      // 获取数据
      getGrid () {
        this.$axios.post(API.listTrainingInfo)
        .then(msg => {
          console.log(msg.data)
          this.searchList = msg.data.training_list
        })
        .catch(error => {
          console.log(`error.return_code`)
        })
      },

      // 获取分类
      getTrainingClassifyList () {
        this.$axios.post(API.getTrainingClassifyList)
        .then(msg => {
          this.trainingClassifyList = msg.data.training_classify_list
          console.log(this.trainingClassifyList)
        })
        .catch(error => {
          console.log(`error.return_code`)
        })
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