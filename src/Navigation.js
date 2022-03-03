import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import DetailPage from './components/DetailPage/DetailPage';
import Navbar from './components/Navbar';
import AddItem from './components/AddItem/AddItem';

const Navigation = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/Detail/:id" element={<DetailPage />} />
        <Route path="/AddItem" element={<AddItem />} />
      </Routes>
    </div>
  </BrowserRouter>
);
export default Navigation;
