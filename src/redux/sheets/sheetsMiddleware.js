import Client from '../../services/http/client';

import {
  FETCH_SHEET_BY_ID,
  FETCH_SHEETS_BY_QUERY,
  actionFetchSheetById,
  actionTaskCreated,
  actionTaskCreateFailed,
  actionTaskDataReceived,
  actionTaskUpdateFailed,
} from './tasksActions';
import Config from '../../config';

import tasksMockAdapter from '../../services/mockApi/tasks';

if (Config.API_MOCK_ENABLED) {
  tasksMockAdapter(Client.instance, Config.API_URL_TASKS);
}

const tasksMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SHEET_BY_ID: {
      const { id } = action;
      Client.instance
        .get(`${Config.API_URL_SHEETS}/${id}`)
        .then((response) => {
          console.dir(response);
          const taskList = response.data;
          store.dispatch(actionTaskDataReceived(taskList));
        })
        .catch((error) => {
          console.error('Error while updating task', error);
          store.dispatch(actionTaskUpdateFailed());
        });
      break;
    }

    case FETCH_SHEETS_BY_QUERY: {
      const { query, zeroBasedPageNumber, numberOfSheetsByQuery } = action;
      Client.instance
        .get(`${Config.API_URL_SHEETS}?q=${query}&p=${zeroBasedPageNumber}&n=${numberOfSheetsByQuery}`)
        .then((response) => {
          const newTask = response.data;
          store.dispatch(actionTaskCreated(newTask));
        })
        .catch((error) => {
          console.error('Error while creating task', error);
          store.dispatch(actionTaskCreateFailed());
        });
      break;
    }

    default:
      break;
  }

  return next(action);
};

export default tasksMiddleware;