import * as React from "react";
import * as styles from "./Card.scss";

interface CardProps {
  children: React.ReactNode;
}
export default function Card({ children }: CardProps) {
  return <div className={styles.Card}>{children}</div>;
}
interface InfoCardProps {
  label: React.ReactNode;
  title: React.ReactNode;
}
export function InfoCard({ title, label }: InfoCardProps) {
  return (
    <Card>
      <div className={styles.CardLabel}>{label}</div>
      <div className={styles.CardTitle}>{title}</div>
    </Card>
  );
}
