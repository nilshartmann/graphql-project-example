/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { AddTaskInput } from "./global-query-types";

// ====================================================
// GraphQL mutation operation: AddTaskMutation
// ====================================================

export interface AddTaskMutation_addTask {
  __typename: "Task";
  id: string;
}

export interface AddTaskMutation {
  addTask: AddTaskMutation_addTask;
}

export interface AddTaskMutationVariables {
  projectId: string;
  newTask: AddTaskInput;
}
