import 'vue-router'
// import type { RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 页面标题
    title?: string
    // 菜单图标
    icon?: string
    // 菜单类型
    menuType?: 'dir' | 'page'
    // 是否在菜单中隐藏
    hidden?: boolean
    // 排序
    order?: number
    // 是否缓存页面
    keepAlive?: boolean
    // 是否为外部链接
    isExternal?: boolean
    // 外部链接地址
    externalLink?: string
    // 是否需要登录
    requireAuth?: boolean
    // 可以访问的角色
    roles?: string[]
    // 是否添加到tab
    addToTab?: boolean
    // 是否固定到tab
    pinToTab?: boolean
  }
}
