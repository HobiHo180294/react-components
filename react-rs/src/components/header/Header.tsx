import React from 'react';
import { NavMenu } from '../nav-menu/NavMenu';
import './Header.scss';

export const Header = () => (
  <header className="header">
    <div className="header__container _container">
      <div className="header__body">
        <NavMenu bemClassName="header__menu" parentClassName="menu-header" />
      </div>
    </div>
  </header>
);
