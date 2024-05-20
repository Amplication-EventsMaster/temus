import { Module } from "@nestjs/common";
import { AdsModuleBase } from "./base/ads.module.base";
import { AdsService } from "./ads.service";
import { AdsController } from "./ads.controller";
import { AdsResolver } from "./ads.resolver";

@Module({
  imports: [AdsModuleBase],
  controllers: [AdsController],
  providers: [AdsService, AdsResolver],
  exports: [AdsService],
})
export class AdsModule {}
