import { CHANGE_ISOPEN } from '../actions/menu';

const initialState = {
  isOpen: true,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_ISOPEN: {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    }
    default:
      return state;
  }
}

export default reducer;
