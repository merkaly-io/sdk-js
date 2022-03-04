import { Connection, Strategy } from 'auth0'

export default class ConnectionReference implements Connection {
  public readonly id: string
  public readonly name: string
  public readonly strategy: Strategy
}
