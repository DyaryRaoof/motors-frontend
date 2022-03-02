import { useDispatch, useSelector } from 'react-redux';
import { GoTriangleRight, GoTriangleLeft } from 'react-icons/go';
import './Main.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MotorCard from './MotorCard';
import { getMotors, getMotorsDetail } from '../../api/motors';
import Sidebar from '../Sidebar';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMotors);
  }, []);
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
          <Sidebar />
        </div>
        <div className="col-md-10 col-sm-12 p-0 latest-models-wrapper">
          <h1 className="fw-bolder text-center">LATEST MODELS</h1>
          <p className="text-muted text-center main-screen-subtitle">please select a Motorcyle Model</p>
          <div className="row motor-cards-wrapper">
            {motors.map((motor) => (
              <div className="col-md-4" key={motor.id}>
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
