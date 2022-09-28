import {
  Layers,
  User,
  Bell,
  Calendar,
  MoreHorizontal,
} from 'react-feather';

import { Link, NavLink } from 'react-router-dom';

import './styles.scss';

function Dashboard() {
  return (
    <nav className="Dashboard">
      <NavLink
        to="/tableau-de-bord"
        className={({ isActive }) => (isActive ? 'Dashboard__item Dashboard__item--active' : 'Dashboard__item')}
      >
        <div className="Dashboard__item-content">
          <Calendar />
          <p>Tâches</p>
        </div>
      </NavLink>
      <NavLink
        to="/fiches"
        className={({ isActive }) => (isActive ? 'Dashboard__item Dashboard__item--active' : 'Dashboard__item')}
      >
        <div className="Dashboard__item-content">
          <Layers />
          <p>Fiches</p>
        </div>
      </NavLink>
      <NavLink
        end
        to="/"
        className={({ isActive }) => (isActive ? 'Dashboard__item Dashboard__item--active' : 'Dashboard__item')}
      >
        <div className="Dashboard__item-content">
          <Bell />
          <p>Notifications</p>
        </div>
      </NavLink>
      <NavLink
        to="/profil"
        className={({ isActive }) => (isActive ? 'Dashboard__item Dashboard__item--active' : 'Dashboard__item')}
      >
        <div className="Dashboard__item-content">
          <User />
          <p>Profil</p>
        </div>
      </NavLink>
      <Link className="Dashboard__item">
        <div className="Dashboard__item-content">
          <MoreHorizontal />
          <p>Plus</p>
        </div>
      </Link>
    </nav>
  );
}

export default Dashboard;
