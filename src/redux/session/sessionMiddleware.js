import axios from 'axios';

import {
  LOGIN,
  LOGOUT,
  actionUpdateSession,
  actionLoginFailed,
  REGISTER,
} from './sessionActions';
import { actionUserDataReceived } from '../user/userActions';
import { actionDisplayError } from '../error/errorAction';
import Config from '../../config';

import useMockAdapter from '../../services/mockApi/session';

if (Config.API_MOCK_ENABLED) {
  useMockAdapter(axios, Config.API_URL_SESSION);
}

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

    case LOGOUT:
      axios
        .delete(Config.API_URL_SESSION)
        .then(() => console.log('Logout successful'))
        .catch((error) => console.log('Logout failed', error))
        .finally(() => {
          // Clearing session anyway for security reasons
          store.dispatch(actionUpdateSession(null));
        });
      break;

    case REGISTER: {
      // TODO
      const {
        email,
        pseudo,
        password,
        adress,
        city,
        postalCode,
        phoneNumber,
      } = action;
      axios
        .post(Config.API_URL_SESSION, {
          email,
          pseudo,
          password,
          adress,
          city,
          postalCode,
          phoneNumber,
        })
        .then(() => {
          // TODO
        })
        .catch((error) => {
          console.error('Error while register', error);
          store.dispatch(actionLoginFailed());
        });
      break;
    }

    default:
      break;
  }

  return next(action);
};

export default sessionMiddleware;
