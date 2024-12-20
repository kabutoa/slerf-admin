interface Window {
  $loadingBar: import('naive-ui').LoadingBarApi
  $dialog: import('naive-ui').DialogApi
  $message: import('naive-ui').MessageApi
  $notification: import('naive-ui').NotificationApi
}

declare namespace App {
  type lang = 'zhCN' | 'enUS'
}
