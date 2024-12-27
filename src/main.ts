import type { App } from 'vue'

import AppLoading from '@/components/app-loading/index.vue'
import AppContainer from './App.vue'
import { setupRouter } from '@/router'
import { setupPinia } from './store'

const setupApp = async () => {
  const appLoading = createApp(AppLoading)
  appLoading.mount('#app-loading')

  const app = createApp(AppContainer)

  /* 注册模块 指令/静态资源 */
  Object.values(
    import.meta.glob<{ install: (app: App) => void }>('./plugins/*.ts', {
      eager: true,
    }),
  ).map((i) => app.use(i))

  setupPinia(app)
  await setupRouter(app)

  await new Promise((resolve) => setTimeout(resolve, 1000))

  appLoading.unmount()

  app.mount('#app')
}

setupApp()
