<script setup lang="ts">
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import Search from '@/components/common/Search.vue'
import Theme from '@/components/common/Theme.vue'
import AppLang from '@/components/common/AppLang.vue'
import Settings from '@/components/common/Settings.vue'
import Notice from '@/components/common/Notice.vue'
import User from '@/components/common/User.vue'
import Tabs from '@/components/common/Tabs.vue'
import { useLayoutStore } from '@/store/layout'

const layoutStore = useLayoutStore()
</script>

<template>
  <n-layout-header :bordered="!layoutStore.showTabs">
    <div class="h-60px flex-y-center justify-between p-x-xl">
      <div class="flex-y-center h-full">
        <Breadcrumb />
      </div>
      <div class="flex-y-center gap-1 h-full">
        <Search />
        <FullScreen />
        <Theme />
        <AppLang />
        <Settings />
        <Notice />
        <User />
      </div>
    </div>
    <div class="h-45px w-full flex items-end">
      <Tabs />
    </div>
  </n-layout-header>
</template>
