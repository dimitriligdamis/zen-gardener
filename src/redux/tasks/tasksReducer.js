import {
  TASKS_RECEIVED,
  TASK_CREATED,
  TASK_UPDATED,
  TASK_DELETED,
  TASK_CREATE_FAILED,
  TASK_UPDATE_FAILED,
  TASK_DELETE_FAILED,
} from './tasksActions';

const tasksInitialState = {
  tasks: [],
  createdFailed: false,
  updatedFailed: false,
  deleteFailed: false,
};

function reducer(state = tasksInitialState, action = {}) {
  switch (action.type) {
    case TASKS_RECEIVED: {
      const { taskData } = action;
      return {
        ...state,
        tasks: taskData,
      };
    }

    case TASK_CREATED: {
      const { task } = action;
      return {
        ...state.tasks,
        tasks: [...state.tasks].push(task),
        createFailed: false,
      };
    }

    case TASK_UPDATED: {
      const { task } = action;
      return {
        ...state,
        tasks: [...state.tasks].map((existingTask) => {
          if (existingTask.id === task.id) {
            return task;
          }
          return existingTask;
        }),
        updateFailed: false,
      };
    }

    case TASK_DELETED: {
      const { taskId } = action;
      return {
        ...state,
        tasks: [...state.tasks].filter((existingTask) => existingTask.id !== taskId),
        createFailed: false,
      };
    }

    case TASK_CREATE_FAILED: {
      return {
        ...state,
        deleteFailed: action.failed,
      };
    }

    case TASK_UPDATE_FAILED: {
      return {
        ...state,
        updateFailed: action.failed,
      };
    }

    case TASK_DELETE_FAILED: {
      return {
        ...state,
        deleteFailed: action.failed,
      };
    }

    default:
      return state;
  }
}

export default reducer;
