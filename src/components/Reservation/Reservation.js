/* eslint-disable react/no-array-index-key */
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
      Hi
      { reservations.map((reservation, index) => (
        <div key={index}>
          <p>{reservation[0].city}</p>
          <p>{reservation[1].motor}</p>
        </div>
      ))}
    </>
  );
}
