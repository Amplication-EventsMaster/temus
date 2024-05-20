import { SortOrder } from "../../util/SortOrder";

export type UsersOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  emailAddress?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  updatedAt?: SortOrder;
  userEmailAddress?: SortOrder;
  userFirstName?: SortOrder;
  userLastName?: SortOrder;
  userOrganization?: SortOrder;
};
