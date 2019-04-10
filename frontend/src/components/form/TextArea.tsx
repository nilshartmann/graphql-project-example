import * as React from "react";
import * as styles from "./Form.scss";

interface TextAreaProps {
  label: string;
  value: string;
  onChange(newValue: string): void;
}

export default function TextArea({ label, value, onChange }: TextAreaProps) {
  return (
    <div className={styles.TextArea}>
      <label>{label}</label>
      <textarea rows={5} value={value} onChange={e => onChange(e.currentTarget.value)} />
    </div>
  );
}
