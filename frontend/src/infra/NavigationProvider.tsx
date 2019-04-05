import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";

interface NavigationContextType {
  openRootPage(): void;
  openTasksPage(project: string): void;
  openAddTaskPage(projectId: string): void;
}

const NavigationContext = React.createContext<NavigationContextType>({
  openRootPage() {},
  openTasksPage(project: string) {},
  openAddTaskPage(projectId: string) {}
});

interface NavigationProviderProps extends RouteComponentProps<{}> {}

class NavigationProvider extends React.Component<NavigationProviderProps> {
  openRootPage = () => {
    this.props.history.push(``);
  };

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
          openRootPage: this.openRootPage,
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
