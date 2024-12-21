<script setup lang="ts">
import logoImage from '@/assets/images/logo.png'
import { useLayoutStore } from '@/store'

const layoutStore = useLayoutStore()

const router = useRouter()

const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE
</script>

<template>
  <div class="h-60px flex-center cursor-pointer gap-2 w-full" @click="router.push('/')">
    <n-image :src="logoImage" width="40" />
    <h1
      v-if="!layoutStore.collapsed"
      class="text-1.5em font-medium text-ellipsis overflow-hidden whitespace-nowrap"
    >
      {{ VITE_APP_TITLE }}
    </h1>
  </div>
</template>
