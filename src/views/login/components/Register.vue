<script setup lang="ts">
const emits = defineEmits(['update:modelValue'])
function onChangeFormType(type: string) {
  emits('update:modelValue', type)
}

const rules = {
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
  rePwd: {
    required: true,
    trigger: 'blur',
    message: '请再次输入密码',
  },
}
const formValue = ref({
  account: 'admin',
  pwd: '123456',
  rePwd: '123456',
})

const isRead = ref(false)
const onRegister = () => {
  console.log('onRegister')
}
</script>

<template>
  <div>
    <n-h2 depth="3" class="text-center"> 注册 </n-h2>
    <n-form :rules="rules" :model="formValue" :show-label="false" size="large">
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
      <n-form-item path="rePwd">
        <n-input
          v-model:value="formValue.rePwd"
          type="password"
          placeholder="请再次输入密码"
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
      <n-form-item>
        <n-space vertical :size="20" class="w-full">
          <n-checkbox v-model:checked="isRead">
            我已阅读并同意 <n-button type="primary" text> 用户协议 </n-button>
          </n-checkbox>
          <n-button block type="primary" @click="onRegister"> 注册 </n-button>
          <n-flex justify="center">
            <n-text>已有账号？</n-text>
            <n-button text type="primary" @click="onChangeFormType('login')"> 登录 </n-button>
          </n-flex>
        </n-space>
      </n-form-item>
    </n-form>
  </div>
</template>

<style scoped></style>
