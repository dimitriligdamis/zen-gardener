import Card from '../../Card';
import Title from '../../Title';
import './styles.scss';

function Homepage() {
  return (
    <main className="Homepage">
      <Title>
        <h1>Welcome to Zen Gardener</h1>
      </Title>
      <ul className="Homepage__list">
        <li><Card /></li>
        <li><Card /></li>
        <li><Card /></li>
      </ul>

    </main>
  );
}

export default Homepage;
