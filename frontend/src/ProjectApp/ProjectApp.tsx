import * as React from "react";
import * as styles from "./ProjectApp.scss";
import AddTaskPage from "../AddTaskPage/AddTaskPage";
import { Route, Switch } from "react-router";
import ProjectsPage from "../ProjectsPage";
import TasksPage from "../TasksPage";
import { Link } from "react-router-dom";
import { ApolloClient } from "apollo-client";
import gql from "graphql-tag";
import { withApollo } from "react-apollo";
import TaskPage from "../TaskPage/TaskPage";

function Header() {
  return (
    <header className={styles.Header}>
      <Link to={"/"}>Personal Project Planning</Link>
    </header>
  );
}
interface ProjectAppProps {
  client: ApolloClient<any>;
}

export function ProjectApp({ client }: ProjectAppProps) {
  return (
    <div className={styles.ProjectApp}>
      <Header />
      <main>
        <Switch>
          <Route exact path={"/x"} component={ProjectsPage} />
          <Route exact path={"/project/:projectId/tasks"} component={TasksPage} />
          <Route exact path={"/project/:projectId/addtaks"} component={AddTaskPage} />
        </Switch>
        <TaskPage />
      </main>
    </div>
  );
}

export default withApollo<{}>(ProjectApp);
