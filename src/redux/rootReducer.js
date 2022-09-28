import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import inputReducer from './input/inputReducer';
import sessionReducer from './session/sessionReducer';

const rootReducer = combineReducers({
  user: userReducer,
  input: inputReducer,
  session: sessionReducer,
});

export default rootReducer;
