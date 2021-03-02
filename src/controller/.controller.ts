import { AxiosResponse } from 'axios'
import Entity from '../entity/.entity'

export default abstract class Controller<T extends Entity> {
  abstract find (): Promise<AxiosResponse<T[]>>

  abstract read (id: string): Promise<AxiosResponse<T>>

  abstract create (payload: unknown): Promise<AxiosResponse<T>>

  abstract update (id: string, payload: unknown): Promise<AxiosResponse<T>>

  abstract remove (id: string): Promise<AxiosResponse<void>>
}
