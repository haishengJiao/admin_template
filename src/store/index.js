import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import getters from './getters'
import subjectColor from './modules/subjectColor.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 配置持久化
  plugins: [
    createPersistedState({
      key: 'admin_template_storage', // 本地存储名
      paths: ['subjectColor'] // 指定模块
    })
  ],
  modules: {
    subjectColor
  },
  getters
})

export default store
