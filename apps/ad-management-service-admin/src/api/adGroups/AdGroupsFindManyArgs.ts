import { AdGroupsWhereInput } from "./AdGroupsWhereInput";
import { AdGroupsOrderByInput } from "./AdGroupsOrderByInput";

export type AdGroupsFindManyArgs = {
  where?: AdGroupsWhereInput;
  orderBy?: Array<AdGroupsOrderByInput>;
  skip?: number;
  take?: number;
};
