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
import { CampaignsWhereInput } from "./CampaignsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CampaignsOrderByInput } from "./CampaignsOrderByInput";

@ArgsType()
class CampaignsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CampaignsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CampaignsWhereInput, { nullable: true })
  @Type(() => CampaignsWhereInput)
  where?: CampaignsWhereInput;

  @ApiProperty({
    required: false,
    type: [CampaignsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CampaignsOrderByInput], { nullable: true })
  @Type(() => CampaignsOrderByInput)
  orderBy?: Array<CampaignsOrderByInput>;

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

export { CampaignsFindManyArgs as CampaignsFindManyArgs };