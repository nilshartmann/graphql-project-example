import * as React from "react";
import * as styles from "./NavButton.scss";

import Arrows from "./Arrows";
import Button from "./Button";
import Octicon, { ArrowRight, ChevronRight } from "@githubprimer/octicons-react";

interface NavButtonProps {
  onClick: React.MouseEventHandler<HTMLElement>;
}

export default function NavButton({ onClick }: NavButtonProps) {
  return (
    <button className={styles.NavButton} onClick={onClick}>
      <Octicon icon={ChevronRight} />
    </button>
  );
}
