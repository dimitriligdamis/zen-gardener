import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionFetchTasks } from '../../../redux/tasks/tasksActions';
import TaskCalendar from '../../Tasks/TaskCalendar';
import SheetMapper from '../../Sheets/SheetMapper';
import FavoriteSheetsByMonth from '../../Sheets/FavoriteSheetsByMonth';
import FavoriteSheetsByCategory from '../../Sheets/FavoriteSheetsByCategory';

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
  const favoriteSheets = SheetMapper.idsToSheets(favoriteIds, sheets);

  const [sheetDisplayMode, setSheetDisplayMode] = useState(SheetDisplayModes.MONTH);

  const onAddTask = () => { /* TODO */ };

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
              <button id="add-task-button" className="dashboard-button" type="button" onClick={onAddTask}>Ajouter une tâche</button>
            </div>
          </header>
          <main className="tasks__calendar">
            <TaskCalendar
              taskEvents={tasks}
            />
          </main>
        </section>

        <section className="Dashboard__item sheets">
          <header>
            <h2 className="Dashboard__subtitle">Mes fiches favorites</h2>
          </header>
          <div className="sheets__buttons">
            <button type="button" onClick={() => setSheetDisplayMode(SheetDisplayModes.CATEGORY)}>Par catégorie</button>
            <button type="button" onClick={() => setSheetDisplayMode(SheetDisplayModes.MONTH)}>Par mois</button>
          </div>
          <main className="tasks__content">
            {sheetDisplayMode === SheetDisplayModes.MONTH
            && <FavoriteSheetsByMonth sheetList={favoriteSheets} />}
            {sheetDisplayMode === SheetDisplayModes.CATEGORY
            && <FavoriteSheetsByCategory sheetList={favoriteSheets} />}
          </main>
        </section>

      </div>
    </div>
  );
}

export default Dashboard;
