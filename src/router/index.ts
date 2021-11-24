import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '../store'
import device from 'current-device'

// const dynamicComponent =
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(device.desktop() ? '../pages/Official.vue' : '../pages/Mobile.vue')
  }
  // {
  //   path: '/:pathMatch(.*)',
  //   redirect: '/'
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  store.dispatch('setIsIos', device.ios())
  next()
})

export default router
