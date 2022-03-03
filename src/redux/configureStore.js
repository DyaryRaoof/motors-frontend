import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import motorsReducer from './motors/motors';
import reservationsReducer from './reservations/reservations';
import usersReducer from './users/users';
import motorsDetailReducer from './motors/DetailMotors';
import addItemReducer from './motors/AddItem';

const reducers = combineReducers({
  motors: motorsReducer,
  reservations: reservationsReducer,
  usersReducer,
  motorsDetailReducer,
  addItemReducer 
});
export default createStore(reducers, applyMiddleware(thunk, reduxLogger));
