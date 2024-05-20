import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CampaignsServiceBase } from "./base/campaigns.service.base";

@Injectable()
export class CampaignsService extends CampaignsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
