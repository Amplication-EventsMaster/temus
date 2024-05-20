import { AdGroupsWhereUniqueInput } from "../adGroups/AdGroupsWhereUniqueInput";
import { CategoriesUpdateManyWithoutAdsItemsInput } from "./CategoriesUpdateManyWithoutAdsItemsInput";
import { InputJsonValue } from "../../types";

export type AdsUpdateInput = {
  adGroup?: AdGroupsWhereUniqueInput | null;
  categoriesItems?: CategoriesUpdateManyWithoutAdsItemsInput;
  description?: string | null;
  endDate?: Date | null;
  mediaFile?: InputJsonValue;
  startDate?: Date | null;
  title?: string | null;
  url?: string | null;
};
