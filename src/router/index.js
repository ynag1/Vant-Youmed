import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: '登录',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/registr',
    name: '注册',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/',
    name: '首页',
    component: () => import('../views/LayoutView.vue'),
    children: [
      {
        path: '/HomeView',
        name: '我的',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/MaxView',
        name: '健康百科',
        component: () => import('../views/MaxView.vue')
      },
      {
        path: '/CollectView',
        name: '信息中心',
        component: () => import('../views/CollectView.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
