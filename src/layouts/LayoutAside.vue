<script setup lang="ts">
import { useLayoutStore } from '@/store'

const layoutStore = useLayoutStore()
</script>

<template>
  <n-layout-sider
    class="pb-60px"
    content-style="display: flex; flex-direction: column;"
    bordered
    :collapsed="layoutStore.collapsed"
    collapse-mode="width"
    :collapsed-width="layoutStore.menuConfig.collapsedWidth"
    :width="layoutStore.menuConfig.width"
    show-trigger
    @update:collapsed="layoutStore.toggleCollapsed"
  >
    <Logo v-if="layoutStore.showLogo" />
    <n-scrollbar class="flex-1 w-full">
      <Menu />
    </n-scrollbar>
  </n-layout-sider>
</template>
