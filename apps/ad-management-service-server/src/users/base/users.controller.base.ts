/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UsersService } from "../users.service";
import { UsersCreateInput } from "./UsersCreateInput";
import { Users } from "./Users";
import { UsersFindManyArgs } from "./UsersFindManyArgs";
import { UsersWhereUniqueInput } from "./UsersWhereUniqueInput";
import { UsersUpdateInput } from "./UsersUpdateInput";
import { OrganizationsFindManyArgs } from "../../organizations/base/OrganizationsFindManyArgs";
import { Organizations } from "../../organizations/base/Organizations";
import { OrganizationsWhereUniqueInput } from "../../organizations/base/OrganizationsWhereUniqueInput";

export class UsersControllerBase {
  constructor(protected readonly service: UsersService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Users })
  async createUsers(@common.Body() data: UsersCreateInput): Promise<Users> {
    return await this.service.createUsers({
      data: data,
      select: {
        createdAt: true,
        email: true,
        emailAddress: true,
        firstName: true,
        id: true,
        lastName: true,
        updatedAt: true,
        userEmailAddress: true,
        userFirstName: true,
        userLastName: true,
        userOrganization: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Users] })
  @ApiNestedQuery(UsersFindManyArgs)
  async usersItems(@common.Req() request: Request): Promise<Users[]> {
    const args = plainToClass(UsersFindManyArgs, request.query);
    return this.service.usersItems({
      ...args,
      select: {
        createdAt: true,
        email: true,
        emailAddress: true,
        firstName: true,
        id: true,
        lastName: true,
        updatedAt: true,
        userEmailAddress: true,
        userFirstName: true,
        userLastName: true,
        userOrganization: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Users })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async users(
    @common.Param() params: UsersWhereUniqueInput
  ): Promise<Users | null> {
    const result = await this.service.users({
      where: params,
      select: {
        createdAt: true,
        email: true,
        emailAddress: true,
        firstName: true,
        id: true,
        lastName: true,
        updatedAt: true,
        userEmailAddress: true,
        userFirstName: true,
        userLastName: true,
        userOrganization: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Users })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUsers(
    @common.Param() params: UsersWhereUniqueInput,
    @common.Body() data: UsersUpdateInput
  ): Promise<Users | null> {
    try {
      return await this.service.updateUsers({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          emailAddress: true,
          firstName: true,
          id: true,
          lastName: true,
          updatedAt: true,
          userEmailAddress: true,
          userFirstName: true,
          userLastName: true,
          userOrganization: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Users })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUsers(
    @common.Param() params: UsersWhereUniqueInput
  ): Promise<Users | null> {
    try {
      return await this.service.deleteUsers({
        where: params,
        select: {
          createdAt: true,
          email: true,
          emailAddress: true,
          firstName: true,
          id: true,
          lastName: true,
          updatedAt: true,
          userEmailAddress: true,
          userFirstName: true,
          userLastName: true,
          userOrganization: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/organizationsItems")
  @ApiNestedQuery(OrganizationsFindManyArgs)
  async findOrganizationsItems(
    @common.Req() request: Request,
    @common.Param() params: UsersWhereUniqueInput
  ): Promise<Organizations[]> {
    const query = plainToClass(OrganizationsFindManyArgs, request.query);
    const results = await this.service.findOrganizationsItems(params.id, {
      ...query,
      select: {
        address: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,

        users: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/organizationsItems")
  async connectOrganizationsItems(
    @common.Param() params: UsersWhereUniqueInput,
    @common.Body() body: OrganizationsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organizationsItems: {
        connect: body,
      },
    };
    await this.service.updateUsers({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/organizationsItems")
  async updateOrganizationsItems(
    @common.Param() params: UsersWhereUniqueInput,
    @common.Body() body: OrganizationsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organizationsItems: {
        set: body,
      },
    };
    await this.service.updateUsers({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/organizationsItems")
  async disconnectOrganizationsItems(
    @common.Param() params: UsersWhereUniqueInput,
    @common.Body() body: OrganizationsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organizationsItems: {
        disconnect: body,
      },
    };
    await this.service.updateUsers({
      where: params,
      data,
      select: { id: true },
    });
  }
}
