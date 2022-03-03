/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './reserve.css';
import getReserved from '../../api/reserved';

export default function Reservation() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReserved());
  }, []);
  const reservations = useSelector((state) => state.reservations.reservations) || [];
  return (
    <>
      {reservations.length > 0 && (
      <div className="d-flex flex-column justify-content-center wrapper">
        <h2 className="text-center text-white">Reserved</h2>
        <div className=" w-100 d-flex flex-column justify-content-center align-items-center">
          <table className="table table-success table-striped w-50">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">City</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{reservation[1].motor}</td>
                  <td>{reservation[0].city}</td>
                  <td>{reservation[0].date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      )}
      {reservations.length === 0 && (
        <div className="d-flex flex-column justify-content-center align-items-center wrapper  ">
          <div className="">
            <h1 className="text-center text-white">No Reservations</h1>
          </div>
        </div>
      )}

    </>
  );
}
