<template>
  <div>
    <h2>单行文字缩略</h2>
    <pre class="code"><code>
      {{fn.single}}
    </code></pre>
    <h2>多行文字缩略</h2>
    <pre class="code"><code>
        {{fn.multi}}
    </code></pre>
    <h2>隐藏滚动条</h2>
    <pre class="code"><code>
        {{fn.scroll}}
    </code></pre>
  </div>
</template>
<script lang="ts">
import fn from "./text"
import Vue from "vue";
export default Vue.extend({
  data(){
    return {
      fn:{},
    }
  },
  created(){
    this.fn = fn
  },
  mounted(){
    let win:any = window;
    win.copy();
  }
});
</script>
<style lang="stylus" scoped>
</style>
