import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import counterReducer from './counterReducer';
import petReducer from './petReducer';

export default combineReducers({
    simpleReducer,
    counterReducer,
    petReducer
})