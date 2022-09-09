<template>
  <div id="app">
    <!-- 一级路由挂载点 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
#app {
  height: 100%;
  width: 100%;
}
</style>
