import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 页面标题
    title?: string
    // 页面权限码
    permissions?: string[]
    // 菜单图标
    icon?: string
    // 是否在菜单中隐藏
    hidden?: boolean
    // 是否缓存页面
    keepAlive?: boolean
    // 是否为外部链接
    isExternal?: boolean
    // 外部链接地址
    externalLink?: string
  }
}
