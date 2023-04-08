import React from 'react';
import { Header } from '../header/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => (
  <>
    <Header />

    <main className="page">
      <Outlet />
    </main>
  </>
);
