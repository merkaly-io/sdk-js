import AppEntity from '@merkaly/api/src/app.entity'

export type EntityType<T> = Record<keyof T, any>

export default class AppReference<T extends AppEntity> {
  public id: string

  public static fromPlain<T> (properties: T) {
    return Object.assign({}, properties)
  }

  public static fromArrayOfPlains<T> (properties: T[]) {
    return properties.map(data => this.fromPlain(data))
  }
}
