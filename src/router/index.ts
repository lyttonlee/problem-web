import { ElNotification } from 'element-plus'
import { store } from './../store/index'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: '主页',
      redirect: '/home',
      component: () => import('../views/home/Home.vue'),
      meta: {
        auth: true
      },
      children: [
        {
          path: '/home',
          name: '报告记录',
          meta: {
            auth: true
          },
          component: () => import('../views/bugs/Bug.vue')
        },
        {
          path: '/doc',
          name: '使用文档',
          meta: {
            auth: true
          },
          component: () => import('../views/doc/Doc.vue')
        },
        {
          path: '/chart',
          name: '图表',
          meta: {
            auth: true
          },
          component: () => import('../views/chart/Chart.vue')
        }
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: () => import('../views/login/Login.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth === true && !store.state.token) {
    router.push('/login')
    ElNotification({
      type: 'error',
      message: '请先进行登录！'
    })
  } else {
    next()
  }
})

export default router
