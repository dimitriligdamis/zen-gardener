import PropTypes from 'prop-types';

import './style.scss';

function Input({
  name,
  label,
  register,
  ...props
}) {
  return (
    <div className="input_container">
      {label && <label className="form_label" htmlFor={name}>{label}</label>}
      <input
        className="form_input"
        name={name}
        id={name}
        {...props}
        {...register(name)}
      />
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  label: PropTypes.string,
};

Input.defaultProps = {
  label: null,
};

export default Input;
