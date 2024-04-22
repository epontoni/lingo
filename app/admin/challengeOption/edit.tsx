import {
  SimpleForm,
  required,
  TextInput,
  Edit,
  ReferenceInput,
  BooleanInput,
} from "react-admin";

export default function ChallengeOptionEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="text" validate={[required()]} label="Text" />
        <BooleanInput source="correct" label="Correct option" />
        <ReferenceInput source="challengeId" reference="challenges" />
        <TextInput source="imageSrc" label="Image URL" />
        <TextInput source="audioSrc" label="Audio URL" />
      </SimpleForm>
    </Edit>
  );
}
