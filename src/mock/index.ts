import Mock from 'mockjs'

// 设置全局响应时间
Mock.setup({
  timeout: '100-2000',
})

// 退出登录接口
Mock.mock('/api/logout', 'post', {
  success: true,
  code: 200,
  message: '退出成功',
})

