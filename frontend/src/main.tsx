import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import ProjectApp from "./ProjectApp/ProjectApp";
import NavigationProvider from "./infra/NavigationProvider";

//
// import BeerRatingApp from "./BeerRatingApp";
// import { AuthProvider } from "./AuthContext";
import createApolloClient from "./infra/createApolloClient";
import { ApolloProvider } from "react-apollo";
const client = createApolloClient();
//
// const theBeerRatingApp = (
//   <ApolloProvider client={client}>
//     <AuthProvider>
//       <BeerRatingApp />
//     </AuthProvider>
//   </ApolloProvider>
// );

const theApp = (
  <ApolloProvider client={client}>
    <Router>
      <NavigationProvider>
        <ProjectApp />
      </NavigationProvider>
    </Router>
  </ApolloProvider>
);

const mountNode = document.getElementById("app");
ReactDOM.render(theApp, mountNode);
