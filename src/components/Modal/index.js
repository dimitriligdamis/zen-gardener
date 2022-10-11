import PropTypes from 'prop-types';

import './styles.scss';

function Modal({ data, open, children }) {
  return (
    <div className="Modal">
      <div className="Modal__content">
        <span className="Modal__close">&times;</span>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    start: PropTypes.string,
  }).isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
