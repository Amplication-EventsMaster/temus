import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OrganizationsTitle } from "../organizations/OrganizationsTitle";

export const UsersCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="EmailAddress" source="emailAddress" type="email" />
        <TextInput label="FirstName" source="firstName" />
        <TextInput label="LastName" source="lastName" />
        <ReferenceArrayInput
          source="organizationsItems"
          reference="Organizations"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationsTitle} />
        </ReferenceArrayInput>
        <TextInput
          label="UserEmailAddress"
          source="userEmailAddress"
          type="email"
        />
        <TextInput label="UserFirstName" source="userFirstName" />
        <TextInput label="UserLastName" source="userLastName" />
        <TextInput label="UserOrganization" source="userOrganization" />
      </SimpleForm>
    </Create>
  );
};
