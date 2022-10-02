import Card from '../../Card';
import './styles.scss';

function Fiches() {
  return (
    <main className="Fiches">
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
