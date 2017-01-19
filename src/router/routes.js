import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from '../App';
import Home from '../pages/home';
import GraphiQLPage from '../pages/graphiql';

export default (/*store, history*/) => {
  return (
    <Route path={'/'} component={App}>
      <IndexRoute component={Home} />
      <Route path="graphiql" component={GraphiQLPage} />
      <Route path=":profile" component={Home} />
    </Route>
  );
};
