'use strict'
// node 代码 => 覆盖 vue-cli 配置 （vue-cli 的背后就是 webpack）
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

// console.log('环境变量', process.env) // 在 npm run dev 的时候可以看到输出
const port = process.env.port || process.env.npm_config_port || 9528 // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // 代理跨域的配置
    proxy: {
      // 当我们的本地的请求 有/api的时候，就会代理我们的请求地址向另外一个服务器发出请求
      '/api': {
        // target: 'http://ihrm-java.itheima.net', // 跨域请求的地址
        target: 'http://8.142.65.7:3000',
        changeOrigin: true // 只有这个值为true的情况下 才表示开启跨域(默认true)
      }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
