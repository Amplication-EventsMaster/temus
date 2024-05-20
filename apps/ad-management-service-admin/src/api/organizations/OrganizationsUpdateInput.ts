import { CampaignsUpdateManyWithoutOrganizationsItemsInput } from "./CampaignsUpdateManyWithoutOrganizationsItemsInput";
import { UsersWhereUniqueInput } from "../users/UsersWhereUniqueInput";

export type OrganizationsUpdateInput = {
  address?: string | null;
  campaignsItems?: CampaignsUpdateManyWithoutOrganizationsItemsInput;
  name?: string | null;
  users?: UsersWhereUniqueInput | null;
};
