<template>
  <div>
    <div @click="toggleScreen">{{ isFull ? '退出全屏' : '全屏' }}</div>
  </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
  name: 'ScreenFull',
  data () {
    return {
      isFull: false // 是否全屏
    }
  },
  created () {
    this.watchScreen() // 组件创建之后，立即监听网页全屏状态
  },
  destroyed () {
    screenfull.off('change') // 组件销毁解绑全屏监控事件
  },
  methods: {
    // 开启 / 关闭 全屏
    toggleScreen () {
      // 判断浏览器是否支持全屏功能
      if (!screenfull.isEnabled) { // screenfull.isEnabled 是 false 说明浏览器不支持
        return this.$message.error('您的浏览器不支持全屏功能')
      }
      // 支持就调用 toggle 方法开启 / 关闭全屏
      screenfull.toggle()
    },
    // 监控网页是否进入全屏状态
    watchScreen () {
      screenfull.on('change', () => {
        console.log('当前网页状态', screenfull.isFullscreen)
        this.isFull = screenfull.isFullscreen
      })
    }
  }
}
</script>

<style lang='less' scoped></style>
