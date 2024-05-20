import * as graphql from "@nestjs/graphql";
import { AdsResolverBase } from "./base/ads.resolver.base";
import { Ads } from "./base/Ads";
import { AdsService } from "./ads.service";

@graphql.Resolver(() => Ads)
export class AdsResolver extends AdsResolverBase {
  constructor(protected readonly service: AdsService) {
    super(service);
  }
}
