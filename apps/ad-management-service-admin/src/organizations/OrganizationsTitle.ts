import { Organizations as TOrganizations } from "../api/organizations/Organizations";

export const ORGANIZATIONS_TITLE_FIELD = "name";

export const OrganizationsTitle = (record: TOrganizations): string => {
  return record.name?.toString() || String(record.id);
};
