import { Search } from 'react-feather';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { actionFetchSheetsByQuery } from '../../../redux/sheets/sheetsActions';

import Card from '../../Card';

import './styles.scss';

function Fiches() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const { sheetsFoundId, sheets } = useSelector((state) => state.sheets);

  const sheetsOnScreen = sheets.filter((sheet) => sheetsFoundId.includes(sheet.id));

  const onSubmit = (data) => {
    // console.log(`Recherche : ${data.sheets_search}`);
    dispatch(actionFetchSheetsByQuery(data.sheets_search, 2, 1));
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
          <NavLink to={`/fiches/${sheet.id}`}>
            <Card key={sheet.id} sheet={sheet} />
          </NavLink>
        ))}
      </ul>
    </main>
  );
}

export default Fiches;
