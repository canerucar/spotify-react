import React from 'react'
import { Icon } from 'Icons';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <NavLink
            activeClassName="bg-active text-white"
            to={'/'}
            exact
            className="h-10 gap-x-4 flex items-center text-sm font-semibold text-link hover:text-white px-4"
          >
            <span>
              <Icon name="home" />
            </span>
            Ana sayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="bg-active text-white"
            to={'/search'}
            className="h-10 gap-x-4 flex items-center text-sm font-semibold text-link hover:text-white px-4 "
          >
            <span>
              <Icon name="search" />
            </span>
            Ara{' '}
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="bg-active text-white"
            to={'/collection'}
            className="h-10 gap-x-4 flex items-center text-sm font-semibold text-link hover:text-white px-4 "
          >
            <span>
              <Icon name="collection" />
            </span>
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu
