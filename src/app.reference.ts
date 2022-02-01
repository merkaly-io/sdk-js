export type EntityType<T> = Record<keyof T, unknown>

export default class AppReference {
  public id!: string
}
