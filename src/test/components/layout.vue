<template>
  <div class="wrap">
    <div class="header" :style="{height:height+'px'}">
      <slot name="header">header</slot>
    </div>
    <div class="body">
      <div class="aside" :style="{width:width+'px'}">
        <slot name="aside">aside</slot>
      </div>
      <div class="main">
        <slot name="main">body</slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props:['height','width']
})
</script>
<style lang="stylus" scoped>
.wrap{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
}
.header{
  // height: 100px;
}
.body{
  flex-grow: 1;
  display: flex;
  
}
.aside{
  // width: 200px;
  overflow: auto;
}
.main{
  flex-grow: 1;
  overflow: auto;
}
</style>
