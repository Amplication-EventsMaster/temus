import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CampaignsListRelationFilter } from "../campaigns/CampaignsListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UsersWhereUniqueInput } from "../users/UsersWhereUniqueInput";

export type OrganizationsWhereInput = {
  address?: StringNullableFilter;
  campaignsItems?: CampaignsListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  users?: UsersWhereUniqueInput;
};
