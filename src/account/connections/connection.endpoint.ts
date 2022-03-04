import {
  CreateConnectionValidator,
  IdConnectionalidator,
  UpdateConnectionValidator
} from '@merkaly/api/src/account/connections/connection.validator'
import { plainToInstance } from 'class-transformer'
import MerkalySDK from '../../sdk'
import ConnectionReference from './connection.reference'

namespace Connection {
  export const find = (params?: any) => {
    return MerkalySDK.$axios.get<ConnectionReference[]>('/account/connections/', { params })
      .then(connections => connections.map(connection => plainToInstance(ConnectionReference, connection)))
  }

  export const read = (id: IdConnectionalidator) => {
    return MerkalySDK.$axios.get<ConnectionReference>('/account/connections/' + id)
      .then(connection => plainToInstance(ConnectionReference, connection))
  }

  export const create = (payload: CreateConnectionValidator) => {
    return MerkalySDK.$axios.post<ConnectionReference>('/account/connections/', payload)
      .then(connection => plainToInstance(ConnectionReference, connection))
  }

  export const update = (id: IdConnectionalidator, payload: UpdateConnectionValidator) => {
    return MerkalySDK.$axios.patch<ConnectionReference>('/account/connections/' + id, payload)
      .then(connection => plainToInstance(ConnectionReference, connection))
  }

  export const remove = (id: IdConnectionalidator) => {
    return MerkalySDK.$axios.delete<void>('/account/connections/' + id)
  }
}

export default Connection
