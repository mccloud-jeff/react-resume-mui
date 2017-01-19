import React from 'react';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';
import 'graphiql/graphiql.css';

const fetcher = (graphQLParams) => {
  return fetch(window.location.origin + '/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
};

export default (props) => (
  <div style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }}>
    <GraphiQL fetcher={fetcher} {...props} />
  </div>
);
