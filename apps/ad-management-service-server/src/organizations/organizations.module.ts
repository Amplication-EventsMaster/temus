import { Module } from "@nestjs/common";
import { OrganizationsModuleBase } from "./base/organizations.module.base";
import { OrganizationsService } from "./organizations.service";
import { OrganizationsController } from "./organizations.controller";
import { OrganizationsResolver } from "./organizations.resolver";

@Module({
  imports: [OrganizationsModuleBase],
  controllers: [OrganizationsController],
  providers: [OrganizationsService, OrganizationsResolver],
  exports: [OrganizationsService],
})
export class OrganizationsModule {}
