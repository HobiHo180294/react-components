import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'normalize.css';
import './styles/global.scss';
import Layout from './components/layout/Layout';
import MainPage from './components/pages/Main';
import AboutPage from './components/pages/About';
import NotFoundPage from './components/pages/NotFoundPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/main" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
