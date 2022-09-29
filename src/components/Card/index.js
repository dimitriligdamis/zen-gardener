import './styles.scss';

function Card() {
  return (
    <div className="Card">
      <h1 className="Card__title">Résultat</h1>
      <img className="Card__image" src="https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Lunette" />
      <div className="Card__infos">
        <p>Résumé de la fiche</p>
      </div>
    </div>
  );
}

export default Card;
