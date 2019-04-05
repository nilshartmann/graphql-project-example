import * as React from "react";
import * as styles from "./Form.scss"

interface InputProps {
	label: string;
}

export default function TextArea({label}: InputProps) {
	return <div className={styles.TextArea}>

		<label>{label}</label>
		<textarea rows={5}>Hallo</textarea>
	</div>
}