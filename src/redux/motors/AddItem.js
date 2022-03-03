const ADD_ITEM = 'motors-frontend/motors/ADD_ITEM';

export const addItem = (payload) => ({
  type: ADD_ITEM,
  payload,
});

const initialState = {
  data: [],
  addItem: false,
  error: null,
};

const addItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, data: action.payload, addItem: true };
    default:
      return state;
  }
};

export default addItemReducer;
