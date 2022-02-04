import { Context } from '@nuxt/types'

declare global {
  const $nuxt: Context
}

export { AdminSDK } from './src/sdk.admin'
export { ManagerSDK } from './src/sdk.manager'
export { MerkalySDKModule } from './main'
