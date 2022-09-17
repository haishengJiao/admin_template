// 使用 vue 插件形式注册全局组件
// vue 插件写法： {install (Vue) {}} => 插件需要安装才能使用 => 去入口 main.js 使用 Vue.use(插件)

// 导入要全局注册的组件
import ScreenFull from './ScreenFull'
import Lang from './Lang'

// 准备一个数组，存放被注册的组件
const componentsArr = [ScreenFull, Lang]

export default {
  // Vue 框架的构造函数
  install (Vue) {
    // 全局注册组件
    // 循环数组批量注册多个组件
    componentsArr.forEach(item => {
      // 为注册组件添加 name
      // cp.name 作为注册组件的标签名
      Vue.component(item.name, item)
    })
    // 注册全局方法 => 挂载到 vue 实例的原型链上了
    // Vue.prototype.myfn = () => {
    //   console.log(123)
    // }
  }
}
