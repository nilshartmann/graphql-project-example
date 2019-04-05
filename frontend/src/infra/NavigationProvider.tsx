import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { render } from "react-dom";

interface NavigationContextType {
  openTasksPage(project: string): void;
  openAddTaskPage(projectId: string): void;
}

const NavigationContext = React.createContext<NavigationContextType>({
  openTasksPage(project: string): void {},
  openAddTaskPage(projectId: string): void {}
});

interface NavigationProviderProps extends RouteComponentProps<{}> {}

class NavigationProvider extends React.Component<NavigationProviderProps> {
  openTaskPage = (projectId: string) => {
    this.props.history.push(`/project/${projectId}/tasks`);
  };

  openAddTaskPage = (projectId: string) => {
    this.props.history.push(`/project/${projectId}/addtaks`);
  };

  render() {
    return (
      <NavigationContext.Provider
        value={{
          openTasksPage: this.openTaskPage,
          openAddTaskPage: this.openAddTaskPage
        }}
      >
        {this.props.children}
      </NavigationContext.Provider>
    );
  }
}

export default withRouter(NavigationProvider);

export function useNavigator() {
  return React.useContext(NavigationContext);
}
