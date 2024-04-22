import {
  SimpleForm,
  required,
  TextInput,
  Edit,
  ReferenceInput,
  NumberInput,
} from "react-admin";

export default function LessonEdit() {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" validate={[required()]} label="Id" />
        <TextInput source="title" validate={[required()]} label="Title" />
        <ReferenceInput source="unitId" reference="units" />
        <NumberInput source="order" validate={[required()]} label="Order" />
      </SimpleForm>
    </Edit>
  );
}
