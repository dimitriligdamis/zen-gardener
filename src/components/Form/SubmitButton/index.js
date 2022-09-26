import PropTypes from 'prop-types';

import './style.scss';

function SubmitButton({ label }) {
  return (
    <button type="submit">{label}</button>
  );
}

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SubmitButton;
