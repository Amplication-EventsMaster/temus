import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CampaignsService } from "./campaigns.service";
import { CampaignsControllerBase } from "./base/campaigns.controller.base";

@swagger.ApiTags("campaigns")
@common.Controller("campaigns")
export class CampaignsController extends CampaignsControllerBase {
  constructor(protected readonly service: CampaignsService) {
    super(service);
  }
}
