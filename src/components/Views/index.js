import PropTypes from 'prop-types';

import './style.scss';

function Page({ children }) {
  return (
    <main className="page">
      {children}
    </main>
  );
}

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Page;
