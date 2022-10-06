import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import Card from '../../Card';
import './styles.scss';

import tag from 'src/assets/img/tag.svg';

function Homepage() {
  const { userIsLoggedIn } = useSelector((state) => state.session);
  if (userIsLoggedIn) {
    return (<Navigate to="/tableau-de-bord" />);
  }
  return (
    <main className="Homepage">
      <p className="Homepage__logo">Logo</p>
      <h1 className="Homepage__title">Welcome to Zen-Gardener</h1>
      <section className="Homepage__Introduction">
        <h2 className="Homepage__subtitle">Zen-Gardener vous fait voir le jardinage sous un nouvelle angle.</h2>
        <p className="Homepage__slogan-body">
          Créer, gérez votre jardin et atteignez de nouveaux sommets en
          matière de productivité. Que vous soyez débutant ou expérimenté, redécouvrez le jardinage.
          Accomplissez toutes vos tâches grâce à Zen-Gardener.
        </p>
        <Link to="/register">Inscrivez-vous, c'est gratuit</Link>
      </section>
      <hr />
      <section className="Homepage__fonctionalites">
        <article className="Homepage__fonctionality">
          <img className="Homepage__tag" src={tag} alt="tag" />
          <h3 className="Hompage__fonctionality-title">Consultez vos tâches</h3>
          <p className="Hompage__fonctionality-body">Accès à vos tâches avec vu calenrier ou planning pour gérez votre orgaisation.  Trouvez l'option qui vous correspond.</p>
        </article>
        <article className="Homepage__fonctionality">
          <img className="Homepage__tag" src={tag} alt="tag" />
          <h3 className="Hompage__fonctionality-title">Consultez vos tâches</h3>
          <p className="Hompage__fonctionality-body">Accès à vos tâches avec vu calenrier ou planning pour gérez votre orgaisation.  Trouvez l'option qui vous correspond.</p>
        </article>
        <article className="Homepage__fonctionality">
          <img className="Homepage__tag" src={tag} alt="tag" />
          <h3 className="Hompage__fonctionality-title">Consultez vos tâches</h3>
          <p className="Hompage__fonctionality-body">Accès à vos tâches avec vu calenrier ou planning pour gérez votre orgaisation.  Trouvez l'option qui vous correspond.</p>
        </article>
      </section>
      <section className="Homepage__sheet-example">
        <h2 className="Homepage__subtitle">Voici des exemples de fiches que nous proposons</h2>
        <ul className="Homepage__list">
          <li><Card /></li>
          <li><Card /></li>
          <li><Card /></li>
        </ul>
      </section>
      <section className="Homepage__preview">
        <h2 className="Homepage__subtitle">Voici des images es interfaces u site</h2>
      </section>
    </main>
  );
}

export default Homepage;
