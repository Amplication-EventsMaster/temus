import { Storage as TStorage } from "../api/storage/Storage";

export const STORAGE_TITLE_FIELD = "fileName";

export const StorageTitle = (record: TStorage): string => {
  return record.fileName?.toString() || String(record.id);
};
