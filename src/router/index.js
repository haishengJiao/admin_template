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
        path: '/adbout',
        name: 'adbout',
        meta: { title: 'adbout', icon: 'dashboard' },
        component: () => import('@/views/About.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
