import client from '../../services/http/client';

import {
  UPDATE_USER_DATA,
  actionUserDataUpdated,
  REGISTER,
} from './userActions';
import Config from '../../config';
import { actionLoginFailed } from '../session/sessionActions';

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
          // TODO: inform user
        });
      break;
    }
    case REGISTER: {
      // TODO
      console.log(action)
      const {
        email,
        pseudo,
        password,
        adress,
        city,
        postalCode,
        phoneNumber,
      } = action;
      client
        .post(Config.API_URL_MEMBER, {
          pseudo,
          email,
          password,
          adress,
          postalCode,
          city,
          phoneNumber,
          task_notification: true,
          week_notification: true,
        })
        .then(() => {
          // TODO
          console.log('ca marche')
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

export default userMiddleware;
