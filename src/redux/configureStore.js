import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import motorsReducer from './motors/motors';
import motorsDetailReducer from './motors/DetailMotors';
import addItemReducer from './motors/AddItem';
import deleteItemReducer from './motors/DeleteList';

const reducers = combineReducers({
  motors: motorsReducer, motorsDetailReducer, addItemReducer, deleteItemReducer,
});
export default createStore(reducers, applyMiddleware(thunk, reduxLogger));
