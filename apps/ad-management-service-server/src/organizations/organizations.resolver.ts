import * as graphql from "@nestjs/graphql";
import { OrganizationsResolverBase } from "./base/organizations.resolver.base";
import { Organizations } from "./base/Organizations";
import { OrganizationsService } from "./organizations.service";

@graphql.Resolver(() => Organizations)
export class OrganizationsResolver extends OrganizationsResolverBase {
  constructor(protected readonly service: OrganizationsService) {
    super(service);
  }
}
