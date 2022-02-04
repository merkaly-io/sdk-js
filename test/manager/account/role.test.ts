import { RoleEntity } from '@merkaly/api/src/account/roles/role.entity'
import { CreateRoleValidator, UpdateRoleValidator } from '@merkaly/api/src/account/roles/role.validator'
import faker from 'faker'
import { ManagerSDK } from '../../../index'

describe('Manager > Account > Role >', () => {
  const $merkaly = new ManagerSDK()

  let role: RoleEntity
  const createValidator: CreateRoleValidator = {
    name: faker.lorem.word(),
    description: faker.lorem.paragraph()
  }

  beforeAll(async () => {
    role = await $merkaly.account.roles.create(createValidator)

    expect(role.id.startsWith('rol_')).toBeTruthy()
  })

  // beforeAll(async () => $merkaly.$auth.login({
  //   username: String(process.env.username),
  //   password: String(process.env.password)
  // }))

  describe('when an role is created', () => {
    test('should retrieve the created role', async () => {
      const createdRole = await $merkaly.account.roles.read(role.id)

      expect(createdRole.name).toEqual(createValidator.name)
      expect(createdRole.description).toEqual(createValidator.description)
    })

    test('should retrieve all roles including the created role', async () => {
      const roles = await $merkaly.account.roles.find()

      expect(roles).toEqual(expect.arrayContaining([expect.objectContaining(role)]))
    })

    test('should update the created role', async () => {
      const updateValidator: UpdateRoleValidator = {
        name: faker.lorem.word(),
        description: faker.lorem.paragraph()
      }

      const updateRole = await $merkaly.account.roles.update(role.id, updateValidator)

      expect(updateRole.name).toEqual(updateValidator.name)
      expect(updateRole.description).toEqual(updateValidator.description)
    })
  })

  afterAll(async () => {
    await $merkaly.account.roles.remove(role.id)
    const removedRole = await $merkaly.account.roles.read(role.id)

    expect(removedRole).toBeFalsy()
  })
})
