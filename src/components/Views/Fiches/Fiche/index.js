/* eslint-disable jsx-a11y/control-has-associated-label */
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { Heart } from 'react-feather';
import { actionFetchSheetById, actionAddToFavorites, actionDeleteFromFavorites } from '../../../../redux/sheets/sheetsActions';

import Loading from '../../../Loading';
import './style.scss';

function Fiche() {
  let { id } = useParams();
  id = parseInt(id, 10);

  const dispatch = useDispatch();
  const { sheets, favoriteIds } = useSelector((state) => state.sheets);

  // Check if sheet is already in state
  const sheetDisplay = sheets.find((sheet) => sheet.id === id);

  // Loading if sheet is not in state
  if (!sheetDisplay) {
    dispatch(actionFetchSheetById(id));
    return (<Loading />);
  }

  // Check if this sheet is in favorite
  const isFavorite = favoriteIds.includes(id)

  const {
    title,
    photo,
    description,
    caracteristique,
  } = sheetDisplay;

  // Shaping caracteristics
  const turnCaracteristiquesInArray = (caract) => {
    let caractSplit = caract.split(']');
    caractSplit.pop();
    caractSplit = caractSplit.map((c) => c.substring(1));
    return caractSplit;
  };

  const caracteristiqueArray = turnCaracteristiquesInArray(caracteristique);

  const handleClickFavorite = () => {
    if (!isFavorite) {
      dispatch(actionAddToFavorites(id));
    }
    else {
      dispatch(actionDeleteFromFavorites(id));
    }
  };

  return (
    <section className="Fiche">
      <section className="Fiche__container">
        <h1 className="Fiche__title">{title}</h1>
        <div className="Fiche__links">
          <NavLink to="/fiches">
            <span className="Fiche__links--retour">← Retour à la recherche</span>
          </NavLink>
          <div className="Fiche__links--buttons">
            <button className="Fiche__links--button" type="button" onClick={handleClickFavorite}>
              <Heart className={isFavorite ? 'Fiche__heart--full' : 'Fiche__heart'} />
            </button>
            <button className="Fiche__links--button" type="button">
              Ajouter une tâche
            </button>
          </div>
        </div>
        <img className="Fiche__img" alt={title} src={photo} />
        <div className="Fiche__carac-list">
          {caracteristiqueArray.map((carac) => <div key={carac} className="Fiche__carac">{carac}</div>)}
        </div>
        <div className="Fiche__description">{description}</div>
      </section>
    </section>
  );
}

Fiche.propTypes = {

};

export default Fiche;
