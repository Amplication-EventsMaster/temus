import { Module } from "@nestjs/common";
import { AdGroupsModuleBase } from "./base/adGroups.module.base";
import { AdGroupsService } from "./adGroups.service";
import { AdGroupsController } from "./adGroups.controller";
import { AdGroupsResolver } from "./adGroups.resolver";

@Module({
  imports: [AdGroupsModuleBase],
  controllers: [AdGroupsController],
  providers: [AdGroupsService, AdGroupsResolver],
  exports: [AdGroupsService],
})
export class AdGroupsModule {}
