import { Ads as TAds } from "../api/ads/Ads";

export const ADS_TITLE_FIELD = "title";

export const AdsTitle = (record: TAds): string => {
  return record.title?.toString() || String(record.id);
};
