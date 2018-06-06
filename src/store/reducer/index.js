import * as reduxStorage from 'redux-storage';
import authenticationReducer from './authenticationReducer';
import { combineReducers } from 'redux';


export const reducer = reduxStorage.reducer(
    combineReducers({
        authentication: authenticationReducer,
    }),
)

export default reducer;
