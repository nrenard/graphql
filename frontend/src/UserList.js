import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const userQuery = gql`
  query userRequest {
    users {
      name
      id
    }
    user(id: "5d3a544d551f5f341ff3b98c") {
      email
      name
    }
  }
`;

function UserList() {
  return (
    <Query query={userQuery}>
      {({ loading, error, data }) => {
        if (loading) return <p>Carregando</p>;
        if (error) return <p>Error</p>;

        return (
          <ul>
            {data.users.map(item => (
              <li key={item.email}>{item.name}</li>
            ))}
          </ul>
        );
      }}
    </Query>
  );
}

export default UserList;
