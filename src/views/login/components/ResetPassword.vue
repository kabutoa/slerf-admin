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
      message: '请输入账号/手机号码',
    },
  }
})
const formValue = ref({
  account: '',
})
const onResetPassword = () => {
  console.log('onResetPassword')
}
</script>

<template>
  <div>
    <n-h2 depth="3" class="text-center"> 重置密码 </n-h2>
    <n-form ref="formRef" :rules="rules" :model="formValue" :show-label="false" size="large">
      <n-form-item path="account">
        <n-input v-model:value="formValue.account" clearable placeholder="请输入账号/手机号码" />
      </n-form-item>
      <n-form-item>
        <n-space vertical :size="20" class="w-full">
          <n-button block type="primary" @click="onResetPassword"> 重置密码 </n-button>
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
