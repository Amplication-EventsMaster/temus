import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CampaignsTitle } from "../campaigns/CampaignsTitle";
import { UsersTitle } from "../users/UsersTitle";

export const OrganizationsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" multiline source="address" />
        <ReferenceArrayInput
          source="campaignsItems"
          reference="Campaigns"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CampaignsTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceInput source="users.id" reference="Users" label="Users">
          <SelectInput optionText={UsersTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
