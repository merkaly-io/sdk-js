import axios, { AxiosStatic } from 'axios'

export default abstract class AbstractEndpoint<T> {

  protected $axios: AxiosStatic = axios

  protected abstract find (): Promise<T[]>

  protected abstract read (id: string): Promise<T>

  protected abstract create (payload: unknown): Promise<T>

  protected abstract update (id: string, payload: unknown): Promise<T>

  protected abstract remove (id: string): Promise<void>
}
