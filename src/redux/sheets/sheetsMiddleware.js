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
  actionSaveFavorites,
  DELETE_FROM_FAVORITES,
  actionUnsaveFromFavorites,
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
          if (newSheets) {
            store.dispatch(actionSaveSheets(newSheets));
            const searchResultIds = newSheets.map(({ id }) => id);
            store.dispatch(actionSaveFavorites(searchResultIds));
          }
        })
        .catch((error) => {
          console.error('Error while creating Sheet', error);
          store.dispatch(actionSheetFetchFailed());
        });
      break;
    }

    case ADD_TO_FAVORITES: {
      const { sheetId } = action;
      Client.instance
        .post(`${Config.API_URL_MEMBER}/sheet/${sheetId}`)
        .then((response) => {
          if (response.status === 200) {
            console.log('added to favorite');
            store.dispatch(actionSaveFavorites([sheetId]));
          }
          else {
            console.log(response);
          }
        })
        .catch((error) => {
          console.error('Error while adding sheet to favorite', error);
        });
      break;
    }

    case DELETE_FROM_FAVORITES: {
      const { sheetId } = action;
      Client.instance
        .delete(`${Config.API_URL_MEMBER}/sheet/${sheetId}`)
        .then((response) => {
          console.log('unfavorited', response);
          store.dispatch(actionUnsaveFromFavorites(sheetId));
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
