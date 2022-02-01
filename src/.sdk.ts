import { NuxtRuntimeConfig } from '@nuxt/types/config/runtime'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

export default abstract class MerkalySDK {
  public $axios: NuxtAxiosInstance
  public $config: NuxtRuntimeConfig
}
