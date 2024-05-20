import { Ads } from "../ads/Ads";

export type Categories = {
  ads?: Ads | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
