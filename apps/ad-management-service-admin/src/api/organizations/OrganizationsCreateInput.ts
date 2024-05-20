import { CampaignsCreateNestedManyWithoutOrganizationsItemsInput } from "./CampaignsCreateNestedManyWithoutOrganizationsItemsInput";
import { UsersWhereUniqueInput } from "../users/UsersWhereUniqueInput";

export type OrganizationsCreateInput = {
  address?: string | null;
  campaignsItems?: CampaignsCreateNestedManyWithoutOrganizationsItemsInput;
  name?: string | null;
  users?: UsersWhereUniqueInput | null;
};
