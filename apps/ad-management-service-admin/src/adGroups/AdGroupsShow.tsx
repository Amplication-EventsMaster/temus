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

import { ADGROUPS_TITLE_FIELD } from "./AdGroupsTitle";
import { CAMPAIGNS_TITLE_FIELD } from "../campaigns/CampaignsTitle";

export const AdGroupsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Campaign"
          source="campaigns.id"
          reference="Campaigns"
        >
          <TextField source={CAMPAIGNS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Ads" target="adGroupId" label="AdsItems">
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
