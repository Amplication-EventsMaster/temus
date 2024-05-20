import { OrganizationsCreateNestedManyWithoutUsersItemsInput } from "./OrganizationsCreateNestedManyWithoutUsersItemsInput";

export type UsersCreateInput = {
  email?: string | null;
  emailAddress?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  organizationsItems?: OrganizationsCreateNestedManyWithoutUsersItemsInput;
  userEmailAddress?: string | null;
  userFirstName?: string | null;
  userLastName?: string | null;
  userOrganization?: string | null;
};
