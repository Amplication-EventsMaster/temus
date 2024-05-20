/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CategoriesWhereUniqueInput } from "../../categories/base/CategoriesWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CategoriesUpdateManyWithoutAdsItemsInput {
  @Field(() => [CategoriesWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CategoriesWhereUniqueInput],
  })
  connect?: Array<CategoriesWhereUniqueInput>;

  @Field(() => [CategoriesWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CategoriesWhereUniqueInput],
  })
  disconnect?: Array<CategoriesWhereUniqueInput>;

  @Field(() => [CategoriesWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CategoriesWhereUniqueInput],
  })
  set?: Array<CategoriesWhereUniqueInput>;
}

export { CategoriesUpdateManyWithoutAdsItemsInput as CategoriesUpdateManyWithoutAdsItemsInput };