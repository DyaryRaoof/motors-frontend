import axios from 'axios';
import { fetchReservations } from '../redux/reservations/reservations';
import BASE_URL from './baseURL';

const getReserved = () => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}reservations`);
  dispatch(fetchReservations(response.data));
};

export default getReserved;
