import axios from 'axios';

import {
  UPDATE_USER_DATA,
  actionUserDataUpdated,
} from '../actions/user';
import Config from '../config';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case UPDATE_USER_DATA:
      const { userData } = action;
      axios
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
  }

  return next(action);
};

export default userMiddleware;
