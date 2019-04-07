import { TaskState } from "../querytypes/global-query-types";

export function mapTaskState(taskState: TaskState) {
  switch (taskState) {
    case TaskState.FINISHED:
      return "Finished";
    case TaskState.NEW:
      return "New";
    case TaskState.RUNNING:
      return "In Progress";
    default:
      console.warn("Unknown state: ", taskState);
  }

  return taskState;
}
