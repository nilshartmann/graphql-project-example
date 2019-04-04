import * as React from "react";
import * as styles from "./ProjectsPage.scss";
import NavButton from "../components/NavButton";

const TABLE = [
	["Project 1", "Klaus Dieter Müller", "Reise", <NavButton onClick={() => console.log("KLICK")}/>],
	["Frühjahrsputz", "Ludger Schmidt", "Business", <NavButton onClick={() => console.log("KLICK")}/>],
	["GraphQL", "Dirk Meier", "Business", <NavButton onClick={() => console.log("KLICK")}/>],
	["Banking", "Maja Smith", "Private", <NavButton onClick={() => console.log("KLICK")}/>],

];

export default function ProjectsPage() {
	return <div className={styles.ProjectsPage}>
		<header>
		<h1>Your Projects</h1>
		</header>
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Owner</th>
					<th>Category</th>
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

	</div>;
}