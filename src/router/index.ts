import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'

import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
