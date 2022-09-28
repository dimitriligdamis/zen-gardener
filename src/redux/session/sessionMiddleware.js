import axios from 'axios';

import {
  LOGIN,
  LOGOUT,
  actionUpdateSession,
  actionLoginFailed,
  REGISTER,
} from './sessionActions';
import { actionUserDataReceived } from '../user/userActions';
import Config from '../../config';

const sessionMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { email, password } = action;
      axios
        .post(Config.API_URL_SESSION, {
          email,
          password,
        })
        .then((response) => {
          // Login request successful => save session and user data
          const { jwtToken, userData } = response.data;
          store.dispatch(actionUserDataReceived(userData));
          store.dispatch(actionUpdateSession(jwtToken));
        })
        .catch((error) => {
          // Login request failed => log and inform user
          console.error('Error while logging in', error);
          store.dispatch(actionLoginFailed());
        });
      break;
    }

    case LOGOUT:
      axios
        .delete(Config.API_URL_SESSION)
        .then((response) => console.log('Logout successful'))
        .catch((error) => console.log('Logout failed', error))
        .finally((_) => {
          // Clearing session anyway for security reasons
          store.dispatch(actionUpdateSession(null));
        });
      break;

    case REGISTER: {
      // TODO
      break;
    }

    default:
      break;
  }

  return next(action);
};

export default sessionMiddleware;
