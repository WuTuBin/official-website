<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-active="activeIndex" :router="true">
        <template v-for="(item,index) in obj">
          <el-menu-item :key="index" :index="item" v-if="typeof(item)=='string'">{{index}}</el-menu-item>
          <el-submenu :key="index" :index="index" v-if="typeof(item)=='object'">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>{{index}}</span>
            </template>
            <template v-for="(item1,index1) in item">
              <el-menu-item :key="index1" :index="item1" v-if="typeof(item1)=='string'">{{index1}}</el-menu-item>
              <el-submenu :key="index1" :index="index1" v-if="typeof(item1)=='object'">
                <template slot="title">
                  {{index1}}
                </template>
                <el-menu-item :key="index2" :index="item2" v-for="(item2,index2) in item1">{{index2}}</el-menu-item>
              </el-submenu>
            </template>
          </el-submenu>
        </template>
      </el-menu>
    </el-aside>
    <el-main ref="top">
      <router-view></router-view>
      <el-button @click="_top" type="primary" class="top">顶部</el-button>
    </el-main>
  </el-container>
</template>
<script lang="ts">
import Vue from "vue";
import { Obj } from "./nav";
export default Vue.extend({
  data(){
    return {
      activeIndex:'',
      obj:{}
    }
  },
  created(){
    this.activeIndex = this.$route.fullPath
    this.obj = Obj
  },
  methods:{
    _open(key:any, keyPath:any){
      // this.$router
      this.$router.push(key)
    },
    _close(key:any, keyPath:any){
      // console.log(key,keyPath)
      this.$router.push(key)
    }
  }
});
</script>

