import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import motorsReducer from './motors/motors';
import reservationsReducer from './reservations/reservations';

const reducers = combineReducers({ motors: motorsReducer, reservations: reservationsReducer });
export default createStore(reducers, applyMiddleware(thunk, reduxLogger));
