import Client from '../../services/http/client';

import {
  FETCH_SHEET_BY_ID,
  actionSheetReceived,
  FETCH_SHEETS_BY_QUERY,
  actionSheetCollectionReceived,
  actionSheetFetchFailed,
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
      const { query, zeroBasedPageNumber, numberOfSheetsByQuery, add } = action;

      Client.instance
        .get(`${Config.API_URL_SHEETS}?q=${query}&p=${zeroBasedPageNumber}&n=${numberOfSheetsByQuery}`)
        .then((response) => {
          const newSheet = response.data;
          store.dispatch(actionSheetCollectionReceived(newSheet, add));
        })
        .catch((error) => {
          console.error('Error while creating Sheet', error);
          store.dispatch(actionSheetFetchFailed());
        });
      break;
    }

    default:
      break;
  }

  return next(action);
};

export default sheetsMiddleware;
