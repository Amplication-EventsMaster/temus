import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizationsServiceBase } from "./base/organizations.service.base";

@Injectable()
export class OrganizationsService extends OrganizationsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
