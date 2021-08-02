import { Account } from '@merkaly/api'
import $axios from 'axios'
import { join } from 'path'
import AppReference from '../../app.reference'
import { route } from './organization.endpoint'

export default class OrganizationReference extends AppReference implements Account.Organization.Entity {

  public name: string
  public display_name: string
  public branding: Account.Organization.OrganizationBranding
  public members: Account.Organization.Members.Entity[] = []

  protected get $route () {
    return route(this.id, Account.Organization.Members.Entity.$path)
  }

  public getMembers () {
    return $axios.get<Account.Organization.Members.Entity[]>(this.$route)
      .then(({ data: members }) => (this.members = members))
  }

  public addMember (id: string) {
    return $axios.post<Account.Organization.Members.Entity>(this.$route, { id })
      .then(({ data: member }) => (this.members.push(member)))
  }

  public removeMember (id: string) {
    return $axios.delete<Account.Organization.Members.Entity[]>(join(this.$route + id))
      .then(({ data }) => (this.members = data))
  }
}
