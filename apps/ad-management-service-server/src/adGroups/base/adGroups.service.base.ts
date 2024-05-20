/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  AdGroups as PrismaAdGroups,
  Ads as PrismaAds,
  Campaigns as PrismaCampaigns,
} from "@prisma/client";

export class AdGroupsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AdGroupsCountArgs, "select">): Promise<number> {
    return this.prisma.adGroups.count(args);
  }

  async adGroupsItems<T extends Prisma.AdGroupsFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdGroupsFindManyArgs>
  ): Promise<PrismaAdGroups[]> {
    return this.prisma.adGroups.findMany<Prisma.AdGroupsFindManyArgs>(args);
  }
  async adGroups<T extends Prisma.AdGroupsFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdGroupsFindUniqueArgs>
  ): Promise<PrismaAdGroups | null> {
    return this.prisma.adGroups.findUnique(args);
  }
  async createAdGroups<T extends Prisma.AdGroupsCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdGroupsCreateArgs>
  ): Promise<PrismaAdGroups> {
    return this.prisma.adGroups.create<T>(args);
  }
  async updateAdGroups<T extends Prisma.AdGroupsUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdGroupsUpdateArgs>
  ): Promise<PrismaAdGroups> {
    return this.prisma.adGroups.update<T>(args);
  }
  async deleteAdGroups<T extends Prisma.AdGroupsDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdGroupsDeleteArgs>
  ): Promise<PrismaAdGroups> {
    return this.prisma.adGroups.delete(args);
  }

  async findAdsItems(
    parentId: string,
    args: Prisma.AdsFindManyArgs
  ): Promise<PrismaAds[]> {
    return this.prisma.adGroups
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .adsItems(args);
  }

  async getCampaign(parentId: string): Promise<PrismaCampaigns | null> {
    return this.prisma.adGroups
      .findUnique({
        where: { id: parentId },
      })
      .campaign();
  }
}
