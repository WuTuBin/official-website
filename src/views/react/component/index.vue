<template>
  <div>
    <h4>React 允许将代码封装成组件（component），然后像插入普通 HTML 标签一样，在网页中插入这个组件。React.createClass 方法就用于生成一个组件类</h4>
    <pre class="code"><code>
      {{comp}}
    </code></pre>
    <span>上面代码中，变量 HelloMessage 就是一个组件类。模板插入 <HelloMessage /> 时，会自动生成 HelloMessage 的一个实例（下文的"组件"都指组件类的实例）。所有组件类都必须有自己的 render 方法，用于输出组件。
    <br/>
    注意，组件类的第一个字母必须大写，否则会报错，比如HelloMessage不能写成helloMessage。另外，组件类只能包含一个顶层标签，否则也会报错。</span>
    <h4>this.props.children</h4>
    <span>this.props 对象的属性与组件的属性一一对应，但是有一个例外，就是 this.props.children 属性。它表示组件的所有子节点</span>
    <pre class="code"><code>
      {{children}}
    </code></pre>
    <span>这里需要注意， this.props.children 的值有三种可能：如果当前组件没有子节点，它就是 undefined ;如果有一个子节点，数据类型是 object ；如果有多个子节点，数据类型就是 array</span>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data(){
    return {
      comp:`
      var HelloMessage = React.createClass({
        render: function() {
          return <h1>Hello {this.props.name}</h1>;
        }
      });

      ReactDOM.render(
        <HelloMessage name="John" />,
        document.getElementById('example')
      );
      `,
      children:`
      var NotesList = React.createClass({
        render: function() {
          return (
            <ol>
            {
              React.Children.map(this.props.children, function (child) {
                return <li>{child}</li>;
              })
            }
            </ol>
          );
        }
      });

      ReactDOM.render(
        <NotesList>
          <span>hello</span>
          <span>world</span>
        </NotesList>,
        document.body
      );
      `
    }
  },
  mounted(){
    let win:any = window;
    win.copy()
  }
})
</script>
