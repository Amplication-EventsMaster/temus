import { AdGroups as TAdGroups } from "../api/adGroups/AdGroups";

export const ADGROUPS_TITLE_FIELD = "name";

export const AdGroupsTitle = (record: TAdGroups): string => {
  return record.name?.toString() || String(record.id);
};
