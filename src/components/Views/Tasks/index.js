import Dashboard from '../../Dashboard';
import Menu from '../../Menu';
import './styles.scss';

function Tasks() {
  return (
    <main className="Tasks">
      <Menu />
      <Dashboard />
      <h1>Ici c'est le tableaux de bord</h1>
    </main>
  );
}

export default Tasks;
