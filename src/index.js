import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './state/store';
import configureRouter from './router';

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);
const router = configureRouter(store, history);

ReactDOM.render(
  router,
  document.getElementById('root')
);
