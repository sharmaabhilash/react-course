import axios from 'axios';

import * as actionTypes from './actionTypes';

const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

const authSuccess = ( idToken, userId ) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: idToken,
        userId: userId
    };
};

const authFail = ( error ) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

const expirationAuthToken = ( expirationTime ) => {
    return ( dispatch ) => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = ( email, password, isSignUp ) => {
    return ( dispatch ) => {
        dispatch(authStart());

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCqiOoJSAj7uV0HJASBJcmC0KTDUf6DqMU';
        if (!isSignUp) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCqiOoJSAj7uV0HJASBJcmC0KTDUf6DqMU';
        }

        axios.post(url, authData)
            .then(response => {
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(expirationAuthToken(response.data.expiresIn));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
    }
}
