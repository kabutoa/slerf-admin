<script setup lang="ts">
import IconWrapper from './IconWrapper.vue'
import { useLayoutStore } from '@/store'

const layoutStore = useLayoutStore()
</script>

<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <IconWrapper @click="layoutStore.toggleFullScreen">
        <icon-park-outline-off-screen-one v-if="layoutStore.contentFullScreen" />
        <icon-park-outline-full-screen-one v-else />
      </IconWrapper>
    </template>
    <span>{{ layoutStore.isFullScreen ? '退出内容全屏' : '内容全屏' }}</span>
  </n-tooltip>
</template>
