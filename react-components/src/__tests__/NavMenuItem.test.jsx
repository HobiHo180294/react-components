import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavMenuItem from '../components/nav-menu/NavMenuItem';

test('renders NavMenuItem component', () => {
  const props = {
    parentClassName: 'menu-header',
    pathName: '/main',
    routeTitle: 'Main',
  };

  const { getByText } = render(
    <BrowserRouter>
      <NavMenuItem {...props} />
    </BrowserRouter>
  );

  expect(getByText(props.routeTitle)).toBeInTheDocument();
});
