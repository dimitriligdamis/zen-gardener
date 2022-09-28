import Dashboard from '../../Dashboard';
import Menu from '../../Menu';
import './styles.scss';

function Profil() {
  return (
    <main className="Profil">
      <Menu />
      <Dashboard />
      <h1>Ici c'est la page Profil</h1>
    </main>
  );
}

export default Profil;
