import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import sessionReducer from './session/sessionReducer';
import tasksReducer from './tasks/tasksReducer';
import sheetsReducer from './sheets/sheetsReducer';
import errorReducer from './error/errorReducer';

const rootReducer = combineReducers({
  user: userReducer,
  session: sessionReducer,
  tasks: tasksReducer,
  sheets: sheetsReducer,
  error: errorReducer,
});

export default rootReducer;
