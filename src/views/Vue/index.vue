<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-active="activeIndex" :router="true">
        <el-menu-item index="/Vue/introduce">
          介绍
        </el-menu-item>
        <el-menu-item index="/typeScript/baseType">
          生命周期
        </el-menu-item>
        <el-menu-item index="/typeScript/baseType">
          指令
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>属性</span>
          </template>
          <el-menu-item index="3">安装</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>方法</span>
          </template>
          <el-menu-item index="5">安装</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
      
    </el-main>
  </el-container>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data(){
    return {
      activeIndex:''
    }
  },
  created(){
    this.activeIndex = this.$route.fullPath
  },
   
});
</script>

