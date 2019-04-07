import { TaskPageQuery_project } from "../querytypes/TaskPageQuery";
import { Link } from "react-router-dom";
import * as React from "react";

interface TaskPageHeaderProps {
  project: TaskPageQuery_project;
}
export default function TaskPageHeader({ project }: TaskPageHeaderProps) {
  const { task } = project;

  const titleLink = <Link to={`/project/${project.id}/tasks`}>{project.title}</Link>;

  const titleElement = task ? (
    <h1>
      {titleLink} > {task.title}
    </h1>
  ) : (
    <h1>{titleLink}</h1>
  );

  return <header>{titleElement}</header>;
}
