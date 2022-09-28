import { NavLink } from 'react-router-dom';
import { bubble as MenuBurger } from 'react-burger-menu';

import './styles.scss';
import { useState } from 'react';

function Menu() {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };
  return (
    <MenuBurger
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
    >
      <NavLink
        end
        onClick={() => {
          closeSideBar();
        }}
        to="/"
        className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
      >Accueil
      </NavLink>
      <NavLink
        onClick={() => {
          closeSideBar();
        }}
        to="/login"
        className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
      >Se connecter
      </NavLink>
      <NavLink
        onClick={() => {
          closeSideBar();
        }}
        to="/register"
        className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
      >S'inscrire
      </NavLink>
      <NavLink
        onClick={() => {
          closeSideBar();
        }}
        to="/about"
        className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
      >Qui sommes nous ?
      </NavLink>
      <NavLink
        onClick={() => {
          closeSideBar();
        }}
        to="/contact"
        className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
      >Contact
      </NavLink>
      <NavLink
        onClick={() => {
          closeSideBar();
        }}
        to="/cgu"
        className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
      >CGU
      </NavLink>
    </MenuBurger>
  );
}

export default Menu;
