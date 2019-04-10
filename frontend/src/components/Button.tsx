import * as React from "react";
import * as styles from "./Button.scss";
import Octicon, { Icon } from "@githubprimer/octicons-react";
import { MouseEventHandler } from "react";

interface ButtonProps {
  children: React.ReactNode;
  secondary?: boolean;
  icon?: Icon;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export default function Button({ children, icon, onClick, secondary, disabled }: ButtonProps) {
  const buttonClassName = secondary ? `${styles.Button} ${styles.secondary}` : styles.Button;

  return (
    <button className={buttonClassName} onClick={onClick} disabled={disabled}>
      {children}
      {icon && (
        <span className={styles.Icon}>
          <Octicon icon={icon} />
        </span>
      )}
    </button>
  );
}
