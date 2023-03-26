import React, { Component } from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';

class Layout extends Component {
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
