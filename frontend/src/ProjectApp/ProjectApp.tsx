import * as React from "react";
import * as styles from "./ProjectApp.scss";
import AddTaskPage from "../AddTaskPage/AddTaskPage";
import { Route, Switch } from "react-router";
import ProjectsPage from "../ProjectsPage";
import TasksPage from "../TasksPage";

function Header() {
  return <header className={styles.Header}>Personal Project Planning</header>;
}

export default function ProjectApp() {
  return (
    <div className={styles.ProjectApp}>
      <Header />
      <main>
        <Switch>
          <Route exact path={"/"} component={ProjectsPage} />
          <Route exact path={"/project/:projectId/tasks"} component={TasksPage} />
          <Route exact path={"/project/:projectId/addtaks"} component={AddTaskPage} />
        </Switch>
      </main>
    </div>
  );
}
