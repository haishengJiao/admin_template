<template>
  <div id="sidebar">sidebar
    <div v-for="item in 50" :key="item">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang='less' scoped>
#sidebar {
  width: 100%;
  height: 100%;
  padding: 20px 0;
  overflow-y: scroll;
  background-color: #fff;
}
</style>
