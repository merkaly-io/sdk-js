import {
  CreateOrganizationValidator,
  FindOrganizationValidator,
  IdOrganizationValidator,
  UpdateOrganizationValidator
} from '@merkaly/api/src/account/organizations/organization.validator'
import { plainToInstance } from 'class-transformer'
import MerkalySDK from '../../sdk'
import OrganizationReference from './organization.reference'

namespace Organization {
  export const find = (params?: FindOrganizationValidator) => {
    return MerkalySDK.prototype.$axios.$get<OrganizationReference[]>('/account/organizations/', { params })
      .then(organizations => organizations.map(organization => plainToInstance(OrganizationReference, organization)))
  }

  export const read = (id: IdOrganizationValidator) => {
    return MerkalySDK.prototype.$axios.$get<OrganizationReference>('/account/organizations/' + id)
      .then(organization => plainToInstance(OrganizationReference, organization))
  }

  export const create = (payload: CreateOrganizationValidator) => {
    return MerkalySDK.prototype.$axios.$post<OrganizationReference>('/account/organizations/', payload)
      .then(organization => plainToInstance(OrganizationReference, organization))
  }

  export const update = (id: IdOrganizationValidator, payload: UpdateOrganizationValidator) => {
    return MerkalySDK.prototype.$axios.$patch<OrganizationReference>('/account/organizations/' + id, payload)
      .then(organization => plainToInstance(OrganizationReference, organization))
  }

  export const remove = (id: IdOrganizationValidator) => {
    return MerkalySDK.prototype.$axios.$delete<void>('/account/organizations/' + id)
  }
}

export default Organization
