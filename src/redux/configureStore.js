import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import motorsReducer from './motors/motors';
import reservationsReducer from './reservations/reservations';
import usersReducer from './users/users';

const reducers = combineReducers({
  motors: motorsReducer,
  reservations: reservationsReducer,
  usersReducer,
});
export default createStore(reducers, applyMiddleware(thunk, reduxLogger));
