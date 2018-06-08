import axios from 'axios';
import { fetchAuth, fetchLogout } from '../../api';

export const AuthenticationStart = "AuthenticationStart";
export const onAuthenticationStart = () => 
    ({ type: AuthenticationStart })

export const AuthenticationSuccess = "AuthenticationSuccess";
export const onAuthenticationSuccess = (user) => 
    ({ payload: user, type: AuthenticationSuccess })

export const AuthenticationFailure = "AuthenticationFailure";
export const onAuthenticationFailure = (error) => 
    ({ payload: error, type: AuthenticationFailure })

export const setAuthorizationToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export const login = (user) => (dispatch, getState) => {
    dispatch(onAuthenticationStart());
    fetchAuth(user)
    .then((response) => {
      const token = response.data;
      const userDetails = {
            username: user.username,
            role: user.role,
            id: user.id,    
        };

      if(token === -1){
        dispatch(onAuthenticationFailure("Incorrect username or password."));  
      }
      else{
        setAuthorizationToken(token);
        dispatch(onAuthenticationSuccess({ token: token, user: userDetails }));
      }
    })
    .catch((err) => {
        dispatch(onAuthenticationFailure("Server error."));
    });
}

/*      LOGOUT      */

export const LogoutStart = "LogoutStart";
export const onLogoutStart = () => 
    ({ type: LogoutStart})

export const LogoutSuccess = "LogoutSuccess";
export const onLogoutSuccess = () => 
    ({ type: LogoutSuccess })

export const LogoutFailure = "LogoutFailure";
export const onLogoutFailure = () => 
    ({ type: LogoutFailure })

export const onLogout = () => (dispatch, getState) => {
    if(getState().authentication.user) {
        dispatch(onLogoutStart);
        fetchLogout()
        .then((response) => {
            response.data? dispatch(onLogoutSuccess()) : dispatch(onLogoutFailure());
        })
        .catch((err) => console.log(err));
    } else {
        dispatch(onLogoutSuccess());
    } 
}
