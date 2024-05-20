import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CAMPAIGNS_TITLE_FIELD } from "./CampaignsTitle";
import { ORGANIZATIONS_TITLE_FIELD } from "../organizations/OrganizationsTitle";

export const CampaignsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Budget" source="budget" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="EndDate" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Organization"
          source="organizations.id"
          reference="Organizations"
        >
          <TextField source={ORGANIZATIONS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="StartDate" source="startDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AdGroups"
          target="campaignId"
          label="AdGroupsItems"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
