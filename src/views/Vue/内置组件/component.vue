<template>
  <div>
    <h4>Props：</h4>
    <ul>
      <li>is - string | ComponentDefinition | ComponentConstructor</li>
      <li>inline-template - boolean</li>
    </ul>
    <div>
      <span>用法：</span>
      <p>渲染一个“元组件”为动态组件。依 is 的值，来决定哪个组件被渲染。</p>
    </div>
    <pre>

      <!-- 动态组件由 vm 实例的属性值 `componentId` 控制 -->
      &lt;component :is="componentId"&gt;&lt;/component&gt;

      <!-- 也能够渲染注册过的组件或 prop 传入的组件 -->
      &lt;component :is="$options.components.child"&gt;&lt;/component&gt;
    </pre>
  </div>
</template>
