import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const StorageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="FileName" source="fileName" />
        <TextInput label="FilePath" source="filePath" />
        <NumberInput step={1} label="FileSize" source="fileSize" />
        <TextInput label="FileType" source="fileType" />
      </SimpleForm>
    </Edit>
  );
};
