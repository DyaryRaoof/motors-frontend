const FETCH_MOTORS = 'motors-frontend/motors/FETCH_MOTORS';

export const fetchMotors = (payload) => ({
  type: FETCH_MOTORS,
  payload,
});

const initialState = {
  motors: [],
  loading: false,
  error: null,
};

const motorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOTORS:
      return { ...state, motors: action.payload };
    default:
      return state;
  }
};

export default motorsReducer;
