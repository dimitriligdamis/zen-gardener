import './style.scss';

function Fiche() {
  const infos = {
    code_fiche: 1,
    titre: 'Carotte Orange Dolciva (Nantaise Améliorée)',
    photos: 'https://kokopelli-semences.fr/media/cache/shop_product_large_thumbnail/p0602-1.jpg',
    description: 'Cette variété – de type Nantaise améliorée – est une sélection de Sativa Rheinau, en Suisse, pour l’association Kultursaat. Ses longues racines cylindriques offrent une excellente saveur ainsi qu\'une texture très juteuse. Peu sensible à l\'éclatement, elle est adaptée pour les récoltes de saison et pour la conservation. Très grande vigueur au semis. Semer en place, en lignes espacées de 25 cm. Recouvrir peu et plomber légèrement. Éclaircir une première fois à 5 cm puis à 8 cm lorsque les plants ont 3 feuilles. Protéger, si possible, les jeunes pousses de l’appétit des limaces. Arroser régulièrement, mais légèrement, afin de favoriser la levée, puis plus abondamment 1 fois par semaine le mois qui suit le semis. Par temps sec, cela évitera que les racines ne se “creusent”.La récolte des carottes est possible toute l\'année - jusqu\'à floraison au printemps - si le sol ne gèle pas ou qu\'il est protégé par un paillage.',
    caracteristiques: '[Semis: pleine terre][Période de semis (pleine terre) : Février, Mars, Avril, Mai, Juin, Juillet][Période de récolte : Juin, Juillet, Août, Septembre, Octobre, Novembre][Culture : en pleine terre, en serre][Exposition : ensoleillée][Besoin en eau : moyen][Nature du sol : tout type de sol][Qualité du sol : drainé, meuble, riche]',
  };

  const { titre, photos, description, caracteristiques } = infos;

  const turnCaracteristiquesInArray = (caract) => {
    const caractSplit = caract.split(']');
    caractSplit.pop();
    return caractSplit.map((c) => c.substring(1));
  };

  const caracteristiqueArray = turnCaracteristiquesInArray(caracteristiques);

  console.log(caracteristiqueArray)

  return (
    <section className="Fiche">
      <aside className="Fiche__carac-list">
        {caracteristiqueArray.map((c) => <div className="Fiche__carac">{c}</div>)}
      </aside>
      <section className="Fiche__container">
        <h1 className="Fiche__title">{titre}</h1>
        <img src={photos} />
        <div>{description}</div>
      </section>
    </section>
  );
}

Fiche.propTypes = {

};

export default Fiche;
