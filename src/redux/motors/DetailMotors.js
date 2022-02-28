const FETCH_DETAIL_MOTORS = 'motors-frontend/motors/FETCH_DETAIL_MOTORS';

export const fetchDetailMotors = (payload) => ({
  type: FETCH_DETAIL_MOTORS,
  payload,
});

const initialState = {
  motors: [],
  loading: false,
  error: null,
};

const motorsDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAIL_MOTORS:
      return { ...state, motors: action.payload };
    default:
      return state;
  }
};

export default motorsDetailReducer;
