/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProjectsPageQuery
// ====================================================

export interface ProjectsPageQuery_projects_owner {
  __typename: "User";
  /**
   *  The human readable name of the person
   */
  name: string;
}

export interface ProjectsPageQuery_projects_category {
  __typename: "Category";
  name: string;
}

export interface ProjectsPageQuery_projects {
  __typename: "Project";
  id: string;
  /**
   *  Give your project a simple, concise title
   */
  title: string;
  /**
   *  The project owner
   */
  owner: ProjectsPageQuery_projects_owner;
  category: ProjectsPageQuery_projects_category;
}

export interface ProjectsPageQuery {
  /**
   * Return an unordered list of all projects
   * Everyone can actually SEE any projects without
   * being logged in. Only modifications to a project
   * (or Task) can be done when logged in
   */
  projects: ProjectsPageQuery_projects[];
}
