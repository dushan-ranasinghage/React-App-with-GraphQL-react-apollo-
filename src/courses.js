import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";


const Courses = () => (
    <Query
    query={gql`
      {
       message
      }
    `}
  >
    {({ loading, error, data }) => {
        console.log(data);
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
        return <div>{data.message}</div>
    }}
  </Query>
);
export default Courses;
