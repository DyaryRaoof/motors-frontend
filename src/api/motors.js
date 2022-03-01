import axios from 'axios';
import { fetchMotors } from '../redux/motors/motors';
import { fetchDetailMotors } from '../redux/motors/DetailMotors';

const BASE_URL = 'http://localhost:3000/api/v1/motors';

export const getMotors = async (dispatch) => {
  const response = await axios.get(BASE_URL);
  dispatch(fetchMotors(response.data));
};

export const getMotorsDetail = (id) => async (dispatch) => {
  console.log(id);
  fetch(`http://localhost:3000/api/v1/motors/${id}`)
    .then((res) => res.json())
    .then((resResponse) => dispatch(fetchDetailMotors(resResponse)));
};
