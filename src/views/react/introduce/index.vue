<template>
  <div>
    <h3>使用</h3>
    <h4>在html页面</h4>
    <pre>
      需要引入如下文件：
      &lt;script src="../build/react.js"&gt;&lt;/script&gt;&lt;!--react核心--&gt;
      &lt;script src="../build/react-dom.js"&gt;&lt;/script&gt;&lt;!--react操作dom--&gt;
      &lt;script src="../build/browser.min.js"&gt;&lt;/script&gt;&lt;!--支持babel,将 JSX 语法转为 JavaScript 语法，这一步很消耗时间，实际上线的时候，应该将它放到服务器完成--&gt;
    </pre>
    <h4>react脚手架</h4>
    <pre>
      npm install creat-react-app -g
      create-react-app my-app
      cd my-app
      npm start
    </pre>
    <h4>React 独有的 JSX 语法，跟 JavaScript 不兼容。凡是使用 JSX 的地方，都要加上 type="text/babel"</h4>
    <pre class="code"><code>
      {{jsx}}
    </code></pre>
    <span>上面代码体现了 JSX 的基本语法规则：遇到 HTML 标签（以 &lt; 开头），就用 HTML 规则解析；遇到代码块（以 { 开头），就用 JavaScript 规则解析。</span>
    <pre class="code"><code>
      {{variabel}}
    </code></pre>
    <span>JSX 允许直接在模板插入 JavaScript 变量。如果这个变量是一个数组，则会展开这个数组的所有成员</span> 
    <h4>ReactDOM.render()</h4>
    <span>ReactDOM.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。</span>
    <pre class="code"><code>
      {{render}}
    </code></pre>
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
