import React from 'react';

import { ApolloProvider } from 'react-apollo';

import client from './services/apollo';

import UserList from './UserList';
import UserForm from './UserForm';

function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <UserForm />
        <UserList />
      </>
    </ApolloProvider>
  );
}

export default App;
