<template>
  <div>
    <h3>python3与python2(逐渐升级兼容python3)不兼容</h3>
    <h4>#_*_ coding:utf8 _*_</h4>
    <span>避免中文出现乱码</span>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data(){
    return {
      render:`
      ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example')
      );`,
      jsx:`
      ReactDOM.render(
        <div>
        {
          names.map(function (name) {
            return <div>Hello, {name}!</div>
          })
        }
        </div>,
        document.getElementById('example')
      );
      `,
      variabel:`
      var arr = [
        <h1>Hello world!</h1>,
        <h2>React is awesome</h2>,
      ];
      ReactDOM.render(
        <div>{arr}</div>,
        document.getElementById('example')
      );
      `
    }
  },
  mounted(){
    let win:any = window;
    win.copy();
  }
})
</script>
