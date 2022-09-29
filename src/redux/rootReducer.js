import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import sessionReducer from './session/sessionReducer';

const rootReducer = combineReducers({
  user: userReducer,
  session: sessionReducer,
});

export default rootReducer;
