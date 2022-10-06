/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

import './styles.scss';

function Card({ sheet }) {
  if (!sheet) {
    return (
      <div className="Card">
        <h1 className="Card__title">Résultat</h1>
        <img className="Card__image" src="https://img-3.journaldesfemmes.fr/HwUgYMFAXpGcR9A7Xrw4oF67Mf4=/1500x/smart/409e102e633d42759746f73e286431a3/ccmcms-jdf/11057068.jpg" alt="Légume" />
        <div className="Card__infos">
          <p className="Card__description">Description de la fiche:</p>
          <p className="Card__details">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo iusto voluptas aliquam doloremque corporis nesciunt alias voluptate tempora porro, consectetur sit reprehenderit eaque error a quibusdam ducimus quae in maxime!</p>
        </div>
      </div>
    );
  }

  const { title, photo } = sheet;
  let { description } = sheet;
  if (description.length > 50) {
    description = `${description.slice(0, 200)}...`;
  }
  return (
    <div className="Card">
      <h1 className="Card__title">{title}</h1>
      <img className="Card__image" src={photo} alt={title} />
      <div className="Card__infos">
        <p className="Card__description">Description de la fiche:</p>
        <p className="Card__details">{description}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  sheet: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    photo: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default Card;
