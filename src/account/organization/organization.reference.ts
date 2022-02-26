import { OrganizationMemberEntity } from '@merkaly/api/src/account/organizations/members/member.entity'
import { OrganizationBranding, OrganizationEntity } from '@merkaly/api/src/account/organizations/organization.entity'
import { plainToInstance } from 'class-transformer'

export default class OrganizationReference extends OrganizationEntity {
  public name: string
  public display_name: string
  public branding: OrganizationBranding
  public members: OrganizationMemberEntity[] = []

  public getMembers () {
    return $nuxt.$api.$get<OrganizationMemberEntity[]>('/account/organizations/' + this.id + '/members/')
      .then(members => (this.members = members.map(member => plainToInstance(OrganizationMemberEntity, member))))
  }

  public addMembers (ids: string[]) {
    return $nuxt.$api.$post<OrganizationMemberEntity>('/account/organizations/' + this.id + '/members/', ids)
      .then(member => (this.members.push(plainToInstance(OrganizationMemberEntity, member))))
  }

  public removeMembers (ids: string[]) {
    return $nuxt.$api.$delete<OrganizationMemberEntity[]>('/account/organizations/' + this.id + '/members/', { data: ids })
      .then(members => (this.members = members))
  }
}
