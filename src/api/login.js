import axios from 'axios';

const BASE_URL = 'http://localhost:3001';
const loginUser = async (user) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/users`, user);
    return { status: response.status, user: response.data };
  } catch (error) {
    return { status: error.response.status, ...error.response.data };
  }
};

export default loginUser;
