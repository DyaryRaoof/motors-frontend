import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { BsFillArrowRightCircleFill, BsFillGearFill } from 'react-icons/bs';
import './Detail.css';

const DetailPage = () => {
  const motor = useSelector((state) => state.motorsDetailReducer.motors) || [];

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 col-12 ">
          <img className="w-100" src={motor.image} alt={motor.name} />
        </div>
        <div className="col-md-3 col-12">
          <div className="text-md-end">
            <h1>{motor.name}</h1>
            <p>{motor.description}</p>
          </div>
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>Finance fee</td>
                <td>{`$${motor.price}`}</td>
              </tr>
              <tr>
                <td>Duration</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Total Amount</td>
                <td>{`$${(motor.price) * 5}`}</td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-end">
            <div className="resorve p-s">
              <BsFillGearFill className="mx-2" size={25} color="white" />
              <button className="btn btn-primary" type="submit">Reserve</button>
              <BsFillArrowRightCircleFill className="mx-2" size={25} color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailPage;
