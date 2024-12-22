<script lang="ts" setup>
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import ResetPassword from './components/ResetPassword.vue'
import logoImage from '@/assets/images/logo.png'

const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE

export type TFormType = 'login' | 'register' | 'resetPassword'

const formType = ref<TFormType>('login')

const formComponets = {
  login: Login,
  register: Register,
  resetPassword: ResetPassword,
}
</script>

<template>
  <n-el class="wh-full flex-center" style="background-color: var(--body-color)">
    <!-- 原有内容 -->
    <div class="fixed top-40px right-40px text-lg">
      <Theme />
      <AppLang />
    </div>
    <n-el
      class="wh-full sm:w-450px sm:h-700px p-4xl"
      style="background: var(--card-color); box-shadow: var(--box-shadow-1)"
    >
      <div class="w-full flex flex-col items-center">
        <n-image :src="logoImage" width="100" />
        <n-h2>{{ VITE_APP_TITLE }}</n-h2>
        <transition name="fade-slide" mode="out-in">
          <component :is="formComponets[formType]" v-model="formType" class="w-85%" />
        </transition>
      </div>
    </n-el>
  </n-el>
</template>
