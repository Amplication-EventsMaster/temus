import { Ads } from "../ads/Ads";
import { Campaigns } from "../campaigns/Campaigns";

export type AdGroups = {
  adsItems?: Array<Ads>;
  campaign?: Campaigns | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
