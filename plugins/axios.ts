import { Context } from '@nuxt/types'

export default ({ app }: Context) => {
  app.$axios.interceptors.response.use(({ data }) => data)
}
