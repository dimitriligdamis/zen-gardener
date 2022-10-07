import { useState } from 'react';
import { Search } from 'react-feather';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { actionFetchSheetsByQuery } from '../../../redux/sheets/sheetsActions';

import Card from '../../Card';

import './styles.scss';

function Fiches() {
  const dispatch = useDispatch();
  const { register, handleSubmit, getValues } = useForm();

  const [page, setPage] = useState(1);
  const { sheetsFoundId, sheets } = useSelector((state) => state.sheets);

  const sheetsOnScreen = sheets.filter((sheet) => sheetsFoundId.includes(sheet.id));

  // Search request
  const onSubmit = (data) => {
    console.log(`Recherche : ${data.sheets_search}`);
    dispatch(actionFetchSheetsByQuery(data.sheets_search, 6, 1));
    setPage(1);
  };

  // Request more sheet
  const loadMore = () => {
    const query = getValues('sheets_search');
    const nextPage = page + 1;
    dispatch(actionFetchSheetsByQuery(query, 6, nextPage, true));
    setPage(nextPage);
  };

  return (
    <main className="Fiches">
      <h1 className="Fiches__title">Rechercher une fiche</h1>
      <form className="Fiches__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="Fiches__form__input"
          name="sheets_search"
          type="texte"
          aria-label="Recherche de fiche"
          placeholder="Recherche..."
          autoComplete="off"
          {...register('sheets_search')}
        />
        <button
          className="Fiches__form__button"
          type="submit"
        >
          <Search />
        </button>
      </form>
      <ul className="Fiches__list">
        {sheetsOnScreen.map((sheet) => (
          <NavLink key={sheet.id} to={`/fiches/${sheet.id}`}>
            <Card sheet={sheet} />
          </NavLink>
        ))}
      </ul>
      {sheetsFoundId.length > 0
        && <button onClick={loadMore} type="button" className="Fiches__button_more">Voir plus</button>}
    </main>
  );
}

export default Fiches;
