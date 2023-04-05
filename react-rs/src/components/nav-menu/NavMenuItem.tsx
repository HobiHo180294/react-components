import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenuItem.scss';

interface INavLinkProps {
  routeTitle: string;
}

interface INavItemProps extends INavLinkProps {
  parentClassName: string;
  pathName: string;
}

export const NavMenuItem = ({ parentClassName, pathName, routeTitle }: INavItemProps) => {
  const setActiveLink = ({ isActive }: { isActive: boolean }): string =>
    isActive ? `${parentClassName}__link _active-link` : `${parentClassName}__link`;

  return (
    <li className={`${parentClassName}__item`}>
      <NavLink to={pathName} className={setActiveLink}>
        {routeTitle}
      </NavLink>
    </li>
  );
};
