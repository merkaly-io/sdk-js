export default interface AbstractEndpoint<T> {
  find (): Promise<T[]>

  read (id: string): Promise<T>

  create (payload: unknown): Promise<T>

  update (id: string, payload: unknown): Promise<T>

  remove (id: string): Promise<void>
}
