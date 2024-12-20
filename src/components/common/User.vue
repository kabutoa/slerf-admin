<script setup lang="ts">
import { useUserStore } from '@/store/user'
import IconUser from '~icons/icon-park-outline/user'
import IconLogout from '~icons/icon-park-outline/logout'

const userStore = useUserStore()
const options = [
  {
    label: '个人中心',
    key: 'user',
    icon: () => h(IconUser),
  },
  {
    type: 'divider',
    key: 'd1',
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: () => h(IconLogout),
  },
]
</script>

<template>
  <n-dropdown trigger="hover" :options="options">
    <div class="flex-y-center">
      <n-avatar
        round
        :src="userStore.userInfo?.avatar"
        fallback-src="https://api.dicebear.com/7.x/pixel-art/svg"
      />
      <span class="ml-1">{{ userStore.userInfo?.name || 'admin' }}</span>
    </div>
  </n-dropdown>
</template>
