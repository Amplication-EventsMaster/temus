import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UsersList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UsersItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="EmailAddress" source="emailAddress" />
        <TextField label="FirstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="LastName" source="lastName" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UserEmailAddress" source="userEmailAddress" />
        <TextField label="UserFirstName" source="userFirstName" />
        <TextField label="UserLastName" source="userLastName" />
        <TextField label="UserOrganization" source="userOrganization" />
      </Datagrid>
    </List>
  );
};
