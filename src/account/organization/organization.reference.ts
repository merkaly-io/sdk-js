import {
  AddOrganizationMembers,
  RemoveOrganizationMembers
} from '@merkaly/api/src/account/organizations/members/member.validator'
import { IdOrganizationValidator } from '@merkaly/api/src/account/organizations/organization.validator'
import { Organization, OrganizationConnection, OrganizationMember } from 'auth0'
import { useAxios } from '../../axios'

export default class OrganizationReference implements Organization {
  public id: IdOrganizationValidator
  public name: Organization['name']
  public display_name: Organization['display_name']
  public branding: Organization['branding'] = {
    logo_url: undefined,
    colors:{
      primary: '#ee4034',
      page_background: '#000000'
    }
  }
  public members: OrganizationMember[] = []
  public connections: OrganizationConnection[] = []

  public getMembers () {
    return useAxios.get<OrganizationMember[]>('/account/organizations/' + this.id + '/members/')
      .then(members => (this.members = members))
  }

  public addMembers (ids: AddOrganizationMembers) {
    return useAxios.post<OrganizationMember>('/account/organizations/' + this.id + '/members/', ids)
      .then(member => this.members.concat(member))
  }

  public removeMembers (ids: RemoveOrganizationMembers) {
    return useAxios.delete<OrganizationMember[]>('/account/organizations/' + this.id + '/members/', { data: ids })
      .then(members => (this.members = members))
  }

  public getConnections () {
    return useAxios.get<OrganizationConnection[]>('/account/organizations/' + this.id + '/connections/')
      .then(connections => (this.connections = connections))
  }
}
