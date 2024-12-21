<script setup lang="ts">
const emits = defineEmits(['update:modelValue'])
function onChangeFormType(type: string) {
  emits('update:modelValue', type)
}

const rules = computed(() => {
  return {
    account: {
      required: true,
      trigger: 'blur',
      message: '请输入账号',
    },
    pwd: {
      required: true,
      trigger: 'blur',
      message: '请输入密码',
    },
  }
})

const formValue = ref({
  account: 'admin',
  pwd: '123456',
})

const isRemember = ref(false)
const isLoading = ref(false)
const onLogin = () => {
  console.log('onLogin')
}
</script>

<template>
  <div>
    <n-h2 depth="3" class="text-center"> 登录 </n-h2>
    <n-form ref="formRef" :rules="rules" :model="formValue" :show-label="false" size="large">
      <n-form-item path="account">
        <n-input v-model:value="formValue.account" clearable placeholder="请输入账号" />
      </n-form-item>
      <n-form-item path="pwd">
        <n-input
          v-model:value="formValue.pwd"
          type="password"
          placeholder="请输入密码"
          clearable
          show-password-on="click"
        >
          <template #password-invisible-icon>
            <icon-park-outline-preview-close-one />
          </template>
          <template #password-visible-icon>
            <icon-park-outline-preview-open />
          </template>
        </n-input>
      </n-form-item>
      <n-space vertical :size="20">
        <div class="flex-y-center justify-between">
          <n-checkbox v-model:checked="isRemember"> 记住我 </n-checkbox>
          <n-button type="primary" text @click="onChangeFormType('resetPassword')">
            忘记密码？
          </n-button>
        </div>
        <n-button
          block
          type="primary"
          size="large"
          :loading="isLoading"
          :disabled="isLoading"
          @click="onLogin"
        >
          登录
        </n-button>
        <n-flex>
          <n-text>没有账号？</n-text>
          <n-button type="primary" text @click="onChangeFormType('register')"> 注册 </n-button>
        </n-flex>
      </n-space>
    </n-form>
    <n-divider>
      <span op-80>其他登录方式</span>
    </n-divider>
    <n-space justify="center">
      <n-button circle>
        <template #icon>
          <n-icon><icon-park-outline-wechat /></n-icon>
        </template>
      </n-button>
      <n-button circle>
        <template #icon>
          <n-icon><icon-park-outline-tencent-qq /></n-icon>
        </template>
      </n-button>
      <n-button circle>
        <template #icon>
          <n-icon><icon-park-outline-github-one /></n-icon>
        </template>
      </n-button>
    </n-space>
  </div>
</template>
