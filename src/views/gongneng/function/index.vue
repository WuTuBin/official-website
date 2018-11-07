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
    console.log(window)
    window.copy();
  }
});
</script>
<style lang="stylus" scoped>
</style>
