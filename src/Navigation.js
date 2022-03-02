import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import DetailPage from './components/DetailPage/DetailPage';
import ReserveForm from './components/Reservation/ReserveForm';
import Reservation from './components/Reservation/Reservation';
import Navbar from './components/Navbar';

const Navigation = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/Detail/:id" element={<DetailPage />} />
        <Route path="/reserve" element={<ReserveForm />} />
        <Route path="/reservations" element={<Reservation />} />
      </Routes>
    </div>
  </BrowserRouter>
);
export default Navigation;
