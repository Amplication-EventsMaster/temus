import { AdsUpdateManyWithoutAdGroupsItemsInput } from "./AdsUpdateManyWithoutAdGroupsItemsInput";
import { CampaignsWhereUniqueInput } from "../campaigns/CampaignsWhereUniqueInput";

export type AdGroupsUpdateInput = {
  adsItems?: AdsUpdateManyWithoutAdGroupsItemsInput;
  campaign?: CampaignsWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
};
