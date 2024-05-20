import { OrganizationsUpdateManyWithoutUsersItemsInput } from "./OrganizationsUpdateManyWithoutUsersItemsInput";

export type UsersUpdateInput = {
  email?: string | null;
  emailAddress?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  organizationsItems?: OrganizationsUpdateManyWithoutUsersItemsInput;
  userEmailAddress?: string | null;
  userFirstName?: string | null;
  userLastName?: string | null;
  userOrganization?: string | null;
};
