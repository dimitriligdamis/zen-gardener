/* eslint-disable jsx-a11y/control-has-associated-label */
import './style.scss';

function Fiche() {
  const infos = {
    code_fiche: 1,
    titre: 'Carotte Orange Dolciva (Nantaise Améliorée)',
    photos: 'https://kokopelli-semences.fr/media/cache/shop_product_large_thumbnail/p0602-1.jpg',
    description: 'Un mélange détonnant de toutes les couleurs d\'épidermes et de chairs - blanc, jaune, orange, rouge et violet - grâce à une sélection de 9 variétés : Blanche De Küttingen, Dolciva, De Colmar à Coeur Rouge, Rodelika, Demi longue de Danvers, Gniff, Jaune du Doubs, Berlicum et Flakee.',
    caracteristiques: '[Semis: pleine terre][Période de semis (pleine terre) : Février, Mars, Avril, Mai, Juin, Juillet][Période de récolte : Juin, Juillet, Août, Septembre, Octobre, Novembre][Culture : en pleine terre, en serre][Exposition : ensoleillée][Besoin en eau : moyen][Nature du sol : tout type de sol][Qualité du sol : drainé, meuble, riche]',
  };

  const {
    titre,
    photos,
    description,
    caracteristiques,
  } = infos;

  const turnCaracteristiquesInArray = (caract) => {
    let caractSplit = caract.split(']');
    caractSplit.pop();
    caractSplit = caractSplit.map((c) => c.substring(1));
    return caractSplit;
  };

  const caracteristiqueArray = turnCaracteristiquesInArray(caracteristiques);

  console.log(caracteristiqueArray);

  return (
    <section className="Fiche">
      <section className="Fiche__container">
        <h1 className="Fiche__title">{titre}</h1>
        <div className="Fiche__links">
          <span className="Fiche__links--retour">← Retour à la recherche</span>
          <div className="Fiche__links--buttons">
            <button className="Fiche__links--button" type="button" />
            <button className="Fiche__links--button" type="button" />
          </div>
        </div>
        <img className="Fiche__img" alt={titre} src={photos} />
        <div className="Fiche__carac-list">
          {caracteristiqueArray.map((c) => <div className="Fiche__carac">{c}</div>)}
        </div>
        <div className="Fiche__description">{description}</div>
      </section>
    </section>
  );
}

Fiche.propTypes = {

};

export default Fiche;
