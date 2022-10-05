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
  tasks: [
    {
      id: 1,
      label: 'Tache 1',
      begin_date: new Date('2022-10-10T11:00:00'),
      limit_date: new Date('2022-10-11T11:00:00'),
      user_id: 1,
      sheet_id: 1,
    },
    {
      id: 2,
      label: 'Tache 2',
      begin_date: new Date('2022-10-12T11:00:00'),
      limit_date: new Date('2022-10-13T11:00:00'),
      user_id: 1,
      sheet_id: 2,
    },
  ],
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
