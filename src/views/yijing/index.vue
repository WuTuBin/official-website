<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-active="activeIndex" :router="true" @open="_open" @close="_close">
        <el-menu-item index="/yijing/introduce">
          易经介绍
        </el-menu-item>
        <el-submenu index="/html5/element">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>元素</span>
          </template>
          <el-menu-item index="/html5/element/img">img</el-menu-item>
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

