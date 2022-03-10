const DELETE_ITEM = 'motors-frontend/motors/DELETE_ITEM';

export const removeItem = (payload) => ({
  type: DELETE_ITEM,
  payload,
});

const initialState = {
  data: [],
  DeleteItem: false,
  error: null,
};

const deleteItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ITEM:
      return { ...state, data: action.payload, DeleteItem: true };
    default:
      return state;
  }
};

export default deleteItemReducer;
