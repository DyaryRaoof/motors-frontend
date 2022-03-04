import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import DetailPage from './components/DetailPage/DetailPage';
import ReserveForm from './components/Reservation/ReserveForm';
import Reservation from './components/Reservation/Reservation';
import Navbar from './components/Navbar';
import AddItem from './components/AddItem/AddItem';
import DeleteList from './components/DeleteList/DeleteList';
import SideBar from './components/Sidebar';

const Navigation = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <div className="row">
        <div className="col-2 p-0">
          <SideBar />
        </div>
        <div className="col-md-10 col-sm-12 ">
          <Routes>
            <Route path="/" element={<Main />} exact />
            <Route path="/Detail/:id" element={<DetailPage />} />
            <Route path="/AddItem" element={<AddItem />} />
            <Route path="/DeleteList" element={<DeleteList />} />
            <Route path="/reservations" element={<Reservation />} />
            <Route path="/reserve" element={<ReserveForm />} />
          </Routes>
        </div>
      </div>
    </div>
  </BrowserRouter>
);
export default Navigation;
