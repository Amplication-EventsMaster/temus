import * as graphql from "@nestjs/graphql";
import { CampaignsResolverBase } from "./base/campaigns.resolver.base";
import { Campaigns } from "./base/Campaigns";
import { CampaignsService } from "./campaigns.service";

@graphql.Resolver(() => Campaigns)
export class CampaignsResolver extends CampaignsResolverBase {
  constructor(protected readonly service: CampaignsService) {
    super(service);
  }
}
