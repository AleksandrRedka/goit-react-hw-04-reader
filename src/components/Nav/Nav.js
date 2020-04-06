import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <ul className={styles.navList}>
      <li>
        <NavLink
          to='/'
          className={styles.navLink}
          activeClassName={styles.linkActive}
          exact
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/movies'
          className={styles.navLink}
          activeClassName={styles.linkActive}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
