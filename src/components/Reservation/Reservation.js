import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getReserved from '../../api/reserved';

export default function Reservation() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReserved());
  }, []);

  const reservations = useSelector((state) => state.reservations.reservations) || [];
  return (
    <>
      { reservations.map((reservation) => (
        <div key={reservation.id}>
          <p>{reservation.id}</p>
          <p>{reservation.date}</p>
          <p>{reservation.time}</p>
          <p>{reservation.city}</p>
        </div>
      ))}
    </>
  );
}
