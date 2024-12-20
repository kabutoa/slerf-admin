<script setup lang="ts">
import IconWrapper from './IconWrapper.vue'
</script>

<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <IconWrapper>
        <n-icon size="1.2em">
          <icon-park-outline-search />
        </n-icon>
      </IconWrapper>
    </template>
    <span>搜索</span>
  </n-tooltip>
</template>
