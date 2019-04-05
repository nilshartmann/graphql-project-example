import * as React from "react";
import * as styles from "./ProjectsPage.scss";
import NavButton from "../components/NavButton";
import { useNavigator } from "../infra/NavigationProvider";

const TABLE = [
  ["Project 1", "Klaus Dieter Müller", "Reise"],
  ["Frühjahrsputz", "Ludger Schmidt", "Business"],
  ["GraphQL", "Dirk Meier", "Business"],
  ["Banking", "Maja Smith", "Private"]
];

interface ProjectsTableProps {
  projects: typeof TABLE;
}
function ProjectsTable({ projects }: ProjectsTableProps) {}

export default function ProjectsPage() {
  const navigator = useNavigator();
  return (
    <div className={styles.ProjectsPage}>
      <header>
        <h1>Your Projects</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Category</th>
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
                <td>
                  <NavButton onClick={() => navigator.openTasksPage(`project_${rowIx}`)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
