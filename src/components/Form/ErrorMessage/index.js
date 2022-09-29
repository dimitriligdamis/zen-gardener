import PropTypes from 'prop-types';
import { X } from 'react-feather';
import { useDispatch } from 'react-redux';
import { deleteError } from '../../../redux/error/errorAction';

import './style.scss';

function ErrorMessage({ message }) {
  const dispatch = useDispatch();

  return (
    <div className="error-message">
      <X className="alert-logo" onClick={() => dispatch(deleteError())} />
      {message}
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
