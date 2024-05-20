import { Campaigns } from "../campaigns/Campaigns";
import { Users } from "../users/Users";

export type Organizations = {
  address: string | null;
  campaignsItems?: Array<Campaigns>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  users?: Users | null;
};
