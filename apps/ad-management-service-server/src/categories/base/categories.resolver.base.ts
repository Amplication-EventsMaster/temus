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
import { Categories } from "./Categories";
import { CategoriesCountArgs } from "./CategoriesCountArgs";
import { CategoriesFindManyArgs } from "./CategoriesFindManyArgs";
import { CategoriesFindUniqueArgs } from "./CategoriesFindUniqueArgs";
import { CreateCategoriesArgs } from "./CreateCategoriesArgs";
import { UpdateCategoriesArgs } from "./UpdateCategoriesArgs";
import { DeleteCategoriesArgs } from "./DeleteCategoriesArgs";
import { Ads } from "../../ads/base/Ads";
import { CategoriesService } from "../categories.service";
@graphql.Resolver(() => Categories)
export class CategoriesResolverBase {
  constructor(protected readonly service: CategoriesService) {}

  async _categoriesItemsMeta(
    @graphql.Args() args: CategoriesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Categories])
  async categoriesItems(
    @graphql.Args() args: CategoriesFindManyArgs
  ): Promise<Categories[]> {
    return this.service.categoriesItems(args);
  }

  @graphql.Query(() => Categories, { nullable: true })
  async categories(
    @graphql.Args() args: CategoriesFindUniqueArgs
  ): Promise<Categories | null> {
    const result = await this.service.categories(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Categories)
  async createCategories(
    @graphql.Args() args: CreateCategoriesArgs
  ): Promise<Categories> {
    return await this.service.createCategories({
      ...args,
      data: {
        ...args.data,

        ads: args.data.ads
          ? {
              connect: args.data.ads,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Categories)
  async updateCategories(
    @graphql.Args() args: UpdateCategoriesArgs
  ): Promise<Categories | null> {
    try {
      return await this.service.updateCategories({
        ...args,
        data: {
          ...args.data,

          ads: args.data.ads
            ? {
                connect: args.data.ads,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Categories)
  async deleteCategories(
    @graphql.Args() args: DeleteCategoriesArgs
  ): Promise<Categories | null> {
    try {
      return await this.service.deleteCategories(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Ads, {
    nullable: true,
    name: "ads",
  })
  async getAds(@graphql.Parent() parent: Categories): Promise<Ads | null> {
    const result = await this.service.getAds(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
