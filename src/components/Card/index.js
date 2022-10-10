import PropTypes from 'prop-types';

import './styles.scss';

function Card({ sheet }) {
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
  }).isRequired,
};

export default Card;
