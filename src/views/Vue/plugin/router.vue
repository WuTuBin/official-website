<template>
  <div>
    <span>安装：npm install vue-router</span>
    <pre>
      使用：
      1.引入vue-router,组件
      2.创建字典routes,
      3.使用字典配置，new一个路由器router
      4.把路由器引入vue的根实例

      &lt;!-- &lt;router-link&gt; 默认会被渲染成一个 `&lt;a&gt;` 标签 --&gt;
      &lt;router-link to="/foo"&gt;Go to Foo&lt;/router-link&gt;

      &lt;!-- 路由出口 --&gt;
      &lt;!-- 路由匹配到的组件将渲染在这里 --&gt;
      &lt;router-view&gt;&lt;/router-vie&gt;
    </pre>
    <p>
      提醒一下，当使用路由参数时，例如从 /user/foo 导航到 /user/bar，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。
    </p>
    
  </div>

</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  created(){
    console.log("1:"+window.history.length)
  }
})
</script>
