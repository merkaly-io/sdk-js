import axios, { AxiosRequestConfig } from 'axios'

declare module 'axios' {
  interface AxiosInstance {
    get<R = unknown> (url: string, config?: AxiosRequestConfig): Promise<R>;

    request<R = unknown> (config: AxiosRequestConfig): Promise<R>;

    get<R = unknown> (url: string, config?: AxiosRequestConfig): Promise<R>;

    delete<R = unknown> (url: string, config?: AxiosRequestConfig): Promise<R>;

    head<R = unknown> (url: string, config?: AxiosRequestConfig): Promise<R>;

    options<R = unknown> (url: string, config?: AxiosRequestConfig): Promise<R>;

    post<R = unknown> (url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;

    put<R = unknown> (url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;

    patch<R = unknown> (url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
  }
}

const $axios = axios.create({
  baseURL: 'https://api.merkaly.io/'
})

$axios.interceptors.response.use(({ data }) => data)

export default abstract class MerkalySDK {
  public static $axios = $axios
}
