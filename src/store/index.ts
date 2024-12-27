import type { App } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export * from './layout'
export * from './route'
export * from './user'

// 安装pinia全局状态库
export function setupPinia(app: App) {
  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate)
  app.use(pinia)
}
