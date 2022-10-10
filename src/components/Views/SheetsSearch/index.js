import { useState } from 'react';
import { Search } from 'react-feather';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { actionFetchSheetsByQuery, actionClearSearchResult } from '../../../redux/sheets/sheetsActions';

import Card from '../../Card';

import './styles.scss';

function SheetsSearch() {
  const dispatch = useDispatch();
  const { register, handleSubmit, getValues } = useForm();

  const [page, setPage] = useState(1);
  const { searchResultIds, sheets } = useSelector((state) => state.sheets);

  const sheetsOnScreen = sheets.filter((sheet) => searchResultIds.includes(sheet.id));

  // Search request
  const onSubmit = (data) => {
    console.log(`Recherche : ${data.sheets_search}`);
    dispatch(actionClearSearchResult());
    dispatch(actionFetchSheetsByQuery(data.sheets_search, 6, 1, false));
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
    <main className="SheetsSearch">
      <h1 className="SheetsSearch__title">Rechercher une fiche</h1>
      <form className="SheetsSearch__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="SheetsSearch__form__input"
          name="sheets_search"
          type="texte"
          aria-label="Recherche de fiche"
          placeholder="Recherche..."
          autoComplete="off"
          {...register('sheets_search')}
        />
        <button
          className="SheetsSearch__form__button"
          type="submit"
        >
          <Search />
        </button>
      </form>
      <ul className="SheetsSearch__list">
        {sheetsOnScreen.map((sheet) => (
          <NavLink key={sheet.id} to={`/fiches/${sheet.id}`}>
            <Card sheet={sheet} />
          </NavLink>
        ))}
      </ul>
      {searchResultIds.length > 0
        && <button onClick={loadMore} type="button" className="SheetsSearch__button_more">Voir plus</button>}
    </main>
  );
}

export default SheetsSearch;
