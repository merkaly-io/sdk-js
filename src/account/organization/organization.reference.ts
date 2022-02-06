import {
  OrganizationBranding,
  OrganizationEntity,
  OrganizationMemberEntity
} from '@merkaly/api/src/account/organizations'
import { plainToInstance } from 'class-transformer'
import { route } from './organization.endpoint'

export default class OrganizationReference extends OrganizationEntity {
  public name: string
  public display_name: string
  public branding: OrganizationBranding
  public members: OrganizationMemberEntity[] = []

  public getMembers () {
    return $nuxt.$api.$get<OrganizationMemberEntity[]>(route())
      .then(members => (this.members = members.map(member => plainToInstance(OrganizationMemberEntity, member))))
  }

  public addMembers (ids: string[]) {
    return $nuxt.$api.$post<OrganizationMemberEntity>(route(OrganizationMemberEntity.$path), ids)
      .then(member => (this.members.push(plainToInstance(OrganizationMemberEntity, member))))
  }

  public removeMembers (ids: string[]) {
    return $nuxt.$api.$delete<OrganizationMemberEntity[]>(route(), { data: ids })
      .then(members => (this.members = members))
  }
}
