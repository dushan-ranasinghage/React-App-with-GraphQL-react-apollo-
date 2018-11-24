import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Courses from "./courses";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
      <nav className="navbar navbar-dark bg-secondary">
        <h5 className="navbar-brand">React and GraphQL</h5>
      </nav>
      <div className="container">
        <Courses />
      </div>
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
