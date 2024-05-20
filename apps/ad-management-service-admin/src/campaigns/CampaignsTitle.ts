import { Campaigns as TCampaigns } from "../api/campaigns/Campaigns";

export const CAMPAIGNS_TITLE_FIELD = "name";

export const CampaignsTitle = (record: TCampaigns): string => {
  return record.name?.toString() || String(record.id);
};
