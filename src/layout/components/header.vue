<template>
  <div id="header">
    <div class="logo">logo</div>
    <div class="path">
      <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">
          <div>首页</div>
          <div class="path_underline"></div>
        </el-menu-item>
        <el-menu-item index="2">
          <div>业务中心</div>
          <div class="path_underline"></div>
        </el-menu-item>
        <el-menu-item index="3">
          <div>通讯录</div>
          <div class="path_underline"></div>
        </el-menu-item>
        <el-menu-item index="4">
          <div>设置</div>
          <div class="path_underline"></div>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="info">info</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang='less' scoped>
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 60px;
  margin: 0 auto;
  .logo {
    width: 100px;
    height: 50px;
    background-color: #8df;
  }
  .path {

    display: flex;
    align-items: center;
    height: 100%;
    .el-menu.el-menu--horizontal {
      border-bottom: none;
    }
    .el-menu--horizontal>.el-menu-item {
      border-bottom: none;
      font-size: 16px;
      color: #666;
    }
    .el-menu--horizontal .el-menu-item:hover {
      color: var(--hoverColor);
    }
    .el-menu--horizontal>.el-menu-item.is-active {
      border-bottom: none;
      color: var(--color);
    }
    .is-active .path_underline {
      position: absolute;
      left: 50%;
      bottom: 10px;
      width: 30px;
      height: 4px;
      border-radius: 3px;
      background-color: var(--color);
      transform: translateX(-50%);
    }
  }
  .info {
    width: 180px;
    height: 40px;
    background-color: pink;
  }
}
</style>
