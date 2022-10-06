import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import tag from 'src/assets/img/calendar.png';
import logo from 'src/assets/img/logo.png';
import legume from 'src/assets/img/legume.png';
import notif from 'src/assets/img/notif.png';

import Card from '../../Card';
import './styles.scss';

function Homepage() {
  const { userIsLoggedIn } = useSelector((state) => state.session);
  if (userIsLoggedIn) {
    return (<Navigate to="/tableau-de-bord" />);
  }
  return (
    <main className="Homepage">
      <img className="Homepage__Logo" src={logo} alt="tag" />
      {/* <h1 className="Homepage__title">Welcome to Zen-Gardener</h1> */}
      <section className="Homepage__introduction">
        <h2 className="Homepage__subtitle">Zen-Gardener vous fait voir le jardinage sous un nouvelle angle.</h2>
        <p className="Homepage__slogan-body">
          Créer, gérez votre jardin et atteignez de nouveaux sommets en
          matière de productivité. Que vous soyez débutant ou expérimenté, redécouvrez le jardinage.
          Accomplissez toutes vos tâches grâce à Zen-Gardener.
        </p>
        <Link className="Homepage__button" to="/register">Inscrivez-vous, c'est gratuit</Link>
      </section>
      <section className="Homepage__fonctionalites">
        <article className="Homepage__fonctionality">
          <img className="Homepage__tag" src={tag} alt="tag" />
          <h3 className="Homepage__fonctionality-title">Création de tâches</h3>
          <p className="Homepage__fonctionality-body">Accès à la création de tâches avec vu calenrier ou planning pour gérez votre organisation. Trouvez l'option qui vous correspond.</p>
          <Link className="Homepage__button Homepage__button--func" to="/register">Preview</Link>
        </article>
        <article className="Homepage__fonctionality">
          <img className="Homepage__tag" src={notif} alt="tag" />
          <h3 className="Homepage__fonctionality-title">Soyez notifier</h3>
          <p className="Homepage__fonctionality-body">Système de notification qui vous alerte sur les tâches à venir</p>
          <Link className="Homepage__button Homepage__button--func" to="/register">Preview</Link>
        </article>
        <article className="Homepage__fonctionality">
          <img className="Homepage__tag" src={legume} alt="tag" />
          <h3 className="Homepage__fonctionality-title">Découvrez nos fiches</h3>
          <p className="Homepage__fonctionality-body">Accèdez à des fiches en illimité qui vous aideront au quotidien pour jardiner et pourront être lier à vos tâches</p>
          <Link className="Homepage__button Homepage__button--func" to="/register">Preview</Link>
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
    </main>
  );
}

export default Homepage;
