import AppEntity from '@merkaly/api/src/app.entity'

export default class AppReference<T extends AppEntity> extends AppEntity {
  public static fromPlain<T> (properties: T) {
    return Object.assign(new this, properties)
  }

  public static fromArrayOfPlains<T> (properties: T[]) {
    return properties.map(data => this.fromPlain(data))
  }
}
