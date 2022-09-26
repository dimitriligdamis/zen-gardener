import { combineReducers } from 'redux';

import userReducer from './user';
import inputReducer from './input';
import menuReducer from './menu';
// import sessionReducer from './session';

const rootReducer = combineReducers({
  user: userReducer,
  input: inputReducer,
  menu: menuReducer,
  // session: sessionReducer,
});

export default rootReducer;
