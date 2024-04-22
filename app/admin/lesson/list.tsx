import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export default function LessonList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <ReferenceField source="unitId" reference="units" />
        <TextField source="order" />
      </Datagrid>
    </List>
  );
}
