const FETCH_MOTORS = 'motors-frontend/motors/FETCH_MOTORS';
const DELETE_ONE_MOTOR = 'motors-frontend/motors/DELETE_ONE_MOTOR';

export const fetchMotors = (payload) => ({
  type: FETCH_MOTORS,
  payload,
});

export const deleteOneMotor = (payload) => ({
  type: DELETE_ONE_MOTOR,
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
    case DELETE_ONE_MOTOR:
      return { ...state, motors: state.motors.filter((motor) => motor.id !== action.payload) };
    default:
      return state;
  }
};

export default motorsReducer;
