<template>
  <div>
    <h2>flex.css，轻量级移动端布局神器，让你用最快的速度，并且用最优雅的方式完成复杂的移动端布局，让你专注于编写内容呈现效果，完美兼容Android，ios，微信端。</h2>
    <span>flex只有两个属性，一个是容器属性flex，一个是子元素属性flex-box </span>
    <h4>flex属性大全</h4>
    <pre>
    dir：主轴方向
      top：从上到下
      right：从右到左
      bottom：从上到下
      left：从左到右（默认）
    main：主轴对齐方式
      right：从右到左
      left：从左到右（默认）
      justify：两端对齐
      center：居中对齐
    cross：交叉轴对齐方式
      top：从上到下
      bottom：从上到下
      baseline：跟随内容高度对齐
      center：居中对齐
      stretch：高度并排铺满（默认）
    box：子元素设置
      mean：子元素平分空间
      first：第一个子元素不要多余空间，其他子元素平分多余空间
      last：最后一个子元素不要多余空间，其他子元素平分多余空间
      justify：两端第一个元素不要多余空间，其他子元素平分多余空间
    </pre>
    <h4>flex-box属性说明</h4>
    <pre>
      取值范围(0-10)，单独设置子元素多余空间的如何分配，设置为0，则子元素不占用多余的多余空间 
      多余空间分配 = 当前box值/子元素的box值相加之和
    </pre>
    <pre class="code"><code>
      {{code}}
    </code></pre>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data(){
    return {
      code:`
      <div flex="dir:left main:left cross:top">
        <div flex-box="0"></div>
      </div>`
    }
  },
  created(){
    console.log("1:"+window.history.length)
  },
  mounted(){
    let win:any = window
    win.copy()
  }
})
</script>
