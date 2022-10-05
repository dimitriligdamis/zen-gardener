import client from '../../services/http/client';

import {
  FETCH_TASKS,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  actionTaskDataReceived,
  actionTaskCreated,
  actionTaskUpdated,
  actionTaskDeleted,
  actionTaskCreateFailed,
  actionTaskUpdateFailed,
  actionTaskDeleteFailed,
} from './tasksActions';
import Config from '../../config';

import tasksMockAdapter from '../../services/mockApi/tasks';

if (Config.API_MOCK_ENABLED) {
  tasksMockAdapter(client, Config.API_URL_TASKS);
}

const tasksMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TASKS: {
      console.log('FETCH_TASKS');
      client
        .get(Config.API_URL_TASKS)
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

    case CREATE_TASK: {
      console.log('CREATE_TASK');
      const { task } = action;
      client
        .post(Config.API_URL_TASKS, { task })
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

    case UPDATE_TASK: {
      console.log('UPDATE_TASK');
      const { task } = action;
      client
        .put(`${Config.API_URL_TASKS}/${task.id}`, { task })
        .then((response) => {
          const updatedTask = response.data;
          store.dispatch(actionTaskUpdated(updatedTask));
        })
        .catch((error) => {
          console.error('Error while updating task', error);
          store.dispatch(actionTaskUpdateFailed());
        });
      break;
    }

    case DELETE_TASK: {
      console.log('DELETE_TASK');
      const { taskId } = action;
      client
        .delete(`${Config.API_URL_TASKS}/${taskId}`)
        .then(() => {
          store.dispatch(actionTaskDeleted(taskId));
        })
        .catch((error) => {
          console.error('Error while deleting task', error);
          store.dispatch(actionTaskDeleteFailed());
        });
      break;
    }

    default:
      break;
  }

  return next(action);
};

export default tasksMiddleware;
