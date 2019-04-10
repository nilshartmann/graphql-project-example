import * as React from "react";

import * as styles from "./AddTaskPage.scss";
import gql from "graphql-tag";
import { Mutation, Query, withApollo } from "react-apollo";
import { AddTaskPageQuery } from "../querytypes/AddTaskPageQuery";
import { useNavigator } from "../infra/NavigationProvider";
import { RouteComponentProps } from "react-router";
import { AddTaskForm } from "./AddTaskForm";
import ApolloClient from "apollo-client";
import { AddTaskInput } from "../querytypes/global-query-types";
import { AddTaskMutation, AddTaskMutationVariables } from "../querytypes/AddTaskMutation";
import moment = require("moment");

const ADD_TASK_PAGE_QUERY = gql`
  query AddTaskPageQuery {
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
  //
  // function handleNewTask(newTask: AddTaskInput) {
  //   client
  //     .mutate<AddTaskMutation, AddTaskMutationVariables>({
  //       mutation: ADD_TASK_MUTATION,
  //       variables: {
  //         newTask,
  //         projectId: projectId
  //       }
  //     })
  //     .then(r => console.log(r));
  // }

  return (
    <div className={styles.AddTaskPage}>
      <header>
        <h1>Frühjahrsputz - Add new Task</h1>
      </header>
      <Query<AddTaskPageQuery> query={ADD_TASK_PAGE_QUERY}>
        {({ loading, error, data }) => {
          if (loading) {
            return <h1>Loading...</h1>;
          }

          if (error || !data) {
            console.error(error);
            return <h1>Loading users failed</h1>;
          }

          const { users } = data;

          console.dir(data);

          return (
            <Mutation<AddTaskMutation, AddTaskMutationVariables>
              mutation={ADD_TASK_MUTATION}
              onCompleted={() => navigator.openTasksPage(projectId)}
            >
              {addTask => {
                console.log("mutation");
                return (
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
