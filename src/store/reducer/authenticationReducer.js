import {
    AuthenticationStart,
    AuthenticationSuccess,
    AuthenticationFailure,
    LogoutStart,
    LogoutSuccess,
    LogoutFailure,
} from '../actions/authentication';

export const initialState = {
    isAuthenticating: false,
    isLoggingOut: false,
    error: "",
    token: "",    
    user: "",
};

export default function(state = initialState, action) {
    switch(action.type){

        case AuthenticationStart:
            return {
                ...state,
                isAuthenticating: true,
            };

        case AuthenticationSuccess:
            return {
                ...state,
                isAuthenticating: false,
                token: action.payload.token,
                user: action.payload.user,
                error: "",
            };

        case AuthenticationFailure:
            return {
                ...state,
                isAuthenticating: false,
                error: action.payload,
                token: "",
            };

        case LogoutStart: 
            return {
                ...state,
                isLoggingOut: true,
            };

        case LogoutSuccess: 
            return {
                ...state,
                isLoggingOut: false,
                user: "",
                token: "",
            };

        case LogoutFailure: 
            return {
                ...state,
                isLoggingOut: false,
            };

        default: 
            return state;
    }
}
