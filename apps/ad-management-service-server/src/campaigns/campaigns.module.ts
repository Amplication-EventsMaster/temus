import { Module } from "@nestjs/common";
import { CampaignsModuleBase } from "./base/campaigns.module.base";
import { CampaignsService } from "./campaigns.service";
import { CampaignsController } from "./campaigns.controller";
import { CampaignsResolver } from "./campaigns.resolver";

@Module({
  imports: [CampaignsModuleBase],
  controllers: [CampaignsController],
  providers: [CampaignsService, CampaignsResolver],
  exports: [CampaignsService],
})
export class CampaignsModule {}
