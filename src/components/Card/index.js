import './styles.scss';

function Card() {
  return (
    <div className="Card">
      <h1 className="Card__title">Résultat</h1>
      <img className="Card__image" src="https://img-3.journaldesfemmes.fr/HwUgYMFAXpGcR9A7Xrw4oF67Mf4=/1500x/smart/409e102e633d42759746f73e286431a3/ccmcms-jdf/11057068.jpg" alt="Légume" />
      <div className="Card__infos">
        <p className="Card__description">Description de la fiche:</p>
        <p className="Card__details">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo iusto voluptas aliquam doloremque corporis nesciunt alias voluptate tempora porro, consectetur sit reprehenderit eaque error a quibusdam ducimus quae in maxime!  </p>
      </div>
    </div>
  );
}

export default Card;
