import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Card from '../../Card';
import Title from '../../Title';
import './styles.scss';

function Homepage() {
  const { userIsLoggedIn } = useSelector ((state) => state.session);
  if (userIsLoggedIn) {
    return (<Navigate to="/tableau-de-bord" />);
  }
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
