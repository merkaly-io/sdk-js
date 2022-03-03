import { Plugin } from '@nuxt/types'
import useAxios from '../hooks/useAxios'

const plugin: Plugin = ({ $axios, $config }) => {
  useAxios.setBaseURL = $axios.setBaseURL
  useAxios.setToken = $axios.setToken
  useAxios.$get = $axios.$get
  useAxios.$post = $axios.$post
  useAxios.$put = $axios.$put
  useAxios.$patch = $axios.$patch
  useAxios.$delete = $axios.$delete

  useAxios.setBaseURL(`/${$config.merkaly.proxy}`)
}

export default plugin
