import { useState } from 'react';
import {
  LogIn,
  Layers,
  User,
  Bell,
  Calendar,
  MoreHorizontal,
  PenTool,
  Home,
} from 'react-feather';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import ROUTES from '../../config/routes.json';

import Overlay from '../Overlay';

import './styles.scss';

function Dashboard() {
  const userIsLoggedIn = useSelector((state) => state.session.userIsLoggedIn);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {
        userIsLoggedIn
        && (
          <nav className="Dashboard">
            <NavLink
              to={ROUTES.dashboard}
              className={({ isActive }) => (isActive ? 'Dashboard__item Dashboard__item--active' : 'Dashboard__item')}
            >
              <div className="Dashboard__item-content">
                <Calendar />
                <p>Tâches</p>
              </div>
            </NavLink>
            <NavLink
              to={ROUTES.sheets}
              className={({ isActive }) => (isActive ? 'Dashboard__item Dashboard__item--active' : 'Dashboard__item')}
            >
              <div className="Dashboard__item-content">
                <Layers />
                <p>Fiches</p>
              </div>
            </NavLink>
            <NavLink
              end
              to={ROUTES.index}
              className={({ isActive }) => (isActive ? 'Dashboard__item Dashboard__item--active' : 'Dashboard__item')}
            >
              <div className="Dashboard__item-content">
                <Bell />
                <p>Notifications</p>
              </div>
            </NavLink>
            <NavLink
              to={ROUTES.profile}
              className={({ isActive }) => (isActive ? 'Dashboard__item Dashboard__item--active' : 'Dashboard__item')}
            >
              <div className="Dashboard__item-content">
                <User />
                <p>Profil</p>
              </div>
            </NavLink>
            <Link
              onClick={() => {
                setMenuOpen(true);
              }}
              className="Dashboard__item"
            >
              <div className="Dashboard__item-content">
                <MoreHorizontal />
                <p>Plus</p>
              </div>
            </Link>
          </nav>
        )
      }
      {
        !userIsLoggedIn
        && (
          <nav className="Dashboard">
            <NavLink
              end
              to={ROUTES.index}
              className={({ isActive }) => (isActive ? 'Dashboard__item Dashboard__item--active' : 'Dashboard__item')}
            >
              <div className="Dashboard__item-content">
                <Home />
                <p>Accueil</p>
              </div>
            </NavLink>
            <NavLink
              to={ROUTES.login}
              className={({ isActive }) => (isActive ? 'Dashboard__item Dashboard__item--active' : 'Dashboard__item')}
            >
              <div className="Dashboard__item-content">
                <LogIn />
                <p>Se connecter</p>
              </div>
            </NavLink>
            <NavLink
              to={ROUTES.register}
              className={({ isActive }) => (isActive ? 'Dashboard__item Dashboard__item--active' : 'Dashboard__item')}
            >
              <div className="Dashboard__item-content">
                <PenTool />
                <p>S'inscrire</p>
              </div>
            </NavLink>
            <Link
              onClick={() => {
                setMenuOpen(true);
              }}
              className="Dashboard__item"
            >
              <div className="Dashboard__item-content">
                <MoreHorizontal />
                <p>Plus</p>
              </div>
            </Link>
          </nav>
        )
      }
      <Overlay
        isConnected={userIsLoggedIn}
        menuOpen={menuOpen}
        setMenuOpen={() => {
          setMenuOpen(false);
        }}
      />
    </>
  );
}

export default Dashboard;
