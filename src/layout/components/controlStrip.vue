<template>
  <div id="control_strip">
    <div class="control_strip_container">
      <div class="container_left">
        <div class="operate_btn">
          <span>功能导航</span>
          <i class="el-icon-arrow-down arrowDeg"></i>
        </div>
      </div>
      <div class="container_right">
        <!-- 语言组件 -->
        <Lang></Lang>
        <el-divider direction="vertical"></el-divider>
        <!-- 全屏组件 -->
        <ScreenFull class="operate_btn"></ScreenFull>
        <el-divider direction="vertical"></el-divider>
        <div class="operate_btn">退出</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ControlStrip',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang='less' scoped>
#control_strip {
  width: 100%;
  min-height: 30px;
  background-color: var(--color);
  .control_strip_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    height: 30px;
    margin: 0 auto;
    font-size: 12px;
    color: hsla(0,0%,100%,.8);
    .container_right {
      display: flex;
      .el-divider--vertical {
        margin: 0 12px;
        background-color: hsla(0,0%,100%,.8);
      }
    }
  }
  .operate_btn {
    cursor: pointer;
    &:hover {
      color: #fff;
      text-decoration: underline;
    }
    &:hover .arrowDeg {
      transform: rotate(-180deg);
      transition: all 0s;
    }
  }
}
</style>
