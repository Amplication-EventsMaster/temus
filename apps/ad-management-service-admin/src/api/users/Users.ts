import { Organizations } from "../organizations/Organizations";

export type Users = {
  createdAt: Date;
  email: string | null;
  emailAddress: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  organizationsItems?: Array<Organizations>;
  updatedAt: Date;
  userEmailAddress: string | null;
  userFirstName: string | null;
  userLastName: string | null;
  userOrganization: string | null;
};
