import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header></Header>

        <main className="page">
          <Outlet />
        </main>
      </>
    );
  }
}

export default Layout;
