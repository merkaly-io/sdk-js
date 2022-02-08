import Organization from './organization/organization.endpoint';
import Role from './role/role.endpoint';
import User from './user/user.endpoint';
declare namespace Account {
    const organizations: typeof Organization;
    const roles: typeof Role;
    const users: typeof User;
}
export default Account;
//# sourceMappingURL=index.d.ts.map