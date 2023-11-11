import React from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <header className={css.header}>
        <NavLink className={css.headerLink} to="/">
          Home
        </NavLink>
        <NavLink className={css.headerLink} to="/movies">
          Movies
        </NavLink>
      </header>
      <main className={css.main}>{children}</main>
    </div>
  );
};
export default Layout;
