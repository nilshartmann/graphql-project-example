import * as React from "react";

import { Form, Input, Select, TextArea } from "../components/form";
import ButtonBar from "../components/ButtonBar";
import Button from "../components/Button";

import * as styles from "./AddTaskPage.scss";

export default function AddTaskPage() {
  return (
    <div className={styles.AddTaskPage}>
      <header>
        <h1>Frühjahrsputz - Add new Task</h1>
      </header>
      <Form>
        <Input label="Name" />
        <Input label="Finish until" />
        <Select label="Assign to" />
        <TextArea label="Description" />

        <ButtonBar>
          <Button secondary>Cancel</Button>
          <Button>Save</Button>
        </ButtonBar>
      </Form>
    </div>
  );
}
