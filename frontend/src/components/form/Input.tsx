import * as React from "react";
import * as styles from "./Form.scss";

interface InputProps {
  label: string;
  value: string;
  onChange(newValue: string): void;
}

export default function Input({ label, value, onChange }: InputProps) {
  return (
    <div className={styles.Input}>
      <label>{label}</label>
      <input type={"text"} value={value} onChange={e => onChange(e.currentTarget.value)} />
    </div>
  );
}
