import { useDispatch, useSelector } from 'react-redux';
import { FaFacebookF, FaGooglePlus } from 'react-icons/fa';
import { GrPinterest } from 'react-icons/gr';
import { BsTwitter, BsVimeo } from 'react-icons/bs';
import { GoTriangleRight, GoTriangleLeft } from 'react-icons/go';
import './Main.css';
import { useNavigate } from 'react-router-dom';
import MotorCard from './MotorCard';
import { getMotorsDetail } from '../../api/motors';

const Main = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getMotors);
  // }, []);
  const navigate = useNavigate();
  const motors = useSelector((state) => state.motors.motors) || [];
  const GoToDetailPage = (id) => {
    dispatch(getMotorsDetail(id)).then(() => {
      navigate(`/Detail/${id}`);
    });
  };
  return (
    <div>
      <div className="row">
        <div className="col-2 p-0">
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
        <div className="col-md-10 col-sm-12 p-0 latest-models-wrapper">
          <h1 className="fw-bolder text-center">LATEST MODELS</h1>
          <p className="text-muted text-center main-screen-subtitle">please select a Motorcyle Model</p>
          <div className="row motor-cards-wrapper">
            {motors.map((motor) => (
              <div className="col-md-4" key="1">
                <MotorCard motor={motor} onClick={() => { GoToDetailPage(motor.id); }} />
              </div>
            ))}
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
};

export default Main;
