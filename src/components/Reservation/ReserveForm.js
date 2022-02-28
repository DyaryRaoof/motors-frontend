import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import reserveMotors from '../../api/reserveMotors';

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

    <form className="d-flex" onSubmit={handlSubmit}>
      <span>
        {' '}
        {loginResponse}
      </span>
      <DatePicker onChange={onChange} value={selectedDate} />
      <select className="form-select me-2 rounded-pill me-1" onChange={(e) => setCity(e.target.value)} value={selectedCity}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button className="btn btn-outline-success rounded-pill" type="submit">Book Now</button>
    </form>
  );
}
