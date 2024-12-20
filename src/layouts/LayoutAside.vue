<script setup lang="ts">
import { useLayoutStore } from '@/store'
import Logo from '@/components/common/Logo.vue'
import Menu from '@/components/common/Menu.vue';

const layoutStore = useLayoutStore()
</script>

<template>
  <n-layout-sider
    class="pb-60px"
    bordered
    :collapsed="layoutStore.collapsed"
    collapse-mode="width"
    :collapsed-width="layoutStore.menuConfig.collapsedWidth"
    :width="layoutStore.menuConfig.width"
    show-trigger
    @update:collapsed="layoutStore.toggleCollapsed"
  >
    <Logo v-if="layoutStore.showLogo" />
    <n-scrollbar>
      <Menu />
    </n-scrollbar>
  </n-layout-sider>
</template>
