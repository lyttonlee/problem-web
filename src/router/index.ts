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
        }
      ]
    },
    {
      path: '/login',
      component: () => import('../views/login/Login.vue')
    }
  ],
})

export default router