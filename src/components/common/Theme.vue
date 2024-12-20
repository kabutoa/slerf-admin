<script setup lang="ts">
import { useLayoutStore } from '@/store'
import IconWrapper from './IconWrapper.vue'
import { NFlex, NIcon, NPopselect } from 'naive-ui'
import IconAuto from '~icons/icon-park-outline/laptop-computer'
import IconDark from '~icons/icon-park-outline/moon'
import IconLight from '~icons/icon-park-outline/sun-one'

const layoutStore = useLayoutStore()

const options = computed(() => {
  return [
    {
      label: '浅色',
      value: 'light',
      icon: IconLight,
    },
    {
      label: '深色',
      value: 'dark',
      icon: IconDark,
    },
    {
      label: '跟随系统',
      value: 'auto',
      icon: IconAuto,
    },
  ]
})

type TOption = { label: string; value: string; icon: Component }

function renderLabel(option: TOption) {
  return h(
    NFlex,
    { align: 'center' },
    {
      default: () => [h(option.icon), option.label],
    },
  )
}
</script>

<template>
  <n-popselect
    :value="layoutStore.themeMode"
    :options="options"
    trigger="click"
    @update:value="layoutStore.setThemeMode"
    :renderLabel
  >
    <IconWrapper>
      <n-icon size="1.2em">
        <icon-park-outline-moon v-if="layoutStore.themeMode === 'dark'" />
        <icon-park-outline-sun-one v-if="layoutStore.themeMode === 'light'" />
        <icon-park-outline-laptop-computer v-if="layoutStore.themeMode === 'auto'" />
      </n-icon>
    </IconWrapper>
  </n-popselect>
</template>

<style scoped></style>
