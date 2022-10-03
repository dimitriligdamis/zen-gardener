import client from '../../services/http/client';

import {
  LOGIN,
  LOGOUT,
  actionUpdateSession,
  actionLoginFailed,
  SEND_COOKIE,
} from './sessionActions';
import { actionUserDataReceived } from '../user/userActions';
import { actionDisplayError } from '../error/errorAction';
import Config from '../../config';

import useMockAdapter from '../../services/mockApi/session';

if (Config.API_MOCK_ENABLED) {
  useMockAdapter(client, Config.API_URL_SESSION);
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
          const { userData } = response.data;
          store.dispatch(actionUserDataReceived(userData));
          store.dispatch(actionUpdateSession());
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
        .delete(Config.API_URL_SESSION)
        .then(() => console.log('Logout successful'))
        .catch((error) => console.log('Logout failed', error))
        .finally(() => {
          // Clearing session anyway for security reasons
          store.dispatch(actionUpdateSession(null));
        });
      break;
    }

    case SEND_COOKIE: {
      client
        .get(Config.API_URL_MEMBER)
        .then((response) => {
          const { userData } = response.data;
          console.log(response.data);
          store.dispatch(actionUserDataReceived(userData));
          store.dispatch(actionUpdateSession());
        })
        // 401
        .catch((error) => console.log('Not connected', error));
      break;
    }

    default:
      break;
  }

  return next(action);
};

export default sessionMiddleware;
