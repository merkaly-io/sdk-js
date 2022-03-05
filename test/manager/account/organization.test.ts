import { Account } from '@merkaly/api'
import faker from 'faker'
import OrganizationReference from '../../../src/account/organization/organization.reference'
import { ManagerSDK } from '../../../src/sdk'
import Organization = Account.Organization

describe('Manager > Account > Organization', () => {
  const $merkaly = new ManagerSDK()

  let organization: OrganizationReference

  const createValidator = new Organization.Validator.CreateOrganizationValidator()
  createValidator.name = faker.datatype.uuid()
  createValidator.display_name = faker.company.companyName()
  createValidator.logo_url = faker.image.avatar()
  createValidator.primary_color = faker.internet.color()
  createValidator.secondary_color = faker.internet.color()

  beforeAll(async () => {
    organization = await $merkaly.account.organizations.create(createValidator)

    expect(organization).toBeInstanceOf(OrganizationReference)
    expect(organization.id.startsWith('org_')).toBeTruthy()
  })

  // beforeAll(async () => $merkaly.$auth.login({
  //   username: String(process.env.username),
  //   password: String(process.env.password)
  // }))

  describe('when an organization is created', () => {
    test('should retrieve the created organization', async () => {
      const createdOrg = await $merkaly.account.organizations.read(organization.id)

      expect(createdOrg).toBeInstanceOf(OrganizationReference)

      expect(createdOrg.name).toEqual(createValidator.name)
      expect(createdOrg.display_name).toEqual(createValidator.display_name)
      expect(createdOrg.branding?.logo_url).toEqual(createValidator.logo_url)
      expect(createdOrg.branding?.colors.primary).toEqual(createValidator.primary_color)
      expect(createdOrg.branding?.colors.page_background).toEqual(createValidator.secondary_color)
    })

    test('should retrieve all organizations including the created organization', async () => {
      const organizations = await $merkaly.account.organizations.find()

      expect(organizations).toEqual(expect.arrayContaining([expect.objectContaining(organization)]))
    })

    test('should update the created organization', async () => {
      const updateValidator = new Organization.Validator.UpdateOrganizationValidator()
      updateValidator.display_name = faker.company.companyName()
      updateValidator.logo_url = faker.image.avatar()
      updateValidator.primary_color = faker.internet.color()
      updateValidator.secondary_color = faker.internet.color()

      const updatedOrg = await $merkaly.account.organizations.update(organization.id, updateValidator)

      expect(updatedOrg).toBeInstanceOf(OrganizationReference)

      expect(updatedOrg.display_name).toEqual(updateValidator.display_name)
      expect(updatedOrg.branding?.logo_url).toEqual(updateValidator.logo_url)
      expect(updatedOrg.branding?.colors.primary).toEqual(updateValidator.primary_color)
      expect(updatedOrg.branding?.colors.page_background).toEqual(updateValidator.secondary_color)
    })
  })

  afterAll(async () => {
    await $merkaly.account.organizations.remove(organization.id)
    const removedOrganization = await $merkaly.account.organizations.read(organization.id)

    expect(removedOrganization).toBeFalsy()
  })
})
