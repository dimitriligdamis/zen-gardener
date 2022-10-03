import PropTypes from 'prop-types';
import background from 'src/assets/img/background2.jpg';
import Menu from '../Menu';

import './style.scss';

function Page({ children }) {
  return (
    <main className="Page" style={{ background: `url(${background}) no-repeat center center / cover` }}>
      <Menu />
      {children}
    </main>
  );
}

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Page;
