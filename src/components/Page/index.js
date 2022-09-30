import PropTypes from 'prop-types';
import background from 'src/assets/img/background2.jpg';
import Dashboard from '../Dashboard';

import './style.scss';

function Page({ children }) {
  return (
    <main className="Page" style={{ background: `url(${background}) no-repeat center center / cover` }}>
      <Dashboard />
      {children}
    </main>
  );
}

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Page;
