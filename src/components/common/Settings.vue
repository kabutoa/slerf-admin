<script setup lang="ts">
import IconWrapper from './IconWrapper.vue'
</script>

<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <IconWrapper>
        <n-icon size="1.2em">
          <icon-park-outline-setting-two />
        </n-icon>
      </IconWrapper>
    </template>
    <span>设置</span>
  </n-tooltip>
</template>
