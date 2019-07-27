import React, { useState, useCallback, memo } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { userQuery } from './UserList';

const createUserMutation = gql`
  mutation createUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id,
      name,
      email
    }
  }
`;

function UserForm() {
  const [name, handleName] = useState('');
  const [email, handleEmail] = useState('');

  const handleSumitForm = useCallback(async (event, createUser) => {
    if (event) event.preventDefault();

    await createUser({
      variables: { name, email },
      update: (proxy, { data: { createUser: createUserData } }) => {
        const data = proxy.readQuery({
          query: userQuery,
        });

        data.users.push(createUserData);

        proxy.writeQuery({
          query: userQuery,
          data,
        });
      },
    });

    handleName('');
    handleEmail('');
  }, [name, email]);

  return (
    <Mutation mutation={createUserMutation}>
      {createUser => (
        <form onSubmit={event => handleSumitForm(event, createUser)}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={event => handleName(event.target.value)}
            required
          />
          <input
            type="text"
            name="email"
            value={email}
            onChange={event => handleEmail(event.target.value)}
            required
          />

          <button type="submit">Enviar</button>
        </form>
      )}
    </Mutation>
  );
}

export default memo(UserForm);
