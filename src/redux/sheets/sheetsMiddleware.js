import Client from '../../services/http/client';

import {
  FETCH_SHEET_BY_ID,
  FETCH_SHEETS_BY_QUERY,
  FETCH_FAVORITE_SHEETS,
  ADD_TO_FAVORITES,
  actionSheetReceived,
  actionSaveSheets,
  actionAddToSearchResults,
  actionSheetFetchFailed,
  actionFetchFavoriteSheets,
  actionSaveFavorites,
} from './sheetsActions';

import Config from '../../config';

import tasksMockAdapter from '../../services/mockApi/tasks';

if (Config.API_MOCK_ENABLED) {
  tasksMockAdapter(Client.instance, Config.API_URL_TASKS);
}

const sheetsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SHEET_BY_ID: {
      const { id } = action;
      Client.instance
        .get(`${Config.API_URL_SHEETS}/${id}`)
        .then((response) => {
          const sheetList = response.data;
          store.dispatch(actionSheetReceived(sheetList));
        })
        .catch((error) => {
          console.error('Error while updating Sheet', error);
          store.dispatch(actionSheetFetchFailed());
        });
      break;
    }

    case FETCH_SHEETS_BY_QUERY: {
      const { query, zeroBasedPageNumber, numberOfSheetsByQuery } = action;

      Client.instance
        .get(`${Config.API_URL_SHEETS}?q=${query}&p=${zeroBasedPageNumber}&n=${numberOfSheetsByQuery}`)
        .then((response) => {
          const newSheets = response.data;
          store.dispatch(actionSaveSheets(newSheets));
          const searchResultIds = newSheets.map(({ id }) => id);
          store.dispatch(actionAddToSearchResults(searchResultIds));
        })
        .catch((error) => {
          console.error('Error while creating Sheet', error);
          store.dispatch(actionSheetFetchFailed());
        });
      break;
    }

    case FETCH_FAVORITE_SHEETS: {
      Client.instance
        .get(`${Config.API_URL_MEMBER}/sheet`)
        .then((response) => {
          const newSheets = response.data;
          store.dispatch(actionSaveSheets(newSheets));
          const searchResultIds = newSheets.map(({ id }) => id);
          store.dispatch(actionSaveFavorites(searchResultIds));
        })
        .catch((error) => {
          console.error('Error while creating Sheet', error);
          store.dispatch(actionSheetFetchFailed());
        });
      break;
    }

    case ADD_TO_FAVORITES: {
      const { sheetId } = action;
      console.log(sheetId);
      Client.instance
        .post(`${Config.API_URL_MEMBER}/sheet/${sheetId}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error('Error while adding sheet to favorite', error);
        });
      break;
    }

    default:
      break;
  }

  return next(action);
};

export default sheetsMiddleware;
