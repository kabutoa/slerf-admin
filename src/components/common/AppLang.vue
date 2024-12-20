<script setup lang="ts">
import IconWrapper from './IconWrapper.vue'
import { useLayoutStore } from '@/store'

const layoutStore = useLayoutStore()

const options = [
  {
    label: 'English',
    value: 'enUS',
  },
  {
    label: '中文',
    value: 'zhCN',
  },
]
</script>

<template>
  <n-popselect
    :value="layoutStore.appLang"
    :options="options"
    trigger="click"
    @update:value="layoutStore.setAppLang"
  >
    <IconWrapper>
      <n-icon size="1.2em">
        <icon-park-outline-translate />
      </n-icon>
    </IconWrapper>
  </n-popselect>
</template>
