<script setup lang="ts">
import LayoutAside from './LayoutAside.vue'
import LayoutHeader from './LayoutHeader.vue'
import LayoutContent from './LayoutContent.vue'
import LayoutFooter from './LayoutFooter.vue'
</script>

<template>
  <n-layout has-sider class="wh-full">
    <!-- 侧边栏 -->
    <LayoutAside />

    <!-- 主体 -->
    <n-layout>
      <!-- 头部 -->
      <LayoutHeader />
      <!-- 内容 -->
      <LayoutContent />
      <!-- 底部 -->
      <LayoutFooter />
    </n-layout>
  </n-layout>
</template>
