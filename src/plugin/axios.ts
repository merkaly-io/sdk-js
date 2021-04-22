import axios from 'axios'
import * as https from 'https'

declare module 'axios' {
  interface AxiosStatic {
    setToken (token: string, type?: string): void
  }
}

axios.defaults.baseURL = process.env.baseUrl
axios.defaults.httpsAgent = new https.Agent({
  rejectUnauthorized: false
})

axios.setToken = (token, type = 'Bearer') => {
  return (axios.defaults.headers['Authorization'] = `${type} ${token}`)
}

export default axios
