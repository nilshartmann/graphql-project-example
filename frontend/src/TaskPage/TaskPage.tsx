import * as React from "react";
import * as styles from "./TaskPage.scss";
import Cardboard from "../components/Cardboard";
import Card, { InfoCard } from "../components/Card";

export default function TaskPage() {
  return (
    <div className={styles.TaskPage}>
      <header>
        <h1>Frühjahrsputz > Fenster putzen</h1>
      </header>
      <Cardboard className={styles.TaskStateCardboard}>
        <InfoCard label="To be finished until" title={"Apr 15, 2019"} />
        <InfoCard label={"Assginee"} title="Klaus-Dieter Müller" />
        <InfoCard label="State" title="In Progress" />
      </Cardboard>

      <h1>Description</h1>
      <Card>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy
      </Card>
    </div>
  );
}
