/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AddTaskPageQuery
// ====================================================

export interface AddTaskPageQuery_users {
  __typename: "User";
  /**
   *  The human readable name of the person
   */
  name: string;
  id: string;
}

export interface AddTaskPageQuery {
  users: AddTaskPageQuery_users[];
}
