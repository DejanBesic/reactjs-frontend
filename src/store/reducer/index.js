import authentication from './authenticationReducer';
import types from './typesReducer';
import facilities from './facilityReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    authentication,
    types,
    facilities
});
