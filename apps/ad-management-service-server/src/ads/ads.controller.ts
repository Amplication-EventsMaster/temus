import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdsService } from "./ads.service";
import { AdsControllerBase } from "./base/ads.controller.base";

@swagger.ApiTags("ads")
@common.Controller("ads")
export class AdsController extends AdsControllerBase {
  constructor(protected readonly service: AdsService) {
    super(service);
  }
}
