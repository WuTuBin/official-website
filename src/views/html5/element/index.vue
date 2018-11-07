<template>
  <div>
    <h2>可替换元素（replaced element）</h2>
    <p>CSS 里，可替换元素（replaced element）的展现不是由CSS来控制的。这些元素是一类 外观渲染独立于CSS的 外部对象。 典型的可替换元素有 &lt;img&gt;、 &lt;object&gt;、 &lt;video&gt; 和 表单元素，如&lt;textarea&gt;、 &lt;input&gt; 。 某些元素只在一些特殊情况下表现为可替换元素，例如 &lt;audio&gt; 和 &lt;canvas&gt; 。 通过 CSS content 属性来插入的对象 被称作 匿名可替换元素（anonymous replaced elements）。</p>
    <p>CSS在某些情况下会对可替换元素做特殊处理，比如计算外边距和一些auto值。</p>
    <p>需要注意的是，一部分（并非全部）可替换元素，本身具有尺寸和基线（baseline），会被像vertical-align之类的一些 CSS 属性用到。</p>
  </div>
</template>
