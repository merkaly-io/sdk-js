import { join } from 'path'
import { $AccountPath } from '@merkaly/api/src/account'
import {
  CreateOrganizationValidator,
  OrganizationEntity,
  UpdateOrganizationValidator
} from '@merkaly/api/src/account/organizations'
import { plainToInstance } from 'class-transformer'
import OrganizationReference from './organization.reference'

export const route = (...path: string[]) => join($AccountPath, OrganizationEntity.$path, ...path)

namespace Organization {
  export const find = () => {
    return $nuxt.$api.$get<OrganizationReference[]>(route())
      .then(organizations => organizations.map(organization => plainToInstance(OrganizationReference, organization)))
  }

  export const read = (id: string) => {
    return $nuxt.$api.$get<OrganizationReference>(route(id))
      .then(organization => plainToInstance(OrganizationReference, organization))
  }

  export const create = (payload: CreateOrganizationValidator) => {
    return $nuxt.$api.$post<OrganizationReference>(route(), payload)
      .then(organization => plainToInstance(OrganizationReference, organization))
  }

  export const update = (id: string, payload: UpdateOrganizationValidator) => {
    return $nuxt.$api.$patch<OrganizationReference>(route(id), payload)
      .then(organization => plainToInstance(OrganizationReference, organization))
  }

  export const remove = (id: string) => {
    return $nuxt.$api.$delete<void>(route(id))
  }
}

export default Organization
