import './style.scss';

function Fiche() {
  const infos = {
    code_fiche: 1,
    titre: 'Carotte Orange Dolciva (Nantaise Améliorée)',
    photos: 'https://kokopelli-semences.fr/media/cache/shop_product_large_thumbnail/p0602-1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris orci, faucibus eu ante eget, cursus fermentum libero. Nulla venenatis cursus ullamcorper. Sed non diam non quam mollis gravida vel vitae nisl. Duis dignissim velit vel leo commodo iaculis. Curabitur sed diam euismod, volutpat arcu vel, luctus tortor. Vestibulum interdum ligula non ligula iaculis blandit. Donec dignissim porttitor tincidunt. Sed varius congue nibh quis efficitur. Nullam volutpat, tellus vitae pharetra tempus, metus sapien condimentum metus, quis porta magna massa sit amet massa. Proin feugiat sed nunc in pellentesque. Maecenas porttitor libero a egestas bibendum. Phasellus non eros consectetur, pulvinar nunc id, tristique justo. In hendrerit quam turpis, at ornare nunc lacinia semper. Mauris porta ante sed sapien finibus, sed rhoncus est interdum. Morbi lacus orci, fringilla in mauris eu, bibendum pharetra mauris. Vivamus semper suscipit dui, et ultrices lectus consectetur in. Maecenas laoreet, lacus ut bibendum venenatis, lectus nisi vehicula augue, in tincidunt lacus nibh ac metus. Nullam dignissim arcu nec arcu luctus varius. Morbi tincidunt lorem mauris, a tempor ipsum finibus at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed in sollicitudin magna. Etiam placerat imperdiet erat, et lobortis mauris gravida tincidunt. Morbi maximus viverra nisi, sit amet efficitur libero hendrerit vestibulum. In ligula est, feugiat iaculis tortor et, vestibulum euismod sapien. Proin a fermentum ante. Vivamus sagittis mattis lectus, nec volutpat ipsum sodales a. Donec malesuada ut tellus ut egestas. In condimentum, mauris a accumsan vehicula, sapien leo condimentum mi, vitae euismod nunc mi eu lacus. Aliquam a dui malesuada sapien semper fringilla nec feugiat ipsum. Sed lectus arcu, iaculis ut erat sed, congue pretium arcu. Vivamus volutpat ligula sed nunc varius malesuada.',
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
      <aside className="Fiche__carac-list">
        {caracteristiqueArray.map((c) => <div className="Fiche__carac">{c}</div>)}
      </aside>
      <section className="Fiche__container">
        <h1 className="Fiche__title">{titre}</h1>
        <span className="Fiche__retour">← Retour à la recherche</span>
        <img className="Fiche__img" alt={titre} src={photos} />
        <div className="Fiche__description">{description}</div>
      </section>
    </section>
  );
}

Fiche.propTypes = {

};

export default Fiche;
