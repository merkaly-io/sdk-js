import {
  CreateOrganizationValidator,
  FindOrganizationValidator,
  UpdateOrganizationValidator
} from '@merkaly/api/src/account/organizations/organization.validator'
import { plainToInstance } from 'class-transformer'
import { useAxios } from '../../../nuxt.axios'
import OrganizationReference from './organization.reference'

export class Organization {
  public find (params?: FindOrganizationValidator) {
    return useAxios.get<OrganizationReference[]>('/account/organizations/', { params })
      .then(organizations => organizations.map(organization => plainToInstance(OrganizationReference, organization)))
  }

  public read (id: OrganizationReference['id']) {
    return useAxios.get<OrganizationReference>('/account/organizations/' + id)
      .then(organization => plainToInstance(OrganizationReference, organization))
  }

  public create (payload: CreateOrganizationValidator) {
    return useAxios.post<OrganizationReference>('/account/organizations/', payload)
      .then(organization => plainToInstance(OrganizationReference, organization))
  }

  public update (id: OrganizationReference['id'], payload: UpdateOrganizationValidator) {
    return useAxios.patch<OrganizationReference>('/account/organizations/' + id, payload)
      .then(organization => plainToInstance(OrganizationReference, organization))
  }

  public remove (id: OrganizationReference['id']) {
    return useAxios.delete<void>('/account/organizations/' + id)
  }
}
