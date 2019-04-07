import { TaskPageQuery_project_task } from "../querytypes/TaskPageQuery";
import Cardboard from "../components/Cardboard";
import * as styles from "./TaskPage.scss";
import Card, { InfoCard } from "../components/Card";
import { mapTaskState } from "../util/mapper";
import * as React from "react";
import moment = require("moment");

interface TaskViewProps {
  task: TaskPageQuery_project_task;
}

export default function TaskView({ task }: TaskViewProps) {
  const finishedUntil = moment(task.toBeFinishedAt);
  const finishedUntilString = finishedUntil.format("MMM D, YYYY");

  return (
    <>
      <Cardboard className={styles.TaskStateCardboard}>
        <InfoCard label="To be finished until" title={finishedUntilString} />
        <InfoCard label={"Assignee"} title={task.assignee.name} />
        <InfoCard label="State" title={mapTaskState(task.state)} />
      </Cardboard>

      <h1>Description</h1>
      <Card>{task.description}</Card>
    </>
  );
}
