import { SortOrder } from "../../util/SortOrder";

export type StorageOrderByInput = {
  createdAt?: SortOrder;
  fileName?: SortOrder;
  filePath?: SortOrder;
  fileSize?: SortOrder;
  fileType?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
