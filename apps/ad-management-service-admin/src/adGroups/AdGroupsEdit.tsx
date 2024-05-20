import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { AdsTitle } from "../ads/AdsTitle";
import { CampaignsTitle } from "../campaigns/CampaignsTitle";

export const AdGroupsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
