/* eslint-disable jsx-a11y/label-has-associated-control */
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import './style.scss';

function PageNotFound() {
  const { userIsLoggedIn } = useSelector((state) => state.session);

  if (userIsLoggedIn) {
    return (<Navigate to="/tableau-de-bord" />);
  }

  return (
    <main className="PageNotFound">
      <section className="PageNotFound__container">
        <h1 className="PageNotFound__title">404: Page not found</h1>
        <div className="links_container">
          {!userIsLoggedIn && <Link to="/" className="PageNotFound__nopassword">Redirection vers la page d'accueil</Link>}
          {/* // TODO: En attente de la persistance pour êtrer fonctionnel */}
          {userIsLoggedIn && <Link to="/tableau-de-bord" className="PageNotFound__nopassword">Redirection vers le tableau de bord</Link>}
        </div>
      </section>
    </main>
  );
}

export default PageNotFound;
