import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMotors, deleteMotor } from '../../api/motors';
import './DeleteList.css';

const DeleteList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMotors);
  }, []);

  const motors = useSelector((state) => state.motors.motors) || [];

  const handleDelete = (id) => {
    dispatch(deleteMotor(id)).then(() => alert('you delete item ')).then(() => dispatch(getMotors));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-12">
          <ul className="list-group">
            {motors.map((motor) => (
              <li key={motor.id} className="list-group-item">
                <div className="d-flex justify-content-around align-items-center">
                  <div>
                    <span>{motor.name}</span>
                    <img src={motor.image} alt={motor.name} className="mx-5" />
                  </div>
                  <div>
                    <button onClick={() => handleDelete(motor.id)} className="btn btn-primary" type="submit">Delete</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DeleteList;
