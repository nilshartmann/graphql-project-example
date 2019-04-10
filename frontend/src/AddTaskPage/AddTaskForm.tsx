import * as React from "react";
import { Form, Input, Select, TextArea } from "../components/form";
import ButtonBar from "../components/ButtonBar";
import Button from "../components/Button";
import { AddTaskPageQuery_users } from "../querytypes/AddTaskPageQuery";
import { AddTaskInput } from "../querytypes/global-query-types";
import moment = require("moment");

interface AddTaskFormProps {
  users: AddTaskPageQuery_users[];

  onSave(newTask: AddTaskInput): void;
  onCancel(): void;
}

function parseDate(dateString: string) {
  if (dateString === "") {
    return "";
  }

  const date = moment(dateString, "DD.MM.YYYY", true);

  if (!date.isValid()) {
    return "";
  }

  return date.toISOString(false);
}

export function AddTaskForm({ users, onSave, onCancel }: AddTaskFormProps) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [assigneeId, setAssigneeId] = React.useState("");
  const [toBeFinishedAt, setToBeFinishedAt] = React.useState("");

  const assignSelectOptions = users.map(u => ({ label: u.name, value: u.id }));

  const buttonDisabled =
    title === "" || description === "" || assigneeId === "" || toBeFinishedAt === "" || parseDate(toBeFinishedAt) === "";

  console.log("buttonDisabled", buttonDisabled);
  return (
    <Form>
      <Input label="Name" value={title} onChange={setTitle} />
      <Input label="Finish until" value={toBeFinishedAt} onChange={setToBeFinishedAt} />
      <Select label="Assign to" value={assigneeId} options={assignSelectOptions} onNewValue={setAssigneeId} />
      <TextArea label="Description" value={description} onChange={setDescription} />

      <ButtonBar>
        <Button secondary onClick={onCancel}>
          Cancel
        </Button>
        <Button
          disabled={buttonDisabled}
          onClick={() => {
            onSave({
              assigneeId,
              description,
              title,
              toBeFinishedAt: parseDate(toBeFinishedAt)
            });
          }}
        >
          Save
        </Button>
      </ButtonBar>
    </Form>
  );
}
