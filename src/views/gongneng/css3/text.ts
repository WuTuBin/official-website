let single = `
white-space: nowrap; //强制文本在一行内输出
overflow: hidden; //隐藏溢出部分
text-overflow: ellipsis; //对溢出部分加上...
`
let multi = `
display: -webkit-box !important;
overflow: hidden;
text-overflow: ellipsis;
word-break: break-all;
/*! autoprefixer: off */
-webkit-box-orient: vertical;
/*! autoprefixer: on */
/*vue打包后，编译时会自动过滤掉 -webkit-box-orient: vertical；所以上面两个注释可解决，不可去掉*/
-webkit-line-clamp: 2;
`
let scroll = `
::-webkit-scrollbar {
  width:0px;
  height:0px;
}
`
export default {single,multi,scroll}