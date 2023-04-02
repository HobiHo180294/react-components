import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'normalize.css';
import './styles/global.scss';
import Layout from './components/layout/Layout';
import { MainPage } from './components/pages/Main';
import AboutPage from './components/pages/About';
import NotFoundPage from './components/pages/NotFoundPage';
import DeliveryPage from './components/pages/DeliveryPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
