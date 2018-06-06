import {
    AuthenticationStart,
    AuthenticationSuccess,
    AuthenticationFailure
} from '../actions/authentication';

export const initialState = {
    isAuthenticating: false,
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
                user: action.payload.user
            };

        case AuthenticationFailure:
            return {
                ...state,
                isAuthenticating: false,
                error: action.payload,
                token: "",
            };

        default: 
            return state;
    }
}
