import * as React from "react";
import * as styles from "./ButtonBar.scss";

interface ButtonBarProps {
  children: React.ReactNode;
}

export default function ButtonBar({ children }: ButtonBarProps) {
  return <div className={styles.ButtonBar}>{children}</div>;
}
