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

import { ORGANIZATIONS_TITLE_FIELD } from "./OrganizationsTitle";
import { USERS_TITLE_FIELD } from "../users/UsersTitle";

export const OrganizationsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Users" source="users.id" reference="Users">
          <TextField source={USERS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Campaigns"
          target="organizationId"
          label="CampaignsItems"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
