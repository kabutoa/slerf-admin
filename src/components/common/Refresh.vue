<script setup lang="ts">
import { useLayoutStore } from '@/store'

const layoutStore = useLayoutStore()

const loading = ref(false)
</script>

<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <IconWrapper @click="layoutStore.toggleFullScreen">
        <n-icon size="1.2em">
          <icon-park-outline-refresh :class="{ 'animate-spin': loading }" />
        </n-icon>
      </IconWrapper>
    </template>
    <span>刷新</span>
  </n-tooltip>
</template>
