<script setup lang="ts">
import IconWrapper from './IconWrapper.vue'
</script>

<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <IconWrapper>
        <n-icon size="1.2em">
          <icon-park-outline-remind />
        </n-icon>
      </IconWrapper>
    </template>
    <span>消息通知</span>
  </n-tooltip>
</template>
