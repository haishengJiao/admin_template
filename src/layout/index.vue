<template>
  <div id="app_wrapper">
    <div class="app_header">
      <!-- 功能栏 -->
      <ControlStrip></ControlStrip>
      <!-- 头部 -->
      <Header></Header>
    </div>
    <div class="app_container">
      <div class="sidebar_container">
        <!-- 侧边栏 -->
        <Sidebar></Sidebar>
      </div>
      <div class="main_container">
        <!-- 主区域 -->
        <AppMain></AppMain>
      </div>
    </div>
  </div>
</template>

<script>
import ControlStrip from './components/controlStrip.vue'
import Header from './components/header.vue'
import Sidebar from './components/sidebar.vue'
import AppMain from './components/appMain.vue'

export default {
  name: 'Layout',
  components: {
    ControlStrip,
    Header,
    Sidebar,
    AppMain
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang='less' scoped>
#app_wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: hidden;
  .app_header {
    min-width: 1200px;
    background-color: #fff;
  }
  .app_container {
    flex: 1;
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0 auto;
    width: 1200px;
    height:  calc(100vh - 90px);
    .sidebar_container {
      margin-right: 10px;
      width: 160px;
    }
    .main_container {
      flex: 1;
    }
  }
}
</style>
