import * as React from "react";
import * as styles from "./ProjectApp.scss";
import AddTaskPage from "../AddTaskPage/AddTaskPage";

function Header() {
	return <header className={styles.Header}>
		Personal Project Planning
	</header>
}


export default function ProjectApp() {
	return (<div className={styles.ProjectApp}><Header/>
		<main><AddTaskPage/> </main>
	</div>);
}
