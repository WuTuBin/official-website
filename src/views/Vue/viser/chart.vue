<template>
  <div>
    <h3>图表组件，内部生成了一个 chart 实例，包含众多子组件的加载和更新。&lt;v-chart&gt;</h3>
    <h4>属性：</h4>
    <span>height?: number</span>
    <p>描述：指定图表的高度，单位为 'px'。</p>
    <span>width?: number;</span>
    <p>描述：指定图表的宽度，默认单位为 'px'，当 forceFit: true 时宽度不生效。</p>
    <span>forceFit?: boolean;</span>
    <p>描述：图表的宽度自适应开关，默认为 false，设置为 true 时表示自动取 dom（实例容器）的宽度。</p>
    <span>animate?: boolean | object;</span>
    <p>描述：图表动画开关，默认为 true，即开启动画。</p>
    <span>background?: IBackground;</span>
    <p>描述：设置图表整体的边框和背景样式，是一个对象，</p>
    <pre>
      Object 类型 IBackground

      interface IBackground {
        stroke: string,//边框颜色
        strokeOpacity: number,//边框透明度
        lineWidth: number,//边框宽度
        fill: string,//背景色
        fillOpactiy: number,//背景透明度（无反应）
        radius: number,//边框圆角
      }
    </pre>
    <span>plotBackground?: IBackground;</span>
    <p>描述：图表绘图区域的边框和背景样式，是一个对象，</p>
    <pre>
      类型 IBackground

      interface IBackground {
        stroke: string,//边框颜色
        strokeOpacity: number,//边框透明度
        lineWidth: number,//边框宽度
        fill: string,//背景色
        fillOpactiy: number,//背景透明度（无反应）
        radius: number,//边框圆角
      }
    </pre>
    <span>padding?: number | object | number[] | string;</span>
    <p>描述：图表内边距。有如下配置格式。</p>
    <pre>
      padding 为数字以及数组类型时使用方法同 CSS 盒模型。

      padding 中存在 'auto'时会自动计算边框，目前仅考虑 axis 和 legend 占用的边框。

      示例：

      padding: [ 20, 30, 20, 30]
      padding: 20
      padding: { top: 20, right: 30, bottom: 20, left: 30 }
      padding: 'auto'
      padding: [20, 'auto', 30, 'auto'] // 暂未支持
      暂时不支持设置百分比，如 padding: [ '20%', '30%' ]，该百分比相对于整个图表的宽高。
    </pre>
    <span>data?:Array/DataSet</span>
    <p>描述：设置图表的数据源，data 是一个包含 JSON 对象的数组或者 DataSet.View 对象。</p>
    <span>scale?:类型：Object</span>
    <p>描述：配置数据比例尺，该配置会影响数据在图表中的展示方式。</p>
  </div>
</template>
<script>
export default {};
</script>
