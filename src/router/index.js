import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
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
        path: '/element',
        name: 'Element',
        meta: { title: 'element', icon: 'dashboard' },
        component: () => import('@/views/element')
      },
      {
        path: '/settings',
        name: 'Settings',
        meta: { title: '设置', icon: 'dashboard' },
        component: () => import('@/views/settings')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
