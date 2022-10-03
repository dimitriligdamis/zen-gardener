import {
  USER_DATA_UPDATED,
  USER_LOGGED_OUT,
  USER_DATA_RECEIVED,
} from './userActions';

const userInitialState = {
  id: 1,
  pseudo: 'Jéan Ver',
  email: 'Jean.ver@bonduel.fr',
  address: "8 rue de l'aubergine",
  city: 'Le-potager',
  zip_code: '87520',
  phone: '0800201010',
  task_notification: true,
  week_notification: true,
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
