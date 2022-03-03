import axios from 'axios';
import { fetchMotors } from '../redux/motors/motors';
import { fetchDetailMotors } from '../redux/motors/DetailMotors';
import { addItem } from '../redux/motors/AddItem';

const BASE_URL = 'http://localhost:3001/api/v1/motors';

export const getMotors = async (dispatch) => {
  const response = await axios.get(BASE_URL);
  dispatch(fetchMotors(response.data));
};

export const getMotorsDetail = (id) => async (dispatch) => {
  fetch(`http://localhost:3001/api/v1/motors/${id}`)
    .then((res) => res.json())
    .then((resResponse) => dispatch(fetchDetailMotors(resResponse)));
};

export const AddItemHandler = (data) => async (dispatch) => {
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('description', data.description);
  formData.append('price', data.price);
  formData.append('image', data.image);
  await fetch('http://localhost:3001/api/v1/motors/create', {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.json())
    .then((resResponse) => dispatch(addItem(resResponse)));
};
