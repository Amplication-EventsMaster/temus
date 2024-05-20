/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Users } from "./Users";
import { UsersCountArgs } from "./UsersCountArgs";
import { UsersFindManyArgs } from "./UsersFindManyArgs";
import { UsersFindUniqueArgs } from "./UsersFindUniqueArgs";
import { CreateUsersArgs } from "./CreateUsersArgs";
import { UpdateUsersArgs } from "./UpdateUsersArgs";
import { DeleteUsersArgs } from "./DeleteUsersArgs";
import { OrganizationsFindManyArgs } from "../../organizations/base/OrganizationsFindManyArgs";
import { Organizations } from "../../organizations/base/Organizations";
import { UsersService } from "../users.service";
@graphql.Resolver(() => Users)
export class UsersResolverBase {
  constructor(protected readonly service: UsersService) {}

  async _usersItemsMeta(
    @graphql.Args() args: UsersCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Users])
  async usersItems(@graphql.Args() args: UsersFindManyArgs): Promise<Users[]> {
    return this.service.usersItems(args);
  }

  @graphql.Query(() => Users, { nullable: true })
  async users(
    @graphql.Args() args: UsersFindUniqueArgs
  ): Promise<Users | null> {
    const result = await this.service.users(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Users)
  async createUsers(@graphql.Args() args: CreateUsersArgs): Promise<Users> {
    return await this.service.createUsers({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Users)
  async updateUsers(
    @graphql.Args() args: UpdateUsersArgs
  ): Promise<Users | null> {
    try {
      return await this.service.updateUsers({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Users)
  async deleteUsers(
    @graphql.Args() args: DeleteUsersArgs
  ): Promise<Users | null> {
    try {
      return await this.service.deleteUsers(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Organizations], { name: "organizationsItems" })
  async findOrganizationsItems(
    @graphql.Parent() parent: Users,
    @graphql.Args() args: OrganizationsFindManyArgs
  ): Promise<Organizations[]> {
    const results = await this.service.findOrganizationsItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}