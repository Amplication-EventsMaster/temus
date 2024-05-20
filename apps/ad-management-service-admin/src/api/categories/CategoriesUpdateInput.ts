import { AdsWhereUniqueInput } from "../ads/AdsWhereUniqueInput";

export type CategoriesUpdateInput = {
  ads?: AdsWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
};
