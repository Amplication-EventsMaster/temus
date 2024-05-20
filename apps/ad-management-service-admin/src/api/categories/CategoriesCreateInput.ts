import { AdsWhereUniqueInput } from "../ads/AdsWhereUniqueInput";

export type CategoriesCreateInput = {
  ads?: AdsWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
};
