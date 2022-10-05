import { LOGIN_FAILED, LOGOUT, UPDATE_SESSION } from './sessionActions';

const sessionInitialState = {
  userIsLoggedIn: false,
  lastLoginFailed: false,
};

function reducer(state = sessionInitialState, action = {}) {
  switch (action.type) {
    case LOGIN_FAILED:
      return {
        ...state,
        userIsLoggedIn: false,
        lastLoginFailed: true,
      };

    case UPDATE_SESSION: {
      return {
        ...state,
        userIsLoggedIn: true,
        lastLoginFailed: false,
      };
    }
    case LOGOUT: {
      return {
        userIsLoggedIn: false,
        lastLoginFailed: false,
      };
    }
    default:
      return state;
  }
}

export default reducer;
