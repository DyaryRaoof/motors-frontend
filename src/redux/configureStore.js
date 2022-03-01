import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import motorsReducer from './motors/motors';
import reservationsReducer from './reservations/reservations';
import motorsDetailReducer from './motors/DetailMotors';

const reducers = combineReducers({
  motors: motorsReducer, motorsDetailReducer, reservations: reservationsReducer,
});
export default createStore(reducers, applyMiddleware(thunk, reduxLogger));
