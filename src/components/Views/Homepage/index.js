import Card from '../../Card';
import './styles.scss';

function Homepage() {
  return (
    <main className="Homepage">
      <ul className="Homepage__list">
        <li><Card /></li>
        <li><Card /></li>
        <li><Card /></li>
      </ul>

    </main>
  );
}

export default Homepage;
