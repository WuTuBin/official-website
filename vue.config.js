module.exports = {
  baseUrl: "/",//基本路径
  lintOnSave:false,//禁止eslint
  outputDir:"dist",//build输出的目录
  devServer: {
    // open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 3711,
    proxy: null, // 设置代理
   },
}