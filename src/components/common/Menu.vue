<script setup lang="ts">
import { useLayoutStore } from '@/store'
import type { MenuOption } from 'naive-ui'

const layoutStore = useLayoutStore()

const menuOptions: MenuOption[] = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F/3199',
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat',
      },
    ],
  },
]
</script>

<template>
  <n-menu
    :collapsed="layoutStore.collapsed"
    :collapsed-width="layoutStore.menuConfig.collapsedWidth"
    :collapsed-icon-size="layoutStore.menuConfig.collapsedIconSize"
    :options="menuOptions"
  />
</template>
