import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionFetchTasks } from '../../../redux/tasks/tasksActions';

import TaskCalendar from '../../Tasks/TaskCalendar';

import './styles.scss';

function Dashboard() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const user = useSelector((state) => state.user);

  const onAddTask = () => { /* TODO */ };

  useEffect(() => {
    dispatch(actionFetchTasks());
  }, []);


  return (
    <>
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
        <main>
          <div><a href="#">Fiche 1 : carottes lunaires</a></div>
          <div><a href="#">Fiche 2 : carottes martiennes</a></div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
