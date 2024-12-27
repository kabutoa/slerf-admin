<script setup lang="ts">
import { useRouteStore, useLayoutStore } from '@/store'

const routeStore = useRouteStore()
const layoutStore = useLayoutStore()
</script>

<template>
  <n-menu
    :collapsed="layoutStore.collapsed"
    :collapsed-width="layoutStore.menuConfig.collapsedWidth"
    :collapsed-icon-size="layoutStore.menuConfig.collapsedIconSize"
    :options="routeStore.menus"
  />
</template>
