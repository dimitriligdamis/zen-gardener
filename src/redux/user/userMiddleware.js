/* eslint-disable camelcase */
import client from '../../services/http/client';

import {
  UPDATE_USER_DATA,
  actionUserDataUpdated,
  REGISTER,
  actionUserDataReceived,
} from './userActions';
import Config from '../../config';
import { actionLoginFailed, actionUpdateSession } from '../session/sessionActions';
import { actionDisplayError } from '../error/errorAction';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case UPDATE_USER_DATA: {
      const { userData } = action;
      client
        .post(Config.API_URL_USER, {
          ...userData,
        })
        .then((response) => {
          // User data updated successfully
          const { updatedAt } = response.data;
          store.dispatch(actionUserDataUpdated(updatedAt));
        })
        .catch((error) => {
          // Login request failed => log and inform user
          console.error('Error while updating user data', error);
        });
      break;
    }
    case REGISTER: {
      const {
        email,
        pseudo,
        password,
        address,
        city,
        zip_code,
        phone,
      } = action;
      client
        .post(Config.API_URL_MEMBER, {
          pseudo,
          email,
          password,
          address,
          zip_code,
          city,
          phone,
          task_notification: true,
          week_notification: true,
        })
        .then((response) => {
          store.dispatch(actionUserDataReceived(response.data));
          store.dispatch(actionUpdateSession());
        })
        .catch((error) => {
          console.error('Error while register', error);
          store.dispatch(actionLoginFailed());
          store.dispatch(actionDisplayError(error.response.data));
        });
      break;
    }

    default:
      break;
  }

  return next(action);
};

export default userMiddleware;
