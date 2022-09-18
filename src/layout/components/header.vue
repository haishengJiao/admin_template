<template>
  <div id="header">
    <div class="nav_logo"></div>
    <div class="nav_header_nav">
      <!-- <el-menu theme="mxy" :default-active="navActive" mode="horizontal" @select="">
        <el-menu-item :index="item.index" v-for="(item, eq) in navMenu" :key="eq">
          <a v-if="item.redirectAdmin" :href="item.path" class="menu-link">{{item.name}}</a>
          <router-link v-else :to="item.path" class="menu-link">{{item.name}} </router-link>
        </el-menu-item>
      </el-menu> -->
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item v-for="item in navMenu" :key="item.index">
           <router-link :to="item.path" class="menu-link">{{item.name}} </router-link>
          <!-- {{ item.name }} -->
        </el-menu-item>
      </el-menu>
    </div>
    <div class="nav_user_info"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      navMenu: [
        {
          name: '首页',
          path: '/admin',
          index: '0'
        },
        {
          name: 'element',
          path: '/element',
          index: '1'
        },
        {
          name: '设置',
          path: '/settings',
          index: '2'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang='less' scoped>
#header {
  width: 1200px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  .nav_logo {
    width: 200px;
    height: 60px;
    background-color: #8df;
  }
  .nav_header_nav {
    flex: 1;
    height: 60px;
    background-color: orange;
  }
  .nav_user_info {
    height: 40px;
    width: 200px;
    background-color: pink;
  }
}
</style>
