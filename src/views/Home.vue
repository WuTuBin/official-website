<template>
  <div class="home">
    <Header></Header>
    <router-view></router-view>
    <el-button type="primary" class="top" @click="_top">顶部</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue"; // @ is an alias to /src
import About from "./About.vue"
@Component({
  components: {
    Header,About
  }
})
export default class Home extends Vue {
  _top(){
      window.document.body.scrollTop = 0
    }
}
</script>
<style lang="stylus" scoped>
.top{
  position fixed
  right 30px
  bottom 30px
}
</style>