<template>
  <div>
    <pre class="code"><code>
      {{str}}
    </code></pre>
  </div>
</template>
<script lang="ts">
import { str } from "./upload";
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      str: ""
    };
  },
  created() {
    this.str = str;
    // console.log(str)
  },
  mounted(){
    let win:any = window;
    win.copy();
  }
});
</script>
