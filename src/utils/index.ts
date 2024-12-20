import { name } from '@/../package.json'

export const createStoreKey = (key: string) => {
  return `${name}_${key}_store`
}
