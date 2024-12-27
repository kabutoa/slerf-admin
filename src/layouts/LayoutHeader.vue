<script setup lang="ts"></script>

<template>
  <n-layout-header>
    <div class="h-60px flex-y-center justify-between">
      <div class="flex-y-center h-full">
        <Collapse />
        <Breadcrumb />
      </div>
      <div class="flex-y-center gap-1 h-full p-r-0.75rem">
        <Search />
        <FullScreen />
        <Theme />
        <AppLang />
        <Settings />
        <Notice />
        <User />
      </div>
    </div>
    <!-- <div class="wh-full flex items-end h-45px border-t-1px" style="border-color: var(--n-border-color)"> -->
    <div class="wh-full flex items-end h-45px">
      <Tabs />
    </div>
  </n-layout-header>
</template>
