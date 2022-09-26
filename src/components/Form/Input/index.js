import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '../../../actions/form';

import './style.scss';

function Input({ name, label, ...props }) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.input[name]);

  const handleChange = (event) => {
    dispatch(changeValue(event.target.value, name));
  };
  return (
    <div className="input_container">
      {label && <label className="form_label" htmlFor={name}>{label}</label>}
      <input
        name={name}
        id={name}
        value={value || ''}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

Input.defaultProps = {
  label: null,
};

export default Input;
