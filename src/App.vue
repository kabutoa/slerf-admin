<template>
  <n-config-provider class="wh-full">
    <n-loading-bar-provider>
      <n-message-provider>
        <n-dialog-provider>
          <n-notification-provider>
            <router-view v-slot="{ Component }">
              <transition name="fade" mode="out-in">
                <keep-alive>
                  <component :is="Component" />
                </keep-alive>
              </transition>
            </router-view>
          </n-notification-provider>
        </n-dialog-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
