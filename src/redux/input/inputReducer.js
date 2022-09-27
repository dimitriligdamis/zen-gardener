import { CHANGE_VALUE } from './inputActions';

const initialState = {
  email: '',
  password: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
}

export default reducer;
