import axios from 'axios';
import BASE_URL from './baseURL';

const reserveMotors = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}reservations`, data);
    return { status: response.status, motor: response.data };
  } catch (error) {
    return { status: error.response.status, ...error.response.data };
  }
};

export default reserveMotors;
