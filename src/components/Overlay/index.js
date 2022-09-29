import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionLogout } from '../../redux/session/sessionActions';
import './styles.scss';

function Overlay({ menuOpen, setMenuOpen, isConnected }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actionLogout());
  };

  return (
    <div className={menuOpen ? 'Overlay Overlay--open' : 'Overlay'}>
      <a
        className="Overlay__link Overlay__closebtn"
        onClick={setMenuOpen}
      >&times;
      </a>
      <div className="Overlay__content">
        {isConnected && <Link onClick={handleClick} type="button" className="Overlay__link">Déconnexion</Link>}
        <a className="Overlay__link" href="#">À propos</a>
        <a className="Overlay__link" href="#">Contact</a>
        <a className="Overlay__link" href="#">CGU</a>
      </div>
    </div>
  );
}

Overlay.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

export default Overlay;
