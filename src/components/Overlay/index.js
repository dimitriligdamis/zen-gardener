import PropTypes from 'prop-types';
import './styles.scss';

function Overlay({ menuOpen, setMenuOpen, isConnected }) {
  return (
    <div className={menuOpen ? 'Overlay Overlay--open' : 'Overlay'}>
      <a
        className="Overlay__link Overlay__closebtn"
        onClick={setMenuOpen}
      >&times;
      </a>
      <div className="Overlay__content">
        {isConnected && <a className="Overlay__link" href="#">Déconnexion</a>}
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
