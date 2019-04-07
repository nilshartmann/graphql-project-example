import * as React from "react";
import * as styles from "./TaskPage.scss";
import { RouteComponentProps } from "react-router";
import gql from "graphql-tag";
import { TaskPageQuery, TaskPageQuery_project, TaskPageQueryVariables } from "../querytypes/TaskPageQuery";
import { Query } from "react-apollo";
import TaskView from "./TaskView";
import TaskPageHeader from "./TaskPageHeader";

const TASK_QUERY = gql`
  query TaskPageQuery($projectId: ID!, $taskId: ID!) {
    project(id: $projectId) {
      id
      title
      task(id: $taskId) {
        id
        title
        description
        assignee {
          name
        }
        toBeFinishedAt
        state
      }
    }
  }
`;

interface TaskPageProps {
  project: TaskPageQuery_project;
}

function TaskPage({ project }: TaskPageProps) {
  const { task } = project;
  return (
    <div className={styles.TaskPage}>
      <TaskPageHeader project={project} />
      {task ? <TaskView task={task} /> : <h2>Task cannot be found</h2>}
    </div>
  );
}

interface TaskPageControllerProps extends RouteComponentProps<{ projectId: string; taskId: string }> {}

export default function TaskPageController(props: TaskPageControllerProps) {
  const projectId = props.match.params.projectId;
  const taskId = props.match.params.taskId;

  return (
    <Query<TaskPageQuery, TaskPageQueryVariables> query={TASK_QUERY} variables={{ projectId, taskId }}>
      {({ loading, error, data }) => {
        if (loading) {
          return <h2>Loading...</h2>;
        }
        if (error || !data) {
          return <h2>Sorry... Something failed while loading data </h2>;
        }

        if (!data.project) {
          return <h2>Project not found!</h2>;
        }

        return <TaskPage project={data.project} />;
      }}
    </Query>
  );
}
