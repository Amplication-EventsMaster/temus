import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AdGroupsTitle } from "../adGroups/AdGroupsTitle";
import { CategoriesTitle } from "../categories/CategoriesTitle";

export const AdsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="adGroup.id"
          reference="AdGroups"
          label="AdGroup"
        >
          <SelectInput optionText={AdGroupsTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="categoriesItems"
          reference="Categories"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CategoriesTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="EndDate" source="endDate" />
        <div />
        <DateTimeInput label="StartDate" source="startDate" />
        <TextInput label="Title" source="title" />
        <TextInput label="URL" source="url" />
      </SimpleForm>
    </Create>
  );
};
