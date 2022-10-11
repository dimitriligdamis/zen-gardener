import { Outlet } from 'react-router-dom';
import background from 'src/assets/img/background2.jpg';
import Menu from '../Menu';

import './style.scss';

function Page() {
  return (
    <main className="Page" style={{ background: `url(${background}) no-repeat center center / cover` }}>
      <Menu />
      <Outlet />
    </main>
  );
}

export default Page;
