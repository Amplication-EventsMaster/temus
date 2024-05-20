import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganizationsListRelationFilter } from "../organizations/OrganizationsListRelationFilter";

export type UsersWhereInput = {
  email?: StringNullableFilter;
  emailAddress?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  organizationsItems?: OrganizationsListRelationFilter;
  userEmailAddress?: StringNullableFilter;
  userFirstName?: StringNullableFilter;
  userLastName?: StringNullableFilter;
  userOrganization?: StringNullableFilter;
};
