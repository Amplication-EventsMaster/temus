import { AdsListRelationFilter } from "../ads/AdsListRelationFilter";
import { CampaignsWhereUniqueInput } from "../campaigns/CampaignsWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdGroupsWhereInput = {
  adsItems?: AdsListRelationFilter;
  campaign?: CampaignsWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
