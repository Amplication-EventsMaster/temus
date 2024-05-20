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
import { AdGroupsCreateNestedManyWithoutCampaignsItemsInput } from "./AdGroupsCreateNestedManyWithoutCampaignsItemsInput";
import {
  ValidateNested,
  IsOptional,
  IsNumber,
  IsDate,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { OrganizationsWhereUniqueInput } from "../../organizations/base/OrganizationsWhereUniqueInput";

@InputType()
class CampaignsCreateInput {
  @ApiProperty({
    required: false,
    type: () => AdGroupsCreateNestedManyWithoutCampaignsItemsInput,
  })
  @ValidateNested()
  @Type(() => AdGroupsCreateNestedManyWithoutCampaignsItemsInput)
  @IsOptional()
  @Field(() => AdGroupsCreateNestedManyWithoutCampaignsItemsInput, {
    nullable: true,
  })
  adGroupsItems?: AdGroupsCreateNestedManyWithoutCampaignsItemsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  budget?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrganizationsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationsWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationsWhereUniqueInput, {
    nullable: true,
  })
  organization?: OrganizationsWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;
}

export { CampaignsCreateInput as CampaignsCreateInput };
