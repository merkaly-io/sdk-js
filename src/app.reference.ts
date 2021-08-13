import AppEntity from '@merkaly/api/src/app.entity'

export type EntityType<T> = Record<keyof T, any>

export default class AppReference<T extends AppEntity> {
  public id: string
}
