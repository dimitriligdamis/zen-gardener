import Card from '../../Card';
import Dashboard from '../../Dashboard';
import './styles.scss';

function Fiches() {
  return (
    <main className="Fiches">
      <Dashboard />
      <h1>Recherche une fiche</h1>
      <p>SearchBar ici</p>
      <ul className="Fiches__list">
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </main>
  );
}

export default Fiches;
