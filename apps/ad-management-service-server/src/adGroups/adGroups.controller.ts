import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdGroupsService } from "./adGroups.service";
import { AdGroupsControllerBase } from "./base/adGroups.controller.base";

@swagger.ApiTags("adGroups")
@common.Controller("adGroups")
export class AdGroupsController extends AdGroupsControllerBase {
  constructor(protected readonly service: AdGroupsService) {
    super(service);
  }
}
