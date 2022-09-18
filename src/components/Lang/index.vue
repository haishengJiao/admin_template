<template>
  <div>
    <el-dropdown @command="changeLanguage" trigger="click">
      <div class="operate_btn">语言</div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="zh">中文</el-dropdown-item>
        <el-dropdown-item command="en">en</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Lang',
  data () {
    return {}
  },
  methods: {
    changeLanguage (lang) {
      console.log(lang)
    }
  }
}
</script>

<style lang='less' scoped>
.operate_btn {
    font-size: 12px;
    color: hsla(0,0%,100%,.8);
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
</style>
