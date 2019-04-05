import NavButton from "../components/NavButton";
import * as styles from "../ProjectApp/ProjectApp.scss";
import Button from "../components/Button";
import { ChevronRight } from "@githubprimer/octicons-react";
import * as React from "react";
import { useNavigator } from "../infra/NavigationProvider";
import gql from "graphql-tag";
import { RouteComponentProps } from "react-router";
import { TasksPageQuery, TasksPageQuery_project_taskList_tasks, TasksPageQueryVariables } from "../querytypes/TasksPageQuery";
import { Query } from "react-apollo";

const TASKS_QUERY = gql`
  query TasksPageQuery($projectId: ID!) {
    project(id: $projectId) {
      id
      taskList: tasks {
        tasks: nodes {
          id
          title
          assignee {
            name
          }
          state
        }
      }
    }
  }
`;

const TABLE = [
  ["Fenster putzen", "Klaus Dieter Müller", "Running", <NavButton onClick={() => console.log("KLICK")} />],
  ["Balkon fegen", "Paul Peter Meier", "New", <NavButton onClick={() => console.log("KLICK")} />],
  ["Müll rausbringen", "Susi Schmidt", "New", <NavButton onClick={() => console.log("KLICK")} />],
  ["Geschirr spülen", "Maja Smith", "Done", <NavButton onClick={() => console.log("KLICK")} />],
  ["Staubsaugen", "Pete-Paul Meier", "Running", <NavButton onClick={() => console.log("KLICK")} />]
];

interface TasksPageTableProps {
  tasks: TasksPageQuery_project_taskList_tasks[];
}
function TasksTable({ tasks }: TasksPageTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Assignee</th>
          <th>State</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => {
          return (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.assignee.name}</td>
              <td>{task.state}</td>
              <td>
                <NavButton onClick={() => console.log("KLICK")} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

interface TasksPageProps extends RouteComponentProps<{ projectId: string }> {}

export default function TasksPage(props: TasksPageProps) {
  const projectId = props.match.params.projectId;
  const navigator = useNavigator();

  return (
    <div className={styles.TasksPage}>
      <header>
        <h1>Your Tasks</h1>
      </header>

      <Query<TasksPageQuery, TasksPageQueryVariables> query={TASKS_QUERY} variables={{ projectId }}>
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

          return <TasksTable tasks={data.project.taskList.tasks} />;
        }}
      </Query>

      <div className={styles.ButtonBar}>
        <Button onClick={e => navigator.openAddTaskPage("PPP")} icon={ChevronRight}>
          Add Task
        </Button>
      </div>
    </div>
  );
}
