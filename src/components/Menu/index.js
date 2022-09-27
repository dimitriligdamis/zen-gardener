import { ArrowLeft, Menu as MenuReactFeather } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import { actionChangeIsOpen } from '../../redux/menu/menuActions';
import './styles.scss';

function Menu() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.isOpen);

  const activeClassName = 'underline';

  return (
    <>
      <div className={!isOpen ? 'Menu' : 'Menu Menu--open'}>
        <button
          className="Menu__button"
          type="button"
          onClick={() => {
            dispatch(actionChangeIsOpen());
          }}
        >
          {!isOpen
            ? <MenuReactFeather />
            : <ArrowLeft />}
        </button>
        <Link to="/" className="Menu__logo">LOGO</Link>
        <ul className="Menu__list">
          <li className="Menu__link">
            <NavLink to="login" className={({ isActive }) => (isActive ? activeClassName : undefined)}>Se connecter</NavLink>
          </li>
          <li className="Menu__link">
            <NavLink to="register" className={({ isActive }) => (isActive ? activeClassName : undefined)}>S'inscrire</NavLink>
          </li>
          <li className="Menu__link">
            <NavLink to="about" className={({ isActive }) => (isActive ? activeClassName : undefined)}>Qui sommes nous ?</NavLink>
          </li>
          <li className="Menu__link">
            <NavLink to="contact" className={({ isActive }) => (isActive ? activeClassName : undefined)}>Contact</NavLink>
          </li>
          <li className="Menu__link">
            <NavLink to="cgu" className={({ isActive }) => (isActive ? activeClassName : undefined)}>CGU</NavLink>
          </li>
        </ul>
      </div>
      {!isOpen && (
        <button
          className="Menu__button"
          type="button"
          onClick={() => {
            dispatch(actionChangeIsOpen());
          }}
        >
          {!isOpen
            ? <MenuReactFeather />
            : <ArrowLeft />}
        </button>
      )}
    </>
  );
}

export default Menu;
