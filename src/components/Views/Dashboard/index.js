import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { actionFetchTasks, actionCreateTask } from '../../../redux/tasks/tasksActions';
import TaskCalendar from '../../Tasks/TaskCalendar';
import SheetMapper from '../../Sheets/SheetMapper';
import TaskMapper from '../../Tasks/TaskMapper';
import FavoriteSheetsByMonth from '../../Sheets/FavoriteSheetsByMonth';
import FavoriteSheetsByCategory from '../../Sheets/FavoriteSheetsByCategory';
import { toDateInputFormat } from '../../../utils/dateUtils';

import './styles.scss';

const SheetDisplayModes = {
  CATEGORY: 'CATEGORY',
  MONTH: 'MONTH',
};

function Dashboard() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const { tasks } = useSelector((state) => state.tasks);
  const { sheets, favoriteIds } = useSelector((state) => state.sheets);

  const [sheetDisplayMode, setSheetDisplayMode] = useState(SheetDisplayModes.MONTH);
  const [addTaskModalIsVisible, setAddTaskModalIsVisible] = useState(true);

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitNewTask = ({ taskTitle, taskBegin, taskEnd }) => {
    const task = {
      label: taskTitle,
      begin_date: new Date(taskBegin).toISOString(),
      limit_date: new Date(taskEnd).toISOString(),
    };
    console.log(task);
    dispatch(actionCreateTask(task));
  };

  const favoriteSheets = SheetMapper.idsToSheets(favoriteIds, sheets);

  useEffect(() => {
    dispatch(actionFetchTasks());
  }, []);

  return (
    <div className="Dashboard">

      <h1 className="Dashboard__hello">Bonjour, {user.pseudo} !</h1>
      <div className="Dashboard__content">

        <section className="Dashboard__item tasks">
          <header className="tasks__header">
            <h2 className="Dashboard__subtitle">Mes prochaines tâches</h2>
            <div className="tasks__header__actions">
              <button id="add-task-button" className="dashboard-button" type="button" onClick={() => setAddTaskModalIsVisible(true)}>Ajouter une tâche</button>
            </div>
          </header>

          <main className="tasks__calendar">
            <TaskCalendar
              taskEvents={TaskMapper.toBigCalEvents(tasks)}
            />
          </main>
        </section>

        <section className="Dashboard__item sheets">
          <header>
            <h2 className="Dashboard__subtitle">Mes fiches favorites</h2>
            <div className="sheets__buttons">
              <button type="button" onClick={() => setSheetDisplayMode(SheetDisplayModes.CATEGORY)}>Par catégorie</button>
              <button type="button" onClick={() => setSheetDisplayMode(SheetDisplayModes.MONTH)}>Par mois</button>
            </div>
          </header>

          <main className="tasks__content">
            {sheetDisplayMode === SheetDisplayModes.MONTH
            && <FavoriteSheetsByMonth sheetList={favoriteSheets} />}
            {sheetDisplayMode === SheetDisplayModes.CATEGORY
            && <FavoriteSheetsByCategory sheetList={favoriteSheets} />}
          </main>
        </section>

        { addTaskModalIsVisible
        && (
          <div>
            <button
              type="button"
              className="close-button"
              onClick={() => {
                reset();
                setAddTaskModalIsVisible(false);
              }}
            >
              x
            </button>
            <form action="" onSubmit={handleSubmit(onSubmitNewTask)}>

              <label htmlFor="taskTitle">
                <span>Date de début</span>
                <input
                  id="taskTitle"
                  name="taskTitle"
                  type="text"
                  {...register(
                    'taskTitle',
                    {
                      required: true,
                      minLength: 8,
                    },
                  )}
                />
                {errors.taskTitle && <span className="error">Tapez au moins 8 caractères pour le titre de la tâche</span>}
              </label>

              <label htmlFor="taskBegin">
                <span>Date de début</span>
                <input
                  id="taskBegin"
                  name="taskBegin"
                  type="date"
                  min={toDateInputFormat(new Date())}
                  defaultValue={toDateInputFormat(new Date())}
                  {...register(
                    'taskBegin',
                    {
                      required: true,
                      validate: (value) => new Date(value) <= new Date(getValues('taskEnd')),
                    },
                  )}
                />
                {errors.taskBegin && <span className="error">La date de début doit être antérieure à la date de fin</span>}
              </label>

              <label htmlFor="taskEnd">
                <span>Date de début</span>
                <input
                  id="taskEnd"
                  name="taskEnd"
                  type="date"
                  min={toDateInputFormat(new Date())}
                  defaultValue={toDateInputFormat(new Date())}
                  {...register(
                    'taskEnd',
                    {
                      required: true,
                    },
                  )}
                />
              </label>

              <button type="submit">Ajouter</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
