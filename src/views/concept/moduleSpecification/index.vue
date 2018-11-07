<template>
  <div>
    <h2>ES6模块的import和export</h2>
    <p>ES6之前已经出现了js模块加载的方案，最主要的是CommonJS和AMD规范。commonjs主要应用于服务器，实现同步加载，如nodejs。AMD规范应用于浏览器，如requirejs，为异步加载。同时还有CMD规范，为同步加载方案如seaJS。</p>
    <p>ES6在语言规格的层面上，实现了模块功能，而且实现得相当简单，完全可以取代现有的CommonJS和AMD规范，成为浏览器和服务器通用的模块解决方案。</p>
    <pre class="code"><code>
    // a.js

    var sex="boy";
    var echo=function(value){
    　　console.log(value)
    }
    export {sex,echo}  
    //通过向大括号中添加sex，echo变量并且export输出，就可以将对应变量值以sex、echo变量标识符形式暴露给其他文件而被读取到
    //不能写成export sex这样的方式，如果这样就相当于export "boy",外部文件就获取不到该文件的内部变量sex的值，因为没有对外输出变量接口,只是输出的字符串。  
    </code></pre>
    <pre class="code"><code>
      // b.js
      通过import获取a.js文件的内部变量，{}括号内的变量来自于a.js文件export出的变量标识符。
      import {sex,echo} from "./a.js" 
      console.log(sex)   // boy
      echo(sex) // boy  
    </code></pre>
    <span>a.js文件也可以按如下export语法写，但不如上边直观，不太推荐。</span>
    <pre class="code"><code>
      // a.js
      export var sex="boy";
      export var echo=function(value){
      　　console.log(value)
      }

      //因为function echo(){}等价于 var echo=function(){}所以也可以写成
      export function echo(value){
      　　　console.log(value)
      }
    </code></pre>
    <h3>以上是export与module的基本用法，再进行拓展学习</h3>
    <span>前面的例子可以看出，b.js使用import命令的时候，用户需要知道a.js所暴露出的变量标识符，否则无法加载。可以使用export default命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名。</span>
    <pre class="code"><code>
      //a.js
      var sex="boy";
      export default sex（sex不能加大括号）
      //原本直接export sex外部是无法识别的，加上default就可以了.但是一个文件内最多只能有一个export default。
      其实此处相当于为sex变量值"boy"起了一个系统默认的变量名default，自然default只能有一个值，所以一个文件内不能有多个export default。
    </code></pre>
    <pre class="code"><code>
      // b.js
      本质上，a.js文件的export default输出一个叫做default的变量，然后系统允许你为它取任意名字。所以可以为import的模块起任何变量名，且不需要用大括号包含
      import any from "./a.js"
      import any12 from "./a.js" 
      console.log(any,any12)   // boy,boy
    </code></pre>
  </div>
</template>

<script>
export default {};
</script>
<style lang="stylus" scoped>
</style>

