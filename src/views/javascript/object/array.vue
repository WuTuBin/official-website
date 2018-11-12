<template>
  <div>
    <h3>改变原数组</h3>
    <h4>push()</h4>
    <span> 可向数组的末尾添加一个或多个元素，并返回新的长度。末尾添加，返回的是长度，会改变原数组。</span>
    <h4>pop()</h4>
    <span> 用于删除并返回数组的最后一个元素。返回最后一个元素，会改变原数组。</span>
    <h4>shift()</h4>
    <span> 用于把数组的第一个元素从其中删除，并返回第一个元素的值。返回第一个元素，改变原数组。</span>
    <h4>unshift()</h4>
    <span> 可向数组的开头添加一个或更多元素，并返回新的长度。返回新长度，改变原数组。</span>
    <h4>splice()</h4>
    <span> 可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。splice() 方法会直接对数组进行修改。</span>
    <h4>reverse()</h4>
    <span> 用于颠倒数组中元素的顺序。返回的是颠倒后的数组，会改变原数组。</span>

    <h3>不改变原数组</h3>
    <h4>concat()</h4>
    <span> 用于连接两个或多个数组。该方法不会改变现有的数组，仅会返回被连接数组的一个副本。</span>
    <h4>join()</h4>
    <span> 用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的，默认使用','号分割，不改变原数组。</span>
    <h4>slice()</h4>
    <span> 返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。返回选定的元素，该方法不会修改原数组。</span>
    <h4>sort()</h4>
    <span> 按照 Unicode code 位置排序，默认升序</span>
    <h4>indexOf 和 lastIndexOf</h4>
    <span> 都接受两个参数：查找的值、查找起始位置<br />
      不存在，返回 -1 ；存在，返回位置。indexOf 是从前往后查找， lastIndexOf 是从后往前查找。</span>

    <h3>数组遍历</h3>
    <h4>every(fn(el,index,array))</h4>
    <span>对数组的每一项都运行给定的函数，每一项都返回 ture,则返回 true</span>
    <h4>some(fn(el,index,array))</h4>
    <span>对数组的每一项都运行给定的函数，任意一项都返回 ture,则返回 true</span>
    <h4>filter(fn(el))</h4>
    <span>对数组的每一项都运行给定的函数，返回 结果为 ture 的项组成的数组</span>
    <h4>map(fn(el))</h4>
    <span>对数组的每一项都运行给定的函数，返回每次函数调用的结果组成一个新数组</span>
    <h4>forEach(fn(el))</h4>
    <span>对数组的每一项都运行给定的函数，无返回</span>

    <h3>es6</h3>
    <h4>find(fn(el))</h4>
    <span>传入一个回调函数，找到数组中符合当前搜索规则的第一个元素，返回它，并且终止搜索。</span>
    <h4>findIndex(fn(el))</h4>
    <span>传入一个回调函数，找到数组中符合当前搜索规则的第一个元素，返回它的下标，终止搜索。</span>
    <h4>fill(value,start,end)</h4>
    <span>用新元素替换掉数组内的元素，可以指定替换下标范围。<i style="color:red">改变原数组</i></span>
    <h4>copyWithin(target,start,end)</h4>
    <span>选择数组的某个下标，从该位置开始复制数组元素，默认从0开始复制。也可以指定要复制的元素范围。<i style="color:red">改变原数组</i></span>
    <h4>from(object/array)</h4>
    <span>将类似数组的对象（array-like object）和可遍历（iterable）的对象转为真正的数组</span>
    <h4>of(el[,el...])</h4>
    <span>用于将一组值，转换为数组。这个方法的主要目的，是弥补数组构造函数 Array() 的不足。因为参数个数的不同，会导致 Array() 的行为有差异。</span>
    <h4>entries() 返回迭代器：返回键值对</h4>
    <pre class="code"><code>
      //数组
      const arr = ['a', 'b', 'c'];
      for(let v of arr.entries()) {
        console.log(v)
      }
      // [0, 'a'] [1, 'b'] [2, 'c']

      //Set
      const arr = new Set(['a', 'b', 'c']);
      for(let v of arr.entries()) {
        console.log(v)
      }
      // ['a', 'a'] ['b', 'b'] ['c', 'c']

      //Map
      const arr = new Map();
      arr.set('a', 'a');
      arr.set('b', 'b');
      for(let v of arr.entries()) {
        console.log(v)
      }
      // ['a', 'a'] ['b', 'b']
    </code></pre>
    <h4>values() 返回迭代器：返回键值对的value</h4>
    <pre class="code"><code>
      //数组
      const arr = ['a', 'b', 'c'];
      for(let v of arr.values()) {
        console.log(v)
      }
      //'a' 'b' 'c'

      //Set
      const arr = new Set(['a', 'b', 'c']);
      for(let v of arr.values()) {
        console.log(v)
      }
      // 'a' 'b' 'c'

      //Map
      const arr = new Map();
      arr.set('a', 'a');
      arr.set('b', 'b');
      for(let v of arr.values()) {
        console.log(v)
      }
      // 'a' 'b'
    </code></pre>
    <h4>keys() 返回迭代器：返回键值对的key</h4>
    <pre class="code"><code>
      //数组
      const arr = ['a', 'b', 'c'];
      for(let v of arr.keys()) {
        console.log(v)
      }
      // 0 1 2

      //Set
      const arr = new Set(['a', 'b', 'c']);
      for(let v of arr.keys()) {
        console.log(v)
      }
      // 'a' 'b' 'c'

      //Map
      const arr = new Map();
      arr.set('a', 'a');
      arr.set('b', 'b');
      for(let v of arr.keys()) {
        console.log(v)
      }
      // 'a' 'b'
    </code></pre>
    <h4>includes(value,start)</h4>
    <span>判断数组中是否存在该元素，参数：查找的值、起始位置，可以替换 ES5 时代的 indexOf 判断方式。indexOf 判断元素是否为 NaN，会判断错误。</span>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  mounted() {
    let win: any = window;
    win.copy();
  }
});
</script>
