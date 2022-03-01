import { FaFacebookF, FaGooglePlus } from 'react-icons/fa';
import { GrPinterest } from 'react-icons/gr';
import { BsTwitter, BsVimeo } from 'react-icons/bs';

const SideBar = () => (
  <aside className="p-3 d-sm-block d-none">
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
      <div className="text-wrap">© 2022 Mustafa, Dyary && Peter</div>
    </div>
    <div />
  </aside>
);

export default SideBar;
