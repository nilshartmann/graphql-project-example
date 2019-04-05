import * as React from "react";
import * as styles from "./ProjectApp.scss";
import TasksPage from "../TasksPage";
import ProjectsPage from "../ProjectsPage";
import {Form, Input, Select, TextArea} from "../components/form";

function Header() {
	return <header className={styles.Header}>
		Personal Project Planning
	</header>
}

function AddTaskPage() {
	return <div className={styles.AddTaskPage}>
		<header>
		<h1>Frühjahrsputz - Add new Task</h1>
		</header>
		<Form>
			<Input label="Name"/>
			<Input label="Finish until"/>
			<Select label="Assign to"/>
			<TextArea label="Description"/>

		</Form>

	</div>
}


{/*<input type="text" value={"Klaus"} />*/}
{/*<label>Finish until</label>*/}
{/*<input type="text" value={"12.03.2019"} />*/}
{/*<label>Assign To</label>*/}
{/*<select>*/}
{/*<option value={"klaus"}>Klaus</option>*/}
{/*	<option value={"maja"}>Maja</option>*/}
{/*	<option value={"susi"}>Susi</option>*/}
{/*	<option value={"georg"}>Georg</option>*/}
{/*	</select>*/}

{/*	<label>Description</label>*/}
{/*	<textarea rows={5} />*/}

export default function ProjectApp() {
	return (<div className={styles.ProjectApp}><Header/>
		<main><AddTaskPage/> </main>
	</div>);
}
