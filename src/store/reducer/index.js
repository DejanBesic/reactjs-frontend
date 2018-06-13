//import * as reduxStorage from 'redux-storage';
import authentication from './authenticationReducer';
import typesReducer from './typesReducer';
import { combineReducers } from 'redux';


export default combineReducers({
    authentication,
    typesReducer
});
