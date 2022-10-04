import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import sessionReducer from './session/sessionReducer';
import tasksReducer from './tasks/tasksReducer';
import errorReducer from './error/errorReducer';

const rootReducer = combineReducers({
  user: userReducer,
  session: sessionReducer,
  tasks: tasksReducer,
  error: errorReducer,
});

export default rootReducer;
