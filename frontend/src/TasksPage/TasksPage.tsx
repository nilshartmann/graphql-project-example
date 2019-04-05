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
      title
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

interface TasksPageTableProps {
  projectId: string;
  tasks: TasksPageQuery_project_taskList_tasks[];
}
function TasksTable({ projectId, tasks }: TasksPageTableProps) {
  const navigator = useNavigator();

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
                <NavButton onClick={() => navigator.openTaskPage(projectId, task.id)} />
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

          return (
            <>
              <header>
                <h1>{data.project.title} Tasks</h1>
              </header>
              <TasksTable projectId={data.project.id} tasks={data.project.taskList.tasks} />
            </>
          );
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
