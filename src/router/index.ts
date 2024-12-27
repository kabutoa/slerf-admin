import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'

import routes from './routes'

const { VITE_ROUTER_MODE, BASE_URL } = import.meta.env

const router = createRouter({
  history:
    VITE_ROUTER_MODE === 'hash' ? createWebHashHistory(BASE_URL) : createWebHistory(BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  window.$loadingBar?.start()
  document.title = `${to.meta.title || ''} - ${import.meta.env.VITE_APP_TITLE}`
  next()
})

router.afterEach(() => {
  window.$loadingBar?.finish()
})

export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}

export default router
