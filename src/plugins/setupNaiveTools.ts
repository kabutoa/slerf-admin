import { createDiscreteApi } from 'naive-ui'
const { message, dialog, notification, loadingBar } = createDiscreteApi([
  'message',
  'dialog',
  'notification',
  'loadingBar',
])

export function install() {
  window.$loadingBar = loadingBar
  window.$notification = notification
  window.$message = message
  window.$dialog = dialog
}
