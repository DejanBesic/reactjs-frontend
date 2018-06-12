import {
    AuthenticationStart,
    AuthenticationSuccess,
    AuthenticationFailure,
    LogoutStart,
    LogoutSuccess,
    LogoutFailure,
    RegistrationStart,
    RegistrationSuccess,
    RegistrationFailure,
} from '../actions/authentication';

export const initialState = {
    isAuthenticating: false,
    isLoggingOut: false,
    isRegistrating: false,
    error: "",
    token: "",    
    user: "",
    registrationError: "",
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

        case RegistrationStart:
            return {
                ...state,
                isRegistrating: true,
                registrationError: "",
            };
        
        case RegistrationSuccess:
            return {
                ...state,
                isRegistrating: false,
            }

        case RegistrationFailure:
            return {
                ...state,
                isRegistrating: false,
                registrationError: action.payload
            }
        default: 
            return state;
    }
}
