import {
  SAVE_SHEETS,
  SHEET_RECEIVED,
  SHEET_FETCH_FAILED,
  ADD_TO_SEARCH_RESULTS,
  CLEAR_SEARCH_RESULT,
  SAVE_FAVORITES,
  UNSAVE_FROM_FAVORITES,
} from './sheetsActions';
import { arrayUpsert } from '../../utils/arrayUtils';

const sheetsInitialState = {
  sheets: [],
  searchResultIds: [],
  noMorePageInSearch: false,
  favoriteIds: [],
  fetchFailed: false,
};

function reducer(state = sheetsInitialState, action = {}) {
  switch (action.type) {
    case SAVE_SHEETS: {
      const { sheetData } = action;
      
      let currentSheetList = state.sheets;
      sheetData.forEach(((sheet) => {
        currentSheetList = arrayUpsert(currentSheetList, sheet);
      }));
      return {
        ...state,
        sheets: currentSheetList,
        fetchFailed: false,
      };
    }

    case ADD_TO_SEARCH_RESULTS: {
      const { sheetIds } = action;
      return {
        ...state,
        searchResultIds: [...state.searchResultIds, ...sheetIds],
      };
    }

    case SHEET_RECEIVED: {
      const { sheet } = action;
      let currentSheetList = [...state.sheets];
      currentSheetList = arrayUpsert(currentSheetList, sheet[0]);

      return {
        ...state,
        sheets: currentSheetList,
        fetchFailed: false,
      };
    }

    case CLEAR_SEARCH_RESULT: {
      return {
        ...state,
        searchResultIds: [],
      };
    }

    case SHEET_FETCH_FAILED: {
      return {
        ...state,
        fetchFailed: action.failed,
      };
    }

    case SAVE_FAVORITES: {
      return {
        ...state,
        favoriteIds: [...state.favoriteIds, ...action.sheetIds],
      };
    }

    case UNSAVE_FROM_FAVORITES: {
      const favoriteIds = state.favoriteIds.filter((fav) => fav !== action.sheetId);
      return {
        ...state,
        favoriteIds,
      };
    }
    default:
      return state;
  }
}

export default reducer;