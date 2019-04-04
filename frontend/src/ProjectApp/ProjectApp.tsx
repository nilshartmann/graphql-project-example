import * as React from "react";
import * as styles from "./ProjectApp.scss";
import TasksPage from "../TasksPage";
import ProjectsPage from "../ProjectsPage";

function Header() {
	return <header className={styles.Header}>
		Personal Project Planning
	</header>
}


export default function ProjectApp() {
	return (<div className={styles.ProjectApp}><Header/>
		<main><ProjectsPage/> <TasksPage/></main>
	</div>);
}
