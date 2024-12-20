<script lang="ts" setup>
const name = ref(1)
const panels = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])
</script>

<template>
  <n-tabs v-model:value="name" type="card" closable>
    <n-tab v-for="panel in panels" :key="panel" :name="panel">
      {{ panel }}
    </n-tab>
  </n-tabs>
</template>
