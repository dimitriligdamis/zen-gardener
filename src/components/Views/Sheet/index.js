/* eslint-disable jsx-a11y/control-has-associated-label */
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { Heart } from 'react-feather';
import { actionFetchSheetById, actionAddToFavorites, actionDeleteFromFavorites } from '../../../redux/sheets/sheetsActions';

import Loading from '../../Loading';
import './style.scss';

function Sheet() {
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
  const isFavorite = favoriteIds.includes(id);

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
    <section className="Sheet">
      <section className="Sheet__container">
        <h1 className="Sheet__title">{title}</h1>
        <div className="Sheet__links">
          <NavLink to="/fiches">
            <span className="Sheet__links--retour">← Retour à la recherche</span>
          </NavLink>
          <div className="Sheet__links--buttons">
            <button className="Sheet__links--button" type="button" onClick={handleClickFavorite}>
              <Heart className={isFavorite ? 'Sheet__heart--full' : 'Sheet__heart'} />
            </button>
            <button className="Sheet__links--button" type="button">
              Ajouter une tâche
            </button>
          </div>
        </div>
        <img className="Sheet__img" alt={title} src={photo} />
        <div className="Sheet__carac-list">
          {caracteristiqueArray.map((carac) => <div key={carac} className="Sheet__carac">{carac}</div>)}
        </div>
        <div className="Sheet__description">{description}</div>
      </section>
    </section>
  );
}

Sheet.propTypes = {

};

export default Sheet;
