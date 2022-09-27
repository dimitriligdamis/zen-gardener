import { LOGIN_FAILED, UPDATE_SESSION } from './sessionActions';

const sessionInitialState = {
  userIsLoggedIn: false,
  lastLoginFailed: false,
  token: null,
};

function reducer(state = sessionInitialState, action = {}) {
  switch (action.type) {
    case LOGIN_FAILED:
      return {
        ...state,
        userIsLoggedIn: false,
        lastLoginFailed: true,
        token: null,
      };

    case UPDATE_SESSION:
      const { jwtToken } = action;

      // If jwtToken is falsy, consider session log out / session invalid
      if (!jwtToken) {
        return {
          ...state,
          userIsLoggedIn: false,
          lastLoginFailed: false,
          token: null,
        };
      }

      return {
        ...state,
        userIsLoggedIn: true,
        lastLoginFailed: false,
        token: action.jwtToken,
      };

    default:
      return state;
  }
}

export default reducer;
