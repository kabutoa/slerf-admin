import { createStoreKey } from '@/utils'

export const useUserStore = defineStore(createStoreKey('user'), () => {
  const userInfo = ref<UserInfo | null>({
    avatar: 'https://smms.app/image/6Xh3wuCV2eMZnEp',
    name: 'admin',
  })

  return {
    userInfo,
  }
})
