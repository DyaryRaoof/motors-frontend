/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Sidebar from '../Sidebar';
import './AddItem.css';
import { AddItemHandler } from '../../api/motors';

const AddItem = () => {
  const dispatch = useDispatch();
  const {
    register, handleSubmit, reset,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(AddItemHandler(data)).then(() => alert('you add item ')).then(() => reset());
  };

  return (
    <div className="row">
      <div className="col-2 p-0">
        <Sidebar />
      </div>
      <div className="col-md-10 col-sm-12 p-0 d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input type="text" className="form-control" id="name" placeholder="Enter Name" {...register('name')} />
          </div>
          <div className="form-group">
            <textarea rows="4" cols="50" type="text" className="form-control" id="description" placeholder="Enter Description" {...register('description')} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="image" placeholder="Enter Image Url" {...register('image')} />
          </div>
          <div className="form-group">
            <input type="number" className="form-control" id="price" placeholder="Enter Price" {...register('price')} />
          </div>
          <div className="form-group text-end">
            <button type="submit" className="btn btn-primary ">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
