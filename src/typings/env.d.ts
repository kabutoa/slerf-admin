/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_APP_TITLE: string
  readonly VITE_API_URL: string
  readonly VITE_MOCK: boolean
  readonly VITE_ROUTE_MODE: 'hash' | 'web'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
