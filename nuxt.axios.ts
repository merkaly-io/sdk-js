import axios, { AxiosRequestConfig } from 'axios'

const $axios = axios.create({ baseURL: '/api' })

$axios.interceptors.response.use(({ data }) => data)

export const useAxios = {
  $setBaseURL: (url: string) => ($axios.defaults.baseURL = url),
  $setToken: (token: string) => ($axios.defaults.headers.common['Authorization'] = token),
  get: <R = unknown> (url: string, config?: AxiosRequestConfig): Promise<R> => $axios.get(url, config),
  post: <R = unknown> (url: string, data?: unknown, config?: AxiosRequestConfig): Promise<R> => $axios.post(url, data, config),
  patch: <R = unknown> (url: string, data?: unknown, config?: AxiosRequestConfig): Promise<R> => $axios.patch(url, data, config),
  delete: <R = void> (url: string, config?: AxiosRequestConfig): Promise<R> => $axios.delete(url, config)
}
