import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import inputReducer from './input/inputReducer';
import menuReducer from './menu/menuReducer';
import sessionReducer from './session/sessionReducer';

const rootReducer = combineReducers({
  user: userReducer,
  input: inputReducer,
  menu: menuReducer,
  session: sessionReducer,
});

export default rootReducer;
