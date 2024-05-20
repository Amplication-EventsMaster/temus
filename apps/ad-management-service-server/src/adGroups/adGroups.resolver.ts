import * as graphql from "@nestjs/graphql";
import { AdGroupsResolverBase } from "./base/adGroups.resolver.base";
import { AdGroups } from "./base/AdGroups";
import { AdGroupsService } from "./adGroups.service";

@graphql.Resolver(() => AdGroups)
export class AdGroupsResolver extends AdGroupsResolverBase {
  constructor(protected readonly service: AdGroupsService) {
    super(service);
  }
}
