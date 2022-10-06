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
      title: 'Carotte 1',
      photo: 'https://pics.me.me/carrot-in-half-01-68834543.png',
      description: 'Lorem ipsum proderit olim',
      caracteristique: 'Lorem ipsum proderit olim',
    },
    {
      id: 2,
      title: 'Carotte 2',
      photo: 'https://pics.me.me/carrot-in-half-01-68834543.png',
      description: 'Lorem ipsum proderit olim',
      caracteristique: 'Lorem ipsum proderit olim',
    },
  ],
  fetchFailed: false,
};

function reducer(state = sheetsInitialState, action = {}) {
  switch (action.type) {
    case SHEET_COLLECTION_RECEIVED: {
      const { sheetCollection } = action;
      let currentSheetList = { ...state.sheets };

      sheetCollection.forEach(((sheet) => {
        currentSheetList = arrayUpsert(currentSheetList, sheet);
      }));

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
