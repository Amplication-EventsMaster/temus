import { AdGroupsCreateNestedManyWithoutCampaignsItemsInput } from "./AdGroupsCreateNestedManyWithoutCampaignsItemsInput";
import { OrganizationsWhereUniqueInput } from "../organizations/OrganizationsWhereUniqueInput";

export type CampaignsCreateInput = {
  adGroupsItems?: AdGroupsCreateNestedManyWithoutCampaignsItemsInput;
  budget?: number | null;
  endDate?: Date | null;
  name?: string | null;
  organization?: OrganizationsWhereUniqueInput | null;
  startDate?: Date | null;
};
