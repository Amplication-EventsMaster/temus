import { AdsCreateNestedManyWithoutAdGroupsItemsInput } from "./AdsCreateNestedManyWithoutAdGroupsItemsInput";
import { CampaignsWhereUniqueInput } from "../campaigns/CampaignsWhereUniqueInput";

export type AdGroupsCreateInput = {
  adsItems?: AdsCreateNestedManyWithoutAdGroupsItemsInput;
  campaign?: CampaignsWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
};
