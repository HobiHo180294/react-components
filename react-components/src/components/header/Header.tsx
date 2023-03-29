import React from 'react';
import NavMenu from '../nav-menu/NavMenu';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__container _container">
          <div className="header__body">
            <NavMenu bemClassName="header__menu" parentClassName="menu-header" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
