import { FaFacebookF, FaGooglePlus } from 'react-icons/fa';
import { GrPinterest } from 'react-icons/gr';
import { BsTwitter, BsVimeo } from 'react-icons/bs';
import './Main.css';

const Main = () => (
  <aside className="p-3">
    <h1>Motors</h1>
    <div className="sidebar-items">
      <h5 className="sidebar-item-active py-2 fw-bold ps-2">MODELS</h5>
      <h5 className="py-2f fw-bold ps-2">LIFESTYLE</h5>
      <h5 className="py-2 fw-bold ps-2">SHOP</h5>
      <h5 className="py-2 fw-bold ps-2">TEST DRIVE</h5>
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
      <div>© 2015 Mustafa, Dyary && peter</div>
    </div>
    <div />
  </aside>
);

export default Main;
