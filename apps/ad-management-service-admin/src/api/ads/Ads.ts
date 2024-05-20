import { AdGroups } from "../adGroups/AdGroups";
import { Categories } from "../categories/Categories";
import { JsonValue } from "type-fest";

export type Ads = {
  adGroup?: AdGroups | null;
  categoriesItems?: Array<Categories>;
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  id: string;
  mediaFile: JsonValue;
  startDate: Date | null;
  title: string | null;
  updatedAt: Date;
  url: string | null;
};
