/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { TaskState } from "./global-query-types";

// ====================================================
// GraphQL query operation: TasksPageQuery
// ====================================================

export interface TasksPageQuery_project_taskList_tasks_assignee {
  __typename: "User";
  /**
   *  The human readable name of the person
   */
  name: string;
}

export interface TasksPageQuery_project_taskList_tasks {
  __typename: "Task";
  id: string;
  /**
   *  A concicse title of this task, that describes what to do
   */
  title: string;
  /**
   *  Who works on this Task or should work on the task
   */
  assignee: TasksPageQuery_project_taskList_tasks_assignee;
  state: TaskState;
}

export interface TasksPageQuery_project_taskList {
  __typename: "TaskConnection";
  tasks: TasksPageQuery_project_taskList_tasks[];
}

export interface TasksPageQuery_project {
  __typename: "Project";
  id: string;
  /**
   * You split your Project into several tasks that you
   * have to work on to finish this Project's goal
   */
  taskList: TasksPageQuery_project_taskList;
}

export interface TasksPageQuery {
  /**
   *  Return the specified project
   */
  project: TasksPageQuery_project | null;
}

export interface TasksPageQueryVariables {
  projectId: string;
}
