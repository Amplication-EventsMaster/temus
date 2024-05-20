import { AdGroupsListRelationFilter } from "../adGroups/AdGroupsListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrganizationsWhereUniqueInput } from "../organizations/OrganizationsWhereUniqueInput";

export type CampaignsWhereInput = {
  adGroupsItems?: AdGroupsListRelationFilter;
  budget?: FloatNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  organization?: OrganizationsWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
};
