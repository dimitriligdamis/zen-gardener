import {
  USER_DATA_UPDATED,
  USER_LOGGED_OUT,
  USER_DATA_RECEIVED,
} from './userActions';

const userInitialState = {
  id: null,
  userName: null,
  email: null,
  address: null,
  city: null,
  postalCode: null,
  phoneNumber: null,
  sendTaskEmails: null,
  sendWeeklyEmails: null,
  updatedAt: null,
};

function reducer(state = userInitialState, action = {}) {
  switch (action.type) {
    case USER_DATA_RECEIVED: {
      const { userData } = action;
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
