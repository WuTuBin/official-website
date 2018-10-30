<template>
  <div>
    <h2>安装vue-devtools</h2>
    <h4>第一步：找到vue-devtools的github项目，并将其clone到本地. vue-devtools</h4>
    <pre class="code"><code>
    git clone https://github.com/vuejs/vue-devtools.git
    </code></pre>
    <h4>第二步：安装项目所需要的npm包</h4>
    <pre class="code"><code>
    npm install //如果太慢的话，可以安装一个cnpm, 然后命令换成 cnpm install
    </code></pre>
    <h4>第三步：编译项目文件</h4>
    <pre class="code"><code>
    npm run build
    </code></pre>
    <h4>第四步：添加至chrome游览器</h4>
    <pre class="code"><code>
    游览器输入地址“chrome://extensions/”进入扩展程序页面，点击“加载已解压的扩展程序...”按钮，选择vue-devtools>shells下的chrome文件夹。
    /**
    *如果看不见“加载已解压的扩展程序...”按钮，则需要勾选“开发者模式”。
    */
    </code></pre>
    <h4>第五步：重新打开浏览器</h4>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
