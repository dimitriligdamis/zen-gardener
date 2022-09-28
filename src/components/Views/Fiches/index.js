import Card from '../../Card';
import Dashboard from '../../Dashboard';
import Menu from '../../Menu';
import './styles.scss';

function Fiches() {
  return (
    <>
      <Menu />
      <Dashboard />
      <main className="Fiches">
        <h1>Recherche une fiche</h1>
        <p>SearchBar ici</p>
        <ul className="Fiches__list">
          <Card />
          <Card />
          <Card />
        </ul>
      </main>
    </>
  );
}

export default Fiches;
