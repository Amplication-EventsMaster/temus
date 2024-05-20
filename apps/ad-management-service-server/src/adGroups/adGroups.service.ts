import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdGroupsServiceBase } from "./base/adGroups.service.base";

@Injectable()
export class AdGroupsService extends AdGroupsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
