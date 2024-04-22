import { SimpleForm, required, TextInput, Edit } from "react-admin";

export default function CourseEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" validate={[required()]} label="Id" />
        <TextInput source="title" validate={[required()]} label="Title" />
        <TextInput
          source="imageSrc"
          validate={[required()]}
          label="Image src"
        />
      </SimpleForm>
    </Edit>
  );
}
