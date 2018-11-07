<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-active="activeIndex" :router="true">
        <el-menu-item index="/Vue/introduce">
          vue介绍
        </el-menu-item>
        <el-menu-item index="/Vue/life">
          生命周期
        </el-menu-item>
        <el-menu-item index="/typeScript/baseType">
          指令
        </el-menu-item>
        <el-submenu index="/Vue/fuyong">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>过渡&amp;动画</span>
          </template>
          <el-menu-item index="/Vue/transition">进入/离开&amp;列表过渡</el-menu-item>
          <el-menu-item index="/Vue/animal">状态过渡</el-menu-item>
        </el-submenu>
        <el-submenu index="/Vue/fuyong">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>可复用性&amp;组件</span>
          </template>
          <el-menu-item index="/Vue/mixins">混入</el-menu-item>
        </el-submenu>
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
        <el-submenu index="/Vue/cli3">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>vue-cli3</span>
          </template>
          <el-menu-item index="/Vue/config">配置</el-menu-item>
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
   methods:{
     _open(key:any,path:any){
       this.$router.push(key)
     },
     _close(key:any,path:any){
       this.$router.push(key)
     },
   }
});
</script>

