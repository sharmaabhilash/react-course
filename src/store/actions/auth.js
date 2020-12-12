import axios from 'axios';

import * as actionTypes from './actionTypes';

const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

const authSuccess = ( authData ) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

const authFail = ( error ) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
}

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
                console.log(response);
                dispatch(authSuccess(response.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });
    }
}
