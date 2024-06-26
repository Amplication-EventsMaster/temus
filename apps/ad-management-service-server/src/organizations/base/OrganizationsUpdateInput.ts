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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { CampaignsUpdateManyWithoutOrganizationsItemsInput } from "./CampaignsUpdateManyWithoutOrganizationsItemsInput";
import { Type } from "class-transformer";
import { UsersWhereUniqueInput } from "../../users/base/UsersWhereUniqueInput";

@InputType()
class OrganizationsUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: () => CampaignsUpdateManyWithoutOrganizationsItemsInput,
  })
  @ValidateNested()
  @Type(() => CampaignsUpdateManyWithoutOrganizationsItemsInput)
  @IsOptional()
  @Field(() => CampaignsUpdateManyWithoutOrganizationsItemsInput, {
    nullable: true,
  })
  campaignsItems?: CampaignsUpdateManyWithoutOrganizationsItemsInput;

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
    type: () => UsersWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UsersWhereUniqueInput)
  @IsOptional()
  @Field(() => UsersWhereUniqueInput, {
    nullable: true,
  })
  users?: UsersWhereUniqueInput | null;
}

export { OrganizationsUpdateInput as OrganizationsUpdateInput };
