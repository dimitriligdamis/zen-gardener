import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Views } from 'react-big-calendar';

// import TaskCalendar from '../../Tasks/TaskCalendar';

import './styles.scss';

function Dashboard() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const [currentTaskViewMode, setCurrentTaskViewMode] = useState(Views.MONTH);

  const onAddTask = () => { /* TODO */ };

  return (
    <>
      <h1>Bonjour, Jéan Vert !</h1>
      <div className="tasks">
        <header className="tasks__header">
          <h2>Mes prochaines tâches</h2>
          <div className="tasks__header__actions">
            <button id="calendar-view-button" type="button" onClick={() => setCurrentTaskViewMode(Views.MONTH)}>Vue Calendrier</button>
            <button id="planning-view-button" type="button" onClick={() => setCurrentTaskViewMode(Views.AGENDA)}>Vue Planning</button>
            <button id="add-task-button" type="button" onClick={onAddTask}>Ajouter une tâche</button>
          </div>
        </header>
        <main className="tasks__content">
          {/* <TaskCalendar
            taskEvents={tasks}
            view={currentTaskViewMode}
            /> */}
          {
            tasks.map((task) => (
              <div className="planning-event" key={task.id}>
                <span>Début : {task.begin_date.toLocaleDateString()}</span>
                <span>Fin : {task.limit_date.toLocaleDateString()}</span>
                <span>Label : {task.label}</span>
                <span>Fiche : {task.sheet_id}</span>
              </div>
            ))
          }
        </main>
      </div>
      <div className="sheets">
        <header>
          <h2>Mes fiches favorites</h2>
        </header>
      </div>
    </>
  );
}

export default Dashboard;
