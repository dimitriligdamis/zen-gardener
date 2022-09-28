import { CHANGE_VALUE, CLEAR_ALL_VALUES } from './inputActions';

const initialState = {
  login: {
    email: '',
    password: '',
  },
  register: {
    email: '',
    userName: '',
    password: '',
    passwordConfirm: '',
    adress: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
  },
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    /* Dispatch to get input in state */
    case CHANGE_VALUE:
      return {
        ...state,
        [action.page]: {
          ...state[action.page],
          [action.key]: action.value,
        },
      };

    /* Dispatch to clear all values in inputs for security */
    case CLEAR_ALL_VALUES:
      return {
        initialState,
      };

    default:
      return state;
  }
}

export default reducer;
