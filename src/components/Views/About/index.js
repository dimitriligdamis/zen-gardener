import { GitHub, Linkedin } from 'react-feather';
import './styles.scss';
import dimitriPP from 'src/assets/img/dimitri.jpg';

function About() {
  return (
    <section className="About">
      <h1 className="About__title">La Team Zen-Gardener</h1>
      <ul className="About__list">
        <li className="About__card">
          <img className="About__image" src={dimitriPP} alt="dimitri" />
          <h2 className="About__name">Clothilde Drouot</h2>
          <em className="About__role">Product Owner</em>
          <p className="About__speciality">Back-end</p>
          <article className="About__link">
            <Linkedin className="About__linkedin" />
            <GitHub className="About__github" />
          </article>
        </li>
        <li className="About__card">
          <img className="About__image" src={dimitriPP} alt="dimitri" />
          <h2 className="About__name">Nicolas Marques</h2>
          <em className="About__role">Scrum Master</em>
          <p className="About__speciality">Front-end</p>
          <article className="About__link">
            <Linkedin className="About__linkedin" />
            <GitHub className="About__github" />
          </article>
        </li>
        <li className="About__card">
          <img className="About__image" src={dimitriPP} alt="dimitri" />
          <h2 className="About__name">Jean Leherle</h2>
          <em className="About__role">Lead Dev Back</em>
          <p className="About__speciality">Back-end</p>
          <article className="About__link">
            <Linkedin className="About__linkedin" />
            <GitHub className="About__github" />
          </article>
        </li>

        <li className="About__card">
          <img className="About__image" src={dimitriPP} alt="dimitri" />
          <h2 className="About__name">Olivier Battini</h2>
          <em className="About__role">Lead Dev Front</em>
          <p className="About__speciality">Front-end</p>
          <article className="About__link">
            <Linkedin className="About__linkedin" />
            <GitHub className="About__github" />
          </article>
        </li>
        <li className="About__card">
          <img className="About__image" src={dimitriPP} alt="dimitri" />
          <h2 className="About__name">Dimitri Ligdamis</h2>
          <em className="About__role">Git Master</em>
          <p className="About__speciality">Front-end</p>
          <article className="About__link">
            <Linkedin className="About__linkedin" />
            <GitHub className="About__github" />
          </article>
        </li>
      </ul>
    </section>
  );
}

export default About;
