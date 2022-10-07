import {
  SHEET_COLLECTION_RECEIVED,
  SHEET_RECEIVED,
  SHEET_FETCH_FAILED,
} from './sheetsActions';
import { arrayUpsert } from '../../utils/arrayUtils';

const sheetsInitialState = {
  sheets: [
    {
      id: 1,
      title: 'carotte orange',
      description: 'lorem ipsum',
      photo: 'carotte_orange.png',
      caracteristique: 'lorem ipsum',
      categories: [
        {
          id: 2,
          label: 'légumes',
        },
        {
          id: 5,
          label: 'facile',
        },
      ],
      actions: [
        {
          id: 1,
          label: 'Arroser',
          month_begin: 6,
          month_limit: 8,
        },
        {
          id: 3,
          label: 'Récolter',
          month_begin: 8,
          month_limit: 10,
        },
      ],
    },
  ],
  sheetsFoundId: [1, 2],
  favorites: [1, 2],
  fetchFailed: false,
};

function reducer(state = sheetsInitialState, action = {}) {
  switch (action.type) {
    case SHEET_COLLECTION_RECEIVED: {
      const { sheetCollection } = action;
      let currentSheetList = { ...state.sheets };

      sheetCollection.forEach((sheet) => {
        currentSheetList = arrayUpsert(currentSheetList, sheet);
      });

      return {
        ...state,
        sheets: sheetCollection,
        fetchFailed: false,
      };
    }

    case SHEET_RECEIVED: {
      const { sheet } = action;
      let currentSheetList = { ...state.sheets };

      currentSheetList = arrayUpsert(currentSheetList, sheet);
      return {
        ...state.sheets,
        sheets: currentSheetList,
        fetchFailed: false,
      };
    }

    case SHEET_FETCH_FAILED: {
      return {
        ...state,
        fetchFailed: action.failed,
      };
    }

    default:
      return state;
  }
}

export default reducer;
