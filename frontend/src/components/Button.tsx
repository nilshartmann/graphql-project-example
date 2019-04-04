import * as React from "react";
import * as styles from "./Button.scss";
import Octicon, {Icon} from "@githubprimer/octicons-react";
import {MouseEventHandler} from "react";

interface ButtonProps {
	children: React.ReactNode
	icon?: Icon;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({children, icon, onClick}: ButtonProps) {
	return <button className={styles.Button} onClick={onClick}>
		{children}
		{icon && <span className={styles.Icon}><Octicon icon={icon}/></span>}
	</button>
}