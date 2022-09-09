// 权限配置文件

// 引入路由实例
import router from './router'
// import router, { asyncRoutes } from './router'
// 引入 vuex store 实例
// import store from './store'

// 白名单  （例外）=> 不需要 token 也能访问的页面
// const whiteList = ['/login', '/404']

// 引入一份进度条插件
// import NProgress from 'nprogress' // progress bar
// 引入进度条样式
// import 'nprogress/nprogress.css' // progress bar style
// 是否开启页面右上角加载的小圈
// NProgress.configure({ showSpinner: false }) // NProgress Configuration

// 路由前置守卫，控制访问页面（添加前门保安）
// to 去哪（访问哪个页面）
// from 从哪来（从哪个页面跳转过来）
// next function 放行
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    // 动态设置 title
    document.title = to.meta.title
  }
  next()
  // start progress bar  开启进度条
  // NProgress.start()

  // 根据是否有 token 进行判断
  // 1. 有 token
  // 1.1 判断是否为登录页，避免重复登录 => 直接跳首页
  // 1.2 不是登录页 => 放行
  // 2. 没有 token
  // 2.1 判断是否在白名单（例外：登录页。404页面） => 是放行
  // 2.2 不在白名单 => 跳转到首页
  // if (store.getters.token) {
  //   // 有 token
  //   if (to.path === '/login') {
  //     next('/')
  //   } else {
  //     next()
  //     // 判断如果没有用户信息才进行调用
  //     if (!store.getters.name) {
  //       // 放行后，获取登录人信息
  //       const roles = await store.dispatch('user/getUserAction')
  //       /**
  //        * 权限控制：页面访问控制
  //        * 1. 获取当前登录人的访问权限 => menus (身份标识)
  //        * 2. 根据 menus 中页面的身份标识，过滤动态路由
  //        * 3. 调用 router 实例 addRouters 方法动态添加
  //        */
  //       console.log('获取登录人权限点身份标识数据：', roles.menus)
  //       // canLook 当前登录人可以查看的页面路由规则
  //       const canLook = asyncRoutes.filter(item => {
  //         console.log('每个动态路由', item)
  //         // 根据遍历的动态路由 children 中第一个子路由的 name 判断，是否在 roles.menus 中 => 有就留下
  //         return roles.menus.includes(item.children[0].name)
  //       })
  //       console.log('当前登录人可以看到的页面：', canLook)
  //       // 存储菜单数据
  //       store.commit('menu/setList', canLook)
  //       // 动态添加路由规则 => 生效
  //       // 路由配置name设置可能和后台返回权限点标识不一致，需要修改一致
  //       // router.addRoutes(canLook)
  //       router.addRoutes([...canLook, { path: '*', redirect: '/404', hidden: true }])
  //     }
  //   }
  // } else {
  // 没有 yoken
  // includes() 方法:用于判断字符串是否包含指定的子字符串。
  //   if (whiteList.includes(to.path)) {
  //     // 在白名单中
  //     next()
  //   } else {
  //     // 不在白名单中
  //     next('/login')
  //   }
  // }
  // finish progress bar   关闭进度条
  // NProgress.done()
})
