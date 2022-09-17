import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/permission.js' // 路由前置守卫
import '@/style/index.less' // 样式
import pluninComponent from './components/index.js' // 全局注册组件

Vue.use(ElementUI)
Vue.use(pluninComponent)

Vue.config.productionTip = false

document.body.style.setProperty('--color', store.getters.color || 'red')
document.body.style.setProperty('--hoverColor', store.getters.hoverColor || 'blue')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
