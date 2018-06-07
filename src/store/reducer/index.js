//import * as reduxStorage from 'redux-storage';
import authentication from './authenticationReducer';
import { combineReducers } from 'redux';


export default combineReducers({
    authentication,
});
