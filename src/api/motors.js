import axios from 'axios';
import { fetchMotors } from '../redux/motors/motors';

const BASE_URL = 'http://localhost:3001/api/v1/motors';

const getMotors = async (dispatch) => {
  const response = await axios.get(BASE_URL);
  dispatch(fetchMotors(response.data));
};

export default getMotors;
