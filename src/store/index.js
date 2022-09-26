import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import Config from '../config/index.json';

const isDevelopment = Config.environment === 'development';
let composeEnhancers;

if (isDevelopment) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
else {
  composeEnhancers = compose;
}

const enhancers = composeEnhancers(
  applyMiddleware(),
);

const store = createStore(reducer, enhancers);

export default store;
