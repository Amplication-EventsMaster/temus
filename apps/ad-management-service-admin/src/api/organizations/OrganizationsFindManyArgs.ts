import { OrganizationsWhereInput } from "./OrganizationsWhereInput";
import { OrganizationsOrderByInput } from "./OrganizationsOrderByInput";

export type OrganizationsFindManyArgs = {
  where?: OrganizationsWhereInput;
  orderBy?: Array<OrganizationsOrderByInput>;
  skip?: number;
  take?: number;
};
