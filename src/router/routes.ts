import type { RouteRecordRaw } from 'vue-router'
import BasicLayout from '@/layouts/LayoutBasic.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录', hidden: false, keepAlive: true },
  },
  {
    path: '/',
    component: BasicLayout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页', hidden: false, keepAlive: true },
      },
      {
        path: 'system',
        name: 'System',
        meta: { title: '系统管理' },
        redirect: '/system/user',
        children: [
          {
            path: 'user',
            name: 'User',
            component: () => import('@/views/system/user/index.vue'),
            meta: { title: '用户管理', hidden: false, keepAlive: true },
          },
          {
            path: 'role',
            name: 'Role',
            component: () => import('@/views/system/role/index.vue'),
            meta: { title: '角色管理', hidden: false, keepAlive: true },
          },
          {
            path: 'menu',
            name: 'Menu',
            component: () => import('@/views/system/menu/index.vue'),
            meta: { title: '菜单管理', hidden: false, keepAlive: true },
          },
        ],
      },
      {
        path: '/exception',
        name: 'Exception',
        meta: { title: '异常页面' },
        redirect: '/exception/403',
        children: [
          {
            path: '/403',
            name: '403',
            component: () => import('@/views/exception/403.vue'),
            meta: { title: '403' },
          },
          {
            path: '/404',
            name: '404',
            component: () => import('@/views/exception/404.vue'),
            meta: { title: '404' },
          },
          {
            path: '/500',
            name: '500',
            component: () => import('@/views/exception/500.vue'),
            meta: { title: '500' },
          },
        ],
      },
      {
        path: '/external-link',
        name: 'ExternalLink',
        component: () => import('@/views/external-link/index.vue'),
        meta: { title: '外部链接', hidden: false },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/exception/404.vue'),
    meta: { title: '404', hidden: true, keepAlive: true },
  },
]

export default routes
