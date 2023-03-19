import React, { Component } from 'react';
import NavMenuItem from './NavMenuItem';
import './NavMenu.scss';

interface INavMenuProps {
  parentClassName: string;
  bemClassName?: string;
}

class NavMenu extends Component<INavMenuProps> {
  render() {
    const { parentClassName, bemClassName } = this.props;

    return (
      <nav className={`${bemClassName} ${parentClassName}`}>
        <ul className={`${parentClassName}__list`}>
          <NavMenuItem parentClassName={parentClassName} pathName="/main" routeTitle="Main" />
          <NavMenuItem parentClassName={parentClassName} pathName="/about" routeTitle="About Us" />
        </ul>
      </nav>
    );
  }
}

export default NavMenu;
