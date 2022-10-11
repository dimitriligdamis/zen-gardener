import PropTypes from 'prop-types';
import { X } from 'react-feather';
import { useDispatch } from 'react-redux';
import { actionDeleteError } from '../../../redux/error/errorAction';

import './style.scss';

function Message({ message, isError }) {
  const dispatch = useDispatch();

  return (
    <div className={isError ? 'Message Message--error' : 'Message'}>
      <X className="alert-logo" onClick={() => dispatch(actionDeleteError())} />
      {message}
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
