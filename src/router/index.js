import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  // 登录
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录', icon: 'dashboard' }
  },
  // 404
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
    meta: { title: '404', icon: 'dashboard' }
  },
  {
    path: '/',
    name: 'Layout',
    redirect: 'admin',
    component: Layout,
    children: [
      {
        path: '/admin',
        name: 'Admin',
        meta: { title: '首页', icon: 'dashboard' },
        component: () => import('@/views/admin')
      },
      {
        path: '/adbout',
        name: 'adbout',
        meta: { title: 'adbout', icon: 'dashboard' },
        component: () => import('@/views/About.vue')
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

export default router
