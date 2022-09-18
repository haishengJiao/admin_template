<template>
  <div id="app_main">AppMain
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang='less' scoped>
#app_main {
  width: 100%;
  height: 100%;
  padding: 20px 20px;
  overflow-y: scroll;
  background-color: #fff;
}
</style>
