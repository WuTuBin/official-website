<template>
  <div>
    <h4>标签的width和height以及style.width和style.height的区别</h4>
    <pre>
      Canvas 是一个画板和一张画纸，画板相当于一个容器，画图/作业是在画纸上进行的，

      画板和画纸的默认宽高是300*150，当画纸与画板宽高相等时，图像不会被拉伸，当画纸与画板宽高不一样时，图像就会被拉伸（变形）。

      1， width 和 height 属性是设定画板和画纸的宽高，

      如： width=”300” height=”300” 即画板的宽高是300*300，画纸的宽高也是300*300，作业的300*300 的对角线图像就不会被拉伸

      2， style样式 里设定的是仅画板的宽高，画纸的宽高还是为默认值300*150，
      Canvas元素默认宽 300px, 高 150px, 设置其宽高可以使用如下方法：
      方法一：
      1 &lt;canvas width="500" height="500"&gt;amp;&lt;/canvas&gt;
      方法二：使用HTML5 Canvas API操作
      1 var canvas = document.getElementById('欲操作canvas的id');
      2 canvas.width = 500;
      3 canvas.width = 500;

      若通过如下方法设置宽高，那么Canvas元素将由原来大小被拉伸到所设置的宽高：
      方法一：使用CSS 会被拉伸
      1 #欲操作canvas的id｛
      2     width:1000px;
      3     height:1000px;
      4 ｝

      也包含了行间样式中的 style="" 。也就是上面的例子，也会产生拉伸的情况。
      方法二：使用HTML5 Canvas API操作 会被拉伸
      1 var canvas = document.getElementById('欲操作canvas的id');
      2 canvas.style.width = "1000px";
      3 canvas.style.height = "1000px";
      方法三 ：用jquery的$("#id").width(500);会被拉伸

      其它：canvas的width和height也不能用百分比表示。canvas会将百分值当成数值显示
    </pre>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
