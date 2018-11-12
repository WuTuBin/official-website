let htmldecode = `
function (str) {
  var s = ''
  if (str) {
    if (str.length == 0) return ''
    else {
      s = str.replace(/&amp;/g, '&')
      s = s.replace(/&lt;/g, '<')
      s = s.replace(/&gt;/g, '>')
      s = s.replace(/&nbsp;/g, ' ')
      s = s.replace(/&#39;/g, "'")
      s = s.replace(/&quot;/g, '"')
      return s
    }
  }
}
`
let htmlcode = `
function (str) {
  var s = ''
  if (str) {
    if (str.length == 0) return ''
    else {
      s = s.replace(/</g, '&lt;')
      s = s.replace(/>/g, '&gt;')
      return s
    }
  }
}
`
let copy = `
let str = ''
var save = function (e) {
  e.clipboardData.setData('text/plain', str); //下面会说到clipboardData对象
  e.preventDefault(); //阻止默认行为
}
document.addEventListener('copy',save);
document.execCommand('copy')
`
export default {htmldecode,htmlcode,copy}