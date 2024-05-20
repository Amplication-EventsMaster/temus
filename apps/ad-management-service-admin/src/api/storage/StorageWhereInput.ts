import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type StorageWhereInput = {
  fileName?: StringNullableFilter;
  filePath?: StringNullableFilter;
  fileSize?: IntNullableFilter;
  fileType?: StringNullableFilter;
  id?: StringFilter;
};
