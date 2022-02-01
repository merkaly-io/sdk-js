import { NuxtRuntimeConfig } from '@nuxt/types/config/runtime'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

export default abstract class MerkalySDK {
  protected $axios: NuxtAxiosInstance
  protected $config: NuxtRuntimeConfig
}
