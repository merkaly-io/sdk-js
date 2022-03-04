import {
  CreateConnectionValidator,
  IdConnectionalidator,
  UpdateConnectionValidator
} from '@merkaly/api/src/account/connections/connection.validator'
import { plainToInstance } from 'class-transformer'
import MerkalySDK from '../../sdk'
import ConnectionReference from './connection.reference'

export class Connection {
  public find (params?: any) {
    return MerkalySDK.$axios.get<ConnectionReference[]>('/account/connections/', { params })
      .then(connections => connections.map(connection => plainToInstance(ConnectionReference, connection)))
  }

  public read (id: IdConnectionalidator) {
    return MerkalySDK.$axios.get<ConnectionReference>('/account/connections/' + id)
      .then(connection => plainToInstance(ConnectionReference, connection))
  }

  public create (payload: CreateConnectionValidator) {
    return MerkalySDK.$axios.post<ConnectionReference>('/account/connections/', payload)
      .then(connection => plainToInstance(ConnectionReference, connection))
  }

  public update (id: IdConnectionalidator, payload: UpdateConnectionValidator) {
    return MerkalySDK.$axios.patch<ConnectionReference>('/account/connections/' + id, payload)
      .then(connection => plainToInstance(ConnectionReference, connection))
  }

  public remove (id: IdConnectionalidator) {
    return MerkalySDK.$axios.delete<void>('/account/connections/' + id)
  }
}
