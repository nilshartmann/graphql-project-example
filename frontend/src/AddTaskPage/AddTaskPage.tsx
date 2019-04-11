import * as React from "react";

import * as styles from "./AddTaskPage.scss";
import gql from "graphql-tag";
import { Mutation, Query, withApollo } from "react-apollo";
import { AddTaskPageQuery, AddTaskPageQueryVariables } from "../querytypes/AddTaskPageQuery";
import { useNavigator } from "../infra/NavigationProvider";
import { RouteComponentProps } from "react-router";
import { AddTaskForm } from "./AddTaskForm";
import { AddTaskMutation, AddTaskMutationVariables } from "../querytypes/AddTaskMutation";

const ADD_TASK_PAGE_QUERY = gql`
  query AddTaskPageQuery($projectId: ID!) {
    project(id: $projectId) {
      # id fetched for apollo cache only
      id
      title
    }

    users {
      name
      id
    }
  }
`;

const ADD_TASK_MUTATION = gql`
  mutation AddTaskMutation($projectId: ID!, $newTask: AddTaskInput!) {
    addTask(projectId: $projectId, input: $newTask) {
      id
    }
  }
`;

interface AddTaskPageProps extends RouteComponentProps<{ projectId: string }> {}

function AddTaskPage({ match }: AddTaskPageProps) {
  const projectId = match.params.projectId;

  const navigator = useNavigator();

  return (
    <div className={styles.AddTaskPage}>
      <Query<AddTaskPageQuery, AddTaskPageQueryVariables> query={ADD_TASK_PAGE_QUERY} variables={{ projectId }}>
        {({ loading, error, data }) => {
          if (loading) {
            return <h1>Loading...</h1>;
          }

          if (error || !data) {
            console.error(error);
            return <h1>Loading users failed</h1>;
          }

          const { project, users } = data;

          if (!project) {
            return <h1>Project not found</h1>;
          }

          return (
            <Mutation<AddTaskMutation, AddTaskMutationVariables>
              mutation={ADD_TASK_MUTATION}
              onCompleted={() => navigator.openTasksPage(projectId)}
            >
              {addTask => {
                return (
                  <>
                    <header>
                      <h1>{project.title} - Add new Task</h1>
                    </header>
                    <AddTaskForm
                      users={users}
                      onSave={newTask => {
                        addTask({
                          variables: {
                            projectId,
                            newTask
                          }
                        });
                      }}
                      onCancel={() => navigator.openTasksPage(projectId)}
                    />
                  </>
                );
              }}
            </Mutation>
          );
        }}
      </Query>
    </div>
  );
}

export default withApollo(AddTaskPage);
