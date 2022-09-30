import { DELETE_ERROR, DISPLAY_ERROR } from './errorAction';

const initialState = {
  errorIsActive: false,
  message: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case DISPLAY_ERROR:
      return {
        errorIsActive: true,
        message: action.message,
      };
    case DELETE_ERROR:
      return {
        errorIsActive: false,
        message: '',
      };
    default:
      return state;
  }
}

export default reducer;
