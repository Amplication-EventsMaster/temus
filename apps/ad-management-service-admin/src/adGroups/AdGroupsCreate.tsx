import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { AdsTitle } from "../ads/AdsTitle";
import { CampaignsTitle } from "../campaigns/CampaignsTitle";

export const AdGroupsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="adsItems"
          reference="Ads"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AdsTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="campaign.id"
          reference="Campaigns"
          label="Campaign"
        >
          <SelectInput optionText={CampaignsTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
