import {
  CreateConnectionValidator,
  UpdateConnectionValidator
} from '@merkaly/api/src/account/connections/connection.validator'
import { plainToInstance } from 'class-transformer'
import { useAxios } from '../../../nuxt.axios'
import ConnectionReference from './connection.reference'

export class Connection {
  public find (params?: unknown) {
    return useAxios.get<ConnectionReference[]>('/account/connections/', { params })
      .then(connections => connections.map(connection => plainToInstance(ConnectionReference, connection)))
  }

  public read (id: ConnectionReference['id']) {
    return useAxios.get<ConnectionReference>('/account/connections/' + id)
      .then(connection => plainToInstance(ConnectionReference, connection))
  }

  public create (payload: CreateConnectionValidator) {
    return useAxios.post<ConnectionReference>('/account/connections/', payload)
      .then(connection => plainToInstance(ConnectionReference, connection))
  }

  public update (id: ConnectionReference['id'], payload: UpdateConnectionValidator) {
    return useAxios.patch<ConnectionReference>('/account/connections/' + id, payload)
      .then(connection => plainToInstance(ConnectionReference, connection))
  }

  public remove (id: ConnectionReference['id']) {
    return useAxios.delete<void>('/account/connections/' + id)
  }
}
