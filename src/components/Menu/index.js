import { ArrowLeft, Menu as MenuReactFeather } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { actionChangeIsOpen } from '../../actions/menu';
import './styles.scss';

function Menu() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.isOpen);

  return (
    <div className={!isOpen ? 'Menu' : 'Menu Menu--open'}>
      {!isOpen
        ? (
          <div>
            <MenuReactFeather onClick={() => {
              dispatch(actionChangeIsOpen());
            }}
            />
          </div>
        )
        : (
          <div>
            <div className="Menu__header">
              <ArrowLeft onClick={() => {
                dispatch(actionChangeIsOpen());
              }}
              />
              <h1 className="Menu__Logo">Logo</h1>
            </div>
            <ul className="Menu__list">
              <li className="Menu__link"><NavLink to="login">Se connecter</NavLink></li>
              <li className="Menu__link"><NavLink to="register">S'inscrire</NavLink></li>
              <li className="Menu__link"><NavLink to="about">Qui sommes nous ?</NavLink></li>
              <li className="Menu__link"><NavLink to="contact">Contact</NavLink></li>
              <li className="Menu__link"><NavLink to="cgu">CGU</NavLink></li>
            </ul>
          </div>
        )}

    </div>
  );
}

export default Menu;
