import { AdGroupsUpdateManyWithoutCampaignsItemsInput } from "./AdGroupsUpdateManyWithoutCampaignsItemsInput";
import { OrganizationsWhereUniqueInput } from "../organizations/OrganizationsWhereUniqueInput";

export type CampaignsUpdateInput = {
  adGroupsItems?: AdGroupsUpdateManyWithoutCampaignsItemsInput;
  budget?: number | null;
  endDate?: Date | null;
  name?: string | null;
  organization?: OrganizationsWhereUniqueInput | null;
  startDate?: Date | null;
};
