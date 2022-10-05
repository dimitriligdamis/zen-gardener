import client from '../../services/http/client';

import {
  LOGIN,
  LOGOUT,
  actionUpdateSession,
  actionLoginFailed,
} from './sessionActions';
import { actionUserDataReceived, actionUserLoggedOut } from '../user/userActions';
import { actionDisplayError } from '../error/errorAction';
import Config from '../../config';

import sessionMockAdapter from '../../services/mockApi/session';
import authHeader from '../../services/http/auth-header';

if (Config.API_MOCK_ENABLED) {
  sessionMockAdapter(client, Config.API_URL_SESSION);
}

const sessionMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { email, password } = action;
      client
        .post(Config.API_URL_SESSION, {
          email,
          password,
        })
        .then((response) => {
          // Login request successful => save session and user data
          const { userData, jwtToken } = response.data;
          store.dispatch(actionUpdateSession());
          store.dispatch(actionUserDataReceived(userData));
          localStorage.setItem('token', jwtToken);
        })
        .catch((error) => {
          // Login request failed => log and inform user
          console.error('Error while logging in', error);
          store.dispatch(actionLoginFailed());
          if (error.response.status === 401) {
            store.dispatch(actionDisplayError('Combinaison email / mot de passe incorrect'));
          }
        });
      break;
    }

    case LOGOUT: {
      client
        .delete(Config.API_URL_SESSION, authHeader())
        .then(() => console.log('Logout successful'))
        .catch((error) => console.log('Logout failed', error))
        .finally(() => {
          // Clearing session anyway for security reasons
          store.dispatch(actionUserLoggedOut(null));
          localStorage.removeItem('token');
        });
      break;
    }

    default:
      break;
  }

  return next(action);
};

export default sessionMiddleware;
