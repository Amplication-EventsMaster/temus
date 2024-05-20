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
import { AdGroupsWhereInput } from "./AdGroupsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AdGroupsOrderByInput } from "./AdGroupsOrderByInput";

@ArgsType()
class AdGroupsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AdGroupsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AdGroupsWhereInput, { nullable: true })
  @Type(() => AdGroupsWhereInput)
  where?: AdGroupsWhereInput;

  @ApiProperty({
    required: false,
    type: [AdGroupsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AdGroupsOrderByInput], { nullable: true })
  @Type(() => AdGroupsOrderByInput)
  orderBy?: Array<AdGroupsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AdGroupsFindManyArgs as AdGroupsFindManyArgs };
