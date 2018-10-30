<template>
  <el-row>
    <el-col :span="24">
      <el-menu mode="horizontal" background-color="#00A8E6" text-color="#fff" :default-active="activeIndex" :router="true">
        <el-menu-item id="logo" index="/about">吴土彬官网</el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            前端
          </template>
          <el-menu-item index="1-1">html5</el-menu-item>
          <el-menu-item index="1-2">css3</el-menu-item>
          <el-menu-item index="1-3">javascript</el-menu-item>
          <el-submenu index="1-4">
            <template slot="title">
              框架
            </template>
            <el-menu-item index="/Vue">Vue</el-menu-item>
            <el-menu-item index="1-4-2">React</el-menu-item>
          </el-submenu>
          <el-submenu index="1-5">
            <template slot="title">
              库
            </template>
            <el-menu-item index="1-5-1">JQuery</el-menu-item>
          </el-submenu>
        </el-submenu>
      
      <el-menu-item index="2">后端</el-menu-item>
      <el-menu-item index="/typeScript">TypeScript</el-menu-item>
    </el-menu>
    </el-col>
    
  </el-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  activeIndex=''
  @Prop()
  private msg!: string;
  created(){
    this.activeIndex = this.$route.fullPath
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.el-row
  background-color #00a8e6
#logo
  font-size 26px
  &:hover
  &:active
  &:visited
    background-color rgb(0, 168, 230)
    color #fff
    border none
.el-menu.el-menu--horizontal
  border-bottom none


</style>
