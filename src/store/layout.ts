import { createStoreKey } from '@/utils'

export const useLayoutStore = defineStore(createStoreKey('layout'), () => {
  // 是否折叠
  const collapsed = ref(false)

  // 切换折叠状态
  const toggleCollapsed = () => {
    collapsed.value = !collapsed.value
  }

  // 是否显示logo
  const showLogo = ref(true)

  // 切换logo
  const toggleShowLogo = () => {
    showLogo.value = !showLogo.value
  }

  // 菜单配置
  const menuConfig = ref({
    collapsedWidth: 64,
    collapsedIconSize: 22,
    width: 240,
  })

  // 是否全屏
  const isFullScreen = ref(false)

  // 切换全屏
  const toggleFullScreen = () => {
    isFullScreen.value = !isFullScreen.value
  }

  // 主题模式
  const themeMode = ref<'light' | 'dark' | 'auto'>('light')

  // 切换主题模式
  const setThemeMode = (mode: 'light' | 'dark' | 'auto') => {
    themeMode.value = mode
  }

  // 语言
  const appLang = ref('zhCN')

  // 设置语言
  const setAppLang = (lang: string) => {
    appLang.value = lang
  }

  // 是否显示tabs
  const showTabs = ref(true)
  const pinTabs = ref<number[]>([])
  const unPinTabs = ref<number[]>([2, 3])
  const tabs = computed(() => [...pinTabs.value, ...unPinTabs.value])

  // 切换tabs
  const toggleShowTabs = () => {
    showTabs.value = !showTabs.value
  }

  return {
    collapsed,
    toggleCollapsed,
    showLogo,
    toggleShowLogo,
    menuConfig,
    isFullScreen,
    toggleFullScreen,
    themeMode,
    setThemeMode,
    appLang,
    setAppLang,
    showTabs,
    toggleShowTabs,
    pinTabs,
    unPinTabs,
    tabs,
  }
})
