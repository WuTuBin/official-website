<template>
  <el-row>
    <el-col :span="24">
      <el-menu mode="horizontal" background-color="#00A8E6" text-color="#fff" :default-active="activeIndex" :router="true">
        <el-menu-item id="logo" index="/about">吴土彬官网</el-menu-item>
        <template v-for="(item,index) in obj">
          <el-menu-item :key="index" :index="item" v-if="typeof(item)=='string'">{{index}}</el-menu-item>
          <el-submenu :key="index" :index="index" v-if="typeof(item)=='object'">
            <template slot="title">
              {{index}}
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
    </el-col>

  </el-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Obj } from "./nav";
@Component
export default class HelloWorld extends Vue {
  activeIndex = "";
  obj: any = "";
  @Prop()
  private msg!: string;
  created() {
    this.obj = Obj;
    this.activeIndex = "/" + this.$route.path.split("/")[1];
    console.log(this.activeIndex);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.el-row {
  background-color: #00a8e6;
}

#logo {
  font-size: 26px;

  &:hover, &:active, &:visited {
    background-color: rgb(0, 168, 230);
    color: #fff;
    border: none;
  }
}

.el-menu.el-menu--horizontal {
  border-bottom: none;
}
</style>
