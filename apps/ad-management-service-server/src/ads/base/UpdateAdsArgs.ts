/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdsWhereUniqueInput } from "./AdsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AdsUpdateInput } from "./AdsUpdateInput";

@ArgsType()
class UpdateAdsArgs {
  @ApiProperty({
    required: true,
    type: () => AdsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AdsWhereUniqueInput)
  @Field(() => AdsWhereUniqueInput, { nullable: false })
  where!: AdsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AdsUpdateInput,
  })
  @ValidateNested()
  @Type(() => AdsUpdateInput)
  @Field(() => AdsUpdateInput, { nullable: false })
  data!: AdsUpdateInput;
}

export { UpdateAdsArgs as UpdateAdsArgs };