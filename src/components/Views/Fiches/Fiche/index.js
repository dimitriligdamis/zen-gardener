/* eslint-disable jsx-a11y/control-has-associated-label */
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { actionFetchSheetById } from '../../../../redux/sheets/sheetsActions';
import Loading from '../../../Loading';
import './style.scss';

function Fiche() {
  let { id } = useParams();
  id = parseInt(id, 10);

  const dispatch = useDispatch();
  const { sheets } = useSelector((state) => state.sheets);

  const sheetDisplay = sheets.find((sheet) => sheet.id === id);

  console.log('find in cache :', sheetDisplay);

  if (!sheetDisplay) {
    dispatch(actionFetchSheetById(id));
    return (<Loading />);
  }

  const {
    title,
    photo,
    description,
    caracteristique,
  } = sheetDisplay;

  const turnCaracteristiquesInArray = (caract) => {
    let caractSplit = caract.split(']');
    caractSplit.pop();
    caractSplit = caractSplit.map((c) => c.substring(1));
    return caractSplit;
  };

  const caracteristiqueArray = turnCaracteristiquesInArray(caracteristique);

  return (
    <section className="Fiche">
      <section className="Fiche__container">
        <h1 className="Fiche__title">{title}</h1>
        <div className="Fiche__links">
          <NavLink to="/fiches">
            <span className="Fiche__links--retour">← Retour à la recherche</span>
          </NavLink>
          <div className="Fiche__links--buttons">
            <button className="Fiche__links--button" type="button" />
            <button className="Fiche__links--button" type="button" />
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
