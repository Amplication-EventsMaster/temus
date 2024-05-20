import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ADS_TITLE_FIELD } from "./AdsTitle";
import { ADGROUPS_TITLE_FIELD } from "../adGroups/AdGroupsTitle";

export const AdsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="AdGroup"
          source="adgroups.id"
          reference="AdGroups"
        >
          <TextField source={ADGROUPS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="EndDate" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="MediaFile" source="mediaFile" />
        <TextField label="StartDate" source="startDate" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="URL" source="url" />
        <ReferenceManyField
          reference="Categories"
          target="adsId"
          label="CategoriesItems"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Ads" source="ads.id" reference="Ads">
              <TextField source={ADS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
