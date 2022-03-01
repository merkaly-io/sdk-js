import { Organization, OrganizationMember } from 'auth0'

export default class OrganizationReference implements Organization {
  public id: string
  public name: string
  public display_name: string
  public branding: Organization['branding']
  public members: OrganizationMember[] = []

  public getMembers () {
    return $nuxt.$api.$get<OrganizationMember[]>('/account/organizations/' + this.id + '/members/')
      .then(members => (this.members = members))
  }

  public addMembers (ids: string[]) {
    return $nuxt.$api.$post<OrganizationMember>('/account/organizations/' + this.id + '/members/', ids)
      .then(member => this.members.concat(member))
  }

  public removeMembers (ids: string[]) {
    return $nuxt.$api.$delete<OrganizationMember[]>('/account/organizations/' + this.id + '/members/', { data: ids })
      .then(members => (this.members = members))
  }
}
