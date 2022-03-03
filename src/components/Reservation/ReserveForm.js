import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DatePicker from 'react-date-picker';
import reserveMotors from '../../api/reserveMotors';
import './reserve.css';

export default function ReserveForm() {
  const [selectedCity, setCity] = useState('London');
  const [selectedDate, onChange] = useState(new Date());
  const [loginResponse, setLoginResponse] = useState('');
  const [motorId, setMotorId] = useState(1);
  const user = useSelector((state) => state.usersReducer.user);
  const motors = useSelector((state) => state.motors.motors) || [];
  const handlSubmit = async (e) => {
    e.preventDefault();
    const response = await reserveMotors({
      city: selectedCity, date: selectedDate, user_id: user.id, motor_id: parseInt(motorId, 10),
    });
    if (!response.error) {
      setLoginResponse('Motor Succesfully Reserved');
    } else {
      setLoginResponse(response.error);
    }
  };
  const options = [
    'London',
    'Paris',
    'New York',
    'Tokyo',
    'Sydney',
    'Melbourne',
    'Rome',
    'Barcelona',
    'Amsterdam',
    'Berlin',
    'Madrid',
    'Munich',
    'Prague',
    'Vienna',
    'Zurich',
    'Bratislava',
    'Budapest',
    'Copenhagen',
    'Dublin',
    'Helsinki',
    'Lisbon',
    'Ljubljana',
  ];

  return (
    <div className="wrapper">

      <form className="d-flex flex-column h-100 justify-content-center align-items-center " onSubmit={handlSubmit}>
        <section>
          <span>
            {' '}
            {loginResponse}
          </span>
          <section className="d-flex flex-column justify-content-center text-white">
            <h2 className="text-center">Book a Test Ride</h2>
            <p className="text-center">
              There are limited cities available, please choose from a city below and choose your
              preferred date and time.
              <br />
              Note that London is the default city.
            </p>
          </section>
          <div className="d-flex">
            <DatePicker className="form-control me-2 rounded-pill me-1" onChange={onChange} value={selectedDate} />
            <select className="form-select me-2 rounded-pill me-1" onChange={(e) => setCity(e.target.value)} value={selectedCity}>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select className="form-select me-2 rounded-pill me-1" onChange={(e) => setMotorId(e.target.value)} value={motorId}>
              {motors.map((motor) => (
                <option key={motor.id} value={motor.id}>
                  {motor.name}
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex w-100 justify-content-center pt-5">
            <button className="btn btn-outline-success rounded-pill" type="submit">Book Now</button>
          </div>
        </section>

      </form>
    </div>
  );
}