import React from 'react';
import { Provider } from 'react-redux'
import { Router } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import routes from './routes';

export default (store, history) => {
  const networkInterface = createNetworkInterface({ uri: '/graphql' });
  const client = new ApolloClient({ networkInterface });
  const appRoutes = routes(store, history);

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router history={history}>
          {appRoutes}
        </Router>
      </Provider>
    </ApolloProvider>
  );
};
