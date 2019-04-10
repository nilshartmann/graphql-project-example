/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProjectsQuery
// ====================================================

export interface ProjectsQuery_projects {
  __typename: "Project";
  id: string;
  /**
   *  Give your project a simple, concise title
   */
  title: string;
}

export interface ProjectsQuery {
  /**
   * Return an unordered list of all projects
   * Everyone can actually SEE any projects without
   * being logged in. Only modifications to a project
   * (or Task) can be done when logged in
   */
  projects: ProjectsQuery_projects[];
}
