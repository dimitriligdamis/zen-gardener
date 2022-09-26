import { combineReducers } from 'redux';

import userReducer from './user';
import inputReducer from './input';

const rootReducer = combineReducers({
  user: userReducer,
  input: inputReducer,
});

export default rootReducer;
