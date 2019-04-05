import * as React from "react";
import * as styles from "./Form.scss"
import Select from 'react-select';
interface SelectProps {
	label: string;
}

export default function SelectX({label}: SelectProps) {
	return <div className={styles.Select}>

		<label>{label}</label>
		<Select>
		<option value={"klaus"}>Klaus</option>
			<option value={"maja"}>Maja</option>
			<option value={"susi"}>Susi</option>
			<option value={"georg"}>Georg</option>
			</Select>
	</div>
}