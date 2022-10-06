import {
  SHEET_COLLECTION_RECEIVED,
  SHEET_RECEIVED,
  SHEET_FETCH_FAILED,
} from './sheetsActions';
import { arrayUpsert } from '../../utils/arrayUtils';

const sheetsInitialState = {
  sheets: [],
  sheetsFoundId: [],
  fetchFailed: false,
};

function reducer(state = sheetsInitialState, action = {}) {
  switch (action.type) {
    case SHEET_COLLECTION_RECEIVED: {
      const { sheetData, add } = action;
      let currentSheetList = state.sheets;
      console.log('currentSheetList before', currentSheetList);

      sheetData.forEach(((sheet) => {
        currentSheetList = arrayUpsert(currentSheetList, sheet);
      }));

      console.log('currentSheetList after', currentSheetList);

      let sheetsFoundId = sheetData.map(({ id }) => id);

      if (add) {
        sheetsFoundId = [...state.sheetsFoundId, ...sheetsFoundId];
      }

      return {
        ...state,
        sheets: currentSheetList,
        sheetsFoundId,
        fetchFailed: false,
      };
    }

    case SHEET_RECEIVED: {
      const { sheet } = action;
      let currentSheetList = { ...state.sheets.sheets };

      currentSheetList = arrayUpsert(currentSheetList, sheet[0]);

      return {
        ...state,
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
