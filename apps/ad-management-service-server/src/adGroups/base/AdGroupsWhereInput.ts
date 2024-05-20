/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdsListRelationFilter } from "../../ads/base/AdsListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CampaignsWhereUniqueInput } from "../../campaigns/base/CampaignsWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class AdGroupsWhereInput {
  @ApiProperty({
    required: false,
    type: () => AdsListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AdsListRelationFilter)
  @IsOptional()
  @Field(() => AdsListRelationFilter, {
    nullable: true,
  })
  adsItems?: AdsListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CampaignsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CampaignsWhereUniqueInput)
  @IsOptional()
  @Field(() => CampaignsWhereUniqueInput, {
    nullable: true,
  })
  campaign?: CampaignsWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;
}

export { AdGroupsWhereInput as AdGroupsWhereInput };