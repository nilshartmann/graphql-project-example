import * as React from "react";
import * as styles from "./Cardboard.scss";

interface CardsProps {
  children: React.ReactNode;
  className?: string;
}

export default function Cardboard({ children, className }: CardsProps) {
  const cardboardClassName = className ? `${styles.Cardboard} ${className}` : styles.Cardboard;
  return <div className={cardboardClassName}>{children}</div>;
}
