import { useDispatch, useSelector } from 'react-redux';
import { BsCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Main.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MotorCard from './MotorCard';
import { getMotorsDetail } from '../../api/motors';
import 'swiper/css';

const Main = () => {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
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
      <h1 className="fw-bolder text-center">LATEST MODELS</h1>
      <p className="text-muted text-center main-screen-subtitle">please select a Motorcyle Model</p>
      <div className="row motor-cards-wrapper">
        <Swiper
          spaceBetween={0}
          slidesPerView={width > 768 ? 3 : 1}
        >
          {motors.map((motor) => (
            <SwiperSlide key={motor.id}>
              <MotorCard motor={motor} onClick={() => { GoToDetailPage(motor.id); }} />
            </SwiperSlide>
          ))}
          ...
        </Swiper>
      </div>
      <div className="d-sm-block d-none">
        <button
          type="button"
          className="borderless bg-trasparent"
          onClick={() => {
            const { swiper } = document.querySelector('.swiper');
            swiper.slidePrev();
          }}
        >
          <div className="main-page-handle-left d-flex justify-content-center align-items-center">
            <BsFillCaretLeftFill />
          </div>
        </button>
        <button
          type="button"
          className="borderless bg-transparent"
          onClick={

            () => {
              const { swiper } = document.querySelector('.swiper');
              swiper.slideNext();
            }
          }
        >
          <div className="main-page-handle-right d-flex  justify-content-center align-items-center">
            <BsCaretRightFill />
          </div>
        </button>
      </div>
    </div>

  );
};

export default Main;
