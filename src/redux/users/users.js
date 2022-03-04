const GET_USER_SUCCESS = 'motors-frontend/users/GET_USER_SUCCESS';

export const getUserSuccess = (payload) => ({
  type: GET_USER_SUCCESS,
  payload,
});

const initialState = {
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;
