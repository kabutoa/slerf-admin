<script setup lang="ts">
import IconWrapper from './IconWrapper.vue'
import { useLayoutStore } from '@/store'

const layoutStore = useLayoutStore()
</script>

<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <IconWrapper @click="layoutStore.toggleFullScreen">
        <n-icon size="1.2em">
          <icon-park-outline-off-screen v-if="layoutStore.isFullScreen" />
          <icon-park-outline-full-screen v-else />
        </n-icon>
      </IconWrapper>
    </template>
    <span>{{ layoutStore.isFullScreen ? '退出全屏' : '全屏' }}</span>
  </n-tooltip>
</template>
