import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import motorsReducer from './motors/motors';

const reducers = combineReducers({ motors: motorsReducer });
export default createStore(reducers, applyMiddleware(thunk, reduxLogger));
