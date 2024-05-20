import { SortOrder } from "../../util/SortOrder";

export type CampaignsOrderByInput = {
  budget?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  organizationId?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
