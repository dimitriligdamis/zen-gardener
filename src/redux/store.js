import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/redux/rootReducer';
import Config from '../config';
import sessionMiddleware from './session/sessionMiddleware';

const isDevelopment = Config.ENVIRONMENT === 'development';
let composeEnhancers;

if (isDevelopment) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
else {
  composeEnhancers = compose;
}

const enhancers = composeEnhancers(
  applyMiddleware(sessionMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
