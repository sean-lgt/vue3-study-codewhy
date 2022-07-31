import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import localCache from '@/utils/cache'
import { LOCAL_CACHE_KEY } from '@/utils/const'
import { firstMenu } from '@/utils/map-menus'

//   createWebHistory,
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () =>
      import(/* webpackChunkName: "main" */ '@/views/main/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

// 全局路由拦截
router.beforeEach((to) => {
  console.log('测试', router)
  if (to.path !== '/login') {
    const token = localCache.getCache(LOCAL_CACHE_KEY.TOKEN) //登录token
    if (!token) {
      // 没有登录token则返回登录页
      return '/login'
    }
  }
  console.log(router.getRoutes())
  console.log(to)

  // if (to.path.indexOf('/main') !== -1) {
  //   if (to.name === 'notFound') {
  //     to.name = 'user'
  //   }
  // }
  // 进行重定向
  if (to.path === '/main') {
    return firstMenu.url
  }
})

export default router
