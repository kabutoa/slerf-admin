<script lang="ts" setup>
import { useLayoutStore } from '@/store'

const layoutStore = useLayoutStore()
const { pinTabs, unPinTabs } = storeToRefs(layoutStore)
console.log(pinTabs.value)
const name = ref()
</script>

<template>
  <n-tabs v-model:value="name" type="card" closable>
    <n-tab v-for="panel in pinTabs" :key="panel" :name="panel">
      {{ panel }}
    </n-tab>
    <n-tab v-for="panel in unPinTabs" :key="panel" :name="panel">
      {{ panel }}
    </n-tab>
    <template #suffix>
      <Refresh />
      <ContentFullScreen />
    </template>
  </n-tabs>
</template>
