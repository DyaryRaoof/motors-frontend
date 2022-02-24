import { FaFacebookF, FaGooglePlus } from 'react-icons/fa';
import { GrPinterest } from 'react-icons/gr';
import { BsTwitter, BsVimeo } from 'react-icons/bs';
import { GoTriangleRight, GoTriangleLeft } from 'react-icons/go';
import './Main.css';
import MotorCard from './MotorCard';
import motor1 from '../../images/motor1.png';
import motor2 from '../../images/motor2.png';
import motor3 from '../../images/motor3.png';

const motors = [
  {
    name: 'Motor 1',
    image: motor1,
    mediumText: 'Lorem ipsum dolor sit amet,',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, ',
  },
  {
    name: 'Motor 2',
    image: motor2,
    mediumText: 'Lorem ipsum dolor sit amet,',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, ',
  },
  {
    name: 'Motor 3',
    image: motor3,
    mediumText: 'Lorem ipsum dolor sit amet,',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, ',
  },
];

const Main = () => (
  <div>
    <div className="row">
      <div className="col-2 ">
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
            <div>© 2015 Mustafa, Dyary && peter</div>
          </div>
          <div />
        </aside>
      </div>
      <div className="col-md-10 col-sm-12 p-5">
        <h1 className="fw-bolder text-center">LATEST MODELS</h1>
        <p className="text-muted text-center main-screen-subtitle">please select a Motorcyle Model</p>
        <div className="row motor-cards-wrapper">
          <div className="col-md-4">
            <MotorCard motor={motors[0]} onClick={() => { }} />
          </div>
          <div className="col-md-4">
            <MotorCard motor={motors[1]} onClick={() => { }} />
          </div>
          <div className="col-md-4">
            <MotorCard motor={motors[2]} onClick={() => { }} />
          </div>
        </div>
        <div className="d-sm-block d-none">
          <div className="main-page-handle-left d-flex justify-content-center align-items-center">
            <GoTriangleRight />
          </div>
          <div className="main-page-handle-right d-flex  justify-content-center align-items-center">
            <GoTriangleLeft />
          </div>
        </div>
      </div>
    </div>

  </div>

);

export default Main;
