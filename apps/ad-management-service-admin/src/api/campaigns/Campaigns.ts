import { AdGroups } from "../adGroups/AdGroups";
import { Organizations } from "../organizations/Organizations";

export type Campaigns = {
  adGroupsItems?: Array<AdGroups>;
  budget: number | null;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  name: string | null;
  organization?: Organizations | null;
  startDate: Date | null;
  updatedAt: Date;
};
