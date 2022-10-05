import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Title from '../../Title';
import './styles.scss';

function Dashboard() {
  const { userIsLoggedIn } = useSelector((state) => state.session);

  console.log(userIsLoggedIn)

  return (
    <main className="Dashboard">
      <Title>
        <h1>Ici c'est le tableaux de bord</h1>
      </Title>
    </main>
  );
}

export default Dashboard;
