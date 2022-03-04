import { Connection, Strategy } from 'auth0'

export default class ConnectionReference implements Connection {
  public id: string
  public name: string
  public strategy: Strategy
}
