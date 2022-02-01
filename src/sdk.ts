import axios from './app.axios'

export default abstract class SDK {
  public static readonly setBaseUrl = axios.setBaseUrl

  public constructor (dsn?: string) {
    SDK.setBaseUrl(dsn)
  }
}
