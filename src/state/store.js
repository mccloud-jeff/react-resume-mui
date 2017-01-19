import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerReducer as routing, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import persistSession from 'redux-sessionstorage';
import { reducers } from './modules';

const rootReducer = combineReducers({ ...reducers, routing });
const enhancers = [];
const middleware = [thunk];

if (typeof window !== 'undefined') {
  // Persist portions of Redux state to localStorage
  enhancers.push(persistState(['app'], { key: '__APP_STATE__' }));
  // Persist portions of Redux state to sessionStorage
  enhancers.push(persistSession(['auth'], { key: '__SESSION_STATE__' }));

  // Developer tools
  if (true /*__DEVELOPMENT__*/) {
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
    } else {
      middleware.push(require('redux-logger')())
    }
  }
}

export default (history, preloadedState) => {
  middleware.push(routerMiddleware(history));

  // Middleware must be first enhancer
  enhancers.splice(0, 0, applyMiddleware.apply(null, middleware));

  // Combine enhancers
  const enhancer = compose.apply(null, enhancers);

  return createStore(rootReducer, preloadedState, enhancer);
}
