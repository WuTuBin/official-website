<template>
  <div>
    <!-- <layout height="100" width="200">
      <div slot=""></div>
    </layout> -->
    <object classid="clsid:CA8A9780-280D-11CF-A24D-444553540000" width="1000" height="1200" border="0">
      <param name="_Version" value="65539">
      <param name="_ExtentX" value="20108">
      <param name="_ExtentY" value="10866">
      <param name="_StockProps" value="0">
      <param name="SRC" value="@/assets/bbbb.pdf">
      <object data="@/assets/bbbb.pdf" type="application/pdf" width="1000" height="1200">
      </object>
    </object>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import layout from "./components/layout.vue";
export default Vue.extend({
  components: { layout }
});
</script>
<style lang="stylus" scoped>
</style>
