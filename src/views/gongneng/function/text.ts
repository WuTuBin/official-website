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
export default {htmldecode,htmlcode}