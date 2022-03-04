const FETCH_RESERVATIONS = 'FETCH_RESERVATIONS';

export const fetchReservations = (payload) => ({
  type: FETCH_RESERVATIONS,
  payload,
});

const initialState = {
  reservations: [],
  loading: false,
  error: null,
};

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESERVATIONS:
      return { ...state, reservations: action.payload };
    default:
      return state;
  }
};

export default reservationsReducer;
