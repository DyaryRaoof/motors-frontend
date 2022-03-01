import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import reserveMotors from '../../api/reserveMotors';
// import { fetchMotors } from '../../redux/motors/motors';
import './reserve.css';

export default function ReserveForm() {
  const [selectedCity, setCity] = useState('');
  const [selectedDate, onChange] = useState(new Date());
  const [loginResponse, setLoginResponse] = useState('');

  const handlSubmit = async (e) => {
    e.preventDefault();
    const response = await reserveMotors({
      city: selectedCity, date: selectedDate, user_id: 1, motor_id: 1,
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
          <div className="d-flex">
            <DatePicker className="form-control me-2 rounded-pill me-1" onChange={onChange} value={selectedDate} />
            <select className="form-select me-2 rounded-pill me-1" onChange={(e) => setCity(e.target.value)} value={selectedCity}>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
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
