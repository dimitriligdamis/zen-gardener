import {
  USER_DATA_UPDATED,
  USER_LOGGED_OUT,
  USER_DATA_RECEIVED,
} from './userActions';

const userInitialState = {
  id: null,
  pseudo: null,
  email: null,
  address: null,
  city: null,
  zip_code: null,
  phone: null,
  task_notification: null,
  week_notification: null,
  updatedAt: null,
};

function reducer(state = userInitialState, action = {}) {
  switch (action.type) {
    case USER_DATA_RECEIVED: {
      const { userData } = action;
      console.log('userData received', userData);
      return {
        ...state,
        ...userData,
      };
    }

    case USER_LOGGED_OUT:
      return {
        ...state,
        ...userInitialState,
      };

    case USER_DATA_UPDATED: {
      const { updatedAt } = action;
      return {
        ...state,
        updatedAt,
      };
    }
    default:
      return state;
  }
}

export default reducer;
