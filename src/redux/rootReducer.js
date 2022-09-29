import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import sessionReducer from './session/sessionReducer';
import errorReducer from './error/errorReducer';

const rootReducer = combineReducers({
  user: userReducer,
  session: sessionReducer,
  error: errorReducer,
});

export default rootReducer;
