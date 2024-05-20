import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AdGroupsTitle } from "../adGroups/AdGroupsTitle";
import { OrganizationsTitle } from "../organizations/OrganizationsTitle";

export const CampaignsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="adGroupsItems"
          reference="AdGroups"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AdGroupsTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Budget" source="budget" />
        <DateTimeInput label="EndDate" source="endDate" />
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="organization.id"
          reference="Organizations"
          label="Organization"
        >
          <SelectInput optionText={OrganizationsTitle} />
        </ReferenceInput>
        <DateTimeInput label="StartDate" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};
