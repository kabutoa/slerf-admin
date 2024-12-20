export function install() {
  if (import.meta.env.VITE_MOCK) {
    import('@/mock')
  }
}
