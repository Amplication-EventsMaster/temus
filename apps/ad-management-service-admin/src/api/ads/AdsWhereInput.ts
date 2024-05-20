import { AdGroupsWhereUniqueInput } from "../adGroups/AdGroupsWhereUniqueInput";
import { CategoriesListRelationFilter } from "../categories/CategoriesListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type AdsWhereInput = {
  adGroup?: AdGroupsWhereUniqueInput;
  categoriesItems?: CategoriesListRelationFilter;
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  mediaFile?: JsonFilter;
  startDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
};
