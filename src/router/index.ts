import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: () => import('../views/home/Home.vue')
    },
    {
      path: '/login',
      component: () => import('../views/login/Login.vue')
    }
  ],
})

export default router