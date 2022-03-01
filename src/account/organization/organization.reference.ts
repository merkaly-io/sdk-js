import {
  AddOrganizationMembers,
  RemoveOrganizationMembers
} from '@merkaly/api/src/account/organizations/members/member.validator'
import { IdOrganizationValidator } from '@merkaly/api/src/account/organizations/organization.validator'
import { Organization, OrganizationMember } from 'auth0'

export default class OrganizationReference implements Organization {
  public id: IdOrganizationValidator
  public name: Organization['name']
  public display_name: Organization['display_name']
  public branding: Organization['branding']
  public members: OrganizationMember[] = []

  public getMembers () {
    return $nuxt.$api.$get<OrganizationMember[]>('/account/organizations/' + this.id + '/members/')
      .then(members => (this.members = members))
  }

  public addMembers (ids: AddOrganizationMembers) {
    return $nuxt.$api.$post<OrganizationMember>('/account/organizations/' + this.id + '/members/', ids)
      .then(member => this.members.concat(member))
  }

  public removeMembers (ids: RemoveOrganizationMembers) {
    return $nuxt.$api.$delete<OrganizationMember[]>('/account/organizations/' + this.id + '/members/', { data: ids })
      .then(members => (this.members = members))
  }
}
