import { Context } from '@nuxt/types'
import { Auth0Scheme } from '@nuxtjs/auth-next'
import { join } from 'path'
import { useAxios } from './nuxt.axios'

export default ({ $config, $auth }: Context) => {
  useAxios.$setBaseURL(join($config.merkaly.proxy))
  const strategy = $auth.strategy as Auth0Scheme
  const token = strategy.token.get()

  if (typeof token === 'string') {
    useAxios.$setToken(token)
  }
}
