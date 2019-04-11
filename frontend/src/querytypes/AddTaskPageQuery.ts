/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AddTaskPageQuery
// ====================================================

export interface AddTaskPageQuery_project {
  __typename: "Project";
  id: string;
  /**
   *  Give your project a simple, concise title
   */
  title: string;
}

export interface AddTaskPageQuery_users {
  __typename: "User";
  /**
   *  The human readable name of the person
   */
  name: string;
  id: string;
}

export interface AddTaskPageQuery {
  /**
   *  Return the specified project
   */
  project: AddTaskPageQuery_project | null;
  users: AddTaskPageQuery_users[];
}

export interface AddTaskPageQueryVariables {
  projectId: string;
}
