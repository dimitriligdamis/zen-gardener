import PropTypes from 'prop-types';

import './style.scss';

function Input({
  name,
  register,
  ...props
}) {
  return (
    <div className="Input">
      {/* {label && <label className="Input__label" htmlFor={name}>{label}</label>} */}
      <input
        className="Input__input"
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
