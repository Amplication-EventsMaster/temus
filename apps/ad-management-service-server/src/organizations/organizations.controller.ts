import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrganizationsService } from "./organizations.service";
import { OrganizationsControllerBase } from "./base/organizations.controller.base";

@swagger.ApiTags("organizations")
@common.Controller("organizations")
export class OrganizationsController extends OrganizationsControllerBase {
  constructor(protected readonly service: OrganizationsService) {
    super(service);
  }
}
