import {
  SimpleForm,
  required,
  TextInput,
  Edit,
  ReferenceInput,
  NumberInput,
  SelectField,
} from "react-admin";

export default function ChallengeEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="question" validate={[required()]} label="Question" />

        <ReferenceInput source="lessonId" reference="lessons" />
        <SelectField
          source="type"
          choices={[
            { id: "SELECT", name: "SELECT" },
            { id: "ASSIST", name: "ASSIST" },
          ]}
          validate={[required()]}
        />

        <NumberInput source="order" validate={[required()]} label="Order" />
      </SimpleForm>
    </Edit>
  );
}
