import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMotors, deleteMotor } from '../../api/motors';
import './DeleteList.css';
import Modal from './Modal';
import { deleteOneMotor } from '../../redux/motors/motors';

const DeleteList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMotors);
  }, []);

  let deleteId = 0;

  const motors = useSelector((state) => state.motors.motors) || [];

  const handleDelete = async (id) => {
    dispatch(deleteMotor(id));
    dispatch(deleteOneMotor(id));
  };

  return (
    <div className="container">
      <div className="row mx-5">
        <div className="col-12">
          <ul className="list-group">
            {motors.map((motor) => (
              <li key={motor.id} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-between">
                    <span className="delete-list-item-name">{motor.name}</span>
                    <img src={motor.image} alt={motor.name} className="mx-5" />
                  </div>
                  <div>
                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary" type="submit" onClick={() => { deleteId = motor.id; }}>Delete</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Modal onOKPressed={() => {
        handleDelete(deleteId);
      }}
      />
    </div>
  );
};
export default DeleteList;
