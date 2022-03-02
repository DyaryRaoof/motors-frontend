import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import DetailPage from './components/DetailPage/DetailPage';
import Navbar from './components/Navbar';
import SideBar from './components/Sidebar';

const Navigation = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <div className="row">
        <div className="col-2 p-0">
          <SideBar />
        </div>
        <div className="col-md-10 col-sm-12 latest-models-wrapper">
          <Routes>
            <Route path="/" element={<Main />} exact />
            <Route path="/Detail/:id" element={<DetailPage />} />
          </Routes>
        </div>
      </div>

    </div>
  </BrowserRouter>
);
export default Navigation;
