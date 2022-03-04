import axios from 'axios';
import { fetchMotors } from '../redux/motors/motors';
import { fetchDetailMotors } from '../redux/motors/DetailMotors';
import { addItem } from '../redux/motors/AddItem';
import { removeItem } from '../redux/motors/DeleteList';
import BASE_URL from './baseURL';

export const getMotors = async (dispatch) => {
  const response = await axios.get(`${BASE_URL}motors`);
  dispatch(fetchMotors(response.data));
};

export const getMotorsDetail = (id) => async (dispatch) => {
  fetch(`${BASE_URL}motors/${id}`)
    .then((res) => res.json())
    .then((resResponse) => dispatch(fetchDetailMotors(resResponse)));
};

export const AddItemHandler = (data) => async (dispatch) => {
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('description', data.description);
  formData.append('price', data.price);
  formData.append('image', data.image);
  await fetch(`${BASE_URL}motors/create`, {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.json())
    .then((resResponse) => dispatch(addItem(resResponse)));
};

export const deleteMotor = (id) => async (dispatch) => {
  fetch(`${BASE_URL}motors/${id}/destroy`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then((resResponse) => dispatch(removeItem(resResponse)));
};
