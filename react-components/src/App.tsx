import React from 'react';
import 'normalize.css';
import './styles/global.scss';
import Layout from './components/layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/main" element={<Layout />}></Route>
        {/* <Route path="/about" element={<Header />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
