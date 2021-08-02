import AppEntity from '@merkaly/api/src/app.entity'

export default class AppReference extends AppEntity {
  public static fromPlain<T> (properties: T) {
    return Object.assign(new this, properties)
  }

  public static fromArray<T> (properties: T[]) {
    return properties.map(this.fromPlain)
  }
}
