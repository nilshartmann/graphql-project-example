import * as React from "react";
import * as styles from "./Form.scss"

interface InputProps {
	label: string;
}

export default function Input({label}: InputProps) {
	return <div className={styles.Input}>

		<label>{label}</label>
		<input type={"text"} value={"fsfasdf"}/>
	</div>
}