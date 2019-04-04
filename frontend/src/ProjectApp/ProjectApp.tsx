import * as React from "react";
import * as styles from "./ProjectApp.scss";
import NavButton from "../components/NavButton";
import Button from "../components/Button";
import {ChevronRight} from '@githubprimer/octicons-react'

function Header() {
	return <header className={styles.Header}>
		Personal Project Planning
	</header>
}

const TABLE = [
	["Fenster putzen", "Klaus Dieter Müller", "Running", <NavButton onClick={() => console.log("KLICK")}/>],
	["Balkon fegen", "Paul Peter Meier", "New", <NavButton onClick={() => console.log("KLICK")}/>],
	["Müll rausbringen", "Susi Schmidt", "New", <NavButton onClick={() => console.log("KLICK")}/>],
	["Geschirr spülen", "Maja Smith", "Done", <NavButton onClick={() => console.log("KLICK")}/>],
	["Staubsaugen", "Pete-Paul Meier", "Running", <NavButton onClick={() => console.log("KLICK")}/>],

];

function TasksPage() {
	return <div className={styles.TasksPage}>
		<header>
			<h1>Your Projects</h1>
		</header>
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Assignee</th>
					<th>State</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{TABLE.map((row, rowIx) => {
					return <tr key={rowIx}>
						{row.map((col, colIx) => {
							return <td key={colIx}>{col}</td>
						})}
					</tr>
				})}
			</tbody>
		</table>
		<div className={styles.ButtonBar}>
			<Button onClick={e => console.log("YO")} icon={ChevronRight}>Add Task</Button>
		</div>
	</div>
}

export default function ProjectApp() {
	return (<div className={styles.ProjectApp}><Header/>
		<main><TasksPage/></main>
	</div>);
}
