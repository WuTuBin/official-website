<template>
  <div>
    <h1>基本类型</h1>
    <h2>介绍</h2>
    <p>为了让程序有价值，我们需要能够处理最简单的数据单元：数字，字符串，结构体，布尔值等。 TypeScript支持与JavaScript几乎相同的数据类型，此外还提供了实用的枚举类型方便我们使用。</p>
    <h2>布尔值</h2>
    <p>最基本的数据类型就是简单的true/false值，在JavaScript和TypeScript里叫做boolean（其它语言中也一样）。</p>
    <pre class="code"><code>
    let isDone: boolean = false;
    </code></pre>
    <h2>数字</h2>
    <p>和JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是 number。 除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量。</p>
    <pre class="code"><code>
    let decLiteral: number = 6;
    let hexLiteral: number = 0xf00d;
    let binaryLiteral: number = 0b1010;
    let octalLiteral: number = 0o744;
    </code></pre>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>
<style lang="stylus" scoped>

</style>
