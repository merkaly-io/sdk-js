import {
  CreateOrganizationValidator,
  UpdateOrganizationValidator
} from '@merkaly/api/src/account/organizations/organization.validator'
import { plainToInstance } from 'class-transformer'
import OrganizationReference from './organization.reference'

namespace Organization {
  export const find = () => {
    return $nuxt.$api.$get<OrganizationReference[]>('/account/organizations/')
      .then(organizations => organizations.map(organization => plainToInstance(OrganizationReference, organization)))
  }

  export const read = (id: string) => {
    return $nuxt.$api.$get<OrganizationReference>('/account/organizations/' + id)
      .then(organization => plainToInstance(OrganizationReference, organization))
  }

  export const create = (payload: CreateOrganizationValidator) => {
    return $nuxt.$api.$post<OrganizationReference>('/account/organizations/', payload)
      .then(organization => plainToInstance(OrganizationReference, organization))
  }

  export const update = (id: string, payload: UpdateOrganizationValidator) => {
    return $nuxt.$api.$patch<OrganizationReference>('/account/organizations/' + id, payload)
      .then(organization => plainToInstance(OrganizationReference, organization))
  }

  export const remove = (id: string) => {
    return $nuxt.$api.$delete<void>('/account/organizations/' + id)
  }
}

export default Organization
