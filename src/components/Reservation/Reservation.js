import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getReserved from '../../api/reserved';
// import getMotors from '../../api/motors'
export default function Reservation() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReserved());
  }, []);
  // reservation api used for now but will be replaced
  const reservations = useSelector((state) => state.reservations.reservations) || [];
  // const motors = useSelector((state) => state.motors.motors) || [];
  // the statement returned should be replaced with motors api mapping
  return (
    <>

      { reservations.map((reservation) => (
        <div key={reservation.id}>
          <p>{reservation.id}</p>
          <p>{reservation.date}</p>
          <p>{reservation.time}</p>
          <p>{reservation.city}</p>
          <p>{reservation.motor}</p>
        </div>
      ))}
    </>
  );
}
