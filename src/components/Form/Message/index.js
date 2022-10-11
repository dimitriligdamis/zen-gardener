/* eslint-disable react/jsx-no-useless-fragment */
import PropTypes from 'prop-types';
import { X } from 'react-feather';
import { useDispatch } from 'react-redux';

import './style.scss';

function Message({ message, isError, actionRemove }) {
  const dispatch = useDispatch();

  return (
    <div className={isError ? 'Message Message--error' : 'Message'}>
      <X className="alert-logo" onClick={() => dispatch(actionRemove())} />
      {message}
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  isError: PropTypes.bool,
  actionRemove: PropTypes.func.isRequired,
};

Message.defaultProps = {
  isError: false,
};

export default Message;
