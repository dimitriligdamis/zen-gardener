import client from '../../services/http/client';

import {
  FETCH_SHEET_BY_ID,
  actionFetchSheetById,
  actionSheetReceived,
  FETCH_SHEETS_BY_QUERY,
} from './sheetsActions';
import Config from '../../config';

// import tasksMockAdapter from '../../services/mockApi/tasks';

// if (Config.API_MOCK_ENABLED) {
//   tasksMockAdapter(client, Config.API_URL_TASKS);
// }

const sheetsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SHEET_BY_ID: {
      const { id } = action;
      client
        .get(`${Config.API_URL_SHEETS}/${id}`)
        .then((response) => {
          console.dir(response);
          const sheetList = response.data;
          store.dispatch(actionSheetReceived(sheetList));
        })
        .catch((error) => {
          console.error('Error while updating Sheet', error);
          // store.dispatch(actionSheetUpdateFailed());
        });
      break;
    }

    case FETCH_SHEETS_BY_QUERY: {
      const { query, zeroBasedPageNumber, numberOfSheetsByQuery } = action;
      console.log("gngn")
      client
        .get(`${Config.API_URL_SHEETS}?q=${query}&p=${zeroBasedPageNumber}&n=${numberOfSheetsByQuery}`)
        .then((response) => {
          const newSheet = response.data;
          // store.dispatch(actionSheetCreated(newSheet));
        })
        .catch((error) => {
          console.error('Error while creating Sheet', error);
          // store.dispatch(actionSheetCreateFailed());
        });
      break;
    }

    default:
      break;
  }

  return next(action);
};

export default sheetsMiddleware;
