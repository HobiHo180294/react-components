import React from 'react';
import { NavMenuItem } from './NavMenuItem';
import './NavMenu.scss';

interface INavMenuProps {
  parentClassName: string;
  bemClassName?: string;
}

export const NavMenu = ({ parentClassName, bemClassName }: INavMenuProps) => (
  <nav className={`${bemClassName} ${parentClassName}`}>
    <ul className={`${parentClassName}__list`}>
      <NavMenuItem parentClassName={parentClassName} pathName="/" routeTitle="Main" />
      <NavMenuItem parentClassName={parentClassName} pathName="/about" routeTitle="About Us" />
      <NavMenuItem
        parentClassName={parentClassName}
        pathName="/delivery"
        routeTitle="Contact Form"
      />
    </ul>
  </nav>
);
