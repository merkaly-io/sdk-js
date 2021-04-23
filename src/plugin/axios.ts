import axios from 'axios'
import * as https from 'https'

declare module 'axios' {
  interface AxiosStatic {
    setToken (token: string, type?: string): void

    setBaseUrl (url: string): void
  }
}

axios.defaults.httpsAgent = new https.Agent({
  rejectUnauthorized: false
})

axios.setToken = (token, type = 'Bearer') => {
  return (axios.defaults.headers['Authorization'] = `${type} ${token}`)
}

axios.setBaseUrl = (url) => {
  return (axios.defaults.baseURL = url)
}

export default axios
