/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AdsWhereUniqueInput } from "../../ads/base/AdsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AdsUpdateManyWithoutAdGroupsItemsInput {
  @Field(() => [AdsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AdsWhereUniqueInput],
  })
  connect?: Array<AdsWhereUniqueInput>;

  @Field(() => [AdsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AdsWhereUniqueInput],
  })
  disconnect?: Array<AdsWhereUniqueInput>;

  @Field(() => [AdsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AdsWhereUniqueInput],
  })
  set?: Array<AdsWhereUniqueInput>;
}

export { AdsUpdateManyWithoutAdGroupsItemsInput as AdsUpdateManyWithoutAdGroupsItemsInput };
