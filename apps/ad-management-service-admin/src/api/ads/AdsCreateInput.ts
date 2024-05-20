import { AdGroupsWhereUniqueInput } from "../adGroups/AdGroupsWhereUniqueInput";
import { CategoriesCreateNestedManyWithoutAdsItemsInput } from "./CategoriesCreateNestedManyWithoutAdsItemsInput";
import { InputJsonValue } from "../../types";

export type AdsCreateInput = {
  adGroup?: AdGroupsWhereUniqueInput | null;
  categoriesItems?: CategoriesCreateNestedManyWithoutAdsItemsInput;
  description?: string | null;
  endDate?: Date | null;
  mediaFile?: InputJsonValue;
  startDate?: Date | null;
  title?: string | null;
  url?: string | null;
};
