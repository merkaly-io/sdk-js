import { AxiosResponse } from 'axios'

export interface EndpointInterface<T extends any> {
  find (): Promise<AxiosResponse<T[]>>

  read (id: string): Promise<AxiosResponse<T>>

  create (payload: unknown): Promise<AxiosResponse<T>>

  update (id: string, payload: unknown): Promise<AxiosResponse<T>>

  remove (id: string): Promise<AxiosResponse<void>>
}
