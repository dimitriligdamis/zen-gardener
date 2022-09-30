import PropTypes from 'prop-types';

import './styles.scss';

function Title({ children }) {
  return (
    <main className="Title">
      {children}
    </main>
  );
}

Title.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Title;
