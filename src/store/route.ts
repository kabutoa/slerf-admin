import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { createStoreKey } from '@/utils'
import IconUser from '~icons/icon-park-outline/user'
import { NIcon } from 'naive-ui'

const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export const useRouteStore = defineStore(createStoreKey('route'), () => {
  const menus = ref<MenuOption[]>([
    {
      label: () =>
        h(
          RouterLink,
          {
            to: {
              name: 'Home',
            },
          },
          { default: () => '首页' },
        ),
      key: 'home',
      icon: renderIcon(IconUser),
    },
  ])

  return {
    menus,
  }
})
