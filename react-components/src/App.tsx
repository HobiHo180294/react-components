import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'normalize.css';
import './styles/global.scss';
import Layout from './components/layout/Layout';

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
