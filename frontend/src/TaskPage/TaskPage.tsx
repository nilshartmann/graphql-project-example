import * as React from "react";
import * as styles from "./TaskPage.scss";
import Cardboard from "../components/Cardboard";
import Card, { InfoCard } from "../components/Card";
import { RouteComponentProps } from "react-router";
import gql from "graphql-tag";
import {
  TaskPageQuery,
  TaskPageQuery_project,
  TaskPageQuery_project_task,
  TaskPageQueryVariables
} from "../querytypes/TaskPageQuery";
import { Query } from "react-apollo";
import moment = require("moment");
import { Link } from "react-router-dom";

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

interface TaskPageHeaderProps {
  project: TaskPageQuery_project;
}
function TaskPageHeader({ project }: TaskPageHeaderProps) {
  const { title, task } = project;

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

interface TaskViewProps {
  task: TaskPageQuery_project_task;
}

function TaskView({ task }: TaskViewProps) {
  const finishedUntil = moment(task.toBeFinishedAt);
  const finishedUntilString = finishedUntil.format("MMM D, YYYY");

  return (
    <>
      <Cardboard className={styles.TaskStateCardboard}>
        <InfoCard label="To be finished until" title={finishedUntilString} />
        <InfoCard label={"Assignee"} title={task.assignee.name} />
        <InfoCard label="State" title={task.state} />
      </Cardboard>

      <h1>Description</h1>
      <Card>{task.description}</Card>
    </>
  );
}

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
