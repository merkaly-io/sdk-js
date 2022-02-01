import https from 'https'
import $axios from 'axios'

const request = $axios.create()
request.interceptors.response.use(({ data }) => data)

namespace axios {
  export const setBaseUrl = (dsn?: string, rejectUnauthorized = false) => {
    request.defaults.httpsAgent = new https.Agent({ rejectUnauthorized })
    request.defaults.baseURL = dsn
  }

  export const $get = <T> (path: string): Promise<T> => request.get(path)

  export const $post = <T> (path: string, data: unknown): Promise<T> => request.post(path, data)

  export const $patch = <T> (path: string, data: unknown): Promise<T> => request.patch(path, data)

  export const $put = <T> (path: string, data: unknown): Promise<T> => request.patch(path, data)

  export const $delete = <T> (path: string): Promise<T> => request.delete(path)
}

export default axios
