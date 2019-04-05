import * as React from "react";
import * as styles from "./Form.scss"

interface SelectProps {
	label: string;
}

export default function Select({label}: SelectProps) {
	return <div className={styles.Select}>

		<label>{label}</label>
		<select>
			<option value={"klaus"}>Klaus</option>
			<option value={"maja"}>Maja</option>
			<option value={"susi"}>Susi</option>
			<option value={"georg"}>Georg</option>
		</select>
	</div>
}