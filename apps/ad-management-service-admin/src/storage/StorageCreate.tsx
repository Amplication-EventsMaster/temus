import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const StorageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="FileName" source="fileName" />
        <TextInput label="FilePath" source="filePath" />
        <NumberInput step={1} label="FileSize" source="fileSize" />
        <TextInput label="FileType" source="fileType" />
      </SimpleForm>
    </Create>
  );
};
