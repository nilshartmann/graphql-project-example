import * as React from "react";
import * as styles from "./ProjectsPage.scss";
import NavButton from "../components/NavButton";
import { useNavigator } from "../infra/NavigationProvider";
import gql from "graphql-tag";
import { ProjectsPageQuery, ProjectsPageQuery_projects } from "../querytypes/ProjectsPageQuery";
import { Query } from "react-apollo";

const PROJECTS_QUERY = gql`
  query ProjectsPageQuery {
    projects {
      id
      title
      owner {
        name
      }
      category {
        name
      }
    }
  }
`;

interface ProjectsTableProps {
  projects: ProjectsPageQuery_projects[];
}

function ProjectsTable({ projects }: ProjectsTableProps) {
  const navigator = useNavigator();
  return (
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
        {projects.map(project => {
          return (
            <tr key={project.id}>
              <td>{project.title}</td>
              <td>{project.owner.name}</td>
              <td>{project.category.name}</td>
              <td>
                <NavButton onClick={() => navigator.openTasksPage(project.id)} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default function ProjectsPage() {
  return (
    <div className={styles.ProjectsPage}>
      <header>
        <h1>Your Projects</h1>
      </header>

      <Query<ProjectsPageQuery> query={PROJECTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) {
            return <h2>Loading...</h2>;
          }
          if (error || !data) {
            return <h2>Sorry... Something failed while loading data </h2>;
          }

          return <ProjectsTable projects={data.projects} />;
        }}
      </Query>
    </div>
  );
}
