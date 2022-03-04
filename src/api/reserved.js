import axios from 'axios';
import { fetchReservations } from '../redux/reservations/reservations';

const BASE_URL = 'http://localhost:3001/api/v1/reservations';

const getReserved = () => async (dispatch) => {
  const response = await axios.get(BASE_URL);
  dispatch(fetchReservations(response.data));
};

export default getReserved;
