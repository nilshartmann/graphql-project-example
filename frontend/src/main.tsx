import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import ProjectApp from "./ProjectApp/ProjectApp";
import NavigationProvider from "./infra/NavigationProvider";

//
// import BeerRatingApp from "./BeerRatingApp";
// import { AuthProvider } from "./AuthContext";
// import createApolloClient from "./createApolloClient";
// const client = createApolloClient();
//
// const theBeerRatingApp = (
//   <ApolloProvider client={client}>
//     <AuthProvider>
//       <BeerRatingApp />
//     </AuthProvider>
//   </ApolloProvider>
// );

const theApp = (
  <Router>
    <NavigationProvider>
      <ProjectApp />
    </NavigationProvider>
  </Router>
);

const mountNode = document.getElementById("app");
ReactDOM.render(theApp, mountNode);
