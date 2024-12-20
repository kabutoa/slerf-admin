<script setup lang="ts">
import { useLayoutStore } from '@/store'

const layoutStore = useLayoutStore()
</script>

<template>
  <n-tooltip placement="bottom" trigger="hover">
    <template #trigger>
      <CommonWrapper @click="layoutStore.toggleCollapsed()">
        <icon-park-outline-menu-unfold v-if="layoutStore.collapsed" />
        <icon-park-outline-menu-fold v-else />
      </CommonWrapper>
    </template>
    <span>{{ layoutStore.collapsed ? '展开' : '折叠' }}</span>
  </n-tooltip>
</template>

<style scoped></style>
