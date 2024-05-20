import { CampaignsWhereInput } from "./CampaignsWhereInput";
import { CampaignsOrderByInput } from "./CampaignsOrderByInput";

export type CampaignsFindManyArgs = {
  where?: CampaignsWhereInput;
  orderBy?: Array<CampaignsOrderByInput>;
  skip?: number;
  take?: number;
};
