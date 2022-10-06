import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionFetchTasks } from '../../../redux/tasks/tasksActions';
import TaskCalendar from '../../Tasks/TaskCalendar';
import SheetMapper from '../../Sheets/SheetMapper';
import FavoriteSheetsByMonth from '../../Sheets/FavoriteSheetsByMonth';
import './styles.scss';

const SheetDisplayModes = {
  CATEGORY: 'CATEGORY',
  MONTH: 'MONTH',
};

function Dashboard() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const { tasks } = useSelector((state) => state.tasks);
  const { sheets, favorites } = useSelector((state) => state.sheets);
  const favoriteSheets = SheetMapper.idsToSheets(favorites, sheets);

  const [sheetDisplayMode, setSheetDisplayMode] = useState(SheetDisplayModes.MONTH);

  const onAddTask = () => { /* TODO */ };

  useEffect(() => {
    dispatch(actionFetchTasks());
  }, []);

  return (
    <section className="Dashboard">
      <h1>Bonjour, {user.pseudo} !</h1>
      <div className="tasks">
        <header className="tasks__header">
          <h2>Mes prochaines tâches</h2>
          <div className="tasks__header__actions">
            <button id="add-task-button" type="button" onClick={onAddTask}>Ajouter une tâche</button>
          </div>
        </header>
        <main className="tasks__content">
          <TaskCalendar
            taskEvents={tasks}
          />
        </main>
      </div>
      <div className="sheets">
        <header>
          <h2>Mes fiches favorites</h2>
        </header>
        <div className="sheets__buttons">
          <button type="button" onClick={() => setSheetDisplayMode(SheetDisplayModes.CATEGORY)}>Par catégorie</button>
          <button type="button" onClick={() => setSheetDisplayMode(SheetDisplayModes.MONTH)}>Par mois</button>
        </div>

        { sheetDisplayMode === SheetDisplayModes.MONTH
        && <FavoriteSheetsByMonth sheetList={favoriteSheets} /> }
      </div>
    </section>
  );
}

export default Dashboard;
