<template>
  <div>
    <h2>html编码</h2>
    <pre class="code"><code>
      {{fn.htmlcode}}
    </code></pre>
    <h2>html译码</h2>
    <pre class="code"><code>
        {{fn.htmldecode}}
    </code></pre>
    <h2>复制内容到剪贴板</h2>
    <pre class="code"><code>
        {{fn.copy}}
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
