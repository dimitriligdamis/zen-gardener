import client from '../../services/http/client';

import {
  UPDATE_USER_DATA,
  actionUserDataUpdated,
} from './userActions';
import Config from '../../config';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case UPDATE_USER_DATA: {
      const { userData } = action;
      console.log('userData:', userData);
      client
        .patch(Config.API_URL_USER, {
          ...userData,
        })
        .then((response) => {
          // User data updated successfully
          const { updatedAt } = response.data;
          console.log('ici', updatedAt, response);
          store.dispatch(actionUserDataUpdated(updatedAt));
        })
        .catch((error) => {
          // Login request failed => log and inform user
          console.error('Error while updating user data', error);
          // TODO: inform user
        });
      break;
    }

    default:
      break;
  }

  return next(action);
};

export default userMiddleware;
