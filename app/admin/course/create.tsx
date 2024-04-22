import { Create, SimpleForm, required, TextInput } from "react-admin";

export default function CourseCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} label="Title" />
        <TextInput
          source="imageSrc"
          validate={[required()]}
          label="Image src"
        />
      </SimpleForm>
    </Create>
  );
}
