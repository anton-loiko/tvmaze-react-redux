import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';


export default () => {
  // const logout = () => localStorage.setItem('login', '0');
  return (
    <div className='header'>
      <div>
        <NavLink
          exact
          to='/'
          className='header__link'
          activeClassName='header__link--active'>
          Home
        </NavLink>
        <NavLink
          to='/profile'
          className='header__link'
          activeClassName='header__link--active'>
          Profile
        </NavLink>
        <NavLink
          to='/details'
          className='header__link header__link-details'
          activeClassName='header__link--active header__link--active-details'>
          Details
        </NavLink>
      </div>
      <NavLink
        // onClick={logout}
        to='/logout'
        className='header__link'>
        Log out
      </NavLink>
    </div>
  );
};

