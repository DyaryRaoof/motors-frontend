import axios from 'axios';
import BASE_URL from './baseURL';

const loginUser = async (user) => {
  try {
    const response = await axios.post(`${BASE_URL}users`, user);
    return { status: response.status, user: response.data };
  } catch (error) {
    return { status: error.response.status, ...error.response.data };
  }
};

export default loginUser;
