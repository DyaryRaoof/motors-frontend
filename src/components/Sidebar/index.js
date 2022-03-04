import { useState } from 'react';
import { FaFacebookF, FaGooglePlus } from 'react-icons/fa';
import { GrPinterest } from 'react-icons/gr';
import { BsTwitter, BsVimeo } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  const [clickedIndex, setClickedIndex] = useState(0);

  return (
    <aside className="p-3 d-sm-block d-none">
      <h1>Motors</h1>
      <div className="sidebar-items">
        <button type="button" onClick={() => { setClickedIndex(0); navigate('/'); }} className="bg-transparent borderless w-100 text-start">
          <h5 className={`${clickedIndex === 0 && 'sidebar-item-active '} py-2 fw-bold ps-2`}>MOTORCYLES</h5>
        </button>
        <button type="button" onClick={() => { setClickedIndex(1); navigate('/reserve'); }} className="bg-transparent borderless w-100 text-start">
          <h5 className={`${clickedIndex === 1 && 'sidebar-item-active '} py-2 fw-bold ps-2`}>RESERVE</h5>
        </button>
        <button type="button" onClick={() => { setClickedIndex(2); navigate('/reservations'); }} className="bg-transparent borderless w-100 text-start">
          <h5 className={`${clickedIndex === 2 && 'sidebar-item-active '} py-2 fw-bold ps-2`}>MY RESERVATIONS </h5>
        </button>
        <button type="button" onClick={() => { setClickedIndex(3); navigate('/add-motor'); }} className="bg-transparent borderless w-100 text-start">
          <h5 className={`${clickedIndex === 3 && 'sidebar-item-active '} py-2 fw-bold ps-2`}>ADD MOTOCYCLE</h5>
        </button>
      </div>
      <div className="sidebar-footer">
        <div className="sidebar-icons">
          <span className="p-2">
            <BsTwitter />
          </span>
          <span className="p-2">
            <FaFacebookF />
          </span>
          <span className="p-2">
            <FaGooglePlus />
          </span>
          <span className="p-2">
            <BsVimeo />

          </span>
          <span className="p-2">
            <GrPinterest />
          </span>
        </div>
        <div className="text-wrap">© 2022 Mustafa, Dyary && Peter</div>
      </div>
      <div />
    </aside>
  );
};

export default SideBar;
