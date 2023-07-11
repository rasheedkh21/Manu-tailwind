import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainComponents from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/our menu/menu';
// import Navbar from './components/navbar/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route path="/" element={<MainComponents/>}/>
      <Route path="/menu" element={<Menu/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


