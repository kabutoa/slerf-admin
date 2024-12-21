<script setup lang="ts">
import { useLayoutStore } from '@/store/layout'

const layoutStore = useLayoutStore()
</script>

<template>
  <n-layout-header :bordered="!layoutStore.showTabs">
    <div class="h-60px flex-y-center justify-between p-x-xl">
      <div class="flex-y-center h-full">
        <Breadcrumb />
      </div>
      <div class="flex-y-center gap-1 h-full">
        <Search />
        <FullScreen />
        <Theme />
        <AppLang />
        <Settings />
        <Notice />
        <User />
      </div>
    </div>
    <div class="h-45px flex items-end">
      <Tabs />
    </div>
  </n-layout-header>
</template>
