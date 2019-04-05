import NavButton from "../components/NavButton";
import * as styles from "../ProjectApp/ProjectApp.scss";
import Button from "../components/Button";
import { ChevronRight } from "@githubprimer/octicons-react";
import * as React from "react";
import { useNavigator } from "../infra/NavigationProvider";

const TABLE = [
  ["Fenster putzen", "Klaus Dieter Müller", "Running", <NavButton onClick={() => console.log("KLICK")} />],
  ["Balkon fegen", "Paul Peter Meier", "New", <NavButton onClick={() => console.log("KLICK")} />],
  ["Müll rausbringen", "Susi Schmidt", "New", <NavButton onClick={() => console.log("KLICK")} />],
  ["Geschirr spülen", "Maja Smith", "Done", <NavButton onClick={() => console.log("KLICK")} />],
  ["Staubsaugen", "Pete-Paul Meier", "Running", <NavButton onClick={() => console.log("KLICK")} />]
];

export default function TasksPage() {
  const navigator = useNavigator();

  return (
    <div className={styles.TasksPage}>
      <header>
        <h1>Your Tasks</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Assignee</th>
            <th>State</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {TABLE.map((row, rowIx) => {
            return (
              <tr key={rowIx}>
                {row.map((col, colIx) => {
                  return <td key={colIx}>{col}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.ButtonBar}>
        <Button onClick={e => navigator.openAddTaskPage("PPP")} icon={ChevronRight}>
          Add Task
        </Button>
      </div>
    </div>
  );
}
